import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import Script from "next/script";

const slug = "upwork-proposal-templates";

const title = "5 Upwork Proposal Templates That Actually Win Jobs (2025)";
const description =
  "Copy-paste these proven Upwork proposal templates for web design, writing, development, VA, and marketing jobs. Learn exactly what top freelancers write to get hired.";
const keywords = [
  "upwork proposal template",
  "upwork cover letter sample",
  "best upwork proposals",
  "upwork proposal examples",
  "freelance proposal template",
];

export function generateMetadata(): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://proposalai.top/blog/${slug}`,
      siteName: "ProposalAI",
      publishedTime: "2025-07-02",
      authors: ["ProposalAI Team"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
            {title}
          </li>
        </ol>
      </nav>

      <article className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="mb-8">
          <span className="text-sm font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
            Templates
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            5 Upwork Proposal Templates That Actually Win Jobs (2025)
          </h1>
          <p className="mt-4 text-slate-500 text-sm">8 min read · Updated June 2025</p>
        </div>

        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600 prose-strong:text-slate-900">
          <p className="text-lg text-slate-700 leading-relaxed">
            Most Upwork proposals get rejected before the client finishes reading the first sentence. 
            Why? Because they&apos;re generic, self-centered, and sound like every other bid.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            In this guide, I&apos;m sharing <strong>5 proven proposal templates</strong> from actual 
            top-rated Upwork freelancers who consistently win $50-$150/hr jobs. Each one follows 
            a specific structure that works — and you can copy-paste them directly.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            What Makes a Winning Upwork Proposal?
          </h2>
          <p>
            Before the templates, let&apos;s cover the core principles. A great Upwork proposal:
          </p>
          <ul>
            <li><strong>Opens with a hook</strong> that proves you read the job post</li>
            <li><strong>Shows, don&apos;t tells</strong> — link to relevant work samples</li>
            <li><strong>Asks a specific question</strong> to encourage a reply</li>
            <li><strong>Keeps it short</strong> — 100-200 words max</li>
            <li><strong>Focuses on their problem</strong>, not your credentials</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 1: Web Design / Development
          </h2>
          <p><strong>Best for:</strong> Frontend devs, web designers, WordPress devs</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Subject: Quick question about your [project type]</p>
            <p className="text-slate-600">Hi [Client name],</p>
            <p className="text-slate-600 mt-3">
              I just read your post about building a [specific feature/page] and had one quick question — 
              do you already have a design mockup ready, or would you need help with the design as well?
            </p>
            <p className="text-slate-600 mt-3">
              I recently built a very similar project for [client/company] — you can check it out here: [link]. 
              It ended up [specific result: &quot;reducing load time by 60%&quot; / &quot;increasing conversions by 25%&quot;].
            </p>
            <p className="text-slate-600 mt-3">
              I&apos;d love to hop on a quick 15-minute call to walk through my approach. 
              Does tomorrow at 2pm your time work?
            </p>
            <p className="text-slate-600 mt-3">Best,<br />[Your name]</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 2: Content Writing / Copywriting
          </h2>
          <p><strong>Best for:</strong> Blog writers, copywriters, content strategists</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Subject: Your [topic] content — here&apos;s what I&apos;d do</p>
            <p className="text-slate-600">Hey [Client name],</p>
            <p className="text-slate-600 mt-3">
              Loved reading your post about creating [type of content]. I checked out your site 
              and noticed you&apos;re targeting [specific niche/audience] — smart move, that space 
              is growing fast.
            </p>
            <p className="text-slate-600 mt-3">
              Here&apos;s what I&apos;d focus on first:
            </p>
            <ul className="text-slate-600 mt-2 ml-4 list-disc">
              <li>Hook readers in the first 2 sentences with a specific pain point</li>
              <li>Add 2-3 data-backed claims to build authority</li>
              <li>End with a clear CTA that moves them to the next step</li>
            </ul>
            <p className="text-slate-600 mt-3">
              I wrote a similar piece for [client] that [result: &quot;ranks #1 for keyword X&quot; / 
              &quot;got 12k views in the first month&quot;]. You can read it here: [link].
            </p>
            <p className="text-slate-600 mt-3">
              Want me to send over 3 topic ideas tailored to your audience?
            </p>
            <p className="text-slate-600 mt-3">Cheers,<br />[Your name]</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 3: Virtual Assistant / Admin Support
          </h2>
          <p><strong>Best for:</strong> VAs, customer service, data entry, project managers</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Subject: I can take [specific task] off your plate this week</p>
            <p className="text-slate-600">Hi [Client name],</p>
            <p className="text-slate-600 mt-3">
              Saw your post about needing help with [specific task from their post — e.g., 
              &quot;managing your email inbox and scheduling&quot;]. I know how overwhelming that 
              can get when you&apos;re trying to focus on growing your business.
            </p>
            <p className="text-slate-600 mt-3">
              Here&apos;s how I&apos;d get started in the first week:
            </p>
            <ol className="text-slate-600 mt-2 ml-4 list-decimal">
              <li>Set up a system to categorize your inbox (urgent / can wait / auto-archive)</li>
              <li>Create a shared calendar with color-coded priority levels</li>
              <li>Document all your recurring tasks so nothing falls through the cracks</li>
            </ol>
            <p className="text-slate-600 mt-3">
              I currently support [number] entrepreneurs in similar roles, and I&apos;m happy to 
              share references. I&apos;m also available [X hours] per week and can start immediately.
            </p>
            <p className="text-slate-600 mt-3">
              Would you have 10 minutes today to chat about what you&apos;re looking for?
            </p>
            <p className="text-slate-600 mt-3">Thanks,<br />[Your name]</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 4: Digital Marketing / SEO
          </h2>
          <p><strong>Best for:</strong> SEO specialists, social media marketers, PPC experts</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Subject: Quick audit of your [site/account] — 3 opportunities</p>
            <p className="text-slate-600">Hi [Client name],</p>
            <p className="text-slate-600 mt-3">
              I took a quick look at [their website/Instagram/Google Ads account] and spotted 
              3 quick wins that could move the needle for you:
            </p>
            <ol className="text-slate-600 mt-2 ml-4 list-decimal">
              <li><strong>[Specific finding #1]</strong> — this alone could add [X]% more traffic</li>
              <li><strong>[Specific finding #2]</strong> — fixing this should improve conversions</li>
              <li><strong>[Specific finding #3]</strong> — easy to implement, high impact</li>
            </ol>
            <p className="text-slate-600 mt-3">
              I helped [previous client] with a similar setup and we saw [specific metric — 
              e.g., &quot;organic traffic up 147% in 3 months&quot;]. Case study here: [link].
            </p>
            <p className="text-slate-600 mt-3">
              I&apos;d love to walk you through these findings in more detail. Free call, no obligation. 
              Interested?
            </p>
            <p className="text-slate-600 mt-3">Best,<br />[Your name]</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 5: Video Editing / Design
          </h2>
          <p><strong>Best for:</strong> Video editors, graphic designers, motion designers</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Subject: Love your content — here&apos;s a thought</p>
            <p className="text-slate-600">Hey [Client name],</p>
            <p className="text-slate-600 mt-3">
              I&apos;ve been following your [YouTube channel/Instagram/brand] for a while and really 
              like what you&apos;re doing with [specific thing from their content]. The [specific video/post] 
              was especially good — [genuine compliment].
            </p>
            <p className="text-slate-600 mt-3">
              I noticed you&apos;re looking for a [video editor/designer]. I&apos;ve worked with 
              [similar creator/brand] on [type of project], and here&apos;s what we were able to achieve: 
              [result — e.g., &quot;retention up 20%&quot; / &quot;doubled posting frequency&quot;].
            </p>
            <p className="text-slate-600 mt-3">
              Here&apos;s my reel/portfolio: [link]
            </p>
            <p className="text-slate-600 mt-3">
              Quick question — what&apos;s the biggest frustration you&apos;ve had with previous 
              editors/designers? I want to make sure I&apos;d be a good fit before we go further.
            </p>
            <p className="text-slate-600 mt-3">Looking forward to hearing from you!<br />[Your name]</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            5 Pro Tips to Make These Templates Work Better
          </h2>
          <ol>
            <li><strong>Personalize the first line.</strong> Mention something specific from their job post or profile. Generic openings get ignored.</li>
            <li><strong>Lead with results, not skills.</strong> &quot;Increased conversions by 30%&quot; beats &quot;I&apos;m good at marketing.&quot;</li>
            <li><strong>Keep it under 200 words.</strong> Clients skim. Short proposals get read more.</li>
            <li><strong>Always end with a question.</strong> Questions get replies. Statements don&apos;t.</li>
            <li><strong>Don&apos;t lowball your rate.</strong> Higher bids can actually win more if your proposal shows value.</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Want Faster Results?
          </h2>
          <p>
            If you&apos;re sending 10+ proposals a week and want to save hours of writing, 
            check out{" "}
            <Link href="/" className="text-indigo-600 font-medium hover:underline">
              ProposalAI
            </Link>
            . Paste any Upwork job description, and it generates 3 optimized proposal versions 
            in 30 seconds — with client analysis, keyword optimization, and pricing suggestions.
          </p>
          <p>
            <Link href="/auth/signup" className="text-indigo-600 font-medium hover:underline">
              Try it free →
            </Link>
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Keep Reading</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/blog/upwork-cover-letter-examples"
              className="group block bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                Examples
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                Upwork Cover Letter Examples: 7 Samples That Get Responses
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Real cover letters from top-rated Upwork freelancers. Learn the exact structure, hooks, and techniques that make clients respond.
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
                item: "https://proposalai.top/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://proposalai.top/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: title,
                item: `https://proposalai.top/blog/${slug}`,
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
            headline: title,
            description: description,
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
            datePublished: "2025-07-02",
            dateModified: "2025-07-02",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://proposalai.top/blog/${slug}`,
            },
          }),
        }}
      />

      <Footer />
    </div>
  );
}
