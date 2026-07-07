'use client'

import { useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Footer } from '@/components/footer'

const plans = [
  {
    id: 'free',
    name: 'Free',
    description: 'Test it risk-free',
    price: 0,
    period: 'month',
    features: [
      '3 proposal generations',
      'Client deep analysis',
      '3 versions per job',
      'Keyword match score',
      'Pricing advice',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro Monthly',
    description: 'For active freelancers',
    price: 19,
    period: 'mo',
    features: [
      'Unlimited proposals',
      'All 3 version types',
      'Client deep analysis',
      'Red flag detection',
      'Pricing optimization',
      'Priority support',
      'Cancel anytime',
    ],
    cta: 'Upgrade Now',
    highlighted: true,
    popular: true,
  },
  {
    id: 'pro_yearly',
    name: 'Pro Yearly',
    description: 'Best value for pros',
    price: 149,
    period: 'yr',
    features: [
      'Everything in Pro Monthly',
      'Save 35% (2 months free)',
      'Just $12.42/month',
      'Same great features',
      'Cancel anytime',
    ],
    cta: 'Get Yearly Plan',
    highlighted: false,
    badge: 'Save 35%',
  },
]

export default function PricingPage() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null)
  const router = useRouter()

  const handleUpgrade = async (planId: string) => {
    if (planId === 'free') {
      router.push('/auth/signup')
      return
    }

    setLoadingPlan(planId)
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (response.status === 401) {
          router.push('/auth/login')
          return
        }
        throw new Error(data.error || 'Failed to create checkout')
      }

      window.location.href = data.url
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Failed to start checkout. Please try again.')
    } finally {
      setLoadingPlan(null)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
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
            
            <div className="flex items-center gap-3">
              <Link href="/blog">
                <Button variant="ghost" size="sm">Blog</Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost" size="sm">About</Button>
              </Link>
              <Link href="/auth/login">
                <Button variant="ghost" size="sm">Log In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button size="sm">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Start free, upgrade when you need more. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.id} className="relative">
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <Card className={plan.highlighted 
                ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white border-0 shadow-xl' 
                : 'bg-white border-2 border-slate-200'
              }>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className={plan.highlighted ? 'text-white' : 'text-slate-900'}>
                    {plan.name}
                  </CardTitle>
                  <CardDescription className={plan.highlighted ? 'text-indigo-100' : 'text-slate-600'}>
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                      ${plan.price}
                    </span>
                    <span className={plan.highlighted ? 'text-indigo-200' : 'text-slate-600'}>
                      /{plan.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <svg 
                          className={`w-5 h-5 ${plan.highlighted ? 'text-emerald-300' : 'text-emerald-500'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className={plan.highlighted ? 'text-indigo-50' : 'text-slate-600'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    variant={plan.highlighted ? 'secondary' : 'primary'}
                    className="w-full"
                    onClick={() => handleUpgrade(plan.id)}
                    loading={loadingPlan === plan.id}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {[
              {
                question: 'Is there a free trial for Pro?',
                answer: 'Yes! Every Pro plan comes with a 7-day free trial. You won\'t be charged until the trial ends, and you can cancel anytime during the trial.'
              },
              {
                question: 'Can I cancel anytime?',
                answer: 'Absolutely. There are no long-term contracts. You can cancel your subscription at any time, and you\'ll continue to have access until the end of your billing period.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards (Visa, Mastercard, American Express), as well as PayPal and Apple Pay through our payment processor, Creem.'
              },
              {
                question: 'What is your refund policy?',
                answer: 'We offer a 14-day money-back guarantee. If you\'re not satisfied with ProposalAI, contact us within 14 days for a full refund, no questions asked.'
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is there a free trial for Pro?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! Every Pro plan comes with a 7-day free trial. You won't be charged until the trial ends, and you can cancel anytime during the trial."
                }
              },
              {
                "@type": "Question",
                name: "Can I cancel anytime?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. There are no long-term contracts. You can cancel your subscription at any time, and you'll continue to have access until the end of your billing period."
                }
              },
              {
                "@type": "Question",
                name: "What payment methods do you accept?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We accept all major credit cards (Visa, Mastercard, American Express), as well as PayPal and Apple Pay through our payment processor, Creem."
                }
              },
              {
                "@type": "Question",
                name: "What is your refund policy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We offer a 14-day money-back guarantee. If you're not satisfied with ProposalAI, contact us within 14 days for a full refund, no questions asked."
                }
              }
            ]
          })
        }}
      />

      <Footer />
    </div>
  )
}
