import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Terms of Service - ProposalAI',
  description: 'Terms of Service for ProposalAI - AI-powered proposal generator for Upwork and Fiverr freelancers.',
}

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
          <p className="text-sm text-slate-500 mb-8">Last updated: June 30, 2025</p>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Welcome to ProposalAI. By accessing or using our service, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-slate-700 mb-4">
              By accessing and using ProposalAI, you accept and agree to be bound by these terms. If you do not agree with any part of these terms, you may not use our service.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Description of Service</h2>
            <p className="text-slate-700 mb-4">
              ProposalAI provides an AI-powered proposal generation service for freelancers on platforms like Upwork and Fiverr. Our service analyzes job postings and generates optimized proposal templates to help freelancers win more contracts.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Account Terms</h2>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You are responsible for maintaining the security of your account credentials</li>
              <li>You must be at least 18 years old to use our service</li>
              <li>One person or entity may not maintain more than one free account</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Subscription and Payments</h2>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>Paid subscriptions are billed according to the plan you select</li>
              <li>Monthly subscriptions renew automatically on the same date each month</li>
              <li>Annual subscriptions renew automatically after one year</li>
              <li>You can cancel your subscription at any time from your account settings</li>
              <li>Upon cancellation, you will retain access until the end of your current billing period</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Refunds</h2>
            <p className="text-slate-700 mb-4">
              We offer a 14-day money-back guarantee for all paid plans. If you are not satisfied with our service, contact us within 14 days of purchase for a full refund.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Acceptable Use</h2>
            <p className="text-slate-700 mb-4">
              You agree not to use our service to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>Generate spam, fraudulent, or misleading proposals</li>
              <li>Violate any intellectual property rights</li>
              <li>Upload malicious code or content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Resell or redistribute our generated content as standalone products</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Intellectual Property</h2>
            <p className="text-slate-700 mb-4">
              The service, including all content, software, and generated proposals, are our property. You retain ownership of proposals you generate using our service, subject to these terms.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-slate-700 mb-4">
              ProposalAI is not responsible for the outcomes of your job applications or contracts. We do not guarantee employment, specific results, or client responses. The service is provided "as is" without warranties of any kind.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Termination</h2>
            <p className="text-slate-700 mb-4">
              We reserve the right to terminate or suspend your account at our sole discretion for any violation of these terms or for any other reason without notice.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Changes to Terms</h2>
            <p className="text-slate-700 mb-4">
              We may modify these terms at any time. We will notify you of significant changes via email or through our service. Continued use of our service after changes constitutes acceptance of the new terms.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-slate-700 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-slate-700 font-medium mb-4">
              Email: 332847952@qq.com
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
