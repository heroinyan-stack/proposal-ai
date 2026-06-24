'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { createClient } from '@/utils/supabase/client'

export const dynamic = 'force-dynamic'

export default function ProposalPage() {
  const [jobDescription, setJobDescription] = useState('')
  const [profileText, setProfileText] = useState('')
  const [generatedProposal, setGeneratedProposal] = useState('')
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [credits, setCredits] = useState(3)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const loadUser = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        router.push('/auth/login')
        return
      }
      
      setUser(user)
      
      const { data: profile } = await supabase
        .from('profiles')
        .select('credits_remaining')
        .eq('id', user.id)
        .single()
      
      if (profile) {
        setCredits(profile.credits_remaining || 0)
      }
    }
    
    loadUser()
  }, [router])

  const handleGenerate = async () => {
    if (!jobDescription.trim()) {
      setError('Please paste a job description')
      return
    }
    
    if (credits <= 0) {
      setError('No credits remaining. Upgrade to Pro for unlimited proposals!')
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/proposals/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jobDescription,
          profileText: profileText || 'Experienced freelancer looking to help with your project.',
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate proposal')
      }

      setGeneratedProposal(data.proposal)
      setCredits((prev) => prev - 1)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedProposal)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-slate-900">ProposalAI</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-indigo-50 rounded-full">
                <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-medium text-indigo-600">
                  {credits} {credits === 1 ? 'credit' : 'credits'} left
                </span>
              </div>
              
              {credits === 0 && (
                <Link href="/pricing">
                  <Button size="sm">Upgrade to Pro</Button>
                </Link>
              )}
              
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Generate Proposal</h1>
          <p className="text-slate-600 mt-1">Paste a job description and get a professional proposal in seconds</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Step 1: Job Description</CardTitle>
                <CardDescription>Paste the job posting you want to apply for</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder={`Paste the job description here...

Example:
Looking for an experienced React developer to build a SaaS dashboard. Requirements:
- 3+ years of React experience
- Experience with TypeScript and Next.js
- Knowledge of payment integrations
Budget: $50-100/hr
Please include your portfolio and relevant experience in your proposal.`}
                  className="min-h-[250px]"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Step 2: Your Profile (Optional)</CardTitle>
                <CardDescription>Tell us about yourself to personalize the proposal</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={profileText}
                  onChange={(e) => setProfileText(e.target.value)}
                  placeholder={`Describe your experience and skills...

Example:
I'm a full-stack developer with 5 years of experience building web applications. 
I've worked with React, Node.js, and Python. I've built several SaaS products 
and am familiar with Stripe and payment integrations.`}
                  className="min-h-[150px]"
                />
              </CardContent>
            </Card>

            {error && (
              <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <Button 
              onClick={handleGenerate} 
              loading={loading}
              className="w-full"
              size="lg"
            >
              {loading ? 'Generating...' : 'Generate Proposal (1 credit)'}
            </Button>
          </div>

          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Your Generated Proposal</CardTitle>
                <CardDescription>Review and copy your personalized proposal</CardDescription>
              </CardHeader>
              <CardContent>
                {generatedProposal ? (
                  <div className="space-y-4">
                    <div className="bg-slate-50 rounded-lg p-4 whitespace-pre-wrap text-slate-700 min-h-[300px]">
                      {generatedProposal}
                    </div>
                    <div className="flex gap-3">
                      <Button onClick={handleCopy} className="flex-1">
                        {copied ? (
                          <>
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Copied!
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Copy to Clipboard
                          </>
                        )}
                      </Button>
                    </div>
                    <p className="text-xs text-slate-500 text-center">
                      Tip: Edit the proposal before pasting it to add personal touches!
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-[300px] text-center">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="text-slate-500">
                      Your generated proposal will appear here
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
