import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { BlogPostSchemas } from "@/components/blog-post-schemas";

const slug = "freelance-pricing-strategies";
const title = "Freelance Pricing Strategies: How to Charge What You're Worth";
const description =
  "Stop undercharging. Learn hourly vs fixed vs value-based pricing, a 1,000-hour formula for your minimum rate, 2025 rate benchmarks by niche, and exactly how to raise your rates without losing clients.";
const publishedTime = "2025-07-02";

export function generateMetadata(): Metadata {
  return {
    title,
    description,
    keywords: [
      "freelance pricing strategies",
      "how much to charge freelance",
      "freelance rates 2025",
      "freelance value based pricing",
      "how to raise freelance rates",
      "freelance hourly rate",
      "fixed price vs hourly freelance",
    ],
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://proposalai.top/blog/${slug}`,
      siteName: "ProposalAI",
      publishedTime,
      authors: ["ProposalAI Team"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description:
        "Hourly vs fixed vs value-based pricing, a minimum-rate formula, 2025 rate benchmarks, and how to raise your rates without losing clients.",
    },
  };
}

export default function BlogPost() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-slate-900">ProposalAI</span>
            </Link>
            <Link href="/blog">
              <Button variant="ghost" size="sm">← All posts</Button>
            </Link>
          </div>
        </div>
      </header>

      <article className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="mb-8">
          <span className="text-sm font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
            Pricing
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-slate-500 text-sm">11 min read · Updated August 2025</p>
        </div>

        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600 prose-strong:text-slate-900">
          <p className="text-lg text-slate-700 leading-relaxed">
            Pricing is the single highest-leverage skill a freelancer has. A 20% rate increase
            drops straight to your bottom line — no extra hours, no extra clients, no extra
            software. Yet most freelancers set their price once (usually too low, usually out of
            fear) and never touch it again.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            This guide covers the three pricing models that actually work in 2025, a formula for
            your minimum hourly rate, real rate benchmarks by niche, and a step-by-step plan for
            raising your rates without losing the clients you already have.
          </p>

          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8">
            <p className="text-indigo-800 font-semibold text-lg">
              ⚡ The 30-Second Version
            </p>
            <ul className="text-indigo-700 mt-3 space-y-2">
              <li><strong>Use hourly</strong> when the scope is unclear or you&apos;re new to a niche.</li>
              <li><strong>Use fixed-price</strong> once you can estimate a project confidently (hours × rate × 1.3 buffer).</li>
              <li><strong>Use value-based</strong> when your work ties to a measurable business outcome — same work, often 5-10x the fee.</li>
              <li><strong>Your floor rate</strong> = target annual income ÷ 1,000 billable hours, plus 20-40% for taxes and profit.</li>
              <li><strong>Raise rates</strong> for new clients first, reposition as a specialist, and bundle instead of discounting.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            The 3 Pricing Models (and When to Use Each)
          </h2>
          <p>
            Almost every freelance pricing decision falls into one of three buckets. Picking the
            right one for the job in front of you is worth more than any single tactic.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">
            1. Hourly
          </h3>
          <p>
            <strong>Best when:</strong> the scope is genuinely unclear, you&apos;re new to a niche,
            or the work is open-ended (retainer support, ongoing maintenance, fractional roles).
          </p>
          <p>
            <strong>The risk:</strong> you get penalized for being fast. A bug fix you once needed
            4 hours to solve now takes you 1 hour — and you just took a 75% pay cut for getting
            better at your job.
          </p>
          <p>
            <strong>Rule of thumb:</strong> hourly for your first 6-12 months in a new niche, then
            graduate to fixed-price as soon as you can estimate reliably.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">
            2. Fixed-Price (Project-Based)
          </h3>
          <p>
            <strong>Best when:</strong> you&apos;ve done similar work 3+ times and can estimate
            confidently. Fixed-price rewards efficiency — the faster you deliver, the higher your
            effective hourly rate.
          </p>
          <p>
            <strong>The risk:</strong> scope creep eats your margin if your contract doesn&apos;t
            cap revisions. A &quot;small tweak&quot; requested five times is a second project.
          </p>
          <p>
            <strong>Rule of thumb:</strong> estimated hours × your hourly rate × <strong>1.3
            buffer</strong> for revisions, calls, and the inevitable &quot;one more thing.&quot;
            Then round up to a clean number. (For the contract language that protects this margin,
            see our{" "}
            <Link href="/blog/freelance-contract-templates" className="text-indigo-600 font-medium hover:underline">
              freelance contract templates
            </Link>
            .)
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">
            3. Value-Based
          </h3>
          <p>
            <strong>Best when:</strong> your work ties to a measurable business outcome — revenue,
            conversion rate, cost savings, time saved. You price the outcome, not the hours.
          </p>
          <p>
            <strong>The risk:</strong> it requires confidence and a client who thinks in ROI rather
            than hours. It also requires you to actually understand the client&apos;s business.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Value-based pricing in action</p>
            <p className="text-slate-600">
              A copywriter rewrites a SaaS company&apos;s pricing page. Three ways to price the
              exact same project:
            </p>
            <ul className="text-slate-600 mt-2 ml-4 list-disc">
              <li><strong>Hourly:</strong> 8 hours × $100 = <strong>$800</strong></li>
              <li><strong>Fixed:</strong> <strong>$1,200</strong> (with the 1.3 buffer)</li>
              <li><strong>Value-based:</strong> the rewrite lifts trial signups 15% = roughly
              <strong> $60,000/year</strong> in new ARR. Price: <strong>$8,000</strong>.</li>
            </ul>
            <p className="text-slate-600 mt-3">
              Same work, same 8 hours, ~10x the fee — because you priced the outcome, not the
              typing.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            How to Calculate Your Minimum Hourly Rate
          </h2>
          <p>
            Most freelancers pick a rate that &quot;feels right&quot; and hope it covers their
            life. Use the 1,000-hour formula instead:
          </p>
          <ol>
            <li><strong>Set your target annual income.</strong> Example: $80,000.</li>
            <li><strong>Divide by 1,000 billable hours.</strong> 1,000 is the realistic annual max after marketing, admin, proposal writing, client calls, vacation, and sick days. (2,080 work hours minus ~50% non-billable = ~1,000.) That gives you <strong>$80/hour</strong> — your absolute floor.</li>
            <li><strong>Add 20-40% for taxes, software, and profit margin.</strong> Self-employment taxes, Adobe, Notion, AI tools, and the cushion every business needs. $80 × 1.35 = <strong>~$108/hour</strong>.</li>
          </ol>
          <p>
            Anything below that number means you are subsidizing your clients with your own
            salary. If $108/hr feels scary, the problem isn&apos;t the rate — it&apos;s that your
            positioning and portfolio don&apos;t justify it yet. Fix those, not the price.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            2025 Freelance Rate Benchmarks by Niche
          </h2>
          <p>
            These are real ranges pulled from active Upwork and Fiverr listings and freelancer
            community surveys in 2025. Use them as a sanity check, not a ceiling.
          </p>
          <ul>
            <li><strong>Web development (React/Next.js):</strong> $60-$150/hr ($80 median)</li>
            <li><strong>UI/UX design:</strong> $50-$120/hr</li>
            <li><strong>SEO:</strong> $50-$150/hr</li>
            <li><strong>Copywriting / content:</strong> $50-$150/hr, or $0.15-$0.50/word</li>
            <li><strong>Virtual assistant / admin:</strong> $15-$50/hr</li>
            <li><strong>Video editing:</strong> $30-$100/hr</li>
            <li><strong>Marketing analytics / data:</strong> $60-$160/hr</li>
            <li><strong>Fractional CFO / strategy consultant:</strong> $150-$400/hr</li>
          </ul>
          <p>
            Specialists sit at the top of each range; generalists sit at the bottom. A
            &quot;WordPress developer&quot; charges less than a &quot;WordPress speed optimization
            specialist&quot; — even when the work is identical.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Tiered Pricing: The Package Trick
          </h2>
          <p>
            Instead of quoting one price, offer three tiers — Basic, Standard, Premium — anchored
            so the middle one is the obvious choice. This works because most clients avoid both
            the cheapest and the most expensive option.
          </p>
          <p>Example for a logo designer:</p>
          <ul>
            <li><strong>Tier 1 ($350):</strong> logo concept + 1 revision</li>
            <li><strong>Tier 2 ($1,500):</strong> full brand identity (logo, colors, typography, 5 applications, brand guide)</li>
            <li><strong>Tier 3 ($4,500):</strong> identity + launch assets + social template pack</li>
          </ul>
          <p>
            Most clients pick Tier 2. That middle price is now roughly 4x what you would have
            quoted for &quot;a logo&quot; — and the client feels like they chose sensibly. On
            Fiverr this is built into the gig structure; on Upwork you propose it directly in your
            bid.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            How Pricing Differs on Upwork vs Fiverr
          </h2>
          <p>
            The platform changes which model works. On{" "}
            <Link href="/blog/upwork-vs-fiverr" className="text-indigo-600 font-medium hover:underline">
              Upwork vs Fiverr
            </Link>
            , the mechanics are genuinely different:
          </p>
          <ul>
            <li><strong>Upwork</strong> is bid-based, supports hourly and fixed-price, and clients compare rates openly. Bigger budgets ($5k-$50k+) are normal, and higher rates are tolerated when your proposals justify them.</li>
            <li><strong>Fiverr</strong> is gig-package-based with fixed tiers. The algorithm rewards order volume and reviews, and the 20% seller fee compounds painfully on big tickets — so Fiverr pricing naturally caps lower.</li>
          </ul>
          <p>
            Rule: never price the same deliverable identically on both. Upwork tolerates a $5,000
            scope; Fiverr buyers usually cap out much lower. Mirror the platform, not your
            feelings.
          </p>
          <p>
            And whatever you do, don&apos;t bid low just to &quot;win&quot; the job — that&apos;s
            one of the{" "}
            <Link href="/blog/upwork-proposal-mistakes" className="text-indigo-600 font-medium hover:underline">
              proposal mistakes that quietly kill your win rate
            </Link>
            . Low bids attract the worst clients and lock you into a rate you can&apos;t escape.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            How to Raise Your Rates Without Losing Clients
          </h2>
          <p>
            Raising rates feels terrifying the first time and boring the fifth. Here is the
            sequence that works:
          </p>
          <ol>
            <li><strong>New clients first.</strong> Quote your new rate to the very next inquiry. Existing clients stay at their old rate for 6-12 months. You will be amazed how many new clients say yes to a number you thought was impossible.</li>
            <li><strong>Reposition as a specialist.</strong> Specialists charge 30-50% more than generalists for the same hours. &quot;Web developer&quot; → &quot;WordPress speed optimization specialist.&quot; Same skills, different price ceiling.</li>
            <li><strong>Bundle instead of increasing.</strong> Turn &quot;logo $400&quot; into &quot;brand identity $1,200&quot; with extra deliverables. Same hours, higher ticket, and the client perceives more value rather than a price hike.</li>
            <li><strong>Give existing clients 30 days notice.</strong> &quot;My rates are going up on [date]. I&apos;d love to keep working together — happy to lock in the current rate for a 3-month retainer if we commit now.&quot; Many will prepay to keep the old rate, which is a win for your cash flow too.</li>
          </ol>
          <p>
            Expect to lose 10-20% of clients on a rate increase. That is fine — you&apos;ve already
            replaced their revenue with the higher rate from everyone who stayed. The math almost
            always works in your favor.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Common Pricing Mistakes to Avoid
          </h2>
          <ul>
            <li><strong>Pricing by what you &quot;need&quot;</strong> instead of what the market pays. Need-based pricing caps you at survival.</li>
            <li><strong>Competing on price.</strong> The race to the bottom attracts the worst clients — the ones who micromanage, dispute invoices, and leave 4-star reviews.</li>
            <li><strong>Quoting hourly for work you can do fast.</strong> This is pure value leakage. Move fast work to fixed-price.</li>
            <li><strong>No revision cap.</strong> Unlimited revisions = unlimited scope creep. Cap at 2 rounds, bill beyond that.</li>
            <li><strong>Never raising rates</strong> because you&apos;re afraid. Inflation alone justifies an annual increase; skill growth justifies more.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            A Quick Pricing Checklist
          </h2>
          <ul>
            <li>You know your 1,000-hour floor rate and never bid below it.</li>
            <li>You match the pricing model to the project (hourly / fixed / value).</li>
            <li>Every fixed-price quote includes a 1.3 buffer and a revision cap.</li>
            <li>You offer 3 tiers, not 1 price.</li>
            <li>Your rate has gone up at least once in the last 12 months.</li>
            <li>Your contract protects the margin you quoted (revision caps, kill fee, IP-on-payment).</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Price Confidently, Win More Often
          </h2>
          <p>
            Pricing and proposals are two halves of the same coin. You can calculate the perfect
            rate and still lose the job if your proposal doesn&apos;t justify it. That&apos;s where{" "}
            <Link href="/" className="text-indigo-600 font-medium hover:underline">
              ProposalAI
            </Link>{" "}
            comes in: paste any Upwork job description and it generates 3 tailored proposal drafts
            in 30 seconds — each with a client-specific hook, relevant proof points, and a{" "}
            <strong>pricing suggestion tied to real market data</strong> so you stop second-guessing
            your number.
          </p>
          <p>
            Freelancers using ProposalAI report roughly a <strong>3x higher response rate</strong>{" "}
            on the proposals they send, and they stop undercharging because the tool shows them
            what comparable jobs actually pay. Pair it with a{" "}
            <Link href="/pricing" className="text-indigo-600 font-medium hover:underline">
              plan that fits your bid volume
            </Link>{" "}
            and turn pricing from a guessing game into a system.
          </p>
          <p>
            <Link href="/auth/signup" className="text-indigo-600 font-medium hover:underline">
              Try ProposalAI free →
            </Link>
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Keep Reading</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/blog/upwork-vs-fiverr"
              className="group block bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                Platform Guides
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                Upwork vs Fiverr: Which Platform Is Better for Freelancers in 2025?
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Real 2025 fee numbers, how you actually get work on each, and which platform fits your niche — including how pricing mechanics differ.
              </p>
            </Link>
            <Link
              href="/blog/freelance-contract-templates"
              className="group block bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                Contracts
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                Freelance Contract Templates: Protect Yourself on Every Project
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Copy-paste contracts with the revision caps, kill fees, and payment terms that protect the margin you just quoted.
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Stop guessing your freelance rate
          </h2>
          <p className="mt-3 text-indigo-100 max-w-xl mx-auto">
            Paste a job description, get 3 proposal drafts and a pricing suggestion backed by real market data. Free to try — no credit card required.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" className="mt-6 bg-white text-indigo-700 hover:bg-indigo-50">
              Try ProposalAI Free
            </Button>
          </Link>
        </div>
      </article>

      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description,
            author: {
              "@type": "Organization",
              name: "ProposalAI",
            },
            publisher: {
              "@type": "Organization",
              name: "ProposalAI",
              logo: {
                "@type": "ImageObject",
                url: "https://proposalai.top/icon.svg",
              },
            },
            datePublished: publishedTime,
            dateModified: publishedTime,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://proposalai.top/blog/${slug}`,
            },
          }),
        }}
      />
      <BlogPostSchemas slug={slug} />
      <Footer />
    </div>
  );
}
