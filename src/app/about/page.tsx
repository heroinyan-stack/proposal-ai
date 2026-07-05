import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'About - ProposalAI',
  description: 'About ProposalAI - AI-powered proposal generator for freelancers',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
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
            
            <div className="hidden md:flex items-center gap-6">
              <Link href="/pricing" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Pricing</Link>
              <Link href="/blog" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Blog</Link>
              <Link href="/about" className="text-indigo-600 font-medium text-sm">About</Link>
            </div>
            
            <div className="flex items-center gap-3">
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

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="bg-white rounded-2xl shadow-sm p-10 md:p-14">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">About ProposalAI</h1>
          
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            ProposalAI is an AI-powered proposal generator built for Upwork and Fiverr freelancers. 
            Paste a job description, and we instantly create 3 optimized proposal versions 
            (Quick Win, Balanced, Premium) with client analysis, keyword optimization, and pricing advice 
            — so you can win more contracts in less time.
          </p>
          
          <p className="text-lg text-slate-700 leading-relaxed mb-10">
            Built by freelancers who know what actually works on freelance platforms, 
            ProposalAI optimizes your proposals for Upwork&apos;s ranking algorithm and client psychology, 
            helping you stand out from the crowd without spending hours writing cover letters.
          </p>

          <div className="bg-slate-50 rounded-xl p-8 mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">AI Technology Disclosure</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              ProposalAI uses <strong>Anthropic Claude</strong> (specifically the Claude Sonnet model) 
              as the underlying AI technology to generate proposal content. When you submit a job 
              description, our system analyzes it and sends a structured prompt to Claude&apos;s API, 
              which generates three optimized proposal variations tailored to the specific job.
            </p>
            <p className="text-slate-700 leading-relaxed">
              The AI output is generated based on your input and our proprietary prompt engineering. 
              While we strive for quality and accuracy, proposals are AI-generated and should be 
              reviewed and customized before sending. ProposalAI does not guarantee job placement 
              or specific response rates.
            </p>
          </div>

          <div className="pt-8 border-t border-slate-200">
            <Link href="/">
              <Button>← Back to Home</Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
