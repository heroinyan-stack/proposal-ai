import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { BlogPostSchemas } from "@/components/blog-post-schemas";

const slug = "cold-email-for-freelancers";

export function generateMetadata(): Metadata {
  return {
    title: "Cold Email Templates for Freelancers: Get Clients Without Platforms (2025)",
    description:
      "Learn how to write cold emails that land freelance clients. Includes 7 proven templates, personalization techniques, and outreach strategies to win high-paying work without Upwork or Fiverr.",
    keywords: [
      "cold email for freelancers",
      "freelance outreach templates",
      "how to get freelance clients",
      "cold email templates",
      "freelance marketing",
      "client outreach freelance",
      "get clients without upwork",
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
      publishedTime: "2025-08-21",
      authors: ["ProposalAI Team"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Cold Email Templates for Freelancers: Get Clients Without Platforms (2025)",
      description:
        "Learn how to write cold emails that land freelance clients. Includes 7 proven templates and personalization techniques.",
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
            Relying exclusively on Upwork and Fiverr for clients is like renting an 
            office in someone else&apos;s building — you pay premium fees, follow their rules, 
            and can be evicted at any time. The freelancers who earn $100k+ a year 
            aren&apos;t just bidding on platform jobs — they&apos;re actively sourcing 
            clients through cold email outreach.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            In this guide, I&apos;m sharing <strong>7 battle-tested cold email templates</strong> 
            that have helped freelancers land $5,000+ projects, monthly retainers, and 
            long-term partnerships with companies they found on LinkedIn, Clutch, or 
            through direct research. You&apos;ll learn exactly what to send, when to 
            send it, and how to follow up without being spammy.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Why Cold Email Works in 2025
          </h2>
          <p>
            Cold email gets a bad rap because most people do it terribly. They send 
            generic messages to 500 people and wonder why they get zero responses. 
            But when done right, cold email is still one of the most effective ways 
            to land high-paying freelance clients — and here&apos;s the data to prove it:
          </p>
          <ul>
            <li>The average cold email response rate is <strong>2-3%</strong>, but personalized cold emails get <strong>10-15% response rates</strong></li>
            <li>Freelancers who use cold email earn <strong>32% more</strong> per project than those who rely solely on platforms (And.co 2025 Freelance Survey)</li>
            <li>Only <strong>8% of freelancers</strong> actively cold email — meaning 92% of your competitors aren&apos;t doing it</li>
          </ul>
          <p>
            The math is simple: if you send 20 personalized cold emails a week and 
            get a 10% response rate, that&apos;s 2 qualified leads per week. Close 
            just one of those per month at $3,000 and you&apos;ve added $36,000/year 
            to your income — without paying any platform fees.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            The Anatomy of a Winning Cold Email
          </h2>
          <p>
            Before the templates, you need to understand the structure that makes 
            cold emails work. Every high-performing freelance cold email has these 
            five components:
          </p>
          <ol>
            <li>
              <strong>Personalized opening line</strong> — reference something specific 
              about the recipient or their business (not &quot;I hope this email finds you well&quot;)
            </li>
            <li>
              <strong>One-sentence value proposition</strong> — who you are and what you do, 
              tailored to their needs
            </li>
            <li>
              <strong>Proof of relevance</strong> — one specific result or portfolio piece 
              related to their industry or problem
            </li>
            <li>
              <strong>Low-commitment CTA</strong> — a quick, easy next step (not &quot;can we hop on a call?&quot;)
            </li>
            <li>
              <strong>Short signature</strong> — name, title, one link, no phone number
            </li>
          </ol>
          <p>
            The entire email should be <strong>under 120 words</strong>. If it&apos;s 
            longer, you&apos;re selling too hard. Remember: the goal of a cold email 
            is not to get hired — it&apos;s to get a reply.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 1: The Specific Problem Solver (Best for Warm Leads)
          </h2>
          <p><strong>Best for:</strong> When you&apos;ve identified a specific problem 
          the company has (broken page, slow site, missing feature, etc.)</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Subject: Quick fix I spotted on [Company]&apos;s [page name]</p>
            <p className="text-slate-600">Hi [First name],</p>
            <p className="text-slate-600 mt-3">
              I was looking at [Company]&apos;s [specific page/feature] earlier today 
              and noticed [specific problem — e.g., &quot;your checkout flow doesn&apos;t 
              support Apple Pay, which could be costing you 15-20% of mobile conversions&quot;].
            </p>
            <p className="text-slate-600 mt-3">
              I helped [similar company in same industry] add this feature last quarter 
              and we saw a <strong>19% lift in mobile checkout conversions</strong>. 
              It took about 3 days to implement.
            </p>
            <p className="text-slate-600 mt-3">
              I&apos;m not sure if this is on your radar, but I thought it was worth 
              flagging. Would you be open to a quick 10-minute chat about it?
            </p>
            <p className="text-slate-600 mt-3">
              Best,<br />
              [Your name]<br />
              [Your title — e.g., &quot;Conversion Optimization Specialist&quot;]<br />
              [Link to your portfolio or LinkedIn]
            </p>
          </div>
          <p>
            <strong>Why this works:</strong> It&apos;s specific, non-salesy, and 
            demonstrates you&apos;ve done your research. The recipient thinks, 
            &quot;This person actually looked at my business.&quot;
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 2: The Industry Specialist (Best for Targeting Specific Niches)
          </h2>
          <p><strong>Best for:</strong> When you want to position yourself as a 
          specialist in a particular industry (SaaS, e-commerce, healthcare, etc.)</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Subject: [First name], helping [Industry] companies grow their [specific area]</p>
            <p className="text-slate-600">Hi [First name],</p>
            <p className="text-slate-600 mt-3">
              I specialize in helping [industry] companies [specific outcome — e.g., 
              &quot;improve their organic search rankings&quot; / &quot;streamline their 
              customer onboarding&quot; / &quot;build conversion-focused landing pages&quot;].
            </p>
            <p className="text-slate-600 mt-3">
              I worked with [company in same industry] to [specific result — e.g., 
              &quot;reorganize their website structure, which led to a 47% increase 
              in organic traffic in 3 months&quot;]. You can see the case study here: [link].
            </p>
            <p className="text-slate-600 mt-3">
              I noticed [Company] recently [specific observation — e.g., &quot;launched 
              a new product&quot; / &quot;rebranded&quot; / &quot;expanded into a new market&quot;], 
              so I wanted to reach out directly. Are you working with external 
              specialists right now?
            </p>
            <p className="text-slate-600 mt-3">
              Regards,<br />
              [Your name]<br />
              [Title] · [Link to portfolio]
            </p>
          </div>
          <p>
            <strong>Why this works:</strong> Specialists command higher rates. By 
            positioning yourself as an industry expert, you immediately stand out 
            from generalist freelancers.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 3: The Quick Question (Best for Breaking Through Noise)
          </h2>
          <p><strong>Best for:</strong> When you&apos;re emailing a busy decision-maker 
          and want to keep it ultra-short</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Subject: Quick question about [Company]&apos;s [topic]</p>
            <p className="text-slate-600">Hi [First name],</p>
            <p className="text-slate-600 mt-3">
              I&apos;m a [your role — e.g., &quot;UI/UX designer&quot; / &quot;B2B content 
              writer&quot;] and I noticed [Company] is [specific observation].
            </p>
            <p className="text-slate-600 mt-3">
              Quick question — are you currently looking for help with [specific 
              area]? I recently worked on [one relevant result], and I&apos;d love 
              to share what I learned if you&apos;re open to it.
            </p>
            <p className="text-slate-600 mt-3">
              No pressure either way. Just thought I&apos;d ask.
            </p>
            <p className="text-slate-600 mt-3">
              Thanks,<br />
              [Your name]<br />
              [Link to LinkedIn or portfolio]
            </p>
          </div>
          <p>
            <strong>Why this works:</strong> It&apos;s refreshingly short and low-pressure. 
            The &quot;no pressure either way&quot; line disarms the recipient. 
            Busy people respect brevity.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 4: The Case Study Hook (Best for Proof-Heavy Outreach)
          </h2>
          <p><strong>Best for:</strong> When you have a strong case study that&apos;s 
            directly relevant to the prospect&apos;s business</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Subject: How [Competitor] increased [metric] by [percentage]%</p>
            <p className="text-slate-600">Hi [First name],</p>
            <p className="text-slate-600 mt-3">
              I recently helped [competitor or similar company] go from [before 
              metric] to [after metric] in [timeframe] by [brief description of what you did].
            </p>
            <p className="text-slate-600 mt-3">
              I checked out [Company]&apos;s [specific asset — e.g., &quot;homepage&quot; 
              / &quot;blog&quot; / &quot;product launch&quot;] and noticed one key 
              difference: [specific observation]. This could be a significant 
              opportunity for [Company] as well.
            </p>
            <p className="text-slate-600 mt-3">
              I put together a 2-page breakdown of what we did and how it might apply 
              to your business. Want me to send it over?
            </p>
            <p className="text-slate-600 mt-3">
              Cheers,<br />
              [Your name]<br />
              [Title] · [Link to case study]
            </p>
          </div>
          <p>
            <strong>Why this works:</strong> Competitor analysis is extremely 
            compelling. Decision-makers love knowing what their competitors are doing 
            that&apos;s working. The offer of a free breakdown creates a natural next step.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 5: The Referral Request (Best for Warm Intros)
          </h2>
          <p><strong>Best for:</strong> When you share a mutual connection with the recipient</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Subject: [Mutual connection] suggested I reach out</p>
            <p className="text-slate-600">Hi [First name],</p>
            <p className="text-slate-600 mt-3">
              [Mutual connection&apos;s name] suggested I get in touch — we worked 
              together on [brief project description] and they thought [Company] 
              might benefit from something similar.
            </p>
            <p className="text-slate-600 mt-3">
              I specialize in [what you do], and I&apos;ve helped companies like [client 
              name] achieve [specific result]. I&apos;d love to learn more about 
              what [Company] is working on and see if there&apos;s a fit.
            </p>
            <p className="text-slate-600 mt-3">
              Would you have 15 minutes next week for a quick intro call?
            </p>
            <p className="text-slate-600 mt-3">
              Best,<br />
              [Your name]<br />
              [Title] · [Link to LinkedIn]
            </p>
          </div>
          <p>
            <strong>Why this works:</strong> Warm introductions have a <strong>3-5x 
            higher response rate</strong> than cold emails. The mutual connection 
            immediately establishes trust.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 6: The Follow-Up Sequence (Best for When They Don&apos;t Reply)
          </h2>
          <p>
            Only 8% of freelancers follow up after the first email, yet <strong>40% 
            of cold email conversions happen after the third contact</strong>. Here&apos;s 
            a 3-step follow-up sequence that works:
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Day 3 Follow-Up:</p>
            <p className="text-slate-600">Subject: Re: Quick question about [topic]</p>
            <p className="text-slate-600 mt-2">
              Hi [First name],<br /><br />
              Just bumping this up in your inbox. No pressure — I know things get 
              busy. If now&apos;s not a good time, just let me know and I&apos;ll 
              check back in a month or two.<br /><br />
              [Your name]
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Day 7 Follow-Up:</p>
            <p className="text-slate-600">Subject: [First name], quick resource for [Company]</p>
            <p className="text-slate-600 mt-2">
              Hi [First name],<br /><br />
              I came across [article/report/case study] about [topic relevant to their 
              business] and immediately thought of [Company]. It has some great insights 
              on [specific point].<br /><br />
              Would love to hear your thoughts on this and explore whether there&apos;s 
              a fit between what I do and what [Company] needs.<br /><br />
              [Your name]
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Day 14 Final Touch:</p>
            <p className="text-slate-600">Subject: Last one — I&apos;ll let this go</p>
            <p className="text-slate-600 mt-2">
              Hi [First name],<br /><br />
              I don&apos;t want to be a pest, so this is my last email on this. 
              I really think I could help [Company] with [specific outcome], but 
              I understand if the timing isn&apos;t right.<br /><br />
              If you ever need a hand with [area] down the road, my inbox is always 
              open. I hope our paths cross again.<br /><br />
              [Your name]
            </p>
          </div>
          <p>
            <strong>Why this works:</strong> Most freelancers give up after one 
            email. By following up three times, you immediately move into the top 
            10% of persistent outreach. The third email frames you as professional, 
            not pushy.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 7: The Value-First Approach (Best for Long-Term Relationship Building)
          </h2>
          <p><strong>Best for:</strong> When you want to build a relationship before 
            pitching your services</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Subject: [Company] — free audit / quick win</p>
            <p className="text-slate-600">Hi [First name],</p>
            <p className="text-slate-600 mt-3">
              I&apos;m a [your role] and I&apos;ve been following [Company] for a while. 
              I really liked your recent [blog post / product launch / LinkedIn post].
            </p>
            <p className="text-slate-600 mt-3">
              I noticed one quick thing you could improve: [specific, actionable 
              suggestion — e.g., &quot;Your meta descriptions are getting cut off 
              in Google results, which could be costing you 5-10% of clicks&quot;]. 
              It&apos;s a 5-minute fix and could have a meaningful impact.
            </p>
            <p className="text-slate-600 mt-3">
              I&apos;ll leave you to it — just wanted to share something of value 
              without asking for anything in return. Keep up the great work!
            </p>
            <p className="text-slate-600 mt-3">
              All the best,<br />
              [Your name]<br />
              [Title] · [Link to something useful — e.g., your newsletter, free tool]
            </p>
          </div>
          <p>
            <strong>Why this works:</strong> It&apos;s completely selfless — no ask, 
            no pitch, no pressure. This builds goodwill and positions you as an expert 
            who gives first. About 20% of recipients will reply thanking you, opening 
            the door for future conversations.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Personalization Tips That Double Your Response Rate
          </h2>
          <p>
            The difference between a 2% response rate and a 15% response rate is 
            personalization. Here&apos;s how to do it at scale without spending 
            hours on each email:
          </p>
          <ul>
            <li>
              <strong>Use the recipient&apos;s name</strong> in the subject line — 
              personalized subjects get 26% higher open rates (Campaign Monitor)
            </li>
            <li>
              <strong>Reference their company&apos;s recent activity</strong> — 
              check their LinkedIn, blog, or product page for updates from the 
              last 30 days
            </li>
            <li>
              <strong>Mention a specific page or feature</strong> — it proves you 
              actually visited their site
            </li>
            <li>
              <strong>Use their industry&apos;s language</strong> — don&apos;t say 
              &quot;I do marketing&quot; to a SaaS company; say &quot;I help SaaS 
              companies reduce churn&quot;
            </li>
            <li>
              <strong>Find their personal email</strong> — use tools like Apollo.io 
              or Hunter.io to find direct emails instead of generic info@ addresses
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            How Many Emails Should You Send Per Day?
          </h2>
          <p>
            Quality over quantity always wins. Aim for <strong>10-15 personalized 
            emails per day</strong>, not 100. Here&apos;s a sustainable workflow:
          </p>
          <ol>
            <li>Spend 30 minutes researching 10-15 target companies (use Ideal Client Profile criteria)</li>
            <li>Spend 15 minutes finding the right contact person for each</li>
            <li>Spend 45 minutes writing personalized emails using these templates</li>
            <li>Spend 15 minutes scheduling follow-ups in your CRM for Day 3, 7, and 14</li>
            <li>Repeat daily</li>
          </ol>
          <p>
            That&apos;s 2 hours a day that can generate <strong>$5,000-$15,000/month 
            in new freelance revenue</strong> once your pipeline is running.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Cold Email Mistakes to Avoid
          </h2>
          <p>
            Before you hit send, make sure you&apos;re not making these common mistakes:
          </p>
          <ul>
            <li>
              <strong>Don&apos;t use a generic Gmail address.</strong> Send from your 
              professional domain (you@yourbrand.com) — it gets 3x higher trust
            </li>
            <li>
              <strong>Don&apos;t attach a portfolio PDF.</strong> Include a one-line 
              link in your signature. Attachments trigger spam filters
            </li>
            <li>
              <strong>Don&apos;t mention rates.</strong> The first email is about 
              starting a conversation, not quoting prices
            </li>
            <li>
              <strong>Don&apos;t follow up more than 3 times.</strong> After Day 14, 
              let it go. You don&apos;t want to be labeled as spam
            </li>
            <li>
              <strong>Don&apos;t forget to spell-check.</strong> A single typo in the 
              recipient&apos;s name kills trust immediately
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Want to Automate This?
          </h2>
          <p>
            Writing 10+ personalized cold emails a day is still time-consuming — even 
            with templates. That&apos;s where{" "}
            <Link href="/" className="text-indigo-600 font-medium hover:underline">
              ProposalAI
            </Link>
            &nbsp;can help. While ProposalAI is best known for Upwork proposal generation, 
            our AI can also adapt these cold email templates into personalized outreach 
            messages in seconds.
          </p>
          <p>
            Just paste the prospect&apos;s website URL or a brief description of 
            their business, and ProposalAI will:
          </p>
          <ul>
            <li>Extract key details about their company (industry, size, recent activity)</li>
            <li>Generate 3 personalized cold email versions with different angles</li>
            <li>Suggest the best template based on their situation</li>
            <li>Include relevant portfolio references based on your skills</li>
          </ul>
          <p>
            Freelancers using ProposalAI for cold email report saving <strong>10-15 hours 
            per week</strong> on outreach while increasing response rates. That&apos;s 
            more time for billable work — and less time staring at a blank email draft.
          </p>
          <p>
            <Link href="/auth/signup" className="text-indigo-600 font-medium hover:underline">
              Try it free →
            </Link>
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Keep Learning
          </h2>
          <p>
            Want more strategies to grow your freelance business? Check out these 
            related guides:
          </p>
          <ul>
            <li>
              <Link href="/blog/upwork-proposal-mistakes" className="text-indigo-600 hover:underline">
                10 Upwork Proposal Mistakes That Kill Your Win Rate
              </Link>
              &nbsp;— avoid the most common bidding errors
            </li>
            <li>
              <Link href="/blog/freelance-pricing-strategies" className="text-indigo-600 hover:underline">
                Freelance Pricing Strategies: How to Charge What You&apos;re Worth
              </Link>
              &nbsp;— set rates that attract high-quality clients
            </li>
            <li>
              <Link href="/blog/freelance-client-communication" className="text-indigo-600 hover:underline">
                Freelance Client Communication: Templates for Every Situation
              </Link>
              &nbsp;— keep clients happy from kickoff to invoice
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Final Thoughts
          </h2>
          <p>
            Cold email isn&apos;t dead — it&apos;s just done poorly by 92% of freelancers. 
            With these 7 templates, a personalization workflow, and consistent daily 
            effort, you can build a pipeline of high-paying clients who don&apos;t 
            know about Upwork fees and who pay on time, every time.
          </p>
          <p>
            The freelancers who make six figures aren&apos;t smarter or more talented 
            than you. They&apos;re just more strategic about where they find clients. 
            Stop competing on Upwork and Fiverr — start building relationships with 
            clients who value your work at premium rates.
          </p>
          <p>
            Pick one template from this guide, send 10 emails today, and see what 
            comes back. I&apos;ll bet you get your first reply within 48 hours.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Keep Reading</h2>
          <div className="grid md:grid-cols-2 gap-6">
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
                Stop undercharging. Learn hourly vs fixed vs value-based pricing and set rates that attract quality clients.
              </p>
            </Link>
            <Link
              href="/blog/upwork-proposal-mistakes"
              className="group block bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                Guides
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                10 Upwork Proposal Mistakes That Kill Your Win Rate
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Avoid the 10 most common Upwork proposal mistakes and learn what top-rated freelancers do differently.
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
              Try ProposalAI Free
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
              "Learn how to write cold emails that land freelance clients. Includes 7 proven templates, personalization techniques, and outreach strategies to win high-paying work without Upwork or Fiverr.",
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
            datePublished: "2025-08-21",
            dateModified: "2025-08-21",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://proposalai.top/blog/${slug}`,
            },
          }),
        }}
      />
      <BlogPostSchemas slug="cold-email-for-freelancers" />
      <Footer />
    </div>
  );
}
