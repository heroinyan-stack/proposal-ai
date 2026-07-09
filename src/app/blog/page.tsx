import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Blog - Upwork Proposal Tips & Freelance Guides",
  description:
    "Learn how to win more Upwork contracts, write better proposals, and grow your freelance business. Expert tips, templates, and strategies for freelancers.",
};

const posts = [
  {
    slug: "upwork-proposal-mistakes",
    title: "10 Upwork Proposal Mistakes That Kill Your Win Rate (2025)",
    excerpt:
      "Discover the top 10 Upwork proposal mistakes that are costing you jobs. Learn what NOT to do and how to fix them to increase your win rate by 300%.",
    readTime: "10 min",
    category: "Mistakes",
  },
  {
    slug: "upwork-proposal-templates",
    title: "5 Upwork Proposal Templates That Actually Win Jobs (2025)",
    excerpt:
      "Copy-paste these proven proposal templates for web design, writing, development, and virtual assistant jobs. See what works and what to avoid.",
    readTime: "8 min",
    category: "Templates",
  },
  {
    slug: "upwork-cover-letter-examples",
    title: "Upwork Cover Letter Examples: 7 Samples That Get Responses",
    excerpt:
      "Real cover letters from top-rated Upwork freelancers. Break down exactly why they work and how to adapt them to your niche.",
    readTime: "10 min",
    category: "Examples",
  },
  {
    slug: "how-to-get-first-job-on-upwork",
    title: "How to Get Your First Job on Upwork (10 Steps for Newbies)",
    excerpt:
      "Complete guide for beginners: from profile optimization to landing your first client. No experience? No problem. Follow this exact roadmap.",
    readTime: "12 min",
    category: "Guides",
  },
];

export default function BlogIndex() {
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
              <Link href="/pricing">
                <Button variant="ghost" size="sm">Pricing</Button>
              </Link>
              <Link href="/auth/login">
                <Button size="sm">Sign In</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="text-center mb-14">
          <span className="text-sm font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
            Blog
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Win More Freelance Contracts
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Proven strategies, templates, and examples to help you stand out on Upwork and Fiverr.
            Learn from top-rated freelancers who make six figures.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition-shadow border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-slate-500">{post.readTime} read</span>
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {post.title}
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{post.excerpt}</p>
              <div className="mt-4 text-sm font-medium text-indigo-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                Read more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Tired of writing proposals that get no response?
          </h2>
          <p className="mt-3 text-indigo-100 max-w-xl mx-auto">
            Generate winning proposals in 30 seconds with AI. Try free — no credit card required.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" className="mt-6 bg-white text-indigo-700 hover:bg-indigo-50">
              Try It Free
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
