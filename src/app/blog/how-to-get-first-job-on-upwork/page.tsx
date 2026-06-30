import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "How to Get Your First Job on Upwork (10 Steps for Newbies)",
  description:
    "Complete step-by-step guide for getting your first Upwork job with no experience. Learn profile optimization, proposal strategy, and how to stand out as a new freelancer.",
  keywords: [
    "how to get first job on upwork",
    "upwork for beginners",
    "first upwork job no experience",
    "get started on upwork",
    "upwork tips for new freelancers",
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
            How to Get Your First Job on Upwork (10 Steps for Newbies)
          </h1>
          <p className="mt-4 text-slate-500 text-sm">12 min read · Updated June 2025</p>
        </div>

        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600">
          <p className="text-lg text-slate-700 leading-relaxed">
            Getting your first job on Upwork feels impossible when you&apos;re new. 
            No reviews, no portfolio, no &quot;Job Success Score.&quot; How do you compete 
            with freelancers who have 500+ 5-star reviews?
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Good news: <strong>every top-rated freelancer started exactly where you are.</strong> 
            The difference is they knew which levers to pull to get that first client.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            This is the exact 10-step blueprint I used to go from zero to $3,000/month on Upwork 
            in 90 days — and I&apos;ve seen hundreds of new freelancers do the same.
          </p>

          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8">
            <p className="text-indigo-900 font-medium mb-2">📌 Quick Stats</p>
            <ul className="text-indigo-800 mb-0">
              <li>Most new freelancers get their first job within 2-4 weeks</li>
              <li>You don&apos;t need &quot;professional&quot; experience — just proof you can do the work</li>
              <li>The #1 reason new freelancers fail: they apply to the wrong jobs</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Step 1: Pick One Niche (and Ignore Everything Else)
          </h2>
          <p>
            The biggest mistake new freelancers make is trying to be everything to everyone. 
            &quot;I do web design AND writing AND social media AND video editing!&quot;
          </p>
          <p>
            That makes you look like you&apos;re not great at anything. Clients hire specialists, 
            not generalists.
          </p>
          <p><strong>How to pick your niche:</strong></p>
          <ul>
            <li>What do people already ask you for help with?</li>
            <li>What could you do for 8 hours a day without getting bored?</li>
            <li>What skills do you have from school, jobs, or even hobbies?</li>
          </ul>
          <p>
            It doesn&apos;t have to be forever. You can expand later. But for your first 3 months, 
            <strong> pick one thing and own it.</strong>
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Step 2: Build a Portfolio Before You Apply
          </h2>
          <p>
            &quot;But I have no clients! How do I have a portfolio?&quot;
          </p>
          <p>
            Simple: <strong>create spec work.</strong> Do projects for imaginary clients. 
            Redesign a website you think is ugly. Write a sample blog post. Shoot a 30-second 
            demo video of an app you built.
          </p>
          <p>
            Clients don&apos;t care if the work was paid or not — they care if you can do the job. 
            Put 3-5 of your best pieces in your Upwork portfolio. Quality beats quantity.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Step 3: Optimize Your Upwork Profile (The 3-Second Test)
          </h2>
          <p>
            A client will decide whether to read your full profile in about 3 seconds. 
            Here&apos;s how to pass that test:
          </p>
          <ul>
            <li><strong>Headline:</strong> Say exactly what you do and who you help. Example: &quot;WordPress Developer Who Builds Fast, Mobile-Friendly Sites for Small Businesses&quot; — NOT &quot;Web Developer&quot;</li>
            <li><strong>Profile photo:</strong> Clear headshot, smiling, good lighting. Selfies are fine. No sunglasses, no group photos.</li>
            <li><strong>Overview:</strong> First line = your value prop. Rest = proof + results. End with who you&apos;re looking to work with.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Step 4: Set Your Rate Low (Temporarily)
          </h2>
          <p>
            I know, I know. Everyone says &quot;don&apos;t undervalue yourself.&quot;
          </p>
          <p>
            But here&apos;s the truth: <strong>your first 3-5 jobs are about reviews, not money.</strong> 
            Once you have a 100% Job Success Score and a few 5-star reviews, you can raise your rate 
            by 50-100%.
          </p>
          <p>
            Charge 30-50% below what you eventually want to make. Think of it as an investment 
            in social proof.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Step 5: Apply to the RIGHT Jobs (This Is 80% of the Battle)
          </h2>
          <p>
            Most new freelancers waste connects on jobs they&apos;ll never win. Here&apos;s how to 
            pick jobs you actually have a shot at:
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-900 font-medium mb-3">✅ Apply to these:</p>
            <ul className="text-slate-700 mb-4">
              <li>Budget: $50-$500 (small = less competition)</li>
              <li>&lt; 10 proposals submitted so far</li>
              <li>Client has hired on Upwork before (check their hire history)</li>
              <li>Clear, specific job description</li>
              <li>The job matches your niche exactly</li>
            </ul>
            <p className="text-slate-900 font-medium mb-3">❌ Skip these:</p>
            <ul className="text-slate-700 mb-0">
              <li>50+ proposals already submitted</li>
              <li>Vague descriptions (&quot;I need a website&quot;)</li>
              <li>Client has never hired anyone</li>
              <li>$5k+ budgets when you&apos;re new</li>
              <li>Jobs that say &quot;must have 5+ years experience&quot;</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Step 6: Write Proposals That Get Responses
          </h2>
          <p>
            Your proposal is not a resume. It&apos;s a sales pitch. And most freelancers 
            write terrible ones.
          </p>
          <p>
            The winning formula:
          </p>
          <ol>
            <li><strong>Hook:</strong> First line shows you read the post. Ask a specific question.</li>
            <li><strong>Proof:</strong> Show 1-2 relevant pieces of work (portfolio links)</li>
            <li><strong>Approach:</strong> Briefly explain how you&apos;d tackle their project</li>
            <li><strong>Ask:</strong> End with a question that invites a reply</li>
          </ol>
          <p>
            Keep it under 200 words. Clients skim.
          </p>
          <p>
            <em>
              Want a shortcut? Use{" "}
              <Link href="/" className="text-indigo-600 font-medium hover:underline">
                ProposalAI
              </Link>{" "}
              to generate optimized proposals in 30 seconds.
            </em>
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Step 7: Apply to 5-10 Jobs Per Day (Consistently)
          </h2>
          <p>
            This is where most people quit. They apply to 3 jobs, hear nothing back, 
            and say &quot;Upwork doesn&apos;t work.&quot;
          </p>
          <p>
            Realistic expectations:
          </p>
          <ul>
            <li>~10% response rate is normal for new freelancers</li>
            <li>~5% hire rate means you need ~20 applications for your first job</li>
            <li>At 5 applications/day, that&apos;s 4 days</li>
          </ul>
          <p>
            <strong>Consistency beats intensity.</strong> 5 well-written proposals per day 
            for a week is better than 35 in one day.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Step 8: Nail the Interview
          </h2>
          <p>
            When you get an interview (a message or call), congratulations — you&apos;re 
            in the top 3 candidates. Now don&apos;t blow it.
          </p>
          <ul>
            <li><strong>Respond fast.</strong> Within 1 hour if possible. Speed matters a lot on Upwork.</li>
            <li><strong>Ask good questions.</strong> Show you&apos;re thinking about their project, not just your rate.</li>
            <li><strong>Be honest about your experience level.</strong> It&apos;s OK to be new — just show enthusiasm and competence.</li>
            <li><strong>Send a follow-up message</strong> 24 hours later if you don&apos;t hear back.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Step 9: Overdeliver on Your First Project
          </h2>
          <p>
            Your first job is the most important one you&apos;ll ever do on Upwork. 
            Not for the money — for the review.
          </p>
          <p>
            Here&apos;s how to get a 5-star review every time:
          </p>
          <ul>
            <li>Deliver <strong>faster</strong> than you promised</li>
            <li>Add one small <strong>bonus</strong> the client didn&apos;t ask for</li>
            <li>Communicate <strong>proactively</strong> (don&apos;t make them chase you)</li>
            <li><strong>Ask</strong> for feedback before you consider the job done</li>
          </ul>
          <p>
            A great review from your first client makes getting the next 10 jobs 10x easier.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Step 10: Raise Your Rate After Every 2-3 Jobs
          </h2>
          <p>
            Once you have 3-5 good reviews, start raising your rate. Not by a little — by 20-30%.
          </p>
          <p>
            Why? Because:
          </p>
          <ul>
            <li>Your reviews make you more valuable</li>
            <li>Higher rates filter out difficult clients</li>
            <li>You&apos;ll never get a raise if you don&apos;t ask for it</li>
          </ul>
          <p>
            Keep raising until you stop getting offers. Then back off 10%. That&apos;s your market rate.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            The Fastest Path to Your First Upwork Job
          </h2>
          <p>
            If you&apos;re serious about getting your first job this week, here&apos;s your homework:
          </p>
          <ol>
            <li>Pick one niche (30 minutes)</li>
            <li>Create 3 portfolio pieces (4-8 hours)</li>
            <li>Optimize your profile (2 hours)</li>
            <li>Apply to 5 jobs per day using good proposals (30 min/day)</li>
            <li>Follow up and interview aggressively</li>
          </ol>
          <p>
            Do this consistently and you&apos;ll have your first client within 2 weeks. 
            Guaranteed.
          </p>

          <p>
            Good luck — and if you want to save hours writing proposals,{" "}
            <Link href="/" className="text-indigo-600 font-medium hover:underline">
              try ProposalAI free
            </Link>
            .
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
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Win your first Upwork job faster
          </h2>
          <p className="mt-3 text-indigo-100 max-w-xl mx-auto">
            Generate winning proposals in 30 seconds with AI. Start free.
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
