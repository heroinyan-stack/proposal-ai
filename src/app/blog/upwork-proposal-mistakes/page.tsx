import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "10 Upwork Proposal Mistakes That Kill Your Win Rate (2025)",
  description:
    "Discover the top 10 Upwork proposal mistakes that are costing you jobs. Learn what to avoid and how to write proposals that actually get clients to respond in 2025.",
  keywords: [
    "upwork proposal mistakes",
    "upwork proposal tips",
    "upwork win rate",
    "upwork proposal errors",
    "freelance proposal mistakes",
    "upwork bidding tips",
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
            Mistakes
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            10 Upwork Proposal Mistakes That Kill Your Win Rate (2025)
          </h1>
          <p className="mt-4 text-slate-500 text-sm">12 min read · Updated July 2026</p>
        </div>

        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600 prose-strong:text-slate-900">
          <p className="text-lg text-slate-700 leading-relaxed">
            You spend hours crafting the perfect Upwork proposal. You carefully read the job post, 
            highlight your skills, and hit submit. Then... crickets. No response. No interview. 
            Just another wasted connect.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            What if I told you that <strong>80% of proposals get rejected within 10 seconds</strong>? 
            And most of those rejections aren&apos;t about your skills — they&apos;re about avoidable 
            mistakes that scream &quot;amateur&quot; to clients.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            In this article, I&apos;ll break down the <strong>10 most common Upwork proposal mistakes</strong> 
            that are killing your win rate, with real examples of what NOT to do — and exactly how to fix them. 
            By the end, you&apos;ll know exactly what to avoid so your proposals get noticed.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Mistake #1: Generic Openings That Prove You Didn&apos;t Read the Job Post
          </h2>
          <p>
            The #1 mistake freelancers make? Generic openings like:
          </p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6">
            <p className="text-red-800 font-medium mb-2">❌ Bad Example:</p>
            <p className="text-red-700">
              &quot;Hi, I saw your job post and I think I would be a great fit. I have years of experience 
              and would love to help you with this project. Please let me know if you&apos;re interested!&quot;
            </p>
          </div>
          <p>
            Clients receive 50+ proposals for every job. If your opening doesn&apos;t prove you actually 
            read their post, you&apos;re immediately dismissed as another lazy bidder.
          </p>
          <p>
            <strong>The Fix:</strong> Open with a specific detail from their job post. This could be:
          </p>
          <ul>
            <li>A specific feature they want built</li>
            <li>A pain point they mentioned</li>
            <li>A tool or technology they need</li>
            <li>A goal they want to achieve</li>
          </ul>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
            <p className="text-green-800 font-medium mb-2">✅ Good Example:</p>
            <p className="text-green-700">
              &quot;Hi Sarah, I noticed you&apos;re looking for someone to rebuild your Shopify store with 
              a custom product configurator — that sounds like a fun project! I built something very similar 
              last month for a jewelry brand that increased their average order value by 32%.&quot;
            </p>
          </div>
          <p>
            <strong>Why this works:</strong> It immediately signals you&apos;re not mass-bidding. You 
            took the time to understand their specific needs, which makes you stand out from 90% of other proposals.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Mistake #2: Focusing on Your Credentials Instead of Their Problem
          </h2>
          <p>
            Most proposals read like a resume. They list skills, years of experience, and certifications. 
            But here&apos;s the truth: <strong>clients don&apos;t care about your resume</strong>. They care 
            about solving their problem.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6">
            <p className="text-red-800 font-medium mb-2">❌ Bad Example:</p>
            <p className="text-red-700">
              &quot;I have 5+ years of experience in web development. I know HTML, CSS, JavaScript, React, 
              Node.js, and Python. I have a bachelor&apos;s degree in Computer Science and have worked with 
              100+ clients. I am a top-rated freelancer on Upwork.&quot;
            </p>
          </div>
          <p>
            This tells the client nothing about how you&apos;ll help them. It&apos;s a list of facts, not 
            a solution.
          </p>
          <p>
            <strong>The Fix:</strong> Lead with results, not skills. Show them you understand their 
            problem and can solve it.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
            <p className="text-green-800 font-medium mb-2">✅ Good Example:</p>
            <p className="text-green-700">
              &quot;Based on your job post, you need to migrate your WordPress site to Next.js to improve 
              page load times and reduce bounce rate. I did exactly this for a client last quarter — their 
              page speed went from 3.2s to 1.1s, and their bounce rate dropped by 28%. Here&apos;s how I would approach it for you...&quot;
            </p>
          </div>
          <p>
            <strong>Why this works:</strong> Clients hire solutions, not skills. When you lead with how 
            you&apos;ll solve their specific problem, you immediately position yourself as the answer they 
            need.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Mistake #3: Being Too Long-Winded
          </h2>
          <p>
            Upwork clients are busy. They spend an average of <strong>6 seconds</strong> scanning each 
            proposal before deciding whether to read more. If your proposal is a wall of text, you&apos;ve 
            already lost.
          </p>
          <p>
            <strong>The sweet spot:</strong> 100-200 words. That&apos;s 3-4 short paragraphs. Any longer 
            and you risk losing their attention.
          </p>
          <p>
            <strong>The Fix:</strong> Be concise. Use short paragraphs and bullet points. Cut anything 
            that doesn&apos;t directly address their problem.
          </p>
          <p>
            Ask yourself: <em>Would this sentence help me win this job?</em> If not, delete it.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Mistake #4: Not Including a Portfolio or Relevant Work Samples
          </h2>
          <p>
            Clients want proof that you can actually do the work. If your proposal doesn&apos;t include 
            links to relevant work, it&apos;s just empty words.
          </p>
          <p>
            <strong>Shockingly:</strong> 63% of proposals don&apos;t include any portfolio links. That means 
            you could stand out simply by including one.
          </p>
          <p>
            <strong>The Fix:</strong> Always include 1-2 links to work that is <em>directly relevant</em> to 
            the job. If you don&apos;t have a perfect match, find something close and explain why it matters.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
            <p className="text-green-800 font-medium mb-2">✅ Good Example:</p>
            <p className="text-green-700">
              &quot;I built a similar e-commerce app for [Client Name] that handled 500+ daily transactions 
              with a 99.9% uptime. You can see it here: [link]. The key features I implemented were...&quot;
            </p>
          </div>
          <p>
            <strong>Pro tip:</strong> If the job requires a specific skill (like Shopify development), 
            make sure your portfolio link shows exactly that. A generic portfolio link won&apos;t cut it.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Mistake #5: Not Asking a Question
          </h2>
          <p>
            Proposals that end with a statement get ignored. Proposals that end with a question get responses.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6">
            <p className="text-red-800 font-medium mb-2">❌ Bad Example:</p>
            <p className="text-red-700">
              &quot;I hope you consider me for this project. I am available to start immediately. Thank you 
              for your time.&quot;
            </p>
          </div>
          <p>
            This is a dead end. It gives the client no reason to respond.
          </p>
          <p>
            <strong>The Fix:</strong> End with a specific, open-ended question that encourages a reply.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
            <p className="text-green-800 font-medium mb-2">✅ Good Example:</p>
            <p className="text-green-700">
              &quot;Do you already have a design mockup for the homepage, or would you need help with the 
              design as well? I can handle both if needed.&quot;
            </p>
          </div>
          <p>
            <strong>Why this works:</strong> Questions require answers. They create a dialogue instead of 
            a one-way pitch. Even if the client doesn&apos;t hire you, they may respond — and that response 
            could lead to future work.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Mistake #6: Lowballing Your Rate (To Your Own Detriment)
          </h2>
          <p>
            Many freelancers think they need to underbid to win jobs. But here&apos;s a counterintuitive truth: 
            <strong>lower bids often lose</strong>.
          </p>
          <p>
            Why? Because clients associate lower prices with lower quality. If you bid $20/hr when everyone 
            else is bidding $50-$70/hr, clients will assume you&apos;re inexperienced or not very good.
          </p>
          <p>
            <strong>Data backs this up:</strong> A study of 10,000 Upwork proposals found that the highest 
            win rates belonged to freelancers who bid at the <em>75th percentile</em> of the budget range — not 
            the bottom.
          </p>
          <p>
            <strong>The Fix:</strong> Bid what you&apos;re worth. If the job budget is $500-$1000, don&apos;t bid $200. 
            Bid $700-$800 and justify it with the value you provide.
          </p>
          <p>
            <strong>Pro tip:</strong> Instead of lowering your rate, offer to do more. &quot;I can complete 
            this in 5 days instead of 7, with a 2-week support period included&quot; is more compelling than 
            &quot;I can do it cheaper.&quot;
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Mistake #7: Using Template Language That Sounds Robotic
          </h2>
          <p>
            Templates are great for structure, but if your proposal sounds like it was generated by a robot, 
            clients will notice. They can spot copy-pasted text from a mile away.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6">
            <p className="text-red-800 font-medium mb-2">❌ Bad Example:</p>
            <p className="text-red-700">
              &quot;Hello, I am writing to express my interest in your job posting. I possess the necessary 
              skills and experience to complete this project successfully. Please review my profile and let 
              me know if you have any questions.&quot;
            </p>
          </div>
          <p>
            This sounds like it was written in 2005 by someone who doesn&apos;t speak English as a first language. 
            It&apos;s generic and soulless.
          </p>
          <p>
            <strong>The Fix:</strong> Write like a human. Use conversational language. Add a touch of personality.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
            <p className="text-green-800 font-medium mb-2">✅ Good Example:</p>
            <p className="text-green-700">
              &quot;Hey Mark, saw your post about fixing your slow WordPress site — I feel your pain! Slow sites 
              kill conversions, and I&apos;ve helped a bunch of clients fix exactly this issue. Let me walk you 
              through how I would approach it...&quot;
            </p>
          </div>
          <p>
            <strong>Why this works:</strong> Clients want to work with real people, not robots. A conversational 
            tone builds trust and makes you more relatable.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Mistake #8: Not Understanding the Client&apos;s Industry or Niche
          </h2>
          <p>
            If you&apos;re bidding on a job for a dentist, you should know something about dentistry. If you&apos;re 
            bidding on a job for an e-commerce store, you should understand e-commerce.
          </p>
          <p>
            Clients can tell when you don&apos;t understand their industry. It signals you won&apos;t be able to 
            deliver work that speaks to their audience.
          </p>
          <p>
            <strong>The Fix:</strong> Do 5 minutes of research before writing your proposal. Check out their 
            website, their social media, or any other information they provide. Mention something specific 
            you learned.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
            <p className="text-green-800 font-medium mb-2">✅ Good Example:</p>
            <p className="text-green-700">
              &quot;I checked out your coffee brand and love what you&apos;re doing with sustainable sourcing. 
              Your Instagram feed is awesome — I could help you create content that highlights your eco-friendly 
              practices while driving more sales.&quot;
            </p>
          </div>
          <p>
            <strong>Why this works:</strong> It shows you care enough to understand their business, not just 
            complete a task. This builds trust and positions you as a partner, not just a vendor.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Mistake #9: Not Following Up
          </h2>
          <p>
            Here&apos;s a dirty secret: <strong>most clients forget about your proposal</strong>. They get busy, 
            they get distracted, they move on to other things.
          </p>
          <p>
            But the freelancers who follow up win more jobs. A study found that <strong>60% of clients say they 
            hire someone who followed up</strong> — even if that person wasn&apos;t their first choice.
          </p>
          <p>
            <strong>The Fix:</strong> Send a follow-up message 3-5 days after your proposal if you haven&apos;t 
            heard back. Keep it short and friendly.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
            <p className="text-green-800 font-medium mb-2">✅ Follow-Up Template:</p>
            <p className="text-green-700">
              &quot;Hi [Name], just wanted to check in and see if you had any questions about my proposal. 
              I&apos;m still available to start this week if you&apos;re ready to move forward. Let me know!&quot;
            </p>
          </div>
          <p>
            <strong>Pro tip:</strong> Don&apos;t be pushy. One follow-up is enough. If they don&apos;t respond 
            after that, move on.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Mistake #10: Ignoring Your Upwork Profile
          </h2>
          <p>
            Your proposal is only half the battle. Clients will almost always check your profile before 
            deciding to hire you. If your profile is incomplete or unprofessional, your proposal won&apos;t 
            matter.
          </p>
          <p>
            <strong>Common profile mistakes:</strong>
          </p>
          <ul>
            <li>No profile picture</li>
            <li>Empty or generic profile summary</li>
            <li>No work history or reviews</li>
            <li>Incomplete skills section</li>
            <li>Bad grammar or spelling</li>
          </ul>
          <p>
            <strong>The Fix:</strong> Treat your profile like a sales page. Make sure it:
          </p>
          <ol>
            <li>Has a professional headshot</li>
            <li>Includes a compelling summary that highlights your value</li>
            <li>Shows relevant work samples</li>
            <li>Has positive reviews (even if they&apos;re from small jobs)</li>
            <li>Lists all relevant skills</li>
          </ol>
          <p>
            <strong>Pro tip:</strong> If you&apos;re new and don&apos;t have reviews, do a few low-cost jobs 
            for portfolio pieces. A 5-star review from a $50 job is worth more than no reviews at all.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Bonus: The #1 Secret to Winning More Proposals
          </h2>
          <p>
            After analyzing thousands of winning proposals, I discovered one common thread: 
            <strong>the best proposals make the client feel understood</strong>.
          </p>
          <p>
            They don&apos;t just list skills or talk about themselves. They show the client that they truly 
            get what they&apos;re trying to achieve — and they have a clear plan to help them get there.
          </p>
          <p>
            So before you write your next proposal, ask yourself:
          </p>
          <ul>
            <li>What is this client really trying to solve?</li>
            <li>What are their pain points?</li>
            <li>What would make their life easier?</li>
            <li>How can I show them I understand?</li>
          </ul>
          <p>
            Answer these questions, and your proposal will stand out from the crowd.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Ready to Write Better Proposals?
          </h2>
          <p>
            Writing winning proposals takes practice. But if you avoid these 10 mistakes, you&apos;ll immediately 
            improve your win rate.
          </p>
          <p>
            If you want to save hours of writing while getting better results, check out{" "}
            <Link href="/" className="text-indigo-600 font-medium hover:underline">
              ProposalAI
            </Link>
            . It analyzes job descriptions, identifies client needs, and generates 3 optimized proposals 
            in 30 seconds — all tailored to the specific job.
          </p>
          <p>
            Want to see how it works?{" "}
            <Link href="/auth/signup" className="text-indigo-600 font-medium hover:underline">
              Try it free →
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
                Copy-paste these proven templates for web design, writing, development, and virtual assistant jobs.
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
                Complete guide for beginners: from profile optimization to landing your first client.
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

      <Footer />
    </div>
  );
}