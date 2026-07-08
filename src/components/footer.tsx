import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">ProposalAI</span>
            </Link>
            <p className="mt-3 text-sm max-w-xs">
              AI-powered proposal generator for Upwork and Fiverr freelancers. 
              Win more contracts in less time.
            </p>
            <p className="mt-4 text-sm">
              Support: <a href="mailto:heroinyan@gmail.com" className="hover:text-white transition-colors">heroinyan@gmail.com</a>
            </p>
            <p className="mt-3 text-xs text-slate-500">
              Powered by Anthropic Claude AI. <Link href="/about" className="hover:text-slate-300 underline">Learn more</Link>.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-medium mb-3">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/auth/login" className="hover:text-white transition-colors">Sign In</Link></li>
                <li><Link href="/auth/signup" className="hover:text-white transition-colors">Sign Up</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/blog/upwork-proposal-templates" className="hover:text-white transition-colors">Templates</Link></li>
                <li><Link href="/blog/upwork-cover-letter-examples" className="hover:text-white transition-colors">Examples</Link></li>
                <li><Link href="/blog/how-to-get-first-job-on-upwork" className="hover:text-white transition-colors">Guides</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Niches</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog/upwork-proposal-templates" className="hover:text-white transition-colors">Web Design</Link></li>
                <li><Link href="/blog/upwork-proposal-templates" className="hover:text-white transition-colors">Writing</Link></li>
                <li><Link href="/blog/upwork-proposal-templates" className="hover:text-white transition-colors">Development</Link></li>
                <li><Link href="/blog/upwork-proposal-templates" className="hover:text-white transition-colors">Marketing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><a href="mailto:heroinyan@gmail.com" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} ProposalAI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <a href="mailto:heroinyan@gmail.com" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
