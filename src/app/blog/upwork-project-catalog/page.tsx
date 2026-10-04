import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Upwork Project Catalog: How to Sell Pre-Packaged Services on Autopilot (2026)",
  description:
    "A complete 2026 guide to the Upwork Project Catalog — what it is, how to create a listing that sells, 3-tier pricing with real examples, and how to combine it with proposals for a full pipeline.",
  keywords: [
    "upwork project catalog",
    "upwork project catalog tips",
    "how to sell on upwork project catalog",
    "upwork pre-packaged services",
    "upwork catalog pricing",
    "upwork passive income freelance",
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
            Upwork Project Catalog: How to Sell Pre-Packaged Services on Autopilot (2026)
          </h1>
          <p className="mt-4 text-slate-500 text-sm">12 min read · Updated October 2026</p>
        </div>

        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600 prose-strong:text-slate-900">
          <p className="text-lg text-slate-700 leading-relaxed">
            Sending proposals is exhausting. You write a custom cover letter, wait 3 to 5 days, and
            hope the client replies. The Upwork Project Catalog flips the model: instead of chasing
            jobs, you list a pre-packaged service and clients come to you.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            In 2026, the freelancers earning the steadiest income aren&apos;t the ones sending the
            most proposals — they&apos;re the ones with a Project Catalog listing that ranks in
            Upwork&apos;s search and converts browsers into buyers on autopilot. This guide breaks
            down what the Project Catalog is, how to build a listing that sells, and how to combine
            it with proposals for a full client pipeline.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            What Is the Upwork Project Catalog?
          </h2>
          <p>
            The Project Catalog is Upwork&apos;s marketplace for fixed-scope, fixed-price services.
            Instead of a client posting a job and freelancers bidding, you publish a project (think
            &quot;I will design a 5-page Webflow landing page in 5 days for $450&quot;) and clients
            buy it directly — like a product listing.
          </p>
          <p>
            Each listing lives on your profile, shows up in Upwork&apos;s service search, and can
            include up to <strong>3 pricing tiers</strong>, add-ons, a gallery, and a video. You
            set the scope, timeline, and price. Clients can either buy instantly or send a
            customization request.
          </p>
          <p>
            The big difference from proposals: there&apos;s no competition on a single job post.
            Your listing competes in search, but once a client lands on your page, the decision is
            mostly yes or no — not &quot;which of these 30 freelancers should I pick.&quot;
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Project Catalog vs. Proposals — Which One Wins?
          </h2>
          <p>
            It&apos;s not either-or. The two channels serve different parts of your pipeline:
          </p>
          <ul>
            <li>
              <strong>Proposals</strong> are for active buyers — clients who posted a job this week
              and are comparing freelancers. High intent, high competition, custom scope.
            </li>
            <li>
              <strong>Project Catalog</strong> is for passive buyers — clients browsing for a
              packaged solution with no specific job post. Lower competition, fixed scope, faster
              purchase.
            </li>
          </ul>
          <p>
            Data from active top-rated sellers in 2026 shows the typical split: roughly{" "}
            <strong>60% of revenue from proposals</strong> (higher-ticket, custom work) and{" "}
            <strong>40% from Project Catalog</strong> (smaller, repeatable packages). The Catalog
            piece is what fills the calendar when proposals dry up — and the listings keep working
            for you while you sleep.
          </p>
          <p>
            If you&apos;re still building your proposal game, start with our{" "}
            <Link href="/blog/upwork-proposal-templates" className="text-indigo-600 font-medium hover:underline">
              proven Upwork proposal templates
            </Link>{" "}
            and our breakdown of the{" "}
            <Link href="/blog/upwork-proposal-mistakes" className="text-indigo-600 font-medium hover:underline">
              proposal mistakes killing your win rate
            </Link>
            . Then layer a Catalog listing on top to capture the passive buyers you&apos;re
            currently missing.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            How to Create a Project Catalog Listing (6-Step Walkthrough)
          </h2>
          <p>
            Upwork splits the creation flow into six steps. Get any of them wrong and your listing
            either gets rejected or sits on page 14 of search. Here&apos;s how to nail each one.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Step 1: Project Overview
          </h3>
          <p>
            You set a title (max 60 characters), category, sub-category, search tags, and an
            &quot;expertise level&quot; (Intermediate or Expert). Three rules here:
          </p>
          <ol>
            <li><strong>Lead with the outcome, not the deliverable.</strong> &quot;I will design a landing page that converts at 8%+&quot; beats &quot;I will design a Webflow page.&quot;</li>
            <li><strong>Use all 10 search tags.</strong> Tags are how Upwork matches you to searches. Mix broad (&quot;landing page&quot;) with specific (&quot;webflow cms&quot;) tags.</li>
            <li><strong>Avoid the word &quot;Other&quot; in any category field.</strong> Listings filed under &quot;Other&quot; rank worse and get rejected more often.</li>
          </ol>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Step 2: Pricing and Scope (the 3-tier trick)
          </h3>
          <p>
            This is where most freelancers leave 40% of revenue on the table. You can set up to 3
            tiers (Starter / Standard / Advanced — or whatever you name them), plus add-ons.
            Always use all 3 tiers, even if you&apos;d happily do the smallest one.
          </p>
          <p>The tier structure exploits a well-documented pricing bias:</p>
          <ul>
            <li><strong>Starter</strong> anchors the price low and gets clients in the door.</li>
            <li><strong>Standard</strong> is what most clients actually buy — make this the most attractive value-per-dollar.</li>
            <li><strong>Advanced</strong> sets the ceiling and makes Standard look reasonable.</li>
          </ul>
          <p>
            Roughly <strong>15% of buyers pick Starter, 70% pick Standard, 15% pick Advanced</strong>
            across well-tuned Catalog listings. The Advanced tier exists to make Standard look like
            the obvious choice.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Step 3: Project Gallery
          </h3>
          <p>
            Upload 3 to 6 images and one short video (under 60 seconds). Listings with a video
            convert up to <strong>2x better</strong> than image-only listings — clients want to
            hear how you think. Keep the video simple: state the problem you solve, show one
            before/after, and end with &quot;here&apos;s what to expect in our kickoff call.&quot;
          </p>
          <p>
            Don&apos;t have polished work to show yet? Our walkthrough on{" "}
            <Link href="/blog/upwork-portfolio-tips" className="text-indigo-600 font-medium hover:underline">
              building an Upwork portfolio that wins clients
            </Link>{" "}
            covers how to manufacture credible samples even with zero client history.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Step 4: Client Requirements
          </h3>
          <p>
            This step is a questionnaire clients fill out at checkout. It&apos;s your scope-protection
            insurance. Ask for the exact things you need to start — brand assets, login access,
            existing copy, reference sites, deadline constraints. Keep it to{" "}
            <strong>5 to 8 questions</strong>. Too many and buyers abandon; too few and you spend
            the kickoff call chasing basics.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Step 5: Project Description
          </h3>
          <p>Write this like a sales page, not a brief. Structure it:</p>
          <ol>
            <li><strong>One-line hook</strong> with the outcome.</li>
            <li><strong>What&apos;s included</strong> as a bulleted checklist (match the tier scope exactly).</li>
            <li><strong>Why you</strong> — 2 lines max, one specific result.</li>
            <li><strong>Process</strong> — 3 to 4 numbered steps from kickoff to delivery.</li>
            <li><strong>FAQ</strong> — answer the top 3 objections (&quot;Can you work with my existing brand?&quot;).</li>
          </ol>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Step 6: Finalize and Submit
          </h3>
          <p>
            Upwork reviews every listing — typically approved in <strong>1 to 3 business days</strong>.
            Common rejection reasons: scope too vague, title stuffed with keywords, deliverables that
            read like hourly work, or add-ons priced below your tier price. Read Upwork&apos;s
            guidelines once before submitting and your first listing sails through.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            7 Conversion Tactics That Make Clients Click &quot;Buy&quot;
          </h2>
          <ol>
            <li>
              <strong>Put the outcome in the title.</strong> &quot;I will write a 1,500-word blog post that ranks&quot; beats &quot;I will write a blog post.&quot;
            </li>
            <li>
              <strong>Price the Standard tier at your real target rate.</strong> Don&apos;t discount it to attract buyers — that&apos;s what Starter is for.
            </li>
            <li>
              <strong>Include a 60-second video.</strong> Listings with a video convert up to 2x better. Loom is fine — phone-camera quality is fine — bad audio is not.
            </li>
            <li>
              <strong>Offer 2 to 3 add-ons.</strong> Add-ons lift average order value by 25 to 35%. Common ones: rush delivery, extra revisions, source files.
            </li>
            <li>
              <strong>Set a realistic delivery time.</strong> Promising 24-hour delivery to win the listing then missing it tanks your Job Success Score. Add a 25% buffer.
            </li>
            <li>
              <strong>Refresh the gallery every 60 days.</strong> Stale images signal an inactive seller. Upwork&apos;s search also rewards recent activity.
            </li>
            <li>
              <strong>Use the &quot;Available Now&quot; badge strategically.</strong> Turning it on during your working hours bumps you in search — but only keep it on when you can actually respond within 30 minutes.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            How to Price Your 3 Tiers (with Real Examples)
          </h2>
          <p>
            The 3-tier structure works in every niche. Here are three real-world pricing patterns
            top-rated sellers use in 2026:
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Example A: Landing page designer</p>
            <ul className="text-slate-600">
              <li><strong>Starter — $350:</strong> 1-page Figma design, no dev, 2 revisions</li>
              <li><strong>Standard — $850:</strong> 3-page Figma + responsive, 3 revisions</li>
              <li><strong>Advanced — $1,800:</strong> Full Webflow build, CMS, 5 revisions, 30-day support</li>
            </ul>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Example B: SEO content writer</p>
            <ul className="text-slate-600">
              <li><strong>Starter — $120:</strong> 1 SEO article, 800 words, 1 keyword</li>
              <li><strong>Standard — $320:</strong> 3 articles, 1,200 words each, keyword + internal links</li>
              <li><strong>Advanced — $750:</strong> 6 articles + content strategy doc + 30-min audit call</li>
            </ul>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Example C: Shopify store setup</p>
            <ul className="text-slate-600">
              <li><strong>Starter — $250:</strong> Theme install + 10 product uploads</li>
              <li><strong>Standard — $650:</strong> Theme customization + 30 products + 2 apps</li>
              <li><strong>Advanced — $1,500:</strong> Custom theme + 100 products + apps + speed optimization</li>
            </ul>
          </div>
          <p>
            Notice the pattern: Starter is roughly 30 to 40% of Standard, and Advanced is roughly 2x
            Standard. That ratio nudges most buyers into the middle. For a fuller framework on
            pricing your services profitably, see our guide to{" "}
            <Link href="/blog/freelance-pricing-strategies" className="text-indigo-600 font-medium hover:underline">
              freelance pricing strategies
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Common Project Catalog Mistakes That Kill Sales
          </h2>
          <ul>
            <li>
              <strong>One tier only.</strong> Without a 3-tier structure you remove the anchor that makes buyers comfortable. Single-tier listings convert 40 to 60% worse.
            </li>
            <li>
              <strong>Keyword-stuffed titles.</strong> &quot;I will design logo branding website flyer business card&quot; reads as spammy and gets flagged. Stick to one clear outcome per listing.
            </li>
            <li>
              <strong>Underpricing to &quot;get reviews.&quot;</strong> Cheap listings attract cheap clients who haggle over add-ons. Price for the client you want, not the one you have.
            </li>
            <li>
              <strong>No video.</strong> Skipping the video forfeits the single biggest conversion lift available for free.
            </li>
            <li>
              <strong>Vague scope.</strong> &quot;I will design your website&quot; with no page count, no revision count, no timeline = instant rejection or instant refund requests.
            </li>
            <li>
              <strong>Ignoring the requirements form.</strong> If you leave it blank, clients will too — and you&apos;ll spend the kickoff chasing assets instead of building.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Combine Project Catalog + Proposals for a Full Client Pipeline
          </h2>
          <p>
            The strongest 2026 freelancers run both channels in parallel. Here&apos;s the playbook:
          </p>
          <ol>
            <li>
              <strong>Build 2 to 3 Catalog listings first.</strong> Each becomes a permanent lead source and doubles as a portfolio piece in proposals.
            </li>
            <li>
              <strong>Link to your Catalog listing from proposals.</strong> &quot;Here&apos;s my packaged version of this exact service — $850 for the standard scope, or we scope a custom version for your project.&quot; This shifts the conversation from &quot;should I hire you?&quot; to &quot;which option do I want?&quot;
            </li>
            <li>
              <strong>Convert one-off Catalog buyers into retainer clients.</strong> A $350 one-page design becomes a $1,500/mo maintenance retainer if you ask. See our guide to{" "}
              <Link href="/blog/upwork-retainer-clients" className="text-indigo-600 font-medium hover:underline">
                landing Upwork retainer clients
              </Link>{" "}
              for the exact script.
            </li>
            <li>
              <strong>Use proposals for the custom high-ticket work, Catalog for the repeatable mid-ticket work.</strong> Proposals win $2k+ custom projects; Catalog wins $300 to $1,500 packaged jobs on autopilot.
            </li>
          </ol>
          <p>
            New to Upwork and don&apos;t have reviews yet? Start with our{" "}
            <Link href="/blog/how-to-get-first-job-on-upwork" className="text-indigo-600 font-medium hover:underline">
              first-job roadmap
            </Link>{" "}
            to earn your initial reviews, then launch your first Catalog listing — clients buy from
            sellers with even 1 to 3 reviews far more readily than from zero-review sellers.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Stop Waiting for Clients to Come to You
          </h2>
          <p>
            A well-built Project Catalog listing is the closest thing to passive client flow on
            Upwork. It ranks in search, captures buyers who never post a job, and gives you a
            portfolio piece you can link from every proposal. Build one this week — then keep your
            proposal pipeline running in parallel for the high-ticket custom work.
          </p>
          <p>
            If you&apos;re still spending hours writing proposals manually,{" "}
            <Link href="/" className="text-indigo-600 font-medium hover:underline">
              ProposalAI
            </Link>{" "}
            drafts 3 personalized proposals in 30 seconds from any job post — so you can spend the
            time you save building Catalog listings that sell while you sleep. See{" "}
            <Link href="/pricing" className="text-indigo-600 font-medium hover:underline">
              pricing
            </Link>{" "}
            or jump straight in:
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
                Copy-paste proposal templates for the active-buyer side of your pipeline — pairs
                perfectly with a Project Catalog listing.
              </p>
            </Link>
            <Link
              href="/blog/freelance-pricing-strategies"
              className="group block bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                Pricing
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                Freelance Pricing Strategies: How to Charge What You&apos;re Worth
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                The full pricing framework behind the 3-tier Catalog structure — including how to
                raise rates without losing clients.
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Build a freelance pipeline that runs without you
          </h2>
          <p className="mt-3 text-indigo-100 max-w-xl mx-auto">
            Launch your Project Catalog listing, then let ProposalAI handle your proposal drafts.
            Free to start.
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
