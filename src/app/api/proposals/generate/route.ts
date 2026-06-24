import { createServerClient } from '@supabase/ssr'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const isMockMode = !process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY === 'your_anthropic_api_key'

function generateMockProposal(jobDescription: string, profileText: string): string {
  const jobLower = jobDescription.toLowerCase()
  
  let role = 'developer'
  if (jobLower.includes('design') || jobLower.includes('ui') || jobLower.includes('ux')) {
    role = 'UI/UX designer'
  } else if (jobLower.includes('write') || jobLower.includes('content') || jobLower.includes('copy')) {
    role = 'content writer'
  } else if (jobLower.includes('market') || jobLower.includes('seo')) {
    role = 'digital marketer'
  } else if (jobLower.includes('video') || jobLower.includes('edit')) {
    role = 'video editor'
  }
  
  const hasReact = jobLower.includes('react') || jobLower.includes('next.js')
  const hasShopify = jobLower.includes('shopify')
  const hasWordpress = jobLower.includes('wordpress')
  
  const experiences: string[] = []
  if (hasReact) experiences.push('building React and Next.js applications')
  if (hasShopify) experiences.push('Shopify store development and customization')
  if (hasWordpress) experiences.push('WordPress site development')
  if (experiences.length === 0) experiences.push('similar projects')
  
  const expText = experiences.join(', ')
  
  return `Hi there,

I saw your post and wanted to reach out because I've worked on ${expText} for the past 4 years and think I can help you get this done quickly.

Looking at what you're describing, here's how I'd approach it:
- First, I'd set up a quick call to make sure I understand all the details and edge cases
- Then I'd build out the core functionality, with check-ins every 2-3 days so you can see progress
- Finally, I'd do a thorough review with you before launch, plus 30 days of bug fixes after delivery

${profileText && profileText.length > 10 ? `A bit about me: ${profileText.substring(0, 80)}` : `Background: I'm a full-stack ${role} who's worked with clients from startups to established brands. I specialize in shipping clean, maintainable work on time.`}

I'd love to hear more about what you're building. Are you available for a quick 15-minute call sometime this week? I can share relevant work samples and we can see if we're a good fit.

Looking forward to hearing from you.`
}

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll()
          },
        },
      }
    )
    
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { jobDescription, profileText } = await request.json()

    if (!jobDescription || jobDescription.trim().length < 50) {
      return NextResponse.json(
        { error: 'Job description must be at least 50 characters' },
        { status: 400 }
      )
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('credits_remaining, subscription_tier')
      .eq('id', user.id)
      .single()

    const creditsRemaining = profile?.credits_remaining || 0
    const isPro = profile?.subscription_tier?.startsWith('pro')
    
    if (!isPro && creditsRemaining <= 0) {
      return NextResponse.json(
        { error: 'No credits remaining. Please upgrade to Pro.' },
        { status: 403 }
      )
    }

    let proposal: string

    if (isMockMode) {
      await new Promise(resolve => setTimeout(resolve, 1500))
      proposal = generateMockProposal(jobDescription, profileText || '')
    } else {
      const Anthropic = (await import('@anthropic-ai/sdk')).default
      const anthropic = new Anthropic({
        apiKey: process.env.ANTHROPIC_API_KEY!,
      })

      const prompt = `You are an expert copywriter who specializes in writing winning freelance proposals on platforms like Upwork, Fiverr, and Freelancer.com.

Your task is to write a personalized, compelling proposal based on the job description and freelancer profile provided.

## Guidelines:
1. Start with a hook that addresses the client's specific problem or need (NOT "I am excited to apply")
2. Show you actually read and understood the job by referencing specific details
3. Keep it concise - aim for 150-250 words
4. Use a professional but friendly tone
5. Include relevant experience/credentials naturally
6. End with a clear call-to-action
7. Do NOT use generic phrases like "I am a highly skilled professional"
8. Do NOT overuse bullet points - keep it conversational

## Job Description:
${jobDescription}

## Freelancer Profile (use this to highlight relevant experience):
${profileText || 'Experienced freelancer ready to help with your project.'}

## Output:
Write ONLY the proposal text. No headers, no formatting markers. Just the raw proposal text ready to paste.`

      const message = await anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ]
      })

      proposal = message.content[0].type === 'text' 
        ? message.content[0].text 
        : 'Failed to generate proposal'
    }

    if (!isPro) {
      await supabase
        .from('profiles')
        .update({ credits_remaining: creditsRemaining - 1 })
        .eq('id', user.id)
    }

    await supabase.from('proposals').insert({
      user_id: user.id,
      job_description: jobDescription.substring(0, 500),
      profile_text: (profileText || '').substring(0, 500),
      generated_proposal: proposal,
      credits_used: isPro ? 0 : 1,
    })

    return NextResponse.json({ proposal, isMockMode })

  } catch (error: any) {
    console.error('Proposal generation error:', error)
    
    return NextResponse.json(
      { error: error.message || 'Failed to generate proposal. Please try again.' },
      { status: 500 }
    )
  }
}
