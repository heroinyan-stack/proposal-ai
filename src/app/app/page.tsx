'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { createClient } from '@/utils/supabase/client'

export const dynamic = 'force-dynamic'

type VersionKey = 'quick_win' | 'balanced' | 'premium'

interface ClientAnalysis {
  budgetParsed: string
  budgetTier: 'low' | 'medium' | 'high'
  urgency: 'low' | 'medium' | 'high'
  companySize: 'small' | 'medium' | 'enterprise'
  jobCategory: string
  requiredSkills: string[]
  experienceLevel: string
  keyPainPoints: string[]
  redFlags: string[]
}

interface KeywordAnalysis {
  densityScore: number
  requiredKeywords: string[]
  missingKeywords: string[]
}

export default function ProposalPage() {
  const [jobDescription, setJobDescription] = useState('')
  const [profileText, setProfileText] = useState('')
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [credits, setCredits] = useState(3)
  const [error, setError] = useState('')

  // Result state
  const [versions, setVersions] = useState<Record<string, string>>({})
  const [activeVersion, setActiveVersion] = useState<VersionKey>('balanced')
  const [copied, setCopied] = useState(false)
  const [clientAnalysis, setClientAnalysis] = useState<ClientAnalysis | null>(null)
  const [keywordAnalysis, setKeywordAnalysis] = useState<KeywordAnalysis | null>(null)
  const [pricingAdvice, setPricingAdvice] = useState<any>(null)

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
    setVersions({})
    setClientAnalysis(null)
    setKeywordAnalysis(null)
    setPricingAdvice(null)

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

      setVersions(data.versions || {})
      setClientAnalysis(data.clientAnalysis || null)
      setKeywordAnalysis(data.keywordAnalysis || null)
      setPricingAdvice(data.pricingAdvice || null)
      setCredits((prev) => prev - 1)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = () => {
    const text = versions[activeVersion]
    if (text) {
      navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  const versionLabels: Record<string, { label: string; badge: string; desc: string }> = {
    quick_win: { label: 'Quick Win', badge: 'Low Risk', desc: 'Competitive rate, fast start' },
    balanced: { label: 'Balanced', badge: 'Recommended', desc: 'Best for most clients' },
    premium: { label: 'Premium', badge: 'High Value', desc: 'Senior authority, higher rate' },
  }

  const tierColors: Record<string, string> = {
    low: 'bg-green-100 text-green-700',
    medium: 'bg-yellow-100 text-yellow-700',
    high: 'bg-purple-100 text-purple-700',
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
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">Upwork Proposal Generator</h1>
          <p className="text-slate-600 mt-1">Paste a job → Get 3 optimized versions + client analysis + pricing advice</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left: Input */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
                <CardDescription>Paste the full job posting from Upwork/Fiverr</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder={`Paste job description here...

Example:
Looking for an experienced React developer to build a SaaS dashboard.

Requirements:
- 3+ years React experience
- TypeScript & Next.js required
- Payment integration experience a plus
- Strong communication skills

Budget: $50-100/hr
Timeline: Flexible
Must have examples of previous SaaS projects.`}
                  className="min-h-[280px]"
                />
                <p className="text-xs text-slate-400 mt-2">{jobDescription.length} characters</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Profile (Optional)</CardTitle>
                <CardDescription>Tell us your skills & experience for personalization</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={profileText}
                  onChange={(e) => setProfileText(e.target.value)}
                  placeholder={`Example:
Full-stack developer, 5 years experience with React & Node.js.
Built 3 SaaS products from scratch. Familiar with Stripe, 
AWS, and PostgreSQL. Strong English communication.`}
                  className="min-h-[120px]"
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
              {loading ? 'Analyzing & Generating...' : 'Generate 3 Optimized Versions (1 credit)'}
            </Button>

            {/* Client Analysis Display */}
            {clientAnalysis && (
              <Card className="border-indigo-200 bg-indigo-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Client Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white rounded px-2 py-1.5">
                      <span className="text-slate-500">Budget</span>
                      <p className="font-medium text-slate-900">{clientAnalysis.budgetParsed}</p>
                      <span className={`text-xs px-1.5 py-0.5 rounded-full ${tierColors[clientAnalysis.budgetTier]}`}>
                        {clientAnalysis.budgetTier}
                      </span>
                    </div>
                    <div className="bg-white rounded px-2 py-1.5">
                      <span className="text-slate-500">Urgency</span>
                      <p className="font-medium text-slate-900 capitalize">{clientAnalysis.urgency}</p>
                    </div>
                    <div className="bg-white rounded px-2 py-1.5">
                      <span className="text-slate-500">Company</span>
                      <p className="font-medium text-slate-900 capitalize">{clientAnalysis.companySize}</p>
                    </div>
                    <div className="bg-white rounded px-2 py-1.5">
                      <span className="text-slate-500">Category</span>
                      <p className="font-medium text-slate-900">{clientAnalysis.jobCategory}</p>
                    </div>
                  </div>
                  
                  {clientAnalysis.requiredSkills.length > 0 && (
                    <div>
                      <span className="text-xs text-slate-500">Skills detected:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {clientAnalysis.requiredSkills.slice(0, 6).map(skill => (
                          <span key={skill} className="text-xs bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {clientAnalysis.keyPainPoints.length > 0 && (
                    <div>
                      <span className="text-xs text-slate-500">Client cares about:</span>
                      <p className="text-xs font-medium text-slate-700 mt-0.5">
                        {clientAnalysis.keyPainPoints.join(', ')}
                      </p>
                    </div>
                  )}
                  
                  {clientAnalysis.redFlags.length > 0 && (
                    <div className="bg-amber-50 border border-amber-200 rounded px-2 py-1.5">
                      <span className="text-xs text-amber-700 font-medium">Red Flags:</span>
                      <p className="text-xs text-amber-600 mt-0.5">{clientAnalysis.redFlags.join('; ')}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Keyword Analysis */}
            {keywordAnalysis && (
              <Card className="border-slate-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Keyword Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex-1 bg-slate-100 rounded-full h-2">
                      <div 
                        className="bg-indigo-500 rounded-full h-2 transition-all"
                        style={{ width: `${keywordAnalysis.densityScore}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-slate-600">{keywordAnalysis.densityScore}%</span>
                  </div>
                  <p className="text-xs text-slate-500 mb-2">Include these skills in your proposal:</p>
                  <div className="flex flex-wrap gap-1">
                    {keywordAnalysis.requiredKeywords.map(kw => (
                      <span key={kw} className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">
                        {kw}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Pricing Advice */}
            {pricingAdvice && (
              <Card className="border-green-200 bg-green-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Pricing & Strategy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="bg-white rounded px-3 py-2">
                    <span className="text-xs text-slate-500">Match Score</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-lg font-bold text-green-600">{pricingAdvice.matchScore}/100</span>
                      <span className="text-xs text-slate-500">Upwork fit</span>
                    </div>
                  </div>
                  <div className="bg-white rounded px-3 py-2">
                    <span className="text-xs text-slate-500">Recommended Rate</span>
                    <p className="font-semibold text-slate-900">{pricingAdvice.recommendedRate}</p>
                  </div>
                  <p className="text-xs text-slate-600 italic">"{pricingAdvice.strategy}"</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right: Output */}
          <div className="lg:col-span-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Generated Proposals</CardTitle>
                <CardDescription>3 versions optimized for different positioning</CardDescription>
                
                {/* Version Tabs */}
                {Object.keys(versions).length > 0 && (
                  <div className="flex gap-2 mt-3">
                    {(Object.keys(versions) as VersionKey[]).map((key) => {
                      const v = versionLabels[key]
                      return (
                        <button
                          key={key}
                          onClick={() => setActiveVersion(key)}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                            activeVersion === key
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {v.label}
                          {key === 'balanced' && (
                            <span className="ml-1 text-xs bg-white/20 px-1 rounded">Best</span>
                          )}
                        </button>
                      )
                    })}
                  </div>
                )}
              </CardHeader>
              
              <CardContent>
                {Object.keys(versions).length > 0 ? (
                  <div className="space-y-4">
                    {/* Version badge */}
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        activeVersion === 'quick_win' ? 'bg-green-100 text-green-700' :
                        activeVersion === 'balanced' ? 'bg-indigo-100 text-indigo-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {versionLabels[activeVersion]?.badge}
                      </span>
                      <span className="text-xs text-slate-500">
                        {versionLabels[activeVersion]?.desc}
                      </span>
                    </div>
                    
                    {/* Proposal text */}
                    <div className="bg-slate-50 rounded-lg p-5 whitespace-pre-wrap text-slate-700 text-sm leading-relaxed min-h-[350px] border border-slate-200">
                      {versions[activeVersion]}
                    </div>
                    
                    <Button onClick={handleCopy} className="w-full">
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
                          Copy This Version
                        </>
                      )}
                    </Button>
                    
                    <div className="grid grid-cols-3 gap-2">
                      {(Object.keys(versions) as VersionKey[]).map((key) => (
                        <button
                          key={key}
                          onClick={() => {
                            navigator.clipboard.writeText(versions[key])
                          }}
                          className="text-xs text-slate-500 hover:text-indigo-600 py-1 border border-slate-200 rounded hover:border-indigo-300 transition-colors"
                        >
                          Copy {versionLabels[key].label}
                        </button>
                      ))}
                    </div>
                    
                    <p className="text-xs text-slate-500 text-center">
                      Tip: Edit before pasting. Add a personal touch to stand out even more.
                    </p>
                  </div>
                ) : loading ? (
                  <div className="flex flex-col items-center justify-center h-[350px]">
                    <div className="animate-spin w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full mb-4" />
                    <p className="text-slate-500">Analyzing job & generating proposals...</p>
                    <p className="text-xs text-slate-400 mt-1">This takes 2-5 seconds</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-[350px] text-center">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="text-slate-500 font-medium">Paste a job description to get started</p>
                    <p className="text-xs text-slate-400 mt-1">You'll get 3 versions + client analysis + pricing tips</p>
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
