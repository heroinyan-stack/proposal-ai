'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const painPoints = [
  {
    stat: '60%',
    label: 'of Upwork proposals get no reply',
  },
  {
    stat: '2-3 hrs',
    label: 'wasted per custom proposal',
  },
  {
    stat: '1 in 15',
    label: 'average proposal-to-hire ratio',
  },
]

const beforeAfter = {
  before: [
    'You manually read 10 job posts per day',
    'You write 5+ generic proposals and get 0 replies',
    'You guess at pricing and underbid to get work',
    'You spend 3 hours/day on proposals that go nowhere',
    'Your JSS score drops because you rush to deliver',
  ],
  after: [
    'AI analyzes job posts in 5 seconds flat',
    'You send 5 optimized proposals and get 2-3 replies',
    'AI suggests optimal pricing based on client budget',
    'You spend 15 min/day on proposals, spend time on paid work',
    'Your JSS rises because you have time to do great work',
  ],
}

const features = [
  {
    title: 'Upwork Algorithm Optimization',
    description: 'We reverse-engineered what Upwork\'s ranking algorithm looks for. Our proposals are built to pass keyword density checks and get shown to clients first.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Client Deep Analysis',
    description: 'Instantly decode the client: budget range, urgency level, company size, pain points, and red flags. Know who you\'re talking to before you write a single word.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: '3 Versions, Every Time',
    description: 'Quick Win (low bid, fast start), Balanced (recommended), and Premium (high-end positioning). Pick the one that fits your strategy for that specific client.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    title: 'Smart Pricing Advisor',
    description: 'Stop underbidding. AI analyzes the job budget, client type, and market rate to suggest the optimal pricing strategy for each proposal.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Keyword Density Score',
    description: 'Upwork\'s algorithm ranks proposals by how well they match the job description. We give you a score and tell you exactly which keywords to include.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    title: 'Red Flag Detection',
    description: 'We spot the warning signs before you waste a bid: unrealistic budgets, mass-hiring posts, vague requirements, and template-checker clients.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
]

const faqs = [
  {
    q: 'Will clients know this is AI-generated?',
    a: 'No. Unlike generic ChatGPT output, our proposals are built on a framework proven to work on Upwork. Each proposal references specific details from the job post, addresses the client\'s stated pain points, and sounds like a real person wrote it. You can (and should) add a personal touch before sending.',
  },
  {
    q: 'How is this different from using ChatGPT directly?',
    a: 'ChatGPT gives you a generic "professional proposal" that sounds like every other AI-written proposal out there. ProposalAI is purpose-built for Upwork: we optimize for keyword density, client type matching, urgency signals, budget tier positioning, and the specific psychology of freelance clients. It\'s the difference between a generic cover letter and one written by someone who understands Upwork\'s algorithm.',
  },
  {
    q: 'Does this work for my niche?',
    a: 'Yes. ProposalAI works across all major freelance categories: web development, mobile apps, design, writing, marketing, video, data science, and more. The AI adapts its tone and approach based on the job category and required skills.',
  },
  {
    q: 'What\'s the refund policy?',
    a: 'Try it free with 3 proposals — no credit card needed. If you upgrade and don\'t see results in your first 7 days, email us and we\'ll refund you, no questions asked.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Absolutely. Cancel with one click from your account settings. No hidden fees, no long-term contracts. You keep access until the end of your billing period.',
  },
]

export function LandingPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-200/30 rounded-full blur-3xl" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Used by 2,300+ Upwork freelancers
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.05] tracking-tight">
              Stop writing proposals.
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Start winning contracts.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              AI-powered proposals optimized for Upwork\'s algorithm. Paste a job → get 3 versions with client analysis, pricing advice, and keyword optimization.
              <br className="hidden md:block" />
              <span className="font-semibold text-slate-700">3x more replies, 90% less time.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/auth/signup">
                <Button size="lg" className="text-lg px-8 h-14 shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:shadow-indigo-200/60">
                  Try Free — 3 Proposals
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
              <Link href="#how">
                <Button variant="outline" size="lg" className="text-lg px-8 h-14">
                  See how it works
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-slate-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No credit card
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                5-second generation
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                7-day money-back guarantee
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {painPoints.map((item, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  {item.stat}
                </div>
                <div className="text-slate-400 mt-2">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">The Problem</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
              Writing proposals is the worst part of freelancing
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              You got into freelancing to do the work you love, not to spend half your day writing cover letters that get ignored.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200">
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">Without ProposalAI</div>
              <ul className="space-y-4">
                {beforeAfter.before.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-8 text-white shadow-xl shadow-indigo-200/30">
              <div className="text-sm font-semibold text-indigo-200 uppercase tracking-wider mb-6">With ProposalAI</div>
              <ul className="space-y-4">
                {beforeAfter.after.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-300 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
              From job post to winning proposal in 30 seconds
            </h2>
          </div>
          
          <div className="space-y-8">
            {[
              {
                num: '01',
                title: 'Paste the job posting',
                desc: 'Copy any Upwork job description and paste it in. The more detail, the better the proposal.',
              },
              {
                num: '02',
                title: 'AI analyzes the client & job',
                desc: 'We detect budget tier, urgency, pain points, red flags, and the exact keywords Upwork\'s algorithm is looking for.',
              },
              {
                num: '03',
                title: 'Get 3 optimized versions',
                desc: 'Quick Win, Balanced, and Premium. Each with pricing advice and a keyword match score. Pick one, personalize, and send.',
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-6 items-start bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="text-4xl md:text-5xl font-bold text-indigo-100 flex-shrink-0 w-16">{step.num}</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Features</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
              Everything you need to win on Upwork
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Built by freelancers, for freelancers. This isn\'t a generic AI writer — it\'s a proposal system designed to beat Upwork\'s algorithm.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-slate-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
              Simple pricing. Big results.
            </h2>
            <p className="text-xl text-slate-600">
              Start free, upgrade when you\'re ready to scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Free */}
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Free</h3>
              <p className="text-slate-500 mb-6">Test it risk-free</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-slate-900">$0</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {['3 proposal generations', 'Client analysis', '3 versions per job', 'Keyword match score', 'Pricing advice'].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/auth/signup">
                <Button variant="outline" className="w-full">Get Started Free</Button>
              </Link>
            </div>

            {/* Pro Monthly */}
            <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-8 text-white shadow-xl shadow-indigo-200/30 relative flex flex-col md:scale-105 transform">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold mb-2">Pro Monthly</h3>
              <p className="text-indigo-200 mb-6">For active freelancers</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">$19</span>
                <span className="text-indigo-200">/mo</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {['Unlimited proposals', 'All 3 version types', 'Client deep analysis', 'Red flag detection', 'Pricing optimization', 'Priority support', 'Cancel anytime'].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-emerald-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/pricing">
                <Button variant="secondary" className="w-full bg-white text-indigo-600 hover:bg-indigo-50">
                  Upgrade Now
                </Button>
              </Link>
            </div>

            {/* Pro Yearly */}
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 flex flex-col">
              <div className="inline-flex w-fit items-center gap-1 px-2.5 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full mb-4">
                Save 35%
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Pro Yearly</h3>
              <p className="text-slate-500 mb-6">Best value for pros</p>
              <div className="mb-1">
                <span className="text-5xl font-bold text-slate-900">$149</span>
                <span className="text-slate-500">/yr</span>
              </div>
              <p className="text-sm text-slate-400 mb-6">Just $12.42/mo</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {['Everything in Pro Monthly', '2 months free', 'Same great features', 'Cancel anytime'].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/pricing">
                <Button variant="outline" className="w-full">Get Yearly Plan</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
              Common questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900">{faq.q}</span>
                  <svg className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-slate-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-violet-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop guessing. Start winning.
          </h2>
          <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">
            Join 2,300+ freelancers who send better proposals in less time. Free forever plan — no credit card required.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 text-lg px-10 h-14 shadow-2xl">
              Start Generating Proposals
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
