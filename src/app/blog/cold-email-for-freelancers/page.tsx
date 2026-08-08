import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

const slug = "cold-email-for-freelancers";

export function generateMetadata(): Metadata {
  return {
    title: "Cold Email Templates for Freelancers: Get Clients Without Platforms (2025)",
    description:
      "Learn how to write cold emails that land freelance clients. Includes 7 proven templates, personalization techniques, and outreach strategies to win high-paying work without Upwork or Fiverr.",
    keywords: [
      "cold email templates freelancers",
      "freelance cold outreach",
      "get freelance clients without platforms",
      "freelance cold email",
      "how to find freelance clients",
      "freelance outreach templates",
      "pitch freelance services via email",
    ],
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: "Cold Email Templates for Freelancers: Get Clients Without Platforms (2025)",
      description:
        "Learn how to write cold emails that land freelance clients. Includes 7 proven templates, personalization techniques, and outreach strategies.",
      type: "article",
      url: `https://proposalai.top/blog/${slug}`,
      siteName: "ProposalAI",
      publishedTime: "2025-08-08",
      authors: ["ProposalAI Team"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Cold Email Templates for Freelancers: Get Clients Without Platforms (2025)",
      description:
        "Learn how to write cold emails that land freelance clients. Includes 7 proven templates, personalization techniques, and outreach strategies.",
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

      <article className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="mb-8">
          <span className="text-sm font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
            Outreach
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Cold Email Templates for Freelancers: Get Clients Without Platforms (2025)
          </h1>
          <p className="mt-4 text-slate-500 text-sm">12 min read · Updated August 2025</p>
        </div>

        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600 prose-strong:text-slate-900">
          <p className="text-lg text-slate-700 leading-relaxed">
            Upwork and Fiverr are great for getting started, but the truth is: the highest-paying freelance
            work rarely comes through platforms. The freelancers making $150K+ per year aren&apos;t bidding
            on job boards — they&apos;re finding clients directly through cold email outreach.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            When you work with clients directly (instead of through a platform), you keep <strong>100% of
            your earnings</strong>, set your own terms, and build long-term relationships that generate
            recurring revenue. But cold emailing is intimidating for most freelancers. Where do you start?
            What do you say? And how do you avoid getting ignored or marked as spam?
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            In this guide, I&apos;m sharing <strong>7 battle-tested cold email templates</strong> used by
            top-earning freelancers, along with the psychology, structure, and personalization techniques
            that make them work. Whether you&apos;re a web developer, writer, designer, or consultant, these
            templates will help you land direct clients consistently.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Why Cold Email Works (When Done Right)
          </h2>
          <p>
            Before we get to the templates, let&apos;s address the elephant in the room: is cold email still
            effective in 2025? The answer is <strong>yes — if you do it well</strong>. Here&apos;s why:
          </p>
          <ul>
            <li><strong>Less competition.</strong> While Upwork has 50+ freelancers per job posting, your cold email might be the <em>only</em> one that reaches the right person.</li>
            <li><strong>Better rates.</strong> Direct clients typically pay <strong>2–3x more</strong> than platform clients because there&apos;s no middleman fee and less price competition.</li>
            <li><strong>Long-term relationships.</strong> Cold email outreach starts a conversation that can turn into monthly retainers, referrals, and recurring work for years.</li>
            <li><strong>Builds your brand.</strong> Every email you send plants a seed. Even if a client doesn&apos;t respond now, they might remember you when they have a need.</li>
          </ul>
          <p>
            The key is doing it <em>right</em> — not spamming. Let&apos;s cover the fundamentals first.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            The Cold Email Fundamentals That Get Replies
          </h2>
          <p>
            Every winning cold email follows these 5 principles. Skip any of them, and your response rate
            will plummet.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            1. Research Before You Write
          </h3>
          <p>
            The #1 mistake freelancers make is sending the same email to 100 people. Before writing a single
            word, spend 3–5 minutes researching:
          </p>
          <ul>
            <li>What does the company do?</li>
            <li>What&apos;s their current pain point that you could solve?</li>
            <li>Who&apos;s the right person to contact (not a generic inbox)?</li>
            <li>Did they recently launch something, hire someone, or post a job?</li>
          </ul>
          <p>
            A quick look at their website, LinkedIn, and recent blog posts will give you everything you need
            to personalize your email. This single step increases response rates by <strong>4–5x</strong>.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            2. Keep It Short (Very Short)
          </h3>
          <p>
            Business decision-makers get 100+ emails per day. If your email is longer than 150 words, it
            will be deleted. The optimal length is <strong>80–120 words</strong>. That&apos;s it.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            3. Focus on Their Problem, Not Your Skills
          </h3>
          <p>
            Your email is not a resume. It&apos;s a sales pitch. Nobody cares that you&apos;re a &quot;passionate
            freelancer with 5 years of experience.&quot; They care that you can solve a specific problem
            <em>they&apos;re facing right now</em>.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            4. End With a Specific, Low-Effort Ask
          </h3>
          <p>
            Don&apos;t ask for a 30-minute call. Ask for a 5-minute chat. Don&apos;t ask them to review your
            portfolio. Ask them if they&apos;re open to a quick conversation. The lower the barrier, the
            higher the response rate.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            5. Follow Up (But Don&apos;t Be Annoying)
          </h3>
          <p>
            <strong>80% of successful cold email campaigns require at least one follow-up</strong>. Most freelancers
            give up after sending one email. Send 2 more follow-ups spaced 3–5 days apart, then stop. If
            they haven&apos;t responded after 3 emails, move on.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 1: The Compliment + Specific Insight Approach
          </h2>
          <p>
            <strong>Best for:</strong> Web designers, brand designers, social media experts, SEO specialists
          </p>
          <p>
            This template works because it opens with a genuine compliment, then follows with a specific,
            actionable observation. It shows you&apos;re not spamming — you&apos;re paying attention.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Subject: Quick thought about your [specific content/product]</p>
            <p className="text-slate-600">Hi [First name],</p>
            <p className="text-slate-600 mt-3">
              I came across your [product launch / recent blog post / new landing page] and thought it was
              really [specific adjective — &quot;smart&quot; / &quot;well-executed&quot; / &quot;fresh&quot;]. The
              [specific detail — e.g., &quot;onboarding flow&quot; / &quot;messaging about X feature&quot;] was
              especially well done.
            </p>
            <p className="text-slate-600 mt-3">
              That said, I noticed one thing that could potentially help [Company] move faster: [specific,
              non-critical observation — e.g., &quot;your checkout process has 6 steps that could be reduced
              to 4&quot; / &quot;your meta descriptions are a bit short for featured snippet opportunities&quot;].
            </p>
            <p className="text-slate-600 mt-3">
              I&apos;ve helped [similar company] with this exact issue, and we saw [specific result — e.g.,
              &quot;a 23% increase in checkout conversions&quot; / &quot;page 1 rankings for 12 target keywords&quot;].
            </p>
            <p className="text-slate-600 mt-3">
              Would you have 5 minutes this week for a quick chat? No pressure — just happy to share what
              worked for us.
            </p>
            <p className="text-slate-600 mt-3">Best,<br />[Your name]</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 2: The Problem-Solution Approach
          </h2>
          <p>
            <strong>Best for:</strong> Business consultants, writers, developers, data analysts, VA services
          </p>
          <p>
            This template identifies a common pain point the client likely faces, then positions yourself
            as the solution.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Subject: [Company] — how to [solve specific problem]</p>
            <p className="text-slate-600">Hi [First name],</p>
            <p className="text-slate-600 mt-3">
              I work with [industry/type of clients] on [specific problem — e.g., &quot;reducing time spent
              on administrative tasks&quot; / &quot;improving email open rates&quot; / &quot;streamlining
              their product development workflow&quot;].
            </p>
            <p className="text-slate-600 mt-3">
              Based on what&apos;s visible on [Company&apos;s website / LinkedIn / recent launch], it looks
              like this might be an area where you could use help. [Optional specific observation: &quot;I
              noticed you&apos;re currently doing X, which is common but creates Y inefficiency.&quot;]
            </p>
            <p className="text-slate-600 mt-3">
              I recently helped [similar company] go from [before state] to [after state] in just [timeframe].
              Here&apos;s a quick case study: [1-sentence link to case study or portfolio piece].
            </p>
            <p className="text-slate-600 mt-3">
              I have a few slots available next month. Would it make sense to hop on a 10-minute call to
              see if this is a fit?
            </p>
            <p className="text-slate-600 mt-3">Cheers,<br />[Your name]</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 3: The Value-Upfront Approach
          </h2>
          <p>
            <strong>Best for:</strong> SEO consultants, content marketers, UX designers, conversion rate
            optimization specialists
          </p>
          <p>
            This template gives away a <em>specific, actionable piece of value</em> in the first email. It&apos;s
            the most effective approach for service-based businesses because it demonstrates your expertise
            immediately.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Subject: 3 quick wins for [Company]</p>
            <p className="text-slate-600">Hi [First name],</p>
            <p className="text-slate-600 mt-3">
              I took a quick look at [Company&apos;s website / product / LinkedIn profile] and spotted 3
              opportunities that could move the needle for you:
            </p>
            <ol className="text-slate-600 mt-2 ml-4 list-decimal">
              <li><strong>[Specific finding #1]</strong> — this could add [X]% more [traffic / conversions / engagement]</li>
              <li><strong>[Specific finding #2]</strong> — fixing this is low-effort, high-impact</li>
              <li><strong>[Specific finding #3]</strong> — easy win with immediate results</li>
            </ol>
            <p className="text-slate-600 mt-3">
              I&apos;ve worked with [similar clients] on exactly these kinds of improvements. We typically
              see [specific metric — e.g., &quot;30–40% improvement in the first month&quot;].
            </p>
            <p className="text-slate-600 mt-3">
              Would you be open to a quick 5-minute call next week? I can walk through these findings in
              more detail and suggest an approach.
            </p>
            <p className="text-slate-600 mt-3">Thanks,<br />[Your name]</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 4: The Referral Introduction Approach
          </h2>
          <p>
            <strong>Best for:</strong> When you have a mutual connection or someone who can introduce you
          </p>
          <p>
            If you know someone who works at the target company, or you have a mutual connection, this is
            your most powerful asset. A warm introduction is <strong>10x more effective</strong> than a cold
            email.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Subject: Introduction — [Mutual contact] suggested we connect</p>
            <p className="text-slate-600">Hi [First name],</p>
            <p className="text-slate-600 mt-3">
              [Mutual contact&apos;s name] suggested I reach out — they mentioned you&apos;re looking to
              [specific need, e.g., &quot;improve your website&apos;s performance&quot; / &quot;hire a
              content writer for your blog&quot; / &quot;find help with your email campaigns&quot;].
            </p>
            <p className="text-slate-600 mt-3">
              I&apos;ve been helping [companies in their industry / businesses at their stage] with [service]
              for the past [timeframe], and [mutual contact] thought my experience with [specific skill/result]
              might be valuable to you.
            </p>
            <p className="text-slate-600 mt-3">
              I&apos;d love to chat for 10 minutes about what you&apos;re working on and see if there&apos;s
              a potential fit. Would [specific day] at [time] work?
            </p>
            <p className="text-slate-600 mt-3">Best,<br />[Your name]</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 5: The Follow-Up Sequence
          </h2>
          <p>
            <strong>Best for:</strong> Following up after an initial cold email with no response
          </p>
          <p>
            As mentioned earlier, most people won&apos;t reply to your first email. That&apos;s normal.
            Don&apos;t get discouraged. Here&apos;s a 2-email follow-up sequence that gets results:
          </p>
          <p className="font-medium text-slate-900">Follow-Up Email #1 (3 days after first email):</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Subject: Re: Quick thought about your [specific topic]</p>
            <p className="text-slate-600">Hi [First name],</p>
            <p className="text-slate-600 mt-3">
              Just following up on my earlier note. I know things get busy!
            </p>
            <p className="text-slate-600 mt-3">
              I wanted to add one quick thing: I recently created a free resource that might be useful for
              your team — [1-sentence description of free resource, e.g., &quot;a checklist for landing
              page optimization&quot; / &quot;a guide to writing better product descriptions&quot;]. I&apos;ll
              send it over if you&apos;d like to take a look.
            </p>
            <p className="text-slate-600 mt-3">
              Just reply with &quot;send it&quot; and I&apos;ll get it over to you. Or if now&apos;s not
              a good time, just let me know and I&apos;ll circle back in a month.
            </p>
            <p className="text-slate-600 mt-3">Cheers,<br />[Your name]</p>
          </div>
          <p className="font-medium text-slate-900">Follow-Up Email #2 (5 days after first follow-up):</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Subject: Last try — hope I&apos;m not bothering you</p>
            <p className="text-slate-600">Hi [First name],</p>
            <p className="text-slate-600 mt-3">
              Sorry for the multiple messages — I wanted to make sure this didn&apos;t get lost in your inbox.
            </p>
            <p className="text-slate-600 mt-3">
              I understand if the timing isn&apos;t right, but I&apos;ll leave you with this: I recently
              helped [company at a similar stage] [achieve specific result] — and I&apos;d love to see
              if I could help [Company] do the same.
            </p>
            <p className="text-slate-600 mt-3">
              If this is something you&apos;d like to explore, I&apos;m happy to work around your schedule.
              If not, no hard feelings at all — I&apos;ll keep an eye on [Company] and reach out again
              when the timing is better.
            </p>
            <p className="text-slate-600 mt-3">All the best,<br />[Your name]</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 6: The LinkedIn-Integrated Approach
          </h2>
          <p>
            <strong>Best for:</strong> LinkedIn outreach that converts to email conversations
          </p>
          <p>
            Sometimes the best approach is to combine LinkedIn and email. Connect with the person on LinkedIn
            first, send a brief note there, then follow up with a more detailed email.
          </p>
          <p className="font-medium text-slate-900">LinkedIn connection note:</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-600">
              Hi [First name], I love what [Company] is doing with [specific initiative]. I help [similar
              companies] with [your service] and would love to share some ideas that might be helpful.
              Mind if we connect?
            </p>
          </div>
          <p className="font-medium text-slate-900">Email after connecting:</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Subject: Ideas for [Company] — following up from LinkedIn</p>
            <p className="text-slate-600">Hi [First name],</p>
            <p className="text-slate-600 mt-3">
              Thanks for connecting! As I mentioned on LinkedIn, I&apos;ve been working with [industry]
              companies to [specific result — e.g., &quot;improve their conversion rates&quot; / &quot;grow
              their organic traffic&quot; / &quot;streamline their operations&quot;].
            </p>
            <p className="text-slate-600 mt-3">
              I noticed [specific thing about their company] and had a few thoughts I thought might be
              valuable. Would you be open to a 10-minute call this week? I can share 3 quick wins that
              could help [Company] right now.
            </p>
            <p className="text-slate-600 mt-3">Looking forward to it,<br />[Your name]</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 7: The Cold-Call + Email Hybrid
          </h2>
          <p>
            <strong>Best for:</strong> Higher-ticket services ($5K+ projects, retainers, consulting engagements)
          </p>
          <p>
            For larger projects, combining a brief voicemail with a follow-up email can be very effective.
            The voicemail creates a human connection, and the email provides the details.
          </p>
          <p className="font-medium text-slate-900">Voicemail script (30 seconds max):</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-600">
              &quot;Hi [First name], this is [Your name]. I work with [industry] companies to [specific
              result — e.g., &quot;double their qualified leads&quot; / &quot;cut operational costs by 30%&quot;].
              I noticed [Company] recently did [specific thing] and had an idea I thought you&apos;d find
              valuable. I&apos;ll send you a quick email with the details — would love to chat soon. Thanks!&quot;
            </p>
          </div>
          <p className="font-medium text-slate-900">Follow-up email:</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Subject: Voicemail follow-up — [specific idea] for [Company]</p>
            <p className="text-slate-600">Hi [First name],</p>
            <p className="text-slate-600 mt-3">
              Thanks for taking my call. As I mentioned, I noticed [specific observation about their business]
              and had an idea that could help [Company] [specific improvement].
            </p>
            <p className="text-slate-600 mt-3">
              Here&apos;s a quick overview of what I&apos;d suggest:
            </p>
            <ul className="text-slate-600 mt-2 ml-4 list-disc">
              <li>[Point 1 — specific action]</li>
              <li>[Point 2 — specific action]</li>
              <li>[Point 3 — expected result]</li>
            </ul>
            <p className="text-slate-600 mt-3">
              I helped [similar company] implement this approach, and we saw [specific result] within [timeframe].
              I&apos;d love to walk you through the details — would tomorrow at 2pm work for a quick call?
            </p>
            <p className="text-slate-600 mt-3">Best,<br />[Your name]</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            7 Pro Tips to Boost Your Cold Email Response Rate
          </h2>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            1. Use the Client&apos;s Name in the Subject Line
          </h3>
          <p>
            Personalized subject lines with the recipient&apos;s name have a <strong>26% higher open rate</strong>.
            Try: &quot;Quick question, Sarah&quot; or &quot;Thoughts on your recent launch, Mark.&quot;
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            2. Send From a Real Person, Not a Generic Email
          </h3>
          <p>
            Emails from addresses like <strong>john@yourdomain.com</strong> have double the response rate
            compared to <strong>hello@yourdomain.com</strong>. People reply to people, not info addresses.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            3. Time It Right
          </h3>
          <p>
            Send your emails <strong>Tuesday–Thursday between 9–11am or 2–4pm</strong> in the recipient&apos;s
            timezone. Monday inboxes are full, and people start checking out on Friday afternoons.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            4. Avoid Spam Triggers
          </h3>
          <p>
            Don&apos;t use all caps, excessive exclamation points, spammy phrases like &quot;ACT NOW&quot;
            or &quot;LIMITED TIME.&quot; Keep your subject line under 50 characters and write like a real
            person.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            5. Test, Measure, and Iterate
          </h3>
          <p>
            Try different subject lines, opening lines, and calls to action. Track open rates, response
            rates, and conversion rates. A/B test your top 2–3 versions and double down on what works.
            Most freelancers who do this see their response rates climb from <strong>2% to 10%+</strong>{" "}
            within 4 weeks.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            6. Track Opens with a Lightweight Tool
          </h3>
          <p>
            Tools like <strong>Mailtrack</strong>, <strong>Yesware</strong>, or <strong>Streak</strong> let
            you see when someone opens your email. This is incredibly valuable because you can follow up
            strategically — if someone opened your email but didn&apos;t reply, that&apos;s a warm lead
            worth a follow-up.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            7. Don&apos;t Forget to Add Value
          </h3>
          <p>
            Every email you send should provide <em>actual value</em> — even if they don&apos;t hire you.
            Share a useful resource, a relevant insight, or a complimentary audit. When you lead with value,
            people naturally want to work with you.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            The Cold Email Outreach Checklist
          </h2>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-6">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span>Research the company and the specific contact before writing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span>Email is 80–120 words with a clear, specific value proposition</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span>Subject line includes recipient&apos;s name or a specific observation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span>Ends with a low-effort ask (5-minute call, not 30 minutes)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span>Follows up 2x at 3–5 day intervals before stopping</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span>Sent Tuesday–Thursday, 9–11am or 2–4pm recipient timezone</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span>Provides value (insight, resource, audit) before asking for anything</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span>No spam triggers: no ALL CAPS, no excessive punctuation</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Write Better Cold Emails, Faster
          </h2>
          <p>
            Writing personalized cold emails one at a time is slow — especially when you&apos;re also
            managing client work. That&apos;s where <Link href="/" className="text-indigo-600 font-medium hover:underline">
            ProposalAI
          </Link> comes in.
          </p>
          <p>
            While ProposalAI is best known for generating winning Upwork and Fiverr proposals, it also
            generates high-impact cold outreach emails. Just tell it your target client type, their likely
            pain points, and your service offering — and it creates 3 tailored versions in 30 seconds.
          </p>
          <p>
            Save hours of writing, increase your response rate, and start landing the direct clients
            you&apos;ve always wanted. Check out our <Link href="/pricing" className="text-indigo-600 font-medium hover:underline">
            pricing plans
          </Link> or <Link href="/auth/signup" className="text-indigo-600 font-medium hover:underline">
            try it free
          </Link> — no credit card required.
          </p>
          <p>
            For more strategies on landing and winning freelance work, check out:
          </p>
          <ul>
            <li>
              <Link href="/blog/freelance-pricing-strategies" className="text-indigo-600 font-medium hover:underline">
                Freelance Pricing Strategies: How to Charge What You&apos;re Worth
              </Link>{" "}
              — build your pricing strategy to command premium rates
            </li>
            <li>
              <Link href="/blog/upwork-proposal-mistakes" className="text-indigo-600 font-medium hover:underline">
                10 Upwork Proposal Mistakes That Kill Your Win Rate
              </Link>{" "}
              — what to avoid on platforms when you&apos;re not doing cold outreach
            </li>
          </ul>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Keep Reading</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/blog/freelance-pricing-strategies"
              className="group block bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                Business
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                Freelance Pricing Strategies: How to Charge What You&apos;re Worth
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Stop undercharging and start commanding premium rates. Learn value-based pricing, tiered packages, and negotiation tactics.
              </p>
            </Link>
            <Link
              href="/blog/upwork-proposal-mistakes"
              className="group block bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                Strategy
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                10 Upwork Proposal Mistakes That Kill Your Win Rate (2025)
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Even when you&apos;re not doing cold outreach, you need to nail your platform proposals. Learn the 10 mistakes to avoid.
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Generate winning cold emails and proposals in 30 seconds
          </h2>
          <p className="mt-3 text-indigo-100 max-w-xl mx-auto">
            Paste a job description or client brief, get 3 optimized versions. Free to try — no credit card required.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" className="mt-6 bg-white text-indigo-700 hover:bg-indigo-50">
              Try It Free
            </Button>
          </Link>
        </div>
      </article>

      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Cold Email Templates for Freelancers: Get Clients Without Platforms (2025)",
            description:
              "Learn how to write cold emails that land freelance clients. Includes 7 proven templates, personalization techniques, and outreach strategies.",
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
            datePublished: "2025-08-08",
            dateModified: "2025-08-08",
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