import { createServerClient } from '@supabase/ssr'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const isMockMode = !process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY === 'your_anthropic_api_key'

// ============================================================
// Upwork Proposal Optimizer - 深度版
// ============================================================

interface ClientAnalysis {
  budgetParsed: string
  budgetTier: 'low' | 'medium' | 'high'
  urgency: 'low' | 'medium' | 'high'
  companySize: 'small' | 'medium' | 'enterprise'
  jobCategory: string
  requiredSkills: string[]
  experienceLevel: string
  isFixedPrice: boolean
  hasHiringHistory: boolean
  keyPainPoints: string[]
  redFlags: string[]
}

interface KeywordAnalysis {
  densityScore: number
  requiredKeywords: string[]
  missingKeywords: string[]
  keywordSuggestions: string[]
}

function analyzeClientFromJD(jd: string): ClientAnalysis {
  const jdLower = jd.toLowerCase()
  
  // 预算解析
  let budgetParsed = 'Not specified'
  let budgetTier: 'low' | 'medium' | 'high' = 'medium'
  const budgetMatch = jd.match(/\$[\d,]+(\.\.\.|-|\/|\s+)?\$?[\d,]*/i)
  if (budgetMatch) {
    const nums = jd.match(/\d+/g) || []
    const maxBudget = Math.max(...nums.map(n => parseInt(n)))
    if (maxBudget > 5000) { budgetParsed = `$${maxBudget.toLocaleString()}+ fixed/ongoing`; budgetTier = 'high' }
    else if (maxBudget > 1000) { budgetParsed = `$${maxBudget.toLocaleString()} range`; budgetTier = 'medium' }
    else if (maxBudget > 0) { budgetParsed = `$${maxBudget} range`; budgetTier = 'low' }
  } else if (jdLower.includes('hourly') || jdLower.includes('/hr')) {
    const hrMatch = jd.match(/\$(\d+)-?(\d+)?\s*\/?hr/i)
    if (hrMatch) {
      const rate = parseInt(hrMatch[1])
      if (rate >= 50) { budgetParsed = `$${rate}+/hr`; budgetTier = 'high' }
      else if (rate >= 25) { budgetParsed = `$${rate}/hr`; budgetTier = 'medium' }
      else { budgetParsed = `$${rate}/hr`; budgetTier = 'low' }
    } else { budgetParsed = 'Hourly rate'; budgetTier = 'medium' }
  }
  
  // 紧急度判断
  let urgency: 'low' | 'medium' | 'high' = 'medium'
  if (/\burgent\b|\basap\b|\bimmediately\b|\bASAP\b|\bURGENT\b/i.test(jd)) urgency = 'high'
  else if (/\bflexible\b|\bwhenever\b|\bwhen you can\b/i.test(jd)) urgency = 'low'
  
  // 公司规模
  let companySize: 'small' | 'medium' | 'enterprise' = 'small'
  if (/\benterprise\b|\blarge\b|\bcorporate\b|\bFortune 500\b|\binc\.\b|\bllc\b.*\bestablished\b/i.test(jd)) companySize = 'enterprise'
  else if (/\bteam\b|\bstartup\b|\bgrowing\b|\bcompany\b/i.test(jd)) companySize = 'medium'
  
  // 招聘历史
  const hasHiringHistory = /\blooking for someone\b|\bprevious projects\b|\bpast hires\b|\bprevious experience\b/i.test(jd)
  
  // 技能提取
  const skillPatterns = [
    'react', 'next.js', 'node.js', 'python', 'django', 'flask', 'typescript', 'javascript',
    'shopify', 'wordpress', 'woocommerce', 'magento', 'webflow',
    'figma', 'sketch', 'adobe xd', 'ui/ux', 'user experience',
    'aws', 'gcp', 'azure', 'docker', 'kubernetes', 'devops',
    'mongodb', 'postgresql', 'mysql', 'firebase', 'supabase',
    'mobile', 'ios', 'android', 'react native', 'flutter',
    'ai', 'machine learning', 'gpt', 'openai', 'claude',
    'seo', 'google analytics', 'facebook ads', 'google ads',
    'video editing', 'premiere', 'after effects', 'final cut',
    'content writing', 'copywriting', 'blog writing', 'technical writing',
    'graphic design', 'logo design', 'branding', 'illustration',
    'laravel', 'php', 'vue', 'angular', 'svelte',
    'stripe', 'payment', 'checkout', 'api',
    'postgres', 'sql', 'graphql', 'rest api',
  ]
  const requiredSkills = skillPatterns.filter(s => jdLower.includes(s))
  
  // 经验要求
  let experienceLevel = 'Not specified'
  const expMatch = jd.match(/(\d+)\+?\s*(?:years?|yrs?)\s*(?:of\s+)?(?:experience|exp)/i)
  if (expMatch) experienceLevel = `${expMatch[1]}+ years experience`
  else if (/junior|entry.level|beginner/i.test(jd)) experienceLevel = 'Junior/Entry level'
  else if (/senior|expert|advanced|expert.level/i.test(jd)) experienceLevel = 'Senior/Expert level'
  
  // 职位类别
  let jobCategory = 'General'
  if (/web\s*dev|frontend|backend|full.?stack|software/i.test(jd)) jobCategory = 'Web Development'
  else if (/mobile|app\s*dev|ios|android|react native/i.test(jd)) jobCategory = 'Mobile Development'
  else if (/design|ui|ux|user\s*experience/i.test(jd)) jobCategory = 'Design'
  else if (/content|writing|copy|blog|article/i.test(jd)) jobCategory = 'Content & Writing'
  else if (/video|animation|edit/i.test(jd)) jobCategory = 'Video & Animation'
  else if (/marketing|seo|ads|advertising/i.test(jd)) jobCategory = 'Digital Marketing'
  else if (/data|science|analytics|ml|ai/i.test(jd)) jobCategory = 'Data & AI'
  
  // 关键痛点
  const painPoints: string[] = []
  if (/fast|quick|速|快/i.test(jd)) painPoints.push('Speed of delivery')
  if (/quality|professional|专业/i.test(jd)) painPoints.push('High quality output')
  if (/communication|communicate|沟通/i.test(jd)) painPoints.push('Clear communication')
  if (/support|maintenance|维护/i.test(jd)) painPoints.push('Post-launch support')
  if (/affordable|budget|便宜/i.test(jd)) painPoints.push('Cost efficiency')
  if (/reliable|trust|信任/i.test(jd)) painPoints.push('Reliability and trust')
  
  // 红旗（要绕开的雷）
  const redFlags: string[] = []
  if (/\blow\s*budget\b|\bminimum\s*bid\b|\bno\s*experience\b/i.test(jd)) redFlags.push('Budget may be unrealistic')
  if (/\bhiring.*multiple\b|\bhiring.*many\b/i.test(jd)) redFlags.push('Mass hiring - hard to stand out')
  if (/copy\s*paste|template|模板/i.test(jd)) redFlags.push('Client may use template-checker')
  if (/\b\?{3,}/i.test(jd)) redFlags.push('Vague requirements - risk of scope creep')
  
  return {
    budgetParsed,
    budgetTier,
    urgency,
    companySize,
    jobCategory,
    requiredSkills,
    experienceLevel,
    isFixedPrice: !jdLower.includes('hourly'),
    hasHiringHistory,
    keyPainPoints: painPoints,
    redFlags,
  }
}

