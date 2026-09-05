import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Upwork Job Success Score: How to Get 100% JSS and Keep It (2025)",
  description:
    "Your Upwork Job Success Score controls your visibility, invites, and Top Rated badge. Learn exactly how JSS is calculated, how to hit 100%, and how to recover if it drops.",
  keywords: [
    "upwork job success score",
    "how to get 100 jss on upwork",
    "upwork jss explained",
    "raise job success score upwork",
    "upwork top rated badge",
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
            Upwork Job Success Score: How to Get 100% JSS and Keep It (2025)
          </h1>
          <p className="mt-4 text-slate-500 text-sm">12 min read · Updated September 2025</p>
        </div>

        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600 prose-strong:text-slate-900">
          <p className="text-lg text-slate-700 leading-relaxed">
            You have the skills. You write great proposals. You&apos;re responsive and deliver on time. 
            So why are clients still choosing someone else? The answer is almost always the same: 
            your <strong>Job Success Score (JSS)</strong>.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Your JSS is the single most important number on your Upwork profile. It determines whether 
            your proposals get seen, whether clients invite you to jobs, and whether you qualify for 
            the Top Rated badge that can <strong>double or triple your income</strong>.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            In this guide, I&apos;m breaking down exactly how Upwork calculates your JSS, what kills it, 
            and the step-by-step plan to hit 100% and stay there.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            What Is the Upwork Job Success Score?
          </h2>
          <p>
            The Job Success Score is a percentage (0-100%) that measures how happy clients are with 
            your work. Upwork calculates it from your completed contracts over the last <strong>24 months</strong>, 
            with the most recent projects weighted more heavily.
          </p>
          <p>
            You need at least <strong>4 completed contracts</strong> before Upwork displays your JSS. 
            Once it appears, it updates roughly every two weeks.
          </p>
          <p>
            Here&apos;s why it matters: freelancers with a JSS of <strong>90%+</strong> get significantly 
            more visibility in search results and more direct job invitations. Below 80%, your profile 
            gets deprioritized — and below 60%, Upwork may suspend your account entirely.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            The JSS Benchmarks You Need to Know
          </h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <ul className="space-y-3">
              <li><strong>100% — Elite:</strong> Maximum visibility, eligible for Top Rated Plus, highest invite volume</li>
              <li><strong>90-99% — Excellent:</strong> Strong visibility, eligible for Top Rated badge, steady invites</li>
              <li><strong>80-89% — Good:</strong> Decent visibility but you&apos;re missing out on premium jobs</li>
              <li><strong>70-79% — Warning:</strong> Reduced visibility, fewer invites, time to course-correct</li>
              <li><strong>Below 70% — Critical:</strong> Severe penalties, risk of account suspension</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            How Upwork Actually Calculates Your JSS
          </h2>
          <p>
            Upwork is intentionally vague about the exact formula, but based on freelancer data and 
            platform disclosures, your JSS is based on four key signals:
          </p>
          <ol>
            <li><strong>Private client feedback.</strong> This is the biggest factor. After every contract, 
              clients leave private feedback that only Upwork (and you, summarized) sees. It includes a 
              1-10 rating on skills, quality, availability, communication, and cooperation, plus whether 
              they&apos;d recommend you.</li>
            <li><strong>Public star rating and reviews.</strong> The 5-star score visible on your profile.</li>
            <li><strong>Contract outcomes.</strong> Whether projects were completed successfully, ended 
              amicably, or resulted in disputes/refunds.</li>
            <li><strong>Repeat client rate.</strong> Clients who hire you again signal high satisfaction.</li>
          </ol>
          <p>
            The weighting isn&apos;t equal: <strong>private feedback carries the most weight</strong>, 
            followed by contract outcomes. A single 1-star public review might not tank you, but a 
            poor private feedback score from a big client absolutely will.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            5 Mistakes That Crash Your Job Success Score
          </h2>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            1. Accepting Jobs You Can&apos;t Deliver On
          </h3>
          <p>
            The fastest way to destroy your JSS is saying &quot;yes&quot; to a project you&apos;re not qualified 
            for. If the client expects a React developer and you&apos;ve only used WordPress, you&apos;ll 
            underdeliver — and they&apos;ll rate you accordingly.
          </p>
          <p>
            <strong>The fix:</strong> Only accept jobs where you&apos;re confident you can exceed expectations. 
            It&apos;s better to turn down 5 jobs than to bomb one. If you&apos;re unsure about scope, clarify 
            everything in the interview before accepting.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            2. Missing Deadlines
          </h3>
          <p>
            Late deliveries are the #1 cause of low private feedback. Clients plan their business around 
            your deadlines. When you miss one without communicating, you erode trust fast.
          </p>
          <p>
            <strong>Real example:</strong> A freelance writer accepted 8 articles due in 5 days. She 
            delivered 3 on time and 5 late. The client left a 2-star review and the private feedback 
            tanked her JSS from 96% to 88% in one update cycle.
          </p>
          <p>
            <strong>The fix:</strong> Pad your deadlines by 20-30% when quoting. If you think a project 
            takes 5 days, say 7. Then deliver on day 5. Underpromise, overdeliver — every single time.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            3. Going Silent During Projects
          </h3>
          <p>
            Clients hate not knowing what&apos;s happening. Even if the work is going great, radio silence 
            makes them assume the worst. Poor communication scores in private feedback are a silent 
            JSS killer.
          </p>
          <p>
            <strong>The fix:</strong> Send a quick update every 2-3 days, even if it&apos;s just &quot;making 
            progress, on track to deliver Friday.&quot; Set expectations upfront about your response time. 
            If you&apos;re going offline for more than 24 hours, tell the client in advance.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            4. Disputes and Refunds
          </h3>
          <p>
            A dispute is the nuclear option for your JSS. Any contract that goes to Upwork&apos;s dispute 
            process — or results in a refund — is heavily penalized, even if you&apos;re partially at fault.
          </p>
          <p>
            <strong>The fix:</strong> Resolve issues directly with the client before it escalates. If a 
            client is unhappy, offer a revision, partial refund, or scope adjustment — anything to keep 
            it out of the dispute system. One dispute can wipe out months of 5-star work.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            5. Ending Contracts Abruptly
          </h3>
          <p>
            If you close a contract without the client&apos;s explicit okay — or worse, if you stop responding 
            and let it sit open — the client can leave negative feedback that drags down your JSS.
          </p>
          <p>
            <strong>The fix:</strong> Always end contracts with a clear handoff. Deliver final files, 
            confirm everything is complete, and ask the client to close the contract with feedback. 
            If a client is unresponsive, wait 7-14 days then send a polite closing message before ending 
            it yourself.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            How to Raise Your JSS to 100% (The Action Plan)
          </h2>
          <p>
            If your JSS is below 90%, don&apos;t panic — it&apos;s recoverable. Here&apos;s the exact playbook:
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Step 1: Audit Your Last 10 Contracts
          </h3>
          <p>
            Go through your recent contracts and identify patterns. Did the low-scoring ones share a 
            common issue — late delivery, scope creep, poor communication? Knowing what went wrong is 
            the first step to fixing it.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Step 2: Stack Small, Successful Contracts
          </h3>
          <p>
            The quickest way to raise your JSS is to complete several small, easy projects perfectly. 
            Target jobs you can finish in 1-3 days with zero risk. Five 5-star contracts in a row will 
            outweigh one bad one.
          </p>
          <p>
            <strong>Tip:</strong> Apply to smaller budget jobs ($50-$200) where you can overdeliver 
            easily. Use our{" "}
            <Link href="/blog/upwork-proposal-templates" className="text-indigo-600 font-medium hover:underline">
              Upwork proposal templates
            </Link>{" "}
            to land them fast.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Step 3: Ask for Feedback Proactively
          </h3>
          <p>
            After delivering great work, don&apos;t just wait for the client to rate you. Send a message 
            like: &quot;Glad you&apos;re happy with the results! If you have 30 seconds, leaving feedback 
            helps other clients find me. Let me know if you need anything else.&quot;
          </p>
          <p>
            Happy clients usually leave 5 stars when asked. Just don&apos;t beg or offer incentives 
            (that&apos;s against Upwork&apos;s terms).
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Step 4: Turn One-Time Clients Into Repeat Clients
          </h3>
          <p>
            Repeat hires are gold for your JSS. They signal to Upwork that clients love working with you. 
            After finishing a project, send a quick note: &quot;I really enjoyed working with you. If you 
            have any ongoing needs — content, maintenance, more projects — I&apos;d love to help.&quot;
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            How to Maintain 100% JSS Long-Term
          </h2>
          <p>
            Getting to 100% is hard. Staying there is harder. Follow these rules every single contract:
          </p>
          <ul>
            <li><strong>Clarify scope before starting.</strong> Never begin work until both sides agree on deliverables, deadlines, and price.</li>
            <li><strong>Communicate on day one.</strong> Send a kickoff message confirming your understanding of the project.</li>
            <li><strong>Update every 2-3 days.</strong> Even a one-line progress message builds trust.</li>
            <li><strong>Deliver early when possible.</strong> Hitting the deadline is the baseline. Early delivery delights clients.</li>
            <li><strong>Request feedback at handoff.</strong> Make it easy for happy clients to rate you.</li>
            <li><strong>Never ghost.</strong> If you hit a snag, tell the client immediately — don&apos;t disappear.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            The Top Rated Badge: Your Reward for 90%+ JSS
          </h2>
          <p>
            Once your JSS hits <strong>90%+</strong> and you meet a few other requirements (1,000+ earnings 
            in the last 12 months, 100% complete profile, no recent account holds), you&apos;ll earn the 
            Top Rated badge. This badge:
          </p>
          <ul>
            <li>Adds a green &quot;Top Rated&quot; label to your proposals</li>
            <li>Boosts your search ranking significantly</li>
            <li>Unlocks the ability to hide your worst review</li>
            <li>Qualifies you for a dedicated support line</li>
          </ul>
          <p>
            Top Rated freelancers earn an estimated <strong>2-3x more</strong> than non-Top Rated 
            freelancers in the same niche. It&apos;s the single highest-leverage thing you can achieve 
            on the platform.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            JSS Recovery: What to Do If Your Score Drops
          </h2>
          <p>
            A low JSS isn&apos;t a death sentence. Here&apos;s how to recover:
          </p>
          <ol>
            <li><strong>Stop applying to high-risk jobs.</strong> Only take work you&apos;re 100% confident you can nail.</li>
            <li><strong>Take small projects first.</strong> Stack 5-10 quick wins with 5-star feedback.</li>
            <li><strong>Over-communicate.</strong> Send daily updates if needed to keep the client in the loop.</li>
            <li><strong>Deliver early and overdeliver.</strong> Add extra value — a free revision, a bonus file, a quick tip.</li>
            <li><strong>Be patient.</strong> JSS updates every two weeks and uses 24 months of data. It takes 2-3 update cycles to fully recover.</li>
          </ol>
          <p>
            If your JSS is below 60% and your account is at risk, focus entirely on 2-3 small perfect 
            contracts before applying to anything else.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            JSS FAQ
          </h2>
          <p><strong>How long does it take for JSS to update?</strong> Upwork recalculates JSS 
            approximately every two weeks. You&apos;ll get an email when it changes.</p>
          <p><strong>Can I remove a bad review?</strong> You can ask the client to change their feedback 
            within 14 days. If they refuse, you can respond publicly. Top Rated freelancers can hide one 
            review per quarter.</p>
          <p><strong>Do long-term contracts help JSS?</strong> Yes. Long-term, ongoing contracts with 
            positive feedback are weighted favorably because they signal strong client relationships.</p>
          <p><strong>What if a client doesn&apos;t leave feedback?</strong> Contracts without feedback 
            don&apos;t hurt your JSS — they just don&apos;t help it. Always politely ask happy clients to 
            leave a review.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Win the Right Jobs to Protect Your JSS
          </h2>
          <p>
            Your JSS lives or dies by the jobs you accept. Taking the wrong project can set you back 
            months. The right projects — ones where you can genuinely overdeliver — build it up fast.
          </p>
          <p>
            That&apos;s why smart freelancers use{" "}
            <Link href="/" className="text-indigo-600 font-medium hover:underline">
              ProposalAI
            </Link>{" "}
            to land the right clients. Paste any Upwork job description, and in 30 seconds you get 3 
            optimized proposals that:
          </p>
          <ul>
            <li>Qualify the client&apos;s needs so you only bid on good-fit jobs</li>
            <li>Open with a personalized hook that proves you read the post</li>
            <li>Suggest a smart bid range so you don&apos;t underprice yourself</li>
            <li>Include a clear next step to drive replies from quality clients</li>
          </ul>
          <p>
            Better proposals mean better clients — and better clients mean a higher Job Success Score. 
            It&apos;s free to try, no credit card required.
          </p>
          <p>
            <Link href="/auth/signup" className="text-indigo-600 font-medium hover:underline">
              Generate your first optimized proposal in 30 seconds →
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
                Discover the 10 most common Upwork proposal mistakes that are silently killing your win rate. Learn exactly how to fix each one.
              </p>
            </Link>
            <Link
              href="/blog/upwork-client-red-flags"
              className="group block bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                Warning Signs
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                20 Red Flags to Avoid on Upwork: Skip These Clients Immediately (2025)
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Learn the 20 red flags that signal toxic Upwork clients — before you bid or accept. Protect your JSS and your sanity.
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Land better clients with AI-written proposals
          </h2>
          <p className="mt-3 text-indigo-100 max-w-xl mx-auto">
            Better clients protect your Job Success Score. Generate optimized proposals in 30 seconds — free to try.
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
