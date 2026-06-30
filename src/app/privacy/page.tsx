import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Privacy Policy - ProposalAI',
  description: 'Privacy Policy for ProposalAI - AI-powered proposal generator for Upwork and Fiverr freelancers.',
}

export default function PrivacyPage() {
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
            <div className="flex items-center gap-3">
              <Link href="/">
                <Button variant="ghost" size="sm">Back</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="bg-white rounded-2xl shadow-sm p-10 md:p-14">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
          <p className="text-sm text-slate-500 mb-8">Last updated: June 30, 2025</p>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              At ProposalAI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Information We Collect</h2>
            <p className="text-slate-700 mb-4">
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>Account information (email address, name) when you sign up</li>
              <li>Job posting content you paste into our service for generating proposals</li>
              <li>Generated proposals and usage data</li>
              <li>Payment information processed through our payment provider Lemon Squeezy</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-slate-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Analyze usage to improve user experience</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Data Security</h2>
            <p className="text-slate-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Third-Party Services</h2>
            <p className="text-slate-700 mb-4">
              We use third-party services for payment processing (Lemon Squeezy) and authentication (Supabase). These services have their own privacy policies governing their use of your information.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Cookies</h2>
            <p className="text-slate-700 mb-4">
              We use cookies and similar tracking technologies to track activity on our service. Cookies are files with small amounts of data which may include an anonymous unique identifier.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Your Rights</h2>
            <p className="text-slate-700 mb-4">
              You have the right to access, update, or delete your personal information. You can do this through your account settings or by contacting us at our support email.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-slate-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-slate-700 font-medium">
              Email: support@proposalai.top
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Changes to This Policy</h2>
            <p className="text-slate-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </div>

          <div className="pt-8 border-t border-slate-200 mt-8">
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
