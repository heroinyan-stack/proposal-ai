import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { LandingPageContent } from '@/components/landing-content'

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
