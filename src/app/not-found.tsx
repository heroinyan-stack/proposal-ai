import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Page Not Found - ProposalAI",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
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
              <Link href="/blog">
                <Button variant="ghost" size="sm">Blog</Button>
              </Link>
              <Link href="/pricing">
                <Button variant="ghost" size="sm">Pricing</Button>
              </Link>
              <Link href="/auth/signup">
                <Button size="sm">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-lg">
          <div className="text-9xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Page not found
          </h1>
          <p className="text-lg text-slate-600 mb-10">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg">Go to Homepage</Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="outline">Browse Blog</Button>
            </Link>
          </div>

          <div className="mt-16 text-left">
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Popular pages
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link
                href="/blog/upwork-proposal-templates"
                className="block bg-white rounded-xl p-4 hover:bg-slate-50 transition-colors border border-slate-200"
              >
                <p className="font-medium text-slate-900 text-sm">Upwork Proposal Templates</p>
                <p className="text-xs text-slate-500 mt-1">5 templates that win jobs</p>
              </Link>
              <Link
                href="/blog/upwork-vs-fiverr"
                className="block bg-white rounded-xl p-4 hover:bg-slate-50 transition-colors border border-slate-200"
              >
                <p className="font-medium text-slate-900 text-sm">Upwork vs Fiverr</p>
                <p className="text-xs text-slate-500 mt-1">Which is better in 2025?</p>
              </Link>
              <Link
                href="/pricing"
                className="block bg-white rounded-xl p-4 hover:bg-slate-50 transition-colors border border-slate-200"
              >
                <p className="font-medium text-slate-900 text-sm">Pricing</p>
                <p className="text-xs text-slate-500 mt-1">Free plan available</p>
              </Link>
              <Link
                href="/blog/how-to-get-first-job-on-upwork"
                className="block bg-white rounded-xl p-4 hover:bg-slate-50 transition-colors border border-slate-200"
              >
                <p className="font-medium text-slate-900 text-sm">Get Your First Job</p>
                <p className="text-xs text-slate-500 mt-1">10-step guide for newbies</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
