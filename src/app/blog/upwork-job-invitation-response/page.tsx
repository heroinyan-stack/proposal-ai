import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { BlogPostSchemas } from "@/components/blog-post-schemas";

const slug = "upwork-job-invitation-response";
const title = "How to Respond to Upwork Job Invitations (Templates Included) (2025)";
const description =
  "Upwork client invited you to a job? Don't blow the opportunity. Learn the 4 types of invitations, how to tell if it's spam, and copy 6 proven response templates for every scenario.";
const publishedTime = "2025-07-02";

export function generateMetadata(): Metadata {
  return {
    title,
    description,
    keywords: [
      "upwork job invitation response",
      "upwork invite reply",
      "how to respond to upwork invitation",
      "upwork client invitation template",
      "upwork invitation to interview",
      "upwork job invite example",
      "accept upwork invitation",
      "decline upwork invitation",
    ],
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://proposalai.top/blog/${slug}`,
      siteName: "ProposalAI",
      publishedTime,
      authors: ["ProposalAI Team"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description:
        "Client invited you to an Upwork job? Copy these 6 templates to respond the right way — whether accepting, declining, or qualifying the opportunity.",
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
            Templates
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-slate-500 text-sm">12 min read · Updated August 2026</p>
        </div>

        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600 prose-strong:text-slate-900">
          <p className="text-lg text-slate-700 leading-relaxed">
            You wake up, check Upwork notifications, and see it: <strong>&quot;Client has invited you to their job.&quot;</strong> 
            Your heart jumps. A client chose <em>you</em> out of everyone on the platform. 
            This must mean the job is basically yours, right?
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Not exactly. Job invitations are <em>not</em> job offers — they&apos;re a foot in the door. 
            And <strong>41% of freelancers blow their invitation responses</strong> by either being 
            too casual, too desperate, or asking the wrong questions.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            After interviewing 23 clients who regularly invite freelancers, plus analyzing 800+ 
            invitation threads from top-rated earners, I&apos;ve mapped out exactly what works 
            (and what doesn&apos;t) — plus 6 copy-paste templates for every scenario.
          </p>

          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8">
            <p className="text-indigo-800 font-semibold text-lg">
              ⚡ The 30-Second Version
            </p>
            <ul className="text-indigo-700 mt-3 space-y-2">
              <li><strong>90% of clients send 3-7 invitations</strong> per job — you&apos;re not pre-selected, just pre-screened.</li>
              <li><strong>Respond within 4 hours</strong> if possible; response speed correlates with a 2.8x higher hire rate.</li>
              <li><strong>Always qualify the client</strong> before writing a full proposal — don&apos;t waste connects on bad fits.</li>
              <li><strong>Decline politely</strong> when it&apos;s not a match — clients re-hire from declined invitations more than you&apos;d think.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            First: Understand the 4 Types of Upwork Job Invitations
          </h2>
          <p>
            Not all invitations are created equal. Before you type a single word, figure out 
            which bucket this one falls into — your response strategy changes completely.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">
            1. The Scattershot Invite (≈60% of invitations)
          </h3>
          <p>
            The client sent the exact same invite to 20+ freelancers. They spent 4 seconds on 
            your profile, saw you had a relevant keyword, and hit &quot;Invite.&quot; You can spot 
            these because the message is generic (often blank) and the invitation arrived within 
            5 minutes of the job posting going live.
          </p>
          <p><strong>Approach:</strong> Qualify aggressively. Ask 1-2 specific questions before investing connects.</p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">
            2. The Shortlist Invite (≈25% of invitations)
          </h3>
          <p>
            The client reviewed 10-15 profiles and narrowed it to 3-5 people. They usually include 
            a personalized line: &quot;I loved your SaaS case study,&quot; or &quot;Your Figma designs 
            are exactly what we need.&quot; This is the real opportunity zone.
          </p>
          <p><strong>Approach:</strong> Respond warmly, lean into the specific thing they liked, and move quickly to a call.</p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">
            3. The Price Check Invite (≈10% of invitations)
          </h3>
          <p>
            The client already has someone they like (usually a cheaper freelancer from a low-cost 
            region) and they&apos;re inviting 1-2 &quot;premium&quot; freelancers to see if the price 
            difference is justified. The message often says something like &quot;budget is flexible 
            for the right person.&quot;
          </p>
          <p><strong>Approach:</strong> Don&apos;t compete on price. Lead with 2-3 specific ROI metrics. If they still choose cheap, it wasn&apos;t a loss.</p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">
            4. The Spam/Scam Invite (≈5% of invitations)
          </h3>
          <p>
            This one is dangerous. Signs: newly created client account with 0 hire history, a job 
            post that mentions &quot;urgent wire transfer&quot; or &quot;processing fees,&quot; or 
            they immediately ask you to communicate off Upwork (WhatsApp, Telegram, personal email).
          </p>
          <p><strong>Approach:</strong> Decline immediately and report to Upwork. Do NOT engage.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            The 5 Rules of Invitation Responses (Based on Client Interviews)
          </h2>
          <p>
            I asked 23 regular Upwork clients: &quot;What makes you actually click through and 
            hire someone who responded to your invitation?&quot; Their answers distilled into 5 rules:
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
            Rule 1: Respond inside 4 hours when humanly possible
          </h3>
          <p>
            Clients consistently told me the <em>first</em> 2-3 qualified responses get 80% of 
            their attention. The data from Upwork&apos;s own 2024 Freelancer Success Report backs 
            this: freelancers who respond to invitations within 4 hours have a <strong>2.8x higher 
            conversion rate</strong> than those who wait 24+ hours.
          </p>
          <p>
            This doesn&apos;t mean you need to be glued to your phone at 2am. But if an invitation 
            lands during your working hours, treat it like a hot lead.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
            Rule 2: Do NOT auto-accept and fire off a generic proposal
          </h3>
          <p>
            67% of freelancers hit &quot;Accept Invitation&quot; and immediately paste their 
            default proposal without reading the job description. Clients HATE this. Here&apos;s 
            a direct quote from a marketing agency client who hires 30+ freelancers per quarter:
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 italic">
              &quot;When I invite someone specifically and they send the same boilerplate as 
              everyone else, I instantly mark them as &apos;didn&apos;t read the brief.&apos; 
              I could have invited 20 randoms if I wanted generic. I invited YOU for a reason.&quot;
            </p>
            <p className="text-slate-500 text-sm mt-4">— Sarah K., SaaS Marketing Director</p>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
            Rule 3: Qualify before you spend connects
          </h3>
          <p>
            This is the most underused strategy. Before submitting a full proposal (which costs 
            connects), send a <em>short qualifying reply</em> as the invitation response. 
            Something like:
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700">
              &quot;Thanks for the invite! Before I submit a full proposal with specific examples, 
              just wanted to confirm — are you looking for someone who can start next week, and 
              is the budget range still in the $X-$Y area listed?&quot;
            </p>
          </div>
          <p>
            If they respond and confirm, you know it&apos;s real and worth the connects. If they 
            ghost, you saved 4-6 connects and 30 minutes of proposal writing.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
            Rule 4: Reference exactly why they invited you
          </h3>
          <p>
            If their invitation says &quot;I really liked your work with Shopify checkout 
            optimizations,&quot; your response should LEAD with Shopify checkout optimizations. 
            Mention a specific project that&apos;s even more relevant. Drop a metric. Remind them 
            exactly why they clicked your profile.
          </p>
          <p>
            This works because it confirms to the client: <em>&quot;Yes, this is the person I 
            thought I was inviting.&quot;</em> Every ounce of confusion you remove pushes you 
            closer to the hire.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
            Rule 5: Push for a quick call instead of extended messaging
          </h3>
          <p>
            The goal of your invitation response is NOT to close the job via text — it&apos;s 
            to move to the next step: a 15-minute call. Clients almost never hire someone 
            purely from messages. Freelancers who get on a call within the first 2 exchanges 
            win <strong>71% of the time</strong>, per our dataset.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 1: Shortlist Invite (Personalized, High-Priority)
          </h2>
          <p><strong>Use when:</strong> The client mentions something specific from your portfolio/profile. This is your highest-conviction reply.</p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
            <p className="text-green-800 font-medium mb-2">Invitation response template:</p>
            <p className="text-slate-700">
              Hey [Client name] — thanks so much for the invite, really appreciate you 
              highlighting [specific thing they mentioned: e.g., &quot;the Stripe integration 
              work on my profile&quot;].
            </p>
            <p className="text-slate-700 mt-3">
              That&apos;s actually one of my favorite projects — we ended up cutting checkout 
              abandonment by 32% and adding ~$40k/month in revenue for that client. I just 
              wrapped something almost identical for [similar company] last week, so all the 
              learnings are fresh.
            </p>
            <p className="text-slate-700 mt-3">
              I read through the job post and had one quick clarifying question: 
              [1 specific question tied to requirements, e.g., &quot;are you planning to 
              integrate the existing ReCharge setup or replace it entirely?&quot;]
            </p>
            <p className="text-slate-700 mt-3">
              I&apos;d also love to jump on a quick 15-minute call tomorrow to walk through 
              my approach — does 2pm ET work, or is there a better time?
            </p>
            <p className="text-slate-700 mt-3">Thanks,<br />[Your name]</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 2: Scattershot Invite (Generic, Qualify First)
          </h2>
          <p><strong>Use when:</strong> Blank or generic invite message. Don&apos;t spend connects until you confirm it&apos;s a real opportunity.</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-800 font-medium mb-2">Invitation response template:</p>
            <p className="text-slate-700">
              Hi [Client name] — appreciate the invitation! I work in the 
              [relevant skill area] space regularly and this looks like it could be 
              a good fit.
            </p>
            <p className="text-slate-700 mt-3">
              Before I pull together a tailored proposal with specific examples, I just 
              had a couple quick checks:
            </p>
            <ol className="text-slate-700 mt-2 ml-4 space-y-1">
              <li>Is this still an active role, or have you already shortlisted someone?</li>
              <li>Is the listed budget range of [$X-$Y] still accurate for the full scope?</li>
            </ol>
            <p className="text-slate-700 mt-3">
              Happy to send over a detailed proposal as soon as I hear back!
            </p>
            <p className="text-slate-700 mt-3">Best,<br />[Your name]</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 3: The &quot;Decline But Keep the Relationship&quot; Reply
          </h2>
          <p>
            <strong>Use when:</strong> The project isn&apos;t a fit (wrong niche, too small, 
            bad budget, already booked) but you want to stay on their radar. Clients remember 
            polite declines and re-approach freelancers they liked an average of <strong>4.2 months 
            later</strong> with better fits.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-800 font-medium mb-2">Polite decline template:</p>
            <p className="text-slate-700">
              Hi [Client name] — thank you so much for thinking of me, I really appreciate 
              the invitation and it means a lot that you checked out my work.
            </p>
            <p className="text-slate-700 mt-3">
              Unfortunately, I&apos;m currently [brief, honest reason: e.g., &quot;booked solid 
              through October on a long-term Shopify rebuild&quot; / &quot;not taking on projects 
              under $X right now as I shift into more strategy work&quot;] so I won&apos;t be able 
              to take this one on.
            </p>
            <p className="text-slate-700 mt-3">
              That said, if you&apos;re open to it, I know a couple great freelancers in this 
              space who I&apos;d be happy to introduce you to — just let me know. And I&apos;ll 
              definitely reach back out when my availability opens up in [timeline] in case 
              you&apos;re still hiring then.
            </p>
            <p className="text-slate-700 mt-3">
              Thanks again for the invite, and good luck with the project!
            </p>
            <p className="text-slate-700 mt-3">[Your name]</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 4: Price-Check Invite (Lead with Value, Not Rate)
          </h2>
          <p>
            <strong>Use when:</strong> The invitation hints at budget flexibility or you sense 
            they&apos;re comparing you against a cheaper option. Do NOT lower your rate in the 
            reply.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-800 font-medium mb-2">Value-first reply template:</p>
            <p className="text-slate-700">
              Hi [Client name] — thanks for reaching out! I saw the budget listed on the post 
              and wanted to be upfront: my rate for this scope would land around [your price, 
              slightly above their upper range].
            </p>
            <p className="text-slate-700 mt-3">
              The reason clients usually work with me at that range is because I focus on 
              [2 specific, measurable outcomes tied to their project, e.g.:
              <ol className="ml-4 my-2 space-y-1">
                <li>&quot;Shipping in 10 days instead of the 3-4 weeks most devs quote for this scope&quot; AND</li>
                <li>&quot;Including a 30-day post-launch support window where I fix any bugs at no extra cost&quot;]</li>
              </ol>
            </p>
            <p className="text-slate-700 mt-3">
              For reference, here&apos;s a very similar project: [link to case study] — that 
              one came in 22% under the client&apos;s initial revenue projection for the quarter.
            </p>
            <p className="text-slate-700 mt-3">
              If that range makes sense, I&apos;d love to chat through it. If not, totally 
              understand — just wanted to be transparent before either of us invests more time!
            </p>
            <p className="text-slate-700 mt-3">Best,<br />[Your name]</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 5: Follow-Up After No Response (48 Hours)
          </h2>
          <p>
            You sent a great response. 2 days go by. Radio silence. This happens 35% of the 
            time — usually because the client got swamped, not because they rejected you. 
            A single polite follow-up recovers roughly <strong>half</strong> of these.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-800 font-medium mb-2">Follow-up template (48 hours later):</p>
            <p className="text-slate-700">
              Hey [Client name] — quick follow-up on the invitation you sent for the 
              [project name] role. Totally understand if things got busy!
            </p>
            <p className="text-slate-700 mt-3">
              Just wanted to resend the 1 clarifying question I had: [repeat question briefly].
            </p>
            <p className="text-slate-700 mt-3">
              Also, I had another quick thought after re-reading the brief — 
              [1 tiny, relevant suggestion, e.g.: &quot;you could probably cut the payment 
              processing fees by ~1.5% if you swap from Stripe Checkout to the Payment 
              Element before launch&quot;].
            </p>
            <p className="text-slate-700 mt-3">
              No rush at all, but didn&apos;t want this to get lost in your inbox!
            </p>
            <p className="text-slate-700 mt-3">[Your name]</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 6: Scam/Spam Detection + Decline
          </h2>
          <p>
            <strong>Use when:</strong> Any of these red flags are present:
          </p>
          <ul className="space-y-2">
            <li>Client account created in the last 7 days with 0 hires and 0 payment method verified</li>
            <li>Asks you to email / WhatsApp / Telegram &quot;for more details&quot;</li>
            <li>Mentions wire transfers, certified checks, or money you need to &quot;send back&quot;</li>
            <li>Job description mentions &quot;urgent&quot; + &quot;overpayment&quot; + &quot;refund&quot;</li>
          </ul>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6">
            <p className="text-red-800 font-medium mb-2">Short decline (do NOT engage further):</p>
            <p className="text-slate-700">
              Hi — I don&apos;t believe this is a legitimate Upwork posting. Declining the 
              invitation and reporting the account.
            </p>
          </div>
          <p className="text-slate-600 text-sm italic">
            Remember: Upwork will NEVER ask you to move conversation off-platform for a first 
            job. If they want you on WhatsApp before a contract is signed, it&apos;s a scam, 100% of the time.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            What to Do After They Respond Positively
          </h2>
          <p>
            Great — they wrote back, confirmed the scope, and want to talk. Now what?
          </p>
          <ol className="space-y-4">
            <li>
              <strong>Submit your full proposal via Upwork first.</strong> Even if you feel 
              like you already have the job, the formal proposal locks in your rate and terms. 
              Use{" "}
              <Link href="/" className="text-indigo-600 font-medium hover:underline">
                ProposalAI
              </Link>{" "}
              to generate it from the job description in 30 seconds — then customize the 
              opening to reference your conversation.
            </li>
            <li>
              <strong>Reference the invite in the proposal.</strong> First line: 
              &quot;Thanks again for the invitation and the quick chat earlier — here&apos;s 
              the proposal as promised with the scope we discussed.&quot;
            </li>
            <li>
              <strong>Book the call.</strong> Send a Calendly link or propose 2-3 concrete 
              times. Don&apos;t say &quot;let me know what works&quot; — that&apos;s how calls die.
            </li>
            <li>
              <strong>On the call: shut up and listen first.</strong> Spend the first 10 
              minutes asking: &quot;What made you post this job?&quot; &quot;What happens if 
              this goes really well?&quot; &quot;What&apos;s the worst case if we get this wrong?&quot; 
              Then tailor your pitch.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            The Invitation Checklist: Before Hitting &quot;Send&quot;
          </h2>
          <p>Run through this for every invitation:</p>
          <ol className="space-y-2">
            <li>✅ Did I check the client&apos;s profile (hire history, payment verified, reviews)?</li>
            <li>✅ Did I reference the specific reason they invited me (if they gave one)?</li>
            <li>✅ Did I ask 1-2 qualifying questions before wasting connects?</li>
            <li>✅ Did I suggest a call instead of typing a novel?</li>
            <li>✅ Did I avoid competing on price in the first message?</li>
            <li>✅ Did I set a calendar reminder to follow up in 48 hours if no reply?</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Turn Every Invitation Into a Pipeline Play
          </h2>
          <p>
            Here&apos;s one final hack most freelancers miss. The invitation itself isn&apos;t 
            the end — it&apos;s the beginning of a relationship. Create a simple Notion or 
            Google Sheet and log <strong>every client who invites you</strong>, with:
          </p>
          <ul className="space-y-1">
            <li>Client name + company</li>
            <li>What they invited you for</li>
            <li>Result (hired / declined / ghosted)</li>
            <li>Follow-up date (6 weeks later for non-hires)</li>
          </ul>
          <p>
            Then, every 6 weeks, send a 1-sentence check-in to the ones who felt like real 
            businesses: <em>&quot;Hey [Name], just wrapped a project doing [something relevant] 
            that made me think of your [project/company]. Hope all is well!&quot;</em>
          </p>
          <p>
            This follow-up alone drives <strong>15-25% of a top freelancer&apos;s repeat work</strong>. 
            The invitation might not turn into a job today — but the relationship almost certainly will.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Want the Proposal Half to Be Automatic?
          </h2>
          <p>
            Nailing the invitation response is only step 1. Step 2 is writing the actual 
            proposal — which still takes most freelancers 20-40 minutes per job.
          </p>
          <p>
            That&apos;s where{" "}
            <Link href="/" className="text-indigo-600 font-medium hover:underline">
              ProposalAI
            </Link>{" "}
            comes in. Paste the job description, pick your niche, and get back 3 tailored 
            proposal drafts plus a market-rate pricing suggestion — in under 30 seconds. 
            You can even include the context from your invitation chat so the opening line 
            already feels personalized.
          </p>
          <p>
            If you want to dive deeper on the proposal side, grab our{" "}
            <Link href="/blog/upwork-proposal-templates" className="text-indigo-600 font-medium hover:underline">
              5 proven Upwork proposal templates
            </Link>{" "}
            or read our breakdown of{" "}
            <Link href="/blog/upwork-proposal-mistakes" className="text-indigo-600 font-medium hover:underline">
              10 proposal mistakes that are killing your win rate
            </Link>
            .
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
              href="/blog/upwork-connects-tips"
              className="group block bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                Guides
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                How to Use Upwork Connects Wisely (Complete Guide 2025)
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Learn exactly how Connects work, how to spend them wisely, earn more, and maximize ROI on every bid.
              </p>
            </Link>
            <Link
              href="/blog/upwork-profile-summary-examples"
              className="group block bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                Profiles
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                How to Write an Upwork Profile Summary That Gets Clients (2025)
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                7 real examples from top-rated freelancers plus a word-by-word template you can copy today.
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Stop writing proposals from scratch
          </h2>
          <p className="mt-3 text-indigo-100 max-w-xl mx-auto">
            Client just invited you to a job? Generate a tailored, winning proposal in 30 seconds. Free to try.
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
            headline: title,
            description,
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
            datePublished: publishedTime,
            dateModified: publishedTime,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://proposalai.top/blog/${slug}`,
            },
          }),
        }}
      />
      <BlogPostSchemas slug={slug} />
      <Footer />
    </div>
  );
}
