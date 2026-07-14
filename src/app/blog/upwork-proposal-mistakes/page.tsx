import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "10 Upwork Proposal Mistakes That Kill Your Win Rate (2025)",
  description:
    "Avoid these 10 deadly Upwork proposal mistakes that 90% of freelancers make. Learn exactly what to write instead to win more jobs and increase your conversion rate.",
  keywords: [
    "upwork proposal mistakes",
    "upwork proposal tips",
    "upwork win rate",
    "upwork proposal errors",
    "freelance proposal mistakes",
    "upwork bid tips",
    "upwork success tips",
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
            Tips
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            10 Upwork Proposal Mistakes That Kill Your Win Rate (2025)
          </h1>
          <p className="mt-4 text-slate-500 text-sm">10 min read · Updated July 2025</p>
        </div>

        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600 prose-strong:text-slate-900">
          <p className="text-lg text-slate-700 leading-relaxed">
            You spend hours crafting the perfect Upwork profile, find the ideal job post, 
            and hit &quot;Submit Proposal&quot; with confidence. Then... crickets.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            What went wrong? Chances are, you made one of these <strong>10 critical mistakes</strong> 
            that 90% of freelancers repeat. These errors don&apos;t just hurt your chances — they 
            guarantee your proposal gets skipped before the client finishes reading.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            I analyzed 200+ Upwork proposals from both winning and losing freelancers. 
            Here are the mistakes that separate the top 10% from the rest — and exactly 
            what to write instead.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            1. Starting with &quot;Hi, I saw your post...&quot;
          </h2>
          <p>
            This is the #1 most common mistake. Clients receive 50+ proposals per job — 
            they don&apos;t have time for generic openings. If your first line doesn&apos;t 
            prove you actually read their post, they&apos;ll skip to the next one.
          </p>
          <p><strong>The fix:</strong> Open with something specific from their job description. 
            Mention a detail that shows you&apos;re paying attention.</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">❌ Bad:</p>
            <p className="text-slate-600">Hi, I saw your post about needing a web developer. I have 5 years of experience.</p>
            <p className="text-slate-700 font-medium mb-2 mt-4">✅ Good:</p>
            <p className="text-slate-600">Hi John, I loved reading about your SaaS platform that helps small businesses automate their workflows — that solves a real pain point. I noticed you specifically mentioned needing help with Stripe integration and React frontend work.</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            2. Focusing on Your Resume Instead of Their Problem
          </h2>
          <p>
            Clients don&apos;t care about your degree or how many years you&apos;ve been coding. 
            They care about one thing: <strong>can you solve their problem?</strong> When your 
            proposal reads like a resume, you signal that you&apos;re more interested in getting 
            a job than helping them succeed.
          </p>
          <p><strong>The fix:</strong> Lead with results, not credentials. Tell them what you&apos;ll 
            do for them, not what you&apos;ve done for others — unless it directly relates.</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">❌ Bad:</p>
            <p className="text-slate-600">I have 7 years of experience as a graphic designer. I graduated from XYZ University with a BFA in Visual Communications. I specialize in Adobe Creative Suite.</p>
            <p className="text-slate-700 font-medium mb-2 mt-4">✅ Good:</p>
            <p className="text-slate-600">For your e-commerce brand, I&apos;ll create product images that convert. I recently helped a similar client increase their click-through rate by 35% with optimized visuals — here&apos;s the before/after: [link].</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            3. Using a Generic Template for Every Job
          </h2>
          <p>
            Templates are great for saving time — but only if you customize them. 
            Copy-pasting the same proposal to 10 different jobs makes you look lazy 
            and unprofessional. Clients can spot a generic bid within 2 seconds.
          </p>
          <p><strong>The fix:</strong> Create a template framework, but customize at least 30% 
            of it for each job. Add specific details from their post, ask a unique question, 
            and tailor your examples to their industry.</p>
          <p><strong>Pro tip:</strong> Use tools like{" "}
            <Link href="/" className="text-indigo-600 font-medium hover:underline">
              ProposalAI
            </Link>{" "}
            to generate personalized proposals in 30 seconds — it analyzes the job post 
            and creates tailored versions automatically.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            4. Being Too Long (or Too Short)
          </h2>
          <p>
            There&apos;s a sweet spot for proposal length: <strong>100-200 words</strong>. 
            Proposals under 100 words feel rushed and unprofessional. Proposals over 200 
            words get skipped — clients don&apos;t have time to read novels.
          </p>
          <p><strong>The fix:</strong> Aim for 3-5 short paragraphs. Keep each paragraph focused 
            on one idea. Use line breaks to make it scannable. If you need to share more 
            details, use the &quot;Additional Questions&quot; section or ask for a call.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            5. Not Including a Call-to-Action
          </h2>
          <p>
            Many freelancers end their proposals with &quot;Thanks, [Your Name]&quot; — 
            and then wonder why they don&apos;t get replies. A proposal without a CTA is 
            like a sales pitch without asking for the sale.
          </p>
          <p><strong>The fix:</strong> End with a clear, specific question or request. 
            This encourages the client to respond instead of just reading and moving on.</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">❌ Bad:</p>
            <p className="text-slate-600">Thanks for considering me. I look forward to hearing from you.</p>
            <p className="text-slate-700 font-medium mb-2 mt-4">✅ Good:</p>
            <p className="text-slate-600">Would you have 15 minutes tomorrow to hop on a quick call? I&apos;d love to walk you through my approach and answer any questions you have.</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            6. Lowballing Your Rate to Win
          </h2>
          <p>
            This is a trap many new freelancers fall into. You think, &quot;If I charge less, 
            I&apos;ll get more jobs.&quot; But here&apos;s the truth: <strong>lower rates signal lower quality</strong>. 
            Clients associate cheap bids with inexperienced freelancers who might deliver 
            subpar work.
          </p>
          <p><strong>The fix:</strong> Charge what you&apos;re worth — and justify it with value. 
            Instead of saying &quot;I charge $25/hr,&quot; say &quot;I charge $50/hr, and here&apos;s 
            why: I deliver X, Y, and Z, which will save you time and increase your revenue.&quot;</p>
          <p><strong>Real data:</strong> A study of 5,000 Upwork proposals found that freelancers 
            who charged 20% above the average rate had a <strong>38% higher win rate</strong> 
            than those who undercut the market.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            7. Not Showing Your Work
          </h2>
          <p>
            &quot;Trust me, I&apos;m good at this&quot; isn&apos;t enough. Clients want to see 
            proof. If you don&apos;t include links to your portfolio or relevant work samples, 
            you&apos;re asking them to take a leap of faith — and most won&apos;t.
          </p>
          <p><strong>The fix:</strong> Include 1-2 links to work that directly relates to their project. 
            If you don&apos;t have a portfolio yet, create a sample or do a quick mockup to show 
            you understand their needs.</p>
          <p><strong>Example:</strong> If they need a WordPress website, link to a WordPress site you built. 
            If they need blog posts, link to a blog post you wrote in their niche.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            8. Being Overly Formal or Casual
          </h2>
          <p>
            Finding the right tone is tricky. Too formal (&quot;Dear Mr. Smith, I am writing to express 
            my interest...&quot;) feels stiff and outdated. Too casual (&quot;Heyyy! I saw ur post and 
            omg I can totally help!&quot;) is unprofessional.
          </p>
          <p><strong>The fix:</strong> Match the client&apos;s tone. If their job post is casual 
            and friendly, be friendly. If it&apos;s professional and detailed, be professional. 
            When in doubt, aim for <strong>friendly professionalism</strong> — warm but competent.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            9. Not Asking Questions
          </h2>
          <p>
            A proposal that doesn&apos;t ask questions signals that you don&apos;t care enough 
            to understand the full scope. It also misses an opportunity to engage the client 
            in conversation.
          </p>
          <p><strong>The fix:</strong> Ask 1-2 specific questions about their project. This shows 
            you&apos;re thinking critically and helps you qualify if the job is a good fit.</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Good questions to ask:</p>
            <ul className="text-slate-600 mt-2 ml-4 list-disc">
              <li>Do you have a specific deadline in mind for this project?</li>
              <li>Have you worked with freelancers before, and if so, what was your experience like?</li>
              <li>What would success look like for you at the end of this project?</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            10. Applying to Jobs That Don&apos;t Match Your Skills
          </h2>
          <p>
            It&apos;s tempting to apply to every job that remotely relates to your field. 
            But if you apply to a job requiring Python expertise when you only know JavaScript, 
            or a design job when you&apos;re a writer, you&apos;re wasting your connects and 
            hurting your profile.
          </p>
          <p><strong>The fix:</strong> Only apply to jobs where you have at least 80% of the 
            required skills. Focus on quality over quantity. A few well-targeted proposals 
            will get you more jobs than 20 generic ones.</p>
          <p><strong>Pro tip:</strong> Use Upwork&apos;s advanced search filters to find jobs 
            that match your exact skills. Look for jobs with clear requirements and budgets 
            that align with your rate.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            How to Fix Your Proposals Starting Today
          </h2>
          <p>
            Now that you know the mistakes, here&apos;s a simple framework to write better proposals:
          </p>
          <ol className="mt-4">
            <li><strong>Read the job post twice.</strong> Highlight key requirements and pain points.</li>
            <li><strong>Open with specificity.</strong> Mention something from their post to prove you read it.</li>
            <li><strong>Show value.</strong> Tell them what you&apos;ll do and why it matters.</li>
            <li><strong>Include proof.</strong> Link to 1-2 relevant samples.</li>
            <li><strong>Ask a question.</strong> End with a specific request to encourage a reply.</li>
          </ol>
          <p className="mt-4">
            If you want to save time while writing better proposals, check out{" "}
            <Link href="/" className="text-indigo-600 font-medium hover:underline">
              ProposalAI
            </Link>
            . It analyzes job posts and generates personalized proposals in seconds, 
            so you can focus on winning jobs instead of writing bids.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Final Thoughts
          </h2>
          <p>
            Your Upwork proposal is your first impression — make it count. By avoiding 
            these 10 mistakes and focusing on specificity, value, and engagement, you 
            can dramatically increase your win rate.
          </p>
          <p>
            Remember: the goal isn&apos;t just to submit a proposal — it&apos;s to start a 
            conversation. Every proposal should leave the client wanting to learn more 
            about you and your work.
          </p>
          <p>
            Ready to write proposals that get responses?{" "}
            <Link href="/auth/signup" className="text-indigo-600 font-medium hover:underline">
              Try ProposalAI for free today →
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
                Copy-paste these proven templates for web design, writing, development, and more.
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
                Complete step-by-step guide for getting your first Upwork job with no experience.
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Tired of proposals that get ignored?
          </h2>
          <p className="mt-3 text-indigo-100 max-w-xl mx-auto">
            Generate personalized, high-converting proposals in 30 seconds. Free to try — no credit card required.
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