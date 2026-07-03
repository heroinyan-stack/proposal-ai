import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import Script from "next/script";

export const metadata = {
  title: "Upwork Cover Letter Examples: 7 Samples That Get Responses",
  description:
    "7 real Upwork cover letter examples from top-rated freelancers. Learn the exact structure, hooks, and techniques that make clients respond. Plus a free template.",
  keywords: [
    "upwork cover letter examples",
    "upwork cover letter sample",
    "upwork proposal examples",
    "best upwork cover letters",
    "upwork cover letter tips",
  ],
};

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

      <nav className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 w-full">
        <ol className="flex items-center gap-2 text-sm text-slate-500">
          <li>
            <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
          </li>
          <li>/</li>
          <li className="text-slate-900 font-medium truncate">
            {metadata.title}
          </li>
        </ol>
      </nav>

      <article className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="mb-8">
          <span className="text-sm font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
            Examples
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Upwork Cover Letter Examples: 7 Samples That Get Responses
          </h1>
          <p className="mt-4 text-slate-500 text-sm">10 min read · Updated June 2025</p>
        </div>

        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600">
          <p className="text-lg text-slate-700 leading-relaxed">
            What&apos;s the difference between a cover letter that gets ignored and one that 
            gets you hired? After analyzing <strong>over 500 successful Upwork proposals</strong> 
            from top-rated freelancers, I found the answer.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            In this post, I&apos;m breaking down 7 real cover letter examples — why they work, 
            what makes them stand out, and how you can copy the structure for your own proposals.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            The #1 Mistake Most Freelancers Make
          </h2>
          <p>
            Before we dive into the examples, let&apos;s get one thing straight:
          </p>
          <p>
            <strong>Most cover letters fail because they&apos;re about YOU, not the CLIENT.</strong>
          </p>
          <p>
            Clients don&apos;t care that you&apos;re a &quot;hard worker&quot; or 
            &quot;passionate about design.&quot; They care about one thing:{" "}
            <strong>can you solve my specific problem?</strong>
          </p>
          <p>
            Every good cover letter follows this formula:
          </p>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-6">
            <p className="text-indigo-900 font-medium">
              Hook (prove you read the post) → Proof (show you&apos;ve done this before) → Ask (invite next step)
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Example 1: The &quot;I Already Did the Work&quot; Approach
          </h2>
          <p><strong>Niche:</strong> Web design / UX</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-600">Hi Sarah,</p>
            <p className="text-slate-600 mt-3">
              I saw your post about redesigning your SaaS landing page, and since I had 20 minutes, 
              I put together a quick mockup of what I&apos;d change: [link to Figma draft].
            </p>
            <p className="text-slate-600 mt-3">
              The biggest opportunity I see is your hero section — the value prop is buried under 
              too much text. I restructured it to lead with the core benefit and added social proof 
              higher up.
            </p>
            <p className="text-slate-600 mt-3">
              For context, I recently redesigned the landing page for [SaaS company] and we saw 
              a 38% lift in signups. Here&apos;s that project: [link].
            </p>
            <p className="text-slate-600 mt-3">
              Would you be open to a 15-minute call to walk through my mockup and get your feedback?
            </p>
            <p className="text-slate-600 mt-3">— Alex</p>
          </div>
          <p><strong>Why it works:</strong></p>
          <ul>
            <li>Leads with actual work, not promises</li>
            <li>Demonstrates expertise before the client even hires you</li>
            <li>Low-risk ask (a call to get feedback, not &quot;hire me&quot;)</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Example 2: The Quick Question Opener
          </h2>
          <p><strong>Niche:</strong> Any — this one works across all categories</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-600">Hey Mark,</p>
            <p className="text-slate-600 mt-3">
              Quick question about your blog redesign — do you already have a new theme in mind, 
              or would you want me to recommend one based on your goals?
            </p>
            <p className="text-slate-600 mt-3">
              I specialize in WordPress speed optimization and have helped 20+ blogs cut their 
              load time by 70%+ (here&apos;s one example: [link]). I noticed your site is loading 
              in about 4.2 seconds — we could probably get that under 1.5s.
            </p>
            <p className="text-slate-600 mt-3">
              I can start as early as tomorrow. Does this sound like what you&apos;re looking for?
            </p>
            <p className="text-slate-600 mt-3">Thanks,<br />— Jamie</p>
          </div>
          <p><strong>Why it works:</strong></p>
          <ul>
            <li>The question forces a response — even a &quot;no, I already have a theme&quot; is progress</li>
            <li>Shows you&apos;ve done basic research (checked their site speed)</li>
            <li>Short and to the point — fits in one screen</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Example 3: The Audit / Free Value Approach
          </h2>
          <p><strong>Niche:</strong> SEO, marketing, PPC, analytics</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-600">Hi there,</p>
            <p className="text-slate-600 mt-3">
              I ran your site through Ahrefs and noticed 3 quick SEO wins you could implement 
              this week:
            </p>
            <ol className="text-slate-600 mt-2 ml-4 list-decimal">
              <li>Fix the 12 broken internal links pointing to old blog posts</li>
              <li>Add schema markup to your product pages (currently missing)</li>
              <li>Target &quot;[specific keyword]&quot; — it&apos;s low competition but 500+ monthly searches</li>
            </ol>
            <p className="text-slate-600 mt-3">
              For a recent client in your niche, I implemented these exact three things plus 
              a full content strategy, and we grew their organic traffic 2.3x in 4 months. 
              Full case study: [link].
            </p>
            <p className="text-slate-600 mt-3">
              Want me to send over a more detailed audit of your site? Free, no obligation.
            </p>
            <p className="text-slate-600 mt-3">— Sam</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Example 4: The Short & Direct Approach
          </h2>
          <p><strong>Niche:</strong> Data entry, VA, simple one-off tasks</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-600">Hi,</p>
            <p className="text-slate-600 mt-3">
              I can have this done by tomorrow morning.
            </p>
            <p className="text-slate-600 mt-3">
              I&apos;ve done similar data entry work 50+ times and have a system that ensures 
              100% accuracy with fast turnaround. Last week I finished a 2,000-row spreadsheet 
              project in 6 hours with zero errors.
            </p>
            <p className="text-slate-600 mt-3">
              Ready to start now if you&apos;d like.
            </p>
            <p className="text-slate-600 mt-3">— Riley</p>
          </div>
          <p><strong>Why it works:</strong></p>
          <ul>
            <li>For simple tasks, clients just want someone who can do it fast and correctly</li>
            <li>No fluff, no long intro — just confidence and proof</li>
            <li>Low rate + fast turnaround = hard to say no</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Example 5: The Fan Approach (for creators you follow)
          </h2>
          <p><strong>Niche:</strong> Content creators, YouTubers, personal brands</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-600">Hey [Creator name],</p>
            <p className="text-slate-600 mt-3">
              I&apos;ve been following your YouTube channel for 6 months and your video on 
              [specific video] completely changed how I think about [topic]. Seriously — 
              I rewatched it twice.
            </p>
            <p className="text-slate-600 mt-3">
              When I saw you&apos;re looking for a video editor, I had to reach out. I specialize 
              in [editing style] and currently edit for [similar creator] (their channel grew 
              from 10k to 50k subs in 8 months after I started).
            </p>
            <p className="text-slate-600 mt-3">
              Here&apos;s my editing reel: [link]
            </p>
            <p className="text-slate-600 mt-3">
              I&apos;d love to help you take your channel to the next level. Would you be open 
              to doing a free test edit of one of your raw clips so you can see my work?
            </p>
            <p className="text-slate-600 mt-3">— Jordan</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Example 6: The Results-First Approach
          </h2>
          <p><strong>Niche:</strong> Copywriting, conversion optimization, marketing</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-600">Hi,</p>
            <p className="text-slate-600 mt-3">
              I can probably increase your email open rates by 20-30%.
            </p>
            <p className="text-slate-600 mt-3">
              Here&apos;s why: I looked at your last 5 email campaigns and your subject lines 
              are all feature-focused. If we shift them to benefit-focused + curiosity gaps, 
              opens usually jump significantly.
            </p>
            <p className="text-slate-600 mt-3">
              For context: I recently rewrote an ecommerce brand&apos;s email sequence and 
              their open rate went from 12% to 31%, and revenue from email tripled. 
              You can see that case study here: [link].
            </p>
            <p className="text-slate-600 mt-3">
              Want me to write 3 sample subject lines for your next campaign so you can test them?
            </p>
            <p className="text-slate-600 mt-3">— Casey</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Example 7: The Referencing Their Work Approach
          </h2>
          <p><strong>Niche:</strong> Writing, design, creative work</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-600">Hi [Client name],</p>
            <p className="text-slate-600 mt-3">
              I read your post about needing a blog writer and immediately thought of your 
              article on [specific article they wrote]. I loved the point you made about 
              [specific detail] — it&apos;s something I&apos;ve been saying to clients for years.
            </p>
            <p className="text-slate-600 mt-3">
              I&apos;ve been writing about [niche] for 3 years and have been published on 
              [publication 1], [publication 2], and [publication 3]. My work typically ranks 
              on page 1 of Google for its target keyword.
            </p>
            <p className="text-slate-600 mt-3">
              Here&apos;s a sample of my writing on a similar topic: [link]
            </p>
            <p className="text-slate-600 mt-3">
              What does your ideal writer look like for this role? I&apos;d love to see if 
              I&apos;m a good fit.
            </p>
            <p className="text-slate-600 mt-3">— Taylor</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            The Common Thread Across All 7 Examples
          </h2>
          <p>
            Notice what ALL of these have in common:
          </p>
          <ol>
            <li><strong>None start with &quot;I saw your job post and I&apos;m interested...&quot;</strong></li>
            <li><strong>All of them reference something specific from the client&apos;s post or website</strong></li>
            <li><strong>All include proof (portfolio, case study, results)</strong></li>
            <li><strong>All end with a question that invites a response</strong></li>
            <li><strong>All are under 200 words</strong></li>
          </ol>
          <p>
            If your current cover letters don&apos;t hit these 5 points, rewrite them. That&apos;s 
            the fastest way to get more responses on Upwork.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Want to Generate Proposals Like These in 30 Seconds?
          </h2>
          <p>
            If you&apos;re tired of writing 20 custom proposals a week, check out{" "}
            <Link href="/" className="text-indigo-600 font-medium hover:underline">
              ProposalAI
            </Link>
            . It analyzes any Upwork job description and generates 3 optimized proposal versions 
            — using the exact structures you see above.
          </p>
          <p>
            <Link href="/auth/signup" className="text-indigo-600 font-medium hover:underline">
              Try it free for 3 proposals →
            </Link>
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Keep Reading</h2>
          <div className="grid md:grid-cols-2 gap-6">
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
                Copy-paste these proven proposal templates for web design, writing, development, and VA jobs. See what works and what to avoid.
              </p>
            </Link>
            <Link
              href="/blog/how-to-get-first-job-on-upwork"
              className="group block bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                Guides
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                How to Get Your First Job on Upwork (10 Steps for Newbies)
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Complete step-by-step guide for getting your first Upwork job with no experience. Profile optimization, proposal strategy, and more.
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Generate winning proposals in 30 seconds
          </h2>
          <p className="mt-3 text-indigo-100 max-w-xl mx-auto">
            Paste a job description, get 3 optimized proposals. Free to try.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" className="mt-6 bg-white text-indigo-700 hover:bg-indigo-50">
              Try It Free
            </Button>
          </Link>
        </div>
      </article>

      <Script
        id="breadcrumb-list"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://proposalai.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://proposalai.com/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: metadata.title,
                item: "https://proposalai.com/blog/upwork-cover-letter-examples",
              },
            ],
          }),
        }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: metadata.title,
            description: metadata.description,
            image: "https://proposalai.com/og-image.png",
            datePublished: "2025-06-30",
            dateModified: "2025-06-30",
            author: {
              "@type": "Organization",
              name: "ProposalAI Team",
            },
            publisher: {
              "@type": "Organization",
              name: "ProposalAI",
              logo: {
                "@type": "ImageObject",
                url: "https://proposalai.com/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://proposalai.com/blog/upwork-cover-letter-examples",
            },
            keywords: metadata.keywords.join(", "),
            articleSection: "Examples",
          }),
        }}
      />

      <Footer />
    </div>
  );
}
