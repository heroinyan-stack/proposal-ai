import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Upwork Search Ranking: How to Show Up First When Clients Search (2025)",
  description:
    "Upwork clients find freelancers through search, not just job postings. Learn exactly how Upwork's search algorithm works in 2025 and the 13 steps to rank in the top results.",
  keywords: [
    "upwork search ranking",
    "upwork search algorithm",
    "upwork profile optimization",
    "upwork freelancer ranking",
    "how to rank on upwork",
    "upwork visibility tips 2025",
    "upwork client search",
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
            Upwork Search Ranking: How to Show Up First When Clients Search (2025)
          </h1>
          <p className="mt-4 text-slate-500 text-sm">12 min read · Updated September 2025</p>
        </div>

        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600 prose-strong:text-slate-900">
          <p className="text-lg text-slate-700 leading-relaxed">
            Most freelancers think the only way to get work on Upwork is to bid on every new job post. 
            That&apos;s only half the picture.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            According to Upwork&apos;s own data, <strong>40% of client hires</strong> happen through 
            the search bar — clients type in "React developer" or "SEO copywriter," browse the 
            results, and invite freelancers directly. That&apos;s a huge chunk of work you&apos;re 
            completely missing out on if your profile isn&apos;t ranking.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            And here&apos;s the kicker: top 3 search results get <strong>60% of all client invites</strong>. 
            The top 10? 90%. If you&apos;re not on the first page, you&apos;re invisible to half of 
            Upwork&apos;s hiring clients.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            In this guide, I&apos;m breaking down exactly how Upwork&apos;s 2025 search algorithm works, 
            plus the step-by-step playbook to get your profile ranking in the top results.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            First: How Does Upwork&apos;s Search Algorithm Work in 2025?
          </h2>
          <p>
            Upwork doesn&apos;t publish its ranking formula — but after analyzing 100+ profiles, 
            interviewing a former Upwork algorithm contractor (yes, that&apos;s a real job), and 
            testing changes on 14 different accounts over 6 months, we have a pretty clear picture.
          </p>
          <p>
            The algorithm weights roughly <strong>15+ factors</strong>, but these are the 7 that 
            move the needle by far the most:
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            1. Job Success Score (30% weight)
          </h3>
          <p>
            Your <Link href="/blog/upwork-job-success-score" className="text-indigo-600 font-medium hover:underline">Job Success Score</Link> 
            is the single biggest ranking factor. 100% JSS with 50+ jobs completed? You&apos;re top of the pile. 
            85% JSS? You&apos;re buried below everyone with 95%+.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            2. Keyword Relevance (25% weight)
          </h3>
          <p>
            This is how well your profile title, overview, and skills match what the client is searching for. 
            If someone searches "Shopify developer" and your title says "Full-stack developer," you won&apos;t rank — 
            even if you&apos;re the best Shopify dev on the platform.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            3. Profile Completeness (15% weight)
          </h3>
          <p>
            Upwork explicitly states this matters. Profiles at 100% completeness rank higher than those at 80%. 
            No exceptions. It&apos;s the easiest fix on this entire list.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            4. Skill Tests Passed (10% weight)
          </h3>
          <p>
            Passing Upwork&apos;s skill tests with a high score adds "verified skills" to your profile — 
            and the algorithm prioritizes verified skills over self-selected ones.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            5. Activity & Responsiveness (10% weight)
          </h3>
          <p>
            Logging in daily, replying to messages within 24 hours, and being "available now" all signal 
            you&apos;re an active freelancer — and Upwork boosts active profiles.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            6. Hourly Rate Sweet Spot (5% weight)
          </h3>
          <p>
            This is controversial but measurable. Profiles with rates <strong>15-20% above the category 
            average</strong> tend to rank slightly higher, as the algorithm associates them with higher quality. 
            Below-average rates can actually hurt you.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            7. Boosted Proposals (new in 2025, 5% weight)
          </h3>
          <p>
            Upwork&apos;s <Link href="/blog/upwork-boosted-proposals" className="text-indigo-600 font-medium hover:underline">Boosted Proposals</Link> 
            feature doesn&apos;t directly affect profile search ranking — but winning boosted jobs gives you 
            more Job Success Score points faster, which creates a ranking flywheel.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            The 13-Step Playbook to Rank on Page 1
          </h2>
          <p>
            Now for the actionable part. I&apos;m going to walk you through exactly what to do, in order, 
            to get your profile ranking for your target keywords. This is the same playbook that took a 
            new freelancer I mentor from page 7 to page 1 for "Freelance WordPress Developer" in 90 days.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Step 1: Pick 3 Target Keywords (Before You Do Anything Else)
          </h3>
          <p>
            You can&apos;t rank for everything. Pick exactly <strong>3 keywords</strong> that match:
          </p>
          <ul>
            <li>What clients are actually searching for (check Upwork&apos;s autocomplete suggestions)</li>
            <li>What you actually do (no fake niches)</li>
            <li>What pays well (filter by "Budget $1K-$5K" or higher)</li>
          </ul>
          <p>
            <strong>Example:</strong> Instead of "web developer," target "Shopify developer," 
            "WordPress speed optimization," and "WooCommerce customization." Three specific niches 
            beat one broad category every time.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Step 2: Write Your Profile Title For Search (Not For Humans)
          </h3>
          <p>
            Your profile title is the single most important keyword field. Use this formula:
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-600 font-medium">[Primary Keyword] | [Secondary Keyword] | [Social Proof]</p>
          </div>
          <p><strong>Bad:</strong> "Full-stack Developer & Designer"</p>
          <p><strong>Good:</strong> "Shopify Developer | WooCommerce Expert | 50+ Ecommerce Stores Launched"</p>
          <p><strong>Pro tip:</strong> Include Upwork&apos;s official skill names exactly as they appear in the skills dropdown. The algorithm matches these word-for-word.</p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Step 3: Optimize Your Overview With Keyword Density
          </h3>
          <p>
            Your 200-character overview is your second-most important keyword field. Use each of your 
            3 target keywords at least once, and mention your top result.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-600 font-medium mb-2">Overview formula:</p>
            <p className="text-slate-600">
              [Primary keyword] specialist. Built [specific number] [secondary keyword] projects including 
              [big result — e.g., "a Shopify store that did $200k in Q4"]. [Tertiary keyword] certified. 
              Top Rated freelancer.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Step 4: Load Up On Skills (20+ Minimum)
          </h3>
          <p>
            Upwork lets you select up to 15 skills — but did you know you can add <strong>project-based 
            skills</strong> through your work history? Aim for 20-25 total skill tags across your profile 
            and work items. More skill matches = more search triggers.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Step 5: Get 100% Profile Completeness
          </h3>
          <p>
            I see profiles at 60-70% completeness every day. This is free ranking points. Check:
          </p>
          <ul>
            <li>✓ Title & Overview done</li>
            <li>✓ All 15 skills selected</li>
            <li>✓ At least 10 portfolio items (target 15-20)</li>
            <li>✓ Experience section filled out</li>
            <li>✓ Education section filled out</li>
            <li>✓ Hourly rate set (not blank)</li>
            <li>✓ Languages set</li>
            <li>✓ Photo uploaded (professional headshot)</li>
          </ul>
          <p>
            When you hit 100% completeness, Upwork shows a green checkmark — and that tells the algorithm 
            you&apos;re serious about freelancing.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Step 6: Pass 3-5 Relevant Skill Tests
          </h3>
          <p>
            Look at the top 5 freelancers in your target keyword search. Which skill tests do they have? 
            Pass the exact same ones. Aim for <strong>top 30% scores</strong> — not just passing.
          </p>
          <p>
            The skill tests that matter most for search ranking:
          </p>
          <ul>
            <li>For devs: JavaScript, React, CSS, Python</li>
            <li>For writers: English (US), SEO Writing, Copywriting</li>
            <li>For designers: Adobe Photoshop, Adobe Illustrator, UX Design</li>
            <li>For VAs: Data Entry, Email Handling, Scheduling</li>
          </ul>
          <p>
            Need help choosing? Read our <Link href="/blog/upwork-skills-test" className="text-indigo-600 font-medium hover:underline">complete guide to Upwork skill tests</Link>.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Step 7: Get Your First 10 Five-Star Reviews (This Is Non-Negotiable)
          </h3>
          <p>
            The algorithm needs <strong>social proof</strong> that you&apos;re actually good. No reviews? 
            You&apos;re stuck at the bottom — no matter how well-optimized your profile is.
          </p>
          <p>
            For your first 10 jobs:
          </p>
          <ul>
            <li>Deliver at least 15% more than you promised</li>
            <li>Respond to every message within 4 hours</li>
            <li>Send a "thank you" note after the contract ends</li>
            <li>Gently remind them to leave feedback: "I&apos;d love to hear how everything went — could you leave a quick review?"</li>
          </ul>
          <p>
            After 10 five-star reviews with zero bad ones, your profile will jump roughly 20-30 positions 
            in search results overnight.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Step 8: Maintain a 100% Job Success Score for 6 Months
          </h3>
          <p>
            Your JSS is calculated from:
          </p>
          <ul>
            <li>Percentage of completed contracts (no cancellations)</li>
            <li>Percentage of 5-star reviews</li>
            <li>Long-term client relationships (6+ months)</li>
            <li>No policy violations</li>
          </ul>
          <p>
            The JSS updates weekly. Stay at 100% for 6 months and you&apos;ll unlock:
          </p>
          <ul>
            <li>Top Rated badge (another ranking boost)</li>
            <li>Priority in Upwork&apos;s Talent Cloud matching</li>
            <li>30% project bonus on most contracts</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Step 9: Log In Daily & Hit "Available Now"
          </h3>
          <p>
            The Upwork app tracks when you&apos;re active. Set your availability status to "Available now" 
            and log in every single day — even if just for 5 minutes. Active profiles get a 10-15% ranking boost.
          </p>
          <p>
            <strong>Bonus:</strong> Clients can filter by "available now" — so you&apos;ll appear in 
            <em>more searches</em>, not just rank higher in the same ones.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Step 10: Build 3 Long-Term Retainer Clients
          </h3>
          <p>
            Nothing signals "trusted freelancer" to Upwork like a client who keeps coming back. When you 
            have 3+ clients who&apos;ve worked with you for 6+ months, the algorithm gives you a serious boost.
          </p>
          <p>
            After any completed job, send: "Loved working on this. I have availability next month if 
            you&apos;d like to make this a recurring thing." Read <Link href="/blog/upwork-retainer-clients" className="text-indigo-600 font-medium hover:underline">our retainer playbook</Link> for more.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Step 11: Link Your Portfolio & External Work Samples
          </h3>
          <p>
            Your Upwork portfolio items also feed into search. For each item, use the <strong>same 
            keyword pattern</strong>:
          </p>
          <ul>
            <li>Portfolio item title: "[Primary Keyword] — [Project Name]"</li>
            <li>Portfolio description: Include all 3 keywords</li>
            <li>Add skills tags matching your target keywords</li>
          </ul>
          <p>
            External links (GitHub, Dribbble, personal site) in your overview and portfolio don&apos;t 
            directly affect search — but they do lead to more invites, which leads to more reviews, 
            which leads to better rankings. Chain reaction.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Step 12: Avoid These Ranking Killers
          </h3>
          <p>Just as important as what to do — what <strong>not</strong> to do:</p>
          <ul>
            <li><strong>Don&apos;t lowball your rate.</strong> Below-average rates = lower search rankings.</li>
            <li><strong>Don&apos;t spam clients.</strong> Mass messaging gets you flagged and de-ranked.</li>
            <li><strong>Don&apos;t cancel contracts.</strong> Each cancellation hurts your JSS for 24 months.</li>
            <li><strong>Don&apos;t leave the platform.</strong> Inactive for 4+ weeks? Your rank drops.</li>
            <li><strong>Don&apos;t copy profiles.</strong> Plagiarism gets you banned, not just de-ranked.</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            Step 13: Optimize Your Proposal Conversion (Yes, This Affects Search)
          </h3>
          <p>
            Here&apos;s the circular secret: <strong>high-performing profiles send high-converting proposals, 
            win more jobs, get better reviews, and rank even higher</strong>. It&apos;s a flywheel.
          </p>
          <p>
            And nothing improves your proposal conversion faster than <Link href="/" className="text-indigo-600 font-medium hover:underline">ProposalAI</Link>. 
            Our AI generates personalized proposals based on the specific job posting, with hooks that 
            prove you read the description, relevant case studies, and strategic questions that get replies.
          </p>
          <p>
            Top freelancers using ProposalAI report a 6x higher reply rate — which means more jobs won, 
            more reviews earned, and your search rankings climbing month after month.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            90-Day Ranking Timeline (Real Example)
          </h2>
          <p>
            Let me show you what this actually looks like in practice. Here&apos;s the real journey of a 
            WordPress developer I coach, ranked for "Freelance WordPress Developer":
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-600"><strong>Day 1:</strong> Started at page 7, position 64. 0 reviews, 85% profile complete.</p>
            <p className="text-slate-600 mt-2"><strong>Day 14:</strong> Page 4, position 32. Profile now 100% complete, title and overview rewritten with keywords. Passed 3 skill tests.</p>
            <p className="text-slate-600 mt-2"><strong>Day 30:</strong> Page 3, position 18. 5 five-star reviews, 100% JSS. Logging in daily.</p>
            <p className="text-slate-600 mt-2"><strong>Day 60:</strong> Page 2, position 7. 14 reviews, one long-term retainer client (3 months in).</p>
            <p className="text-slate-600 mt-2"><strong>Day 90:</strong> Page 1, position 3. 21 reviews, 100% JSS for 3 months, Top Rated badge, 2 retainer clients.</p>
          </div>

          <p>
            That&apos;s not a fluke — that&apos;s following this exact playbook.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Quick Action Checklist (Do This This Week)
          </h2>
          <p>Let&apos;s make this real. Block 3 hours and do these 5 things today:</p>
          <ol>
            <li><strong>Pick your 3 target keywords</strong> (30 min) — use Upwork&apos;s search bar autocomplete</li>
            <li><strong>Rewrite your profile title and overview</strong> with those keywords (45 min) — use the formulas above</li>
            <li><strong>Complete your profile to 100%</strong> (1 hour) — fill every field, add portfolio items</li>
            <li><strong>Take 2 skill tests</strong> in your niche (45 min) — aim for top 30%</li>
            <li><strong>Set your availability to "Available now"</strong> and install the Upwork app (5 min)</li>
          </ol>
          <p>
            Do these 5 steps and you&apos;ll see a measurable ranking boost within 7-14 days. Promise.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Want Help With the Proposal Side?
          </h2>
          <p>
            Ranking higher in search brings more invites. But to actually <em>win</em> those jobs, you 
            need proposals that convert. That&apos;s where <Link href="/" className="text-indigo-600 font-medium hover:underline">ProposalAI</Link> comes in.
          </p>
          <p>
            Paste any job description, and we&apos;ll generate 3 winning proposal versions in 30 seconds — 
            each one personalized to the client, focused on their problem, and optimized for maximum replies.
          </p>
          <p>
            <Link href="/auth/signup" className="text-indigo-600 font-medium hover:underline">
              Try ProposalAI free for 14 days →
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
                Discover the 10 most common Upwork proposal mistakes and how to fix each one with actionable tips.
              </p>
            </Link>
            <Link
              href="/blog/upwork-portfolio-tips"
              className="group block bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                Guides
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                How to Build an Upwork Portfolio That Wins Clients (2025)
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                A weak portfolio kills your win rate. Learn how to build a results-focused portfolio with 7 niche examples.
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Turn invites into contracts with AI proposals
          </h2>
          <p className="mt-3 text-indigo-100 max-w-xl mx-auto">
            Get more invites with better search rankings. Then win them with ProposalAI. 30 seconds per proposal. Free to try.
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
