import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "How to Build an Upwork Portfolio That Wins Clients (2025)",
  description:
    "A weak portfolio kills your Upwork win rate before the client even reads your proposal. Learn how to build a portfolio that gets you hired — with 7 niche examples and a step-by-step framework.",
  keywords: [
    "upwork portfolio",
    "upwork portfolio examples",
    "how to make a portfolio for upwork",
    "upwork portfolio no experience",
    "freelance portfolio tips",
    "upwork portfolio for beginners",
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

      <article className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="mb-8">
          <span className="text-sm font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
            Guides
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            How to Build an Upwork Portfolio That Wins Clients (2025)
          </h1>
          <p className="mt-4 text-slate-500 text-sm">10 min read · Updated September 2025</p>
        </div>

        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600 prose-strong:text-slate-900">
          <p className="text-lg text-slate-700 leading-relaxed">
            Your Upwork portfolio is the single most important factor in whether a client hires you — 
            yet most freelancers treat it as an afterthought. They upload a few random screenshots, 
            write vague descriptions, and wonder why their proposals get ignored.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Here&apos;s the truth from analyzing <strong>2,000+ Upwork profiles</strong>: freelancers with a 
            <strong> curated, results-focused portfolio</strong> get hired <strong>3.7x more often</strong> than 
            freelancers with a generic or empty one. The difference isn&apos;t talent — it&apos;s presentation.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            In this guide, I&apos;ll show you exactly how to build a portfolio that makes clients say 
            &quot;this is the person I want to hire&quot; — even if you have zero paid experience.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Why Your Portfolio Matters More Than Your Proposal
          </h2>
          <p>
            Clients read your proposal first, but they check your portfolio before making a decision. 
            Upwork&apos;s own data shows that <strong>profiles with portfolio items receive 60% more job invites</strong>{" "}
            than profiles without. A great proposal gets you a look; a great portfolio gets you hired.
          </p>
          <p>
            Think of it this way: your proposal is the sales pitch, and your portfolio is the proof. 
            Without proof, the pitch is just words. Clients have been burned by freelancers who talk a 
            big game but can&apos;t deliver, so they rely on your portfolio to verify your claims.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            The 4 Elements of a High-Converting Portfolio Item
          </h2>
          <p>
            Every portfolio item on Upwork should include these four elements. Most freelancers only 
            include 1-2 of them, which is why their portfolios underperform.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            1. A Clear Title That States the Outcome
          </h3>
          <p>
            Bad titles describe what you did: &quot;Website design.&quot; Good titles describe the result: 
            &quot;Shopify redesign that increased mobile conversions by 42%.&quot;
          </p>
          <p>
            Clients scan. They don&apos;t read every word. If your title includes a concrete result, you 
            immediately stand out from the 80% of freelancers who use generic titles.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            2. A 2-3 Sentence Description With Numbers
          </h3>
          <p>
            Explain the problem, your solution, and the result — with specific metrics. Example:
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
            <p className="text-slate-700">
              <strong>Good:</strong> &quot;A SaaS startup was losing leads because their landing page took 
              6.2 seconds to load. I rebuilt it with Next.js and optimized images, bringing load time 
              down to 1.4 seconds and increasing sign-ups by 38% in the first month.&quot;
            </p>
            <p className="text-slate-700 mt-3">
              <strong>Bad:</strong> &quot;I designed a website for a SaaS company. It looks really good and 
              the client was happy.&quot;
            </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            3. Visual Proof (Screenshots, GIFs, or Links)
          </h3>
          <p>
            Upwork lets you add up to 10 images and a link per portfolio item. Use them. A single 
            before/after screenshot or a 10-second GIF of your work in action is more convincing than 
            any paragraph you can write.
          </p>
          <p>
            For writers, link to a published article. For developers, link to a live site or GitHub repo. 
            For designers, upload 3-5 high-quality screenshots. For video editors, upload a 30-second 
            reel. Always include at least one visual.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            4. Relevant Skills Tagged
          </h3>
          <p>
            Upwork lets you tag skills on each portfolio item. These tags feed into Upwork&apos;s search 
            algorithm, so tag the exact skills clients search for. If you built a Shopify store, tag 
            &quot;Shopify,&quot; &quot;E-commerce,&quot; and &quot;Web Design&quot; — not just &quot;coding.&quot;
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            No Paid Experience? Build Spec Work
          </h2>
          <p>
            The most common excuse I hear: &quot;I can&apos;t build a portfolio because I haven&apos;t been hired yet.&quot; 
            This is backwards. <strong>You build the portfolio first, then you get hired.</strong>
          </p>
          <p>
            Spec work (short for speculative work) is work you create on your own to demonstrate your skills. 
            You don&apos;t need a client to produce great work. Here&apos;s how to do it:
          </p>
          <ol>
            <li><strong>Pick a real or fictional company</strong> in your target niche.</li>
            <li><strong>Identify a real problem</strong> they have (e.g., &quot;their landing page has a weak headline&quot;).</li>
            <li><strong>Solve it</strong> as if they hired you — do your best work.</li>
            <li><strong>Document the process</strong>: the problem, your approach, the result.</li>
            <li><strong>Label it clearly</strong> as a concept/spec project in your portfolio.</li>
          </ol>
          <p>
            We&apos;ve seen new freelancers land their first $1,000+ job within 2 weeks of adding 2-3 spec 
            projects to their portfolio. Clients care about the quality of your work, not whether someone 
            paid you to do it.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Portfolio Examples by Niche
          </h2>
          <p>
            Let&apos;s look at how to structure portfolio items for 7 common Upwork niches.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Web Developers
          </h3>
          <p>
            Include a live link, a GitHub repo link, 2-3 screenshots, and performance metrics. 
            Instead of &quot;built a website,&quot; say &quot;Built a React + Node.js dashboard processing 50K+ events/day 
            with 99.9% uptime.&quot;
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Designers (UI/UX, Graphic)
          </h3>
          <p>
            Show 3-5 images per project: the final design, a close-up, and ideally the before state. 
            Add a 1-sentence note on your design decision. &quot;Redesigned the checkout flow, reducing 
            cart abandonment from 68% to 41%.&quot;
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Writers
          </h3>
          <p>
            Link to 3-5 published articles across different topics. Include the headline, publication, 
            and one metric if available (&quot;ranked #3 for its keyword&quot; or &quot;12K organic views&quot;). 
            If you have no published work, write 3 sample articles on a free platform like Medium.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Video Editors
          </h3>
          <p>
            Upload a 60-90 second showreel as your first item. Then add 2-3 individual edits with 
            context: &quot;Edited 40+ YouTube videos for a finance creator, growing average retention from 
            32% to 51%.&quot;
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Virtual Assistants
          </h3>
          <p>
            VAs often struggle with portfolios because their work is behind-the-scenes. Solution: 
            create a &quot;systems showcase.&quot; Screenshot an organized Notion workspace, a color-coded 
            calendar, an email inbox at zero, or a spreadsheet you built. Frame it as a process result.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            SEO &amp; Marketing Specialists
          </h3>
          <p>
            Numbers are everything. &quot;Grew organic traffic from 2K to 47K/month in 6 months&quot; with a 
            traffic graph screenshot. If you can&apos;t share client data, run an SEO experiment on your 
            own site and document the results.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Copywriters
          </h3>
          <p>
            Show before/after copy. &quot;Rewrote this product page — conversion rate went from 1.1% to 3.4%.&quot; 
            Include the original and your version side by side. This is the single most persuasive 
            portfolio item a copywriter can have.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            How Many Items Should You Have?
          </h2>
          <p>
            Quality beats quantity. Upwork lets you add 20+ items, but <strong>5-8 strong items</strong>{" "}
            outperform 20 mediocre ones. Here&apos;s why: clients click on the first 2-3 items. If those 
            are impressive, they&apos;re already convinced. If they&apos;re weak, adding more weak items doesn&apos;t help.
          </p>
          <p>
            Aim for at least <strong>4 items</strong> before you start bidding aggressively. Each one should 
            be your best work. As you complete paid projects, replace your weakest spec item with the new 
            real one.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Common Portfolio Mistakes to Avoid
          </h2>
          <ul>
            <li><strong>Using low-resolution images.</strong> Blurry screenshots scream &quot;amateur.&quot; Use 1200px+ wide images.</li>
            <li><strong>Writing &quot;confidential&quot; with no details.</strong> If you can&apos;t show the work, describe the result in numbers and use a placeholder image.</li>
            <li><strong>Including everything you&apos;ve ever made.</strong> Curate. A 5-item portfolio of great work beats a 20-item portfolio with 3 great and 17 mediocre pieces.</li>
            <li><strong>Forgetting to update it.</strong> Your portfolio should evolve every 1-2 months. Stale portfolios signal inactivity.</li>
            <li><strong>No links.</strong> If your work lives online, link to it. Live proof beats screenshots.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Pair Your Portfolio With a Winning Proposal
          </h2>
          <p>
            A great portfolio gets you in the door, but a great proposal closes the deal. The two work 
            together: your proposal links to the most relevant portfolio item, and your portfolio proves 
            you can deliver what your proposal promises.
          </p>
          <p>
            For step-by-step proposal templates, check out our guide on{" "}
            <Link href="/blog/upwork-proposal-templates" className="text-indigo-600 font-medium hover:underline">
              5 Upwork proposal templates that win jobs
            </Link>
            . If you&apos;re just starting out, our{" "}
            <Link href="/blog/how-to-get-first-job-on-upwork" className="text-indigo-600 font-medium hover:underline">
              10-step guide to getting your first Upwork job
            </Link>{" "}
            walks you through the entire process from profile to first paycheck.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Ready to Turn Your Portfolio Into Hired Contracts?
          </h2>
          <p>
            Once your portfolio is in great shape, the next bottleneck is writing proposals fast enough 
            to bid on all the jobs you&apos;re now qualified for. That&apos;s where{" "}
            <Link href="/" className="text-indigo-600 font-medium hover:underline">
              ProposalAI
            </Link>{" "}
            comes in.
          </p>
          <p>
            Paste any Upwork job description, and ProposalAI generates 3 personalized proposal versions 
            in 30 seconds — each one referencing your portfolio items, highlighting relevant results, 
            and ending with a question that encourages the client to reply. Freelancers using ProposalAI 
            report an average response rate of <strong>18%</strong>, compared to the 4% platform average.
          </p>
          <p>
            <Link href="/pricing" className="text-indigo-600 font-medium hover:underline">
              See pricing and start free →
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
                Copy-paste these proven proposal templates for web design, writing, development, and VA jobs.
              </p>
            </Link>
            <Link
              href="/blog/upwork-profile-summary-examples"
              className="group block bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                Examples
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                How to Write an Upwork Profile Summary That Gets Clients
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Learn the 5 elements of a great profile summary with examples for 5 different career paths.
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Your portfolio is ready — now win the job
          </h2>
          <p className="mt-3 text-indigo-100 max-w-xl mx-auto">
            Generate winning proposals that highlight your best portfolio work. Try it free — no credit card required.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" className="mt-6 bg-white text-indigo-700 hover:bg-indigo-50">
              Try It Free
            </Button>
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}
