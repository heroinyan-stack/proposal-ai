import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { BlogPostSchemas } from "@/components/blog-post-schemas";

const slug = "upwork-vs-fiverr";
const title = "Upwork vs Fiverr: Which Platform Is Better for Freelancers in 2025?";
const description =
  "Upwork vs Fiverr in 2025: real fee numbers, how you actually get work, earnings potential, and which platform fits your niche. A data-backed comparison for freelancers.";
const publishedTime = "2025-08-14";

export function generateMetadata(): Metadata {
  return {
    title,
    description,
    keywords: [
      "upwork vs fiverr",
      "upwork or fiverr",
      "fiverr vs upwork 2025",
      "best freelance platform",
      "upwork fees",
      "fiverr fees",
      "fiverr vs upwork for beginners",
      "which is better upwork or fiverr",
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
        "Upwork vs Fiverr in 2025: fees, earnings, and which platform actually fits your freelance niche.",
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
            Platform Guides
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-slate-500 text-sm">10 min read · Updated August 2025</p>
        </div>

        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600 prose-strong:text-slate-900">
          <p className="text-lg text-slate-700 leading-relaxed">
            Every new freelancer hits the same fork in the road: <strong>Upwork or
            Fiverr?</strong> A quick Google search returns eight million conflicting answers,
            most written in 2022 with outdated fees and screenshots of interfaces that no
            longer exist.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            This is the 2025 version. We&apos;ll compare Upwork and Fiverr using current fee
            structures, real earnings data, and the actual day-to-day reality of getting work on
            each platform — so you can stop researching and start earning.
          </p>

          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8">
            <p className="text-indigo-800 font-semibold text-lg">
              ⚡ The 30-Second Answer
            </p>
            <ul className="text-indigo-700 mt-3 space-y-2">
              <li><strong>Choose Upwork</strong> if you want higher hourly rates, long-term client relationships, and bigger project budgets ($5k–$50k+).</li>
              <li><strong>Choose Fiverr</strong> if you want clients to come to you, prefer productized one-off gigs, and want a faster first sale.</li>
              <li><strong>Use both</strong> if you&apos;re serious — they serve different parts of your pipeline and the smartest freelancers run both in parallel.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            The Core Difference: &quot;Pull&quot; vs &quot;Push&quot;
          </h2>
          <p>
            Before the numbers, you need to understand the fundamental model difference. It
            explains almost everything that follows.
          </p>
          <p>
            <strong>Upwork is a &quot;pull&quot; (bid) marketplace.</strong> Clients post detailed
            job descriptions. You spend Connects to submit a tailored proposal. The client
            reviews proposals, messages a few freelancers, and hires one. You are actively
            chasing work — which means higher effort per win, but also higher budgets and real
            conversations.
          </p>
          <p>
            <strong>Fiverr is a &quot;push&quot; (catalog) marketplace.</strong> You build gig
            listings (like product pages). Buyers search, browse, and check out — often without
            ever messaging you. You are passively receiving orders — which means lower effort
            per sale, but also more commodity-style price pressure and less relationship depth.
          </p>
          <p>
            In short: Upwork rewards <em>sales skill</em> (your proposals). Fiverr rewards{" "}
            <em>marketing skill</em> (your gig page). Which one sounds more like you?
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Fees: What Each Platform Actually Takes (2025)
          </h2>
          <p>
            Fees are the #1 thing outdated guides get wrong. Here&apos;s what&apos;s true right
            now.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">
            Upwork Fees
          </h3>
          <ul>
            <li><strong>Freelancer service fee: a flat 10%</strong> on all earnings. Upwork retired the old 5/10/15/20% sliding scale in May 2024, so every dollar is now taxed the same — including the old &quot;20% on the first $500&quot; trap that punished new freelancers.</li>
            <li><strong>Client marketplace fee: 5%</strong> on what they pay (a 5% fee on the freelancer&apos;s earnings, charged to the client). Some clients pass this into budgets.</li>
            <li><strong>Connects:</strong> ~$0.15 each. Most proposals cost <strong>10–16 Connects</strong> (so roughly $1.50–$2.40 per bid). The Freelancer Plus plan ($19.99/mo) includes 150 Connects plus the ability to see bid ranges — worth it once you&apos;re bidding regularly.</li>
            <li><strong>Withdrawal:</strong> free for most methods after the standard 5-day security period.</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">
            Fiverr Fees
          </h3>
          <ul>
            <li><strong>Seller service fee: 20%.</strong> You keep 80% of every order. This is higher than Upwork&apos;s 10%, and it stings more on big tickets.</li>
            <li><strong>Buyer service fee:</strong> Fiverr moved to a tiered structure where buyers pay roughly 5.5%+ on top of order value (with a minimum fee). This shrinks what buyers are willing to spend and effectively caps gig prices.</li>
            <li><strong>Fund clearing:</strong> 14 days for most sellers, <strong>7 days for Top Rated</strong>. Your money is locked during this window.</li>
            <li><strong>Withdrawal:</strong> free above a threshold; small fees on some methods.</li>
          </ul>
          <p>
            <strong>The takeaway:</strong> On a $1,000 project, Upwork keeps ~$100 and Fiverr keeps
            ~$200. The gap doubles as your ticket size grows. This is the single biggest reason
            high earners gravitate to Upwork.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            How You Actually Get Work
          </h2>

          <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">
            On Upwork: Proposals Are Everything
          </h3>
          <p>
            Getting hired on Upwork is a function of two things: <strong>how many quality
            proposals you send</strong>, and <strong>how good each one is</strong>. The average
            freelancer wins roughly 1 in 10 bids; top freelancers win 1 in 3. The difference is
            almost entirely proposal quality.
          </p>
          <p>
            This is also why so many new freelancers quit Upwork in their first month — they send
            20 generic proposals, win nothing, and assume the platform is broken. It&apos;s not.
            Their proposals are. (Avoid the most common ones in our breakdown of{" "}
            <Link href="/blog/upwork-proposal-mistakes" className="text-indigo-600 font-medium hover:underline">
              the 10 proposal mistakes that kill your win rate
            </Link>
            .)
          </p>
          <p>
            If proposal writing feels slow, that&apos;s because it is — and it&apos;s exactly the
            problem ProposalAI solves. Paste a job description, get three optimized proposal
            drafts in 30 seconds, tuned to the client&apos;s actual problem.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">
            On Fiverr: Your Gig Page Is Your Storefront
          </h3>
          <p>
            Getting orders on Fiverr is a function of <strong>gig discoverability</strong>:
            keyword-rich titles, the right tags, a click-stopping thumbnail, tiered pricing
            (Basic / Standard / Premium), and — above all — <strong>reviews</strong>. The first
            order is the hardest because Fiverr&apos;s algorithm barely surfaces gigs with zero
            reviews.
          </p>
          <p>
            Once you accumulate 5–10 five-star reviews, Fiverr starts pushing your gig in search.
            From there, momentum compounds. But there&apos;s no &quot;send a proposal&quot;
            button — you either rank, or you don&apos;t get seen.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Earnings Potential: Real Numbers
          </h2>
          <p>
            Let&apos;s cut the &quot;you can make six figures on either platform!&quot; hype. Both
            are true, but the distributions look very different.
          </p>
          <ul>
            <li><strong>Upwork median hourly rate:</strong> ~$25–$40/hr across most categories. The top 10% of freelancers earn <strong>$75–$150+/hr</strong>. Average active freelancer makes roughly $1k–$5k/month; committed full-timers regularly hit $5k–$15k.</li>
            <li><strong>Fiverr average seller:</strong> $100–$500/month. Top Rated sellers typically earn <strong>$2k–$10k/month</strong>. A small minority clear six figures, usually by productizing a high-demand skill and scaling order volume.</li>
          </ul>
          <p>
            Translation: Upwork&apos;s ceiling is higher per-client, but Fiverr&apos;s floor is
            easier to reach because you don&apos;t have to keep bidding. A Fiverr seller with one
            strong gig can earn passively; an Upwork freelancer earns more per engagement but has
            to keep the pipeline full.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Which Platform Fits Your Niche?
          </h2>
          <p>
            The right answer depends heavily on what you do. Here&apos;s a quick map:
          </p>
          <ul>
            <li><strong>Best on Upwork:</strong> full-stack developers, UI/UX designers on retainer, marketing strategists, fractional CFOs, virtual assistants for ongoing support, consultants. Anything with a $2k+ budget and a relationship.</li>
            <li><strong>Best on Fiverr:</strong> logo design, voiceovers, short video edits, resume writing, WordPress bug fixes, data entry, quick copywriting jobs. Anything productized and one-off.</li>
            <li><strong>Works on both:</strong> writers, graphic designers, social media managers, video editors. These niches split cleanly between big retainer work (Upwork) and small packages (Fiverr).</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Upwork Pros &amp; Cons
          </h2>
          <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Pros</h3>
          <ul>
            <li>Higher rates and bigger project budgets</li>
            <li>Hourly contracts with payment protection</li>
            <li>Long-term, repeat clients (lower churn once you land them)</li>
            <li>Direct client communication before hiring — real sales conversations</li>
          </ul>
          <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Cons</h3>
          <ul>
            <li>Connects cost money; proposal writing is time-intensive</li>
            <li>Slow first job — new profiles with no reviews get fewer replies</li>
            <li>Rising global competition on price</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Fiverr Pros &amp; Cons
          </h2>
          <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Pros</h3>
          <ul>
            <li>Clients come to you — no proposal writing</li>
            <li>Faster first sale possible, especially with a niche gig</li>
            <li>Productized = scalable once a gig ranks</li>
            <li>Simple checkout = less back-and-forth</li>
          </ul>
          <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Cons</h3>
          <ul>
            <li>20% seller fee adds up fast on big orders</li>
            <li>Heavy price-comparison pressure (the &quot;$5 logo&quot; race to the bottom)</li>
            <li>14-day fund clearing window</li>
            <li>Shallow client relationships — buyers often one-and-done</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Can You Use Both? (Yes, and You Should)
          </h2>
          <p>
            This isn&apos;t an either/or. The smartest freelancers treat the two platforms as
            complementary layers of one pipeline:
          </p>
          <ol className="space-y-2">
            <li><strong>Productize on Fiverr.</strong> Turn your most repeatable deliverables into fixed-price gigs. This captures low-effort, one-off demand and builds reviews fast.</li>
            <li><strong>Bid on Upwork for bigger work.</strong> Use proposals to land $5k+ projects and ongoing retainers that Fiverr&apos;s checkout model can&apos;t support.</li>
            <li><strong>Let each feed the other.</strong> Fiverr reviews build your credibility; Upwork case studies make your Fiverr gig page more convincing.</li>
          </ol>
          <p>
            Just stay within each platform&apos;s terms — don&apos;t try to move buyers off-platform
            to dodge fees, especially in the first interaction. The ban risk isn&apos;t worth the
            small savings.
          </p>
          <p>
            New to Upwork specifically? Start with our{" "}
            <Link href="/blog/how-to-get-first-job-on-upwork" className="text-indigo-600 font-medium hover:underline">
              10-step roadmap to your first Upwork job
            </Link>{" "}
            and keep a folder of{" "}
            <Link href="/blog/upwork-proposal-templates" className="text-indigo-600 font-medium hover:underline">
              proven proposal templates
            </Link>{" "}
            so you&apos;re not starting each bid from a blank page.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            The Verdict: A Simple Decision Framework
          </h2>
          <p>Pick based on your situation, not on hype:</p>
          <ul>
            <li><strong>You&apos;re brand new with no portfolio</strong> → Start on Fiverr. A niche gig can get your first sale in days.</li>
            <li><strong>You have case studies and want $5k+ projects</strong> → Go all-in on Upwork.</li>
            <li><strong>You hate writing proposals</strong> → Lean Fiverr, or use ProposalAI to make Upwork proposals fast.</li>
            <li><strong>You want recurring monthly income</strong> → Upwork retainers beat Fiverr one-offs.</li>
            <li><strong>You want passive, catalog-style orders</strong> → Fiverr, once a gig ranks.</li>
          </ul>
          <p>
            Neither platform is &quot;better.&quot; One is better <em>for you</em>, based on your
            skills, your appetite for sales, and the kind of work you want.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Win on Upwork Without the Proposal Grind
          </h2>
          <p>
            If Upwork is part of your plan, the bottleneck is almost always proposal volume and
            quality. That&apos;s exactly what{" "}
            <Link href="/" className="text-indigo-600 font-medium hover:underline">
              ProposalAI
            </Link>{" "}
            fixes. Paste any Upwork job description and it generates 3 tailored proposal drafts in
            30 seconds — each with a client-specific hook, relevant proof points, and a pricing
            suggestion tied to real market data.
          </p>
          <p>
            Freelancers using ProposalAI report roughly a <strong>3x higher response rate</strong>{" "}
            on the proposals they send. Pair it with a{" "}
            <Link href="/pricing" className="text-indigo-600 font-medium hover:underline">
              plan that fits your bid volume
            </Link>{" "}
            and turn more of your Connects into paid work.
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
              href="/blog/upwork-proposal-mistakes"
              className="group block bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                Guides
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                10 Upwork Proposal Mistakes That Kill Your Win Rate (2025)
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                The 10 most common mistakes quietly destroying your Upwork win rate — and exactly how to fix each one.
              </p>
            </Link>
            <Link
              href="/blog/upwork-proposal-templates"
              className="group block bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                Templates
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                5 Upwork Proposal Templates That Actually Win Jobs (2025)
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Copy-paste proven proposal templates for web design, writing, development, and VA jobs.
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Turn more Upwork Connects into paid work
          </h2>
          <p className="mt-3 text-indigo-100 max-w-xl mx-auto">
            Paste a job description, get 3 optimized proposals in 30 seconds. Free to try — no credit card required.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" className="mt-6 bg-white text-indigo-700 hover:bg-indigo-50">
              Try It Free
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
