import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { LandingPageContent } from '@/components/landing-content'

export const metadata = {
  title: 'ProposalAI - AI-Powered Upwork Proposal Generator',
  description: 'Generate winning Upwork proposals in 30 seconds with AI. Get 3 optimized versions with client analysis, pricing advice, and keyword optimization. Win more contracts in less time.',
  keywords: 'Upwork proposal generator, AI proposal writer, freelance proposal template, Upwork cover letter, Fiverr proposal, AI for freelancers',
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <LandingPageContent />
      </main>
      <Footer />
    </div>
  )
}
