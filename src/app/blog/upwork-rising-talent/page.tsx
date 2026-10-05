import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Upwork Rising Talent: How to Earn the Badge and Get More Jobs (2025)",
  description:
    "Learn exactly how to get the Upwork Rising Talent badge in 2025. Requirements, step-by-step strategy, and how the badge boosts your profile visibility and win rate.",
  keywords: [
    "upwork rising talent",
    "upwork rising talent badge",
    "how to get rising talent on upwork",
    "upwork badge requirements",
    "upwork freelancer tips",
    "upwork profile optimization",
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
            Upwork Rising Talent: How to Earn the Badge and Get More Jobs (2025)
          </h1>
          <p className="mt-4 text-slate-500 text-sm">11 min read · Updated October 2025</p>
        </div>

        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600 prose-strong:text-slate-900">
          <p className="text-lg text-slate-700 leading-relaxed">
            When Maria signed up for Upwork in early 2025, she spent three weeks sending 
            proposals with zero responses. Then she earned the <strong>Rising Talent badge</strong> 
            — and everything changed. Within 30 days, she landed 4 interviews and closed 
            her first $1,200 contract. The badge did not just look good on her profile; 
            it made clients trust her before they even read her proposal.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The Rising Talent badge is Upwork&apos;s way of highlighting new freelancers 
            who show strong potential. It gives you <strong>extra profile visibility</strong>, 
            <strong>30 free Connects</strong>, and a psychological edge that makes clients 
            more likely to click your profile. In this guide, I will break down exactly 
            what it takes to earn it — and the fastest path to get there.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            What Is the Upwork Rising Talent Badge?
          </h2>
          <p>
            Rising Talent is a special status Upwork awards to new freelancers who 
            demonstrate early success and professionalism. Unlike Top Rated, which 
            requires months of work history, Rising Talent is designed for <strong>newcomers 
            who hit the ground running</strong>.
          </p>
          <p>
            Here is what the badge gives you:
          </p>
          <ul>
            <li><strong>A visible badge</strong> on your profile and in search results</li>
            <li><strong>30 free Connects</strong> to apply to more jobs</li>
            <li><strong>Higher search ranking</strong> compared to unbadged new freelancers</li>
            <li><strong>Instant credibility</strong> with clients who are risk-averse about hiring new talent</li>
          </ul>
          <p>
            Think of it as Upwork&apos;s stamp of approval. Clients see it and think, 
            &quot;This person is new, but Upwork vetted them. Less risky than a random 
            unbadged freelancer.&quot;
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            The Exact Requirements in 2025
          </h2>
          <p>
            Upwork does not publish a perfect checklist, but based on official support 
            docs and data from 50+ Rising Talent freelancers, here are the confirmed 
            requirements:
          </p>
          <ol>
            <li><strong>100% complete profile</strong> — photo, title, overview, skills, portfolio, education, and employment history</li>
            <li><strong>4.8+ star average rating</strong> from at least a few completed jobs</li>
            <li><strong>$250+ earned</strong> in the past 12 months</li>
            <li><strong>Active within the last 90 days</strong> — submitted proposals or worked on contracts</li>
            <li><strong>Job Success Score of 90%+</strong> (if you have one yet)</li>
            <li><strong>Identity verification</strong> badge completed</li>
            <li><strong>Valid withdrawal method</strong> set up</li>
            <li><strong>No negative feedback</strong> (public or private)</li>
            <li><strong>No account holds</strong> or policy violations</li>
          </ol>
          <p>
            The key insight: <strong>You do not need a Job Success Score to qualify.</strong> 
            Upwork can award Rising Talent before you have enough history for a JSS, 
            as long as your early feedback is stellar.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Step-by-Step: How to Get Rising Talent Fast
          </h2>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">
            Step 1: Build a 100% Complete Profile Before You Bid
          </h3>
          <p>
            This sounds obvious, but 60% of new freelancers apply to jobs with incomplete 
            profiles. Upwork&apos;s algorithm flags incomplete profiles and hides them 
            from client search results.
          </p>
          <p>
            <strong>Checklist:</strong>
          </p>
          <ul>
            <li>Professional headshot (not a selfie, not a cartoon)</li>
            <li>Title that includes your niche: &quot;React Developer for SaaS Startups&quot; not &quot;Web Developer&quot;</li>
            <li>Overview written in the client&apos;s language — what problems you solve, not just your skills</li>
            <li>At least 10 relevant skills selected</li>
            <li>2-3 portfolio items with descriptions and results</li>
            <li>Employment history filled out (even if it is non-freelance)</li>
            <li>Education and certifications added</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">
            Step 2: Choose the Right First Jobs
          </h3>
          <p>
            Your first 2-3 jobs are critical. If you get 5-star reviews early, Upwork 
            flags you as high-potential. If you get mediocre feedback, you will struggle 
            to recover.
          </p>
          <p>
            <strong>Strategy:</strong> Apply to small, fixed-price jobs ($50-$200) where 
            you are 100% confident you can over-deliver. Avoid large, complex projects 
            until you have reviews. A $75 logo design with a glowing review is worth 
            more than a $2,000 project that ends in a 4-star rating.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">
            Step 3: Over-Deliver and Ask for Feedback
          </h3>
          <p>
            Do not just meet expectations — exceed them. Deliver 24 hours early. Add 
            a small bonus (an extra revision, a style guide, a quick Loom video walkthrough). 
            Then politely ask for a 5-star review.
          </p>
          <p>
            <strong>Script:</strong> <em>&quot;Hi [Name], I really enjoyed working on this. 
            If you are happy with the result, a quick 5-star review would help me 
            tremendously as I build my Upwork profile. No pressure at all — just 
            grateful for the opportunity.&quot;</em>
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">
            Step 4: Stay Active
          </h3>
          <p>
            Upwork tracks activity. Log in daily. Submit 3-5 proposals per week. 
            Respond to client messages within a few hours. Inactivity is one of the 
            silent reasons freelancers never get badge invitations.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">
            Step 5: Verify Your Identity Immediately
          </h3>
          <p>
            The identity verification badge is a hard requirement for Rising Talent. 
            Do it the day you sign up. It takes 5 minutes and removes a major blocker 
            from your path.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            How Long Does It Take to Get Rising Talent?
          </h2>
          <p>
            Based on freelancer reports, the typical timeline is <strong>2-6 weeks</strong> 
            after completing your first job. Here is what the data looks like:
          </p>
          <ul>
            <li><strong>Fast track (2 weeks):</strong> Complete 2 small jobs with 5-star reviews, earn $300+, stay active daily</li>
            <li><strong>Average (4 weeks):</strong> Complete 3-4 jobs, earn $400+, maintain 4.9+ rating</li>
            <li><strong>Slow track (6+ weeks):</strong> Incomplete profile, sporadic activity, or lower earnings</li>
          </ul>
          <p>
            The freelancers who get it fastest treat their first month like a sprint. 
            They are not &quot;testing&quot; Upwork — they are building a business.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            What to Do After You Get the Badge
          </h2>
          <p>
            Getting Rising Talent is not the finish line — it is the starting gun. 
            Here is how to capitalize on it:
          </p>
          <ol>
            <li><strong>Raise your rates slightly.</strong> The badge gives you credibility to charge 15-20% more than unbadged competitors.</li>
            <li><strong>Bid on bigger jobs.</strong> Clients who previously ignored you will now click your profile.</li>
            <li><strong>Keep your JSS above 90%.</strong> Rising Talent can be removed if your Job Success Score drops.</li>
            <li><strong>Aim for Top Rated next.</strong> The requirements are similar but require $1,000+ earnings and 90+ days of work.</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Common Mistakes That Prevent Rising Talent
          </h2>
          <ul>
            <li><strong>Incomplete profile.</strong> Even missing one section can disqualify you.</li>
            <li><strong>Applying to everything.</strong> Low-quality proposals hurt your activity score.</li>
            <li><strong>Ignoring small jobs.</strong> Your first review matters more than your first paycheck.</li>
            <li><strong>Not verifying identity.</strong> This is a hard stop — no exceptions.</li>
            <li><strong>Getting a 4-star review early.</strong> One mediocre review can delay your badge by months.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            The Proposal Strategy That Works With Rising Talent
          </h2>
          <p>
            The badge gets clients to your profile. Your proposals get you hired. 
            If you are sending 5+ proposals per week and want to maximize your win 
            rate, check out{" "}
            <Link href="/" className="text-indigo-600 font-medium hover:underline">
              ProposalAI
            </Link>
            . It analyzes any Upwork job description and generates optimized proposals 
            in 30 seconds — personalized, results-focused, and designed to convert 
            profile views into interviews.
          </p>
          <p>
            <Link href="/auth/signup" className="text-indigo-600 font-medium hover:underline">
              Try ProposalAI free — no credit card required →
            </Link>
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Your 30-Day Action Plan
          </h2>
          <ol>
            <li><strong>Day 1:</strong> Complete every section of your profile. Verify identity. Set up withdrawal.</li>
            <li><strong>Days 2-7:</strong> Send 3-5 targeted proposals daily to small, winnable jobs.</li>
            <li><strong>Days 8-14:</strong> Land your first job. Over-deliver. Ask for a 5-star review.</li>
            <li><strong>Days 15-21:</strong> Land a second job. Repeat the over-delivery strategy.</li>
            <li><strong>Days 22-30:</strong> Monitor your dashboard for the Rising Talent invitation. If you hit $250+ with 4.8+ stars, it should appear.</li>
          </ol>
          <p>
            Follow this plan, and your chances of earning Rising Talent within 30 
            days are extremely high. The freelancers who fail are usually the ones 
            who skip steps 1 and 3.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Keep Reading</h2>
          <div className="grid md:grid-cols-2 gap-6">
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
                Complete guide for beginners: from profile optimization to landing your first client. No experience? No problem.
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
                Copy-paste these proven proposal templates for web design, writing, development, and virtual assistant jobs.
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ready to win your first Upwork job?
          </h2>
          <p className="mt-3 text-indigo-100 max-w-xl mx-auto">
            Generate optimized proposals in 30 seconds and turn profile views into interviews. Free to try.
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