function analyzeKeywords(jd: string): KeywordAnalysis {
  const jdLower = jd.toLowerCase()
  const words = jdLower.match(/\b[a-z][a-z0-9+#.]{2,}\b/g) || []
  
  const wordFreq: Record<string, number> = {}
  words.forEach(w => { wordFreq[w] = (wordFreq[w] || 0) + 1 })
  
  const total = words.length || 1
  const important = ['react', 'javascript', 'python', 'api', 'database', 'frontend', 'backend', 
    'mobile', 'design', 'wordpress', 'shopify', 'payment', 'stripe', 'aws', 'docker',
    'vue', 'angular', 'node', 'django', 'flask', 'typescript', 'sql', 'mongodb',
    'figma', 'ux', 'seo', 'analytics', 'html', 'css', 'java', 'swift', 'kotlin']
  
  const found = important.filter(k => jdLower.includes(k))
  const missing = important.filter(k => !jdLower.includes(k)).slice(0, 5)
  
  return {
    densityScore: Math.min(100, Math.round((found.length / 8) * 100)),
    requiredKeywords: found.slice(0, 8),
    missingKeywords: missing,
    keywordSuggestions: missing.slice(0, 3),
  }
}

function generateUpworkOptimizedProposal(
  jd: string,
  profileText: string,
  client: ClientAnalysis,
  keywords: KeywordAnalysis
): string {
  // 根据预算层选择策略
  const strategies = {
    low: {
      tone: 'eager and value-focused',
      focus: 'getting started quickly, proving yourself, building reputation',
      rate: 'competitive rate',
    },
    medium: {
      tone: 'confident and balanced',
      focus: 'delivering quality on time, clear communication, professional process',
      rate: 'fair rate',
    },
    high: {
      tone: 'expert authority',
      focus: 'senior experience, preventing problems before they happen, strategic value',
      rate: 'reflecting senior expertise',
    }
  }
  
  const strategy = strategies[client.budgetTier]
  
  // 根据紧急度调整开头
  let urgencyHook = ''
  if (client.urgency === 'high') {
    urgencyHook = "I see you need someone to start immediately — I'm available to begin right away."
  } else if (client.urgency === 'low') {
    urgencyHook = "I understand this is a thoughtful decision — I'd love to show you why I'm the right long-term fit."
  }
  
  // 痛点开头（Upwork算法最爱的开头方式）
  let painPointHook = ''
  if (client.keyPainPoints.length > 0) {
    const topPain = client.keyPainPoints[0]
    const hooks: Record<string, string> = {
      'Speed of delivery': `I've seen projects stall because the developer underestimated timelines. I build realistic schedules with buffer time built in.`,
      'High quality output': `Quality issues usually come from unclear specs upfront. I start every project with a detailed requirements review.`,
      'Clear communication': `The biggest reason projects fail is miscommunication. I send weekly status updates and respond within hours.`,
      'Post-launch support': `Launch is just the beginning. I include 30 days of free support on every project.`,
      'Cost efficiency': `I've helped startups cut development costs by 30% just by choosing the right architecture from day one.`,
      'Reliability and trust': `I understand you need someone you can count on. I've maintained a 100% job success rate over X projects.`,
    }
    painPointHook = hooks[topPain] || ''
  }
  
  // 技能自然嵌入（关键词密度优化）
  const skillText = client.requiredSkills.length > 0
    ? ` with direct experience in ${client.requiredSkills.slice(0, 3).join(', ')}`
    : ''
  
  // 痛点引用（证明读懂了JD）
  const jdSnippet = jd.length > 200 ? jd.substring(0, 200).replace(/\n/g, ' ').trim() + '...' : jd
  const painRef = `I read through your requirements${client.jobCategory !== 'General' ? ` for ${client.jobCategory.toLowerCase()}` : ''}, and `
  
  // CTA（根据公司规模调整）
  let cta = client.companySize === 'enterprise'
    ? "Would you be open to a 15-minute call this week? I'd love to walk through how I've handled similar projects at this scale."
    : client.budgetTier === 'high'
    ? "I'd welcome a quick call to discuss your project scope in detail. What does your ideal timeline look like?"
    : "I'm ready to start whenever you are. What's the best way to get started?"
  
  // 如果客户之前雇过人，强调证明
  let trust = ''
  if (client.hasHiringHistory) {
    trust = `\n\nP.S. I noticed you're looking for someone with experience — I'd be happy to share relevant work samples from similar projects before you make any decision.`
  }
  
  return `${urgencyHook}

${painPointHook}

${painRef}here's how I'd approach this${skillText}:

**What I understand you're trying to solve:** 
${jdSnippet}

**My approach:**
• First, I'd confirm the full scope with you (I always do this before starting — it saves us both time)
• Then I'd break this into clear milestones with checkpoints
• I'm available for quick updates via chat daily
• I deliver tested, production-ready work, not prototypes

**Why me:**
${profileText && profileText.length > 20 ? profileText.substring(0, 200) : `I'm a ${client.jobCategory.toLowerCase()} specialist with ${client.experienceLevel}. I've helped clients across ${client.companySize === 'small' ? 'small businesses' : client.companySize === 'enterprise' ? 'enterprise companies' : 'mid-size companies'} deliver on time.`}

${strategy.focus.charAt(0).toUpperCase() + strategy.focus.slice(1)} is exactly what I prioritize on every engagement.

${cta}${trust}`
}

function generateThreeVersions(
  jd: string,
  profileText: string,
  client: ClientAnalysis,
  keywords: KeywordAnalysis
): { versions: Record<string, string>, pricingAdvice: Record<string, any> } {
  
  const base = generateUpworkOptimizedProposal(jd, profileText, client, keywords)
  
  // 三个版本
  const versions = {
    quick_win: `[Quick Win - Lower Risk]

Hi,

I noticed you${client.urgency === 'high' ? "'re looking to get started quickly" : "'re looking for someone reliable"} — I'm available to ${client.urgency === 'high' ? "start immediately" : "begin right away"}.

I've worked on similar ${client.jobCategory.toLowerCase()} projects${client.requiredSkills.length > 0 ? ` involving ${client.requiredSkills.slice(0, 2).join(' and ')}` : ''}, and I can have initial results to you within the first few days.

${client.keyPainPoints.length > 0 ? `You mentioned ${client.keyPainPoints[0].toLowerCase()} — that's my focus too.` : ''}

I'm offering a competitive rate to build my Upwork reputation, but that doesn't mean cutting corners. I treat every project like it's my own.

${client.hasHiringHistory ? "I'd love the opportunity to prove myself — happy to share relevant samples." : "Would you like to see some examples of my work?"}

Ready when you are.`
,
    
    balanced: `[Balanced - Recommended]

Hi,

${client.urgency === 'high' ? "I see you need someone to start ASAP — I'm available immediately." : "I understand you're being thoughtful about who you hire — I appreciate that approach."}

I've reviewed your requirements${client.jobCategory !== 'General' ? ` for ${client.jobCategory.toLowerCase()}` : ''}${client.requiredSkills.length > 0 ? `, specifically around ${client.requiredSkills.slice(0, 3).join(', ')}` : ''}, and here's my plan:

**What I hear you needing:**
${jd.length > 150 ? jd.substring(0, 150).replace(/\n/g, ' ').trim() + '...' : jd}

**How I'd tackle this:**
• Start with a requirements call to make sure we're aligned (free, 15 min)
• Break work into milestones so you can see progress
• Daily quick updates + always available for questions
• Tested, clean deliverables

${profileText && profileText.length > 20 ? profileText.substring(0, 180) : `I'm a ${client.jobCategory.toLowerCase()} specialist with ${client.experienceLevel}. I've helped ${client.companySize === 'enterprise' ? 'enterprise clients' : client.companySize === 'medium' ? 'growing companies' : 'small businesses'} deliver successfully.`}

${client.keyPainPoints.length > 0 ? `Addressing your priority of ${client.keyPainPoints[0].toLowerCase()}: I make this standard practice on every project.` : ''}

What's your timeline looking like? I'm flexible on hours and can scale based on your needs.

${client.hasHiringHistory ? "\nP.S. I saw you've hired for this type of work before — happy to share case studies from comparable projects." : ''}`
,
    
    premium: `[Premium - Full Service]

Hi,

${client.budgetTier === 'high' ? "I can see you're investing serious resources in this project" : "You're clearly looking for someone who can deliver at a senior level"}, and that's exactly what I specialize in.

I've built ${client.jobCategory.toLowerCase()} solutions${client.requiredSkills.length > 0 ? ` using ${client.requiredSkills.slice(0, 4).join(', ')}` : ''} for clients who needed more than just "get it done" — they needed it done right.

**The difference with a senior approach:**
• Most freelancers solve the immediate problem. I also identify the problems you don't see yet.
• I write self-documenting code that your future developers won't hate.
• I catch edge cases before they become bugs in production.
${client.urgency === 'high' ? '• I can start immediately with a full sprint plan ready.' : ''}

${client.keyPainPoints.length > 0 ? `On your concern about ${client.keyPainPoints[0].toLowerCase()}: this is baked into my standard process — not an add-on.` : ''}

${profileText && profileText.length > 20 ? profileText.substring(0, 200) : `I'm a senior ${client.jobCategory.toLowerCase()} specialist. I've led teams at startups, worked with agencies, and delivered projects that scaled.`}

For a project like this, I typically recommend starting with a scoped pilot to validate the approach, then expanding. Would a 2-week initial engagement make sense?

Let's schedule a quick call — I have availability this ${new Date().toLocaleDateString('en-US', { weekday: 'long' })} and ${new Date(Date.now() + 86400000 * 2).toLocaleDateString('en-US', { weekday: 'long' })}.`
  }
  
  // 定价建议
  const budgetNums = jd.match(/\d+/g)?.map(Number) || []
  const maxBudget = Math.max(0, ...budgetNums)
  
  const pricingAdvice = {
    recommendedRate: client.budgetTier === 'high' 
      ? `$${Math.round(maxBudget * 0.6 / 40)}-${Math.round(maxBudget * 0.8 / 40)}/hr (senior tier)` 
      : client.budgetTier === 'medium'
      ? `$${Math.round(maxBudget * 0.5 / 40)}-${Math.round(maxBudget * 0.7 / 40)}/hr (mid tier)`
      : `$${Math.round(maxBudget * 0.4 / 40)}-${Math.round(maxBudget * 0.6 / 40)}/hr (starter tier)`,
    quickWinRate: `$${Math.round(maxBudget * 0.3 / 40)}-$${Math.round(maxBudget * 0.4 / 40)}/hr`,
    premiumRate: `$${Math.round(maxBudget * 0.8 / 40)}-$${Math.round(maxBudget / 40)}/hr`,
    matchScore: Math.min(95, 60 + keywords.densityScore * 0.35),
    strategy: client.budgetTier === 'high' ? 'Lead with seniority and strategic value' 
      : client.budgetTier === 'low' ? 'Lead with eagerness + proof of relevant skills'
      : 'Balance confidence with approachability',
    keywordsToUse: keywords.requiredKeywords,
    redFlags: client.redFlags,
  }
  
  return { versions, pricingAdvice }
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

    // ===== 核心分析 =====
    const clientAnalysis = analyzeClientFromJD(jobDescription)
    const keywordAnalysis = analyzeKeywords(jobDescription)
    
    let result: any
    
    if (isMockMode) {
      await new Promise(resolve => setTimeout(resolve, 2000))
      const { versions, pricingAdvice } = generateThreeVersions(jobDescription, profileText || '', clientAnalysis, keywordAnalysis)
      result = {
        versions,
        pricingAdvice,
        clientAnalysis,
        keywordAnalysis,
        isMockMode: true,
      }
    } else {
      const Anthropic = (await import('@anthropic-ai/sdk')).default
      const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })

      // Claude也生成三个版本
      const prompt = `You are an expert Upwork proposal strategist who understands how Upwork's algorithm ranks and displays proposals to clients.

CONTEXT:
- Client budget tier: ${clientAnalysis.budgetTier.toUpperCase()} (${clientAnalysis.budgetParsed})
- Client urgency: ${clientAnalysis.urgency}
- Company size: ${clientAnalysis.companySize}
- Job category: ${clientAnalysis.jobCategory}
- Required skills: ${clientAnalysis.requiredSkills.join(', ') || 'General'}
- Experience level needed: ${clientAnalysis.experienceLevel}
- Client's pain points: ${clientAnalysis.keyPainPoints.join(', ') || 'Not specified'}
- Red flags detected: ${clientAnalysis.redFlags.join('; ') || 'None'}

JOB DESCRIPTION:
${jobDescription}

FREELANCER PROFILE:
${profileText || 'Experienced freelancer ready to help.'}

YOUR TASK: Generate 3 distinct proposal versions tailored to Upwork. Each should be optimized for:
1. Different budget positioning
2. Upwork keyword matching (include: ${clientAnalysis.requiredSkills.slice(0, 5).join(', ')})
3. The specific pain points this client mentioned

Format as JSON:
{
  "quick_win": "Short, eager, value-focused proposal (~100 words) for budget-conscious or new clients. Lower rate, emphasize getting started and proving yourself.",
  "balanced": "Professional, confident proposal (~150 words) with clear process explanation. Medium rate. Best for most clients.",
  "premium": "Senior authority proposal (~200 words) for high-budget or enterprise clients. Higher rate. Lead with expertise and strategic value.",
  "pricing_advice": {
    "recommended_rate": "Suggested hourly rate in format '$XX-$XX/hr'",
    "match_score": "A number 0-100 estimating how well this JD matches common winning proposals",
    "strategy": "One sentence on the winning strategy for this specific proposal",
    "keywords_to_include": ["keyword1", "keyword2", "keyword3"]
  }
}

Rules:
- Each version must feel like a different human wrote it (different personality)
- NO generic phrases like "I am excited to apply" or "I am a highly skilled professional"
- Start with something that addresses the client's specific situation
- Include natural skill mentions relevant to this job
- End with a clear, confident call to action
- Output ONLY valid JSON, no markdown formatting`
      
      const message = await anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2048,
        messages: [{ role: 'user', content: prompt }]
      })
      
      const rawContent = message.content[0].type === 'text' ? message.content[0].text : '{}'
      
      let versions: Record<string, string> = {}
      let pricingAdvice: Record<string, any> = {}
      
      try {
        // 尝试从Claude输出中提取JSON
        const jsonMatch = rawContent.match(/\{[\s\S]*\}/)
        if (jsonMatch) {
          const parsed = JSON.parse(jsonMatch[0])
          versions = { quick_win: parsed.quick_win || '', balanced: parsed.balanced || '', premium: parsed.premium || '' }
          pricingAdvice = parsed.pricing_advice || {}
        }
      } catch (e) {
        // JSON解析失败，用默认版本
        const { versions: v, pricingAdvice: p } = generateThreeVersions(jobDescription, profileText || '', clientAnalysis, keywordAnalysis)
        versions = v
        pricingAdvice = p
      }
      
      result = {
        versions,
        pricingAdvice,
        clientAnalysis,
        keywordAnalysis,
        isMockMode: false,
      }
    }

    // 扣积分
    if (!isPro) {
      await supabase
        .from('profiles')
        .update({ credits_remaining: creditsRemaining - 1 })
        .eq('id', user.id)
    }

    // 存储历史
    await supabase.from('proposals').insert({
      user_id: user.id,
      job_description: jobDescription.substring(0, 500),
      profile_text: (profileText || '').substring(0, 500),
      generated_proposal: Object.values(result.versions).join('\n\n---\n\n'),
      credits_used: isPro ? 0 : 1,
    })

    return NextResponse.json(result)

  } catch (error: any) {
    console.error('Proposal generation error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to generate proposal. Please try again.' },
      { status: 500 }
    )
  }
}
