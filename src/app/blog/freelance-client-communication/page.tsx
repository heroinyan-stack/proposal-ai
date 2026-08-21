import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { BlogPostSchemas } from "@/components/blog-post-schemas";

const slug = "freelance-client-communication";

export function generateMetadata(): Metadata {
  return {
    title: "Freelance Client Communication: Templates for Every Situation (2025)",
    description:
      "Copy-paste client communication templates for freelancers — kickoff, scope creep, delays, unresponsive clients, overdue invoices, and more. Keep clients happy and get paid on time.",
    keywords: [
      "freelance client communication",
      "freelancer email templates",
      "client communication templates",
      "scope creep email",
      "overdue invoice email freelancer",
      "freelance client onboarding",
      "how to talk to freelance clients",
    ],
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: "Freelance Client Communication: Templates for Every Situation (2025)",
      description:
        "Copy-paste client communication templates for freelancers — kickoff, scope creep, delays, unresponsive clients, overdue invoices, and more. Keep clients happy and get paid on time.",
      type: "article",
      url: `https://proposalai.top/blog/${slug}`,
      siteName: "ProposalAI",
      publishedTime: "2025-08-19",
      authors: ["ProposalAI Team"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Freelance Client Communication: Templates for Every Situation (2025)",
      description:
        "Copy-paste client communication templates for freelancers — kickoff, scope creep, delays, unresponsive clients, overdue invoices, and more. Keep clients happy and get paid on time.",
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

      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-slate-500">
            <li>
              <Link href="/" className="hover:text-indigo-600 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-indigo-600 transition-colors">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="text-slate-900 font-medium">
              Freelance Client Communication: Templates for Every Situation
            </li>
          </ol>
        </div>
      </nav>

      <article className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="mb-8">
          <span className="text-sm font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
            Communication
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Freelance Client Communication: Templates for Every Situation (2025)
          </h1>
          <p className="mt-4 text-slate-500 text-sm">12 min read · Updated August 2025</p>
        </div>

        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600 prose-strong:text-slate-900">
          <p className="text-lg text-slate-700 leading-relaxed">
            Most freelancers don&apos;t lose clients because of bad work. They lose them because of
            bad <strong>communication</strong> — missed updates, slow replies, and surprises that
            land the day before a deadline. When clients are asked why they stopped working with a
            freelancer, &quot;communication issues&quot; shows up roughly <strong>3x more often</strong>
            than &quot;quality of work.&quot;
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The good news: client communication is a system, not a personality trait. Six-figure
            freelancers don&apos;t have a magic way with words — they have a small set of
            repeatable messages for the moments that matter: kickoff, weekly progress, scope creep,
            delays, silence, overdue invoices, and wrap-up. Below you&apos;ll find a copy-paste
            template for each one, plus the rules that make them work.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Why Communication Is Your #1 Retention Engine
          </h2>
          <p>
            A repeat client costs roughly <strong>5x less to land</strong> than a new one — no
            proposal, no Connects, no sales cycle. So anything that keeps existing clients happy is
            the highest-ROI work you can do. Three numbers to keep in mind:
          </p>
          <ul>
            <li><strong>Responsiveness is the #1 private-feedback dimension</strong> on Upwork. Your Job Success Score (JSS) is built on private feedback, and &quot;communication&quot; is the most common reason a 5-star public review still comes with a low private score.</li>
            <li><strong>Freelancers who send weekly updates get ~2x more repeat clients</strong> than those who go silent between milestones. Predictability builds trust faster than brilliance.</li>
            <li><strong>One warm referral can replace a month of proposals.</strong> Referred clients also tend to pay 15-30% more and churn less — and referrals come from clients who felt communicated with, not just delivered to.</li>
          </ul>
          <p>
            In other words: every message you send (or don&apos;t) is a small investment in your
            next contract. Treat them that way.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            The Kickoff Message: Set Expectations on Day One
          </h2>
          <p>
            Send this within <strong>24 hours</strong> of the contract starting — before you write a
            single line of code or copy. The kickoff message does four things at once: confirms
            scope, locks the timeline, lists exactly what you need from the client, and sets the
            first checkpoint. It&apos;s the single most underused message in freelancing.
          </p>
          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Template</h3>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-600">Hi [Client name],</p>
            <p className="text-slate-600 mt-3">
              Great to get started on [project name]. Quick note to make sure we&apos;re aligned
              before I dive in:
            </p>
            <ul className="text-slate-600 mt-2 ml-4 list-disc">
              <li><strong>Scope:</strong> [1-line recap — e.g., &quot;Design a 6-page Webflow site for your SaaS, desktop + mobile&quot;]</li>
              <li><strong>Timeline:</strong> First milestone [date], final delivery [date]</li>
              <li><strong>What I need from you to start:</strong> [brand assets / copy / access to X]</li>
              <li><strong>Check-ins:</strong> I&apos;ll send a progress note every [Tuesday] — no need to chase me</li>
            </ul>
            <p className="text-slate-600 mt-3">
              Could you confirm the above looks right and send over [the one thing blocking me]?
              Once I have that, I&apos;ll have milestone 1 to you by [date].
            </p>
            <p className="text-slate-600 mt-3">Best,<br />[Your name]</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Weekly Progress Updates That Prevent &quot;Are We There Yet?&quot;
          </h2>
          <p>
            The clients who message you at 9pm on Sunday are almost always the ones you
            haven&apos;t updated since Monday. Uncertainty is what makes clients anxious — and
            anxious clients micromanage. A 2-sentence weekly note removes 90% of that anxiety.
            Use the same formula every week so it&apos;s fast to write and easy for them to scan.
          </p>
          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">The formula + template</h3>
          <p><strong>Done this week → Next week → One question.</strong> That&apos;s it.</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-600">Hi [Client name], quick weekly update on [project]:</p>
            <p className="text-slate-600 mt-3"><strong>Done this week:</strong></p>
            <ul className="text-slate-600 mt-1 ml-4 list-disc">
              <li>Built the [feature/page] and wired up [integration]</li>
              <li>Fixed the [issue] we talked about</li>
            </ul>
            <p className="text-slate-600 mt-3"><strong>Next week:</strong> Start on [milestone], aim to share a preview by [day].</p>
            <p className="text-slate-600 mt-3"><strong>One question:</strong> [specific, easy-to-answer question — e.g., &quot;Should the login use email-only or email + Google?&quot;]</p>
            <p className="text-slate-600 mt-3">Talk soon,<br />[Your name]</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Handling Scope Creep Without Losing the Client (or the Money)
          </h2>
          <p>
            Scope creep is where most freelancers lose money and goodwill at the same time. The
            instinct is to either say &quot;no&quot; (feels hostile) or silently absorb the extra
            work (you resent it, then you ghost the client). Neither works. The pro move is to say
            <strong> &quot;yes, and here&apos;s what that costs&quot;</strong> — cheerfully, without
            a trace of friction. Let the <em>price</em> be the filter, not your mood.
          </p>
          <p>
            This is also exactly why a real contract matters — the scope-creep conversation is
            10x easier when you can point to a signed document. If you don&apos;t have one yet,
            grab the templates in our{" "}
            <Link href="/blog/freelance-contract-templates" className="text-indigo-600 font-medium hover:underline">
              freelance contract templates guide
            </Link>{" "}
            first; the kill-fee and revisions clauses do most of the heavy lifting here.
          </p>
          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Template</h3>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-600">Hi [Client name],</p>
            <p className="text-slate-600 mt-3">
              Great question — happy to add that. Quick heads-up: that&apos;s a bit beyond what we
              originally scoped, so it would be an extra [$X] and add [Y] days to the timeline.
            </p>
            <p className="text-slate-600 mt-3">
              Want me to send over a quick add-on quote for that, or would you rather keep the
              current scope and queue it for a phase 2? Either works for me — just don&apos;t want
              to quietly slip it in and surprise you on the invoice.
            </p>
            <p className="text-slate-600 mt-3">Best,<br />[Your name]</p>
          </div>
          <p>
            Write that line down and use it almost verbatim. You&apos;ll be shocked how often the
            reply is &quot;oh, you know what, let&apos;s keep the original scope.&quot;
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Communicating a Delay Before the Deadline
          </h2>
          <p>
            Clients forgive delays. They do not forgive surprises. The rule: if you even
            <em> suspect</em> you&apos;ll miss a date, tell the client <strong>before</strong> the
            date — ideally 2-3 days early. Name the cause, give a new specific date, and offer a
            mitigation. Owning it early is the difference between &quot;trustworthy
            professional&quot; and &quot;flaky freelancer.&quot;
          </p>
          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Template</h3>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-600">Hi [Client name],</p>
            <p className="text-slate-600 mt-3">
              Quick heads-up so there are no surprises: [milestone] is going to land on [new date]
              instead of [original date]. [One-line honest cause — e.g., &quot;the payment API
              sandbox needs an extra approval step I didn&apos;t account for.&quot;]
            </p>
            <p className="text-slate-600 mt-3">
              To make up time I&apos;m [mitigation — e.g., &quot;starting on milestone 2 in
              parallel so the final delivery date doesn&apos;t move.&quot;] I&apos;ll send a preview
              by [date] either way.
            </p>
            <p className="text-slate-600 mt-3">Sorry for the shift — wanted you to have it early.<br />[Your name]</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Re-Engaging an Unresponsive Client
          </h2>
          <p>
            Mid-project silence happens — clients get busy, stakeholders go on leave, decisions
            stall. Don&apos;t send three escalating &quot;just checking in&quot; emails. Send one
            low-pressure nudge that makes replying easy: a specific either/or decision, so they
            can answer in a single word.
          </p>
          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Template</h3>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-600">Hi [Client name],</p>
            <p className="text-slate-600 mt-3">
              No rush at all — just wanted to flag that I&apos;m parked on [task] waiting on
              [specific blocker]. Whenever you have 30 seconds: [single either/or question — e.g.,
              &quot;should I use the existing color palette or the new one you shared?&quot;] and
              I&apos;ll keep rolling.
            </p>
            <p className="text-slate-600 mt-3">If it&apos;s easier to hop on a quick call, I&apos;m free [2 time windows]. Either way!<br />[Your name]</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Following Up on an Overdue Invoice (Without Being Awkward)
          </h2>
          <p>
            Most freelancers hate invoicing follow-ups, so they either never send them (and don&apos;t
            get paid) or send one passive-aggressive email three weeks late. The fix is an
            <strong> escalation sequence</strong> — friendly first, firmer later, and always
            grounded in the contract terms you agreed to up front. Late fees only work if
            they&apos;re in the contract; if they&apos;re not, don&apos;t invent them now.
          </p>
          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">The escalation sequence</h3>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-sm font-medium text-slate-700 mb-2">Day 2 — friendly, assume it&apos;s an oversight:</p>
            <p className="text-slate-600">Hi [Client name] — quick note that Invoice #[123] for [$X] went out on [date]. Just pinging in case it got buried in the inbox! No rush. Thanks 🙏</p>
            <p className="text-sm font-medium text-slate-700 mb-2 mt-4">Day 7 — slightly firmer, restate terms, re-attach:</p>
            <p className="text-slate-600">Hi [Client name], following up on Invoice #[123] ($X), now a week overdue. Re-attaching for convenience. Per our agreement, a [1.5%] monthly late fee applies after [date]. Let me know if there&apos;s an issue on your end I can help with.</p>
            <p className="text-sm font-medium text-slate-700 mb-2 mt-4">Day 14 — offer a payment plan:</p>
            <p className="text-slate-600">Hi [Client name], Invoice #[123] is now 2 weeks outstanding. If a lump sum is tricky right now, I&apos;m happy to split it into [2] payments of [$X] on [dates]. Just let me know what works and I&apos;ll send updated invoices.</p>
            <p className="text-sm font-medium text-slate-700 mb-2 mt-4">Day 21 — pause work, professionally:</p>
            <p className="text-slate-600">Hi [Client name], I&apos;ve paused work on [project] until Invoice #[123] is resolved, per the payment terms in our contract. I&apos;d love to get this sorted and pick back up — can we settle the balance by [date]?</p>
          </div>
          <p>
            The day-2 note alone collects the majority of overdue invoices — most clients genuinely
            forgot. The later steps are there so you never have to improvise under stress.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Delivering Bad News or Difficult Feedback
          </h2>
          <p>
            Whether it&apos;s &quot;that feature isn&apos;t technically possible&quot; or &quot;the
            copy you sent needs a rewrite,&quot; the structure is the same: lead with the
            <strong> impact</strong>, then offer <strong>2 concrete options</strong>, never just the
            problem. Clients hire you to solve, not to narrate.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-600">Hi [Client name], heads-up on [issue]:</p>
            <p className="text-slate-600 mt-3">
              [One-line honest finding — e.g., &quot;The CMS you picked can&apos;t do
              role-based access without a custom plugin, which would double the build cost.&quot;]
            </p>
            <p className="text-slate-600 mt-3">Two ways forward:</p>
            <ol className="text-slate-600 mt-1 ml-4 list-decimal">
              <li>[Option A — e.g., &quot;Keep the CMS, ship login-only for now, add roles in phase 2 (~$X, on time).&quot;]</li>
              <li>[Option B — e.g., &quot;Switch to [alternative], supports roles natively (~+$X, +5 days).&quot;]</li>
            </ol>
            <p className="text-slate-600 mt-3">My recommendation is [A/B] because [reason]. Which do you prefer?<br />[Your name]</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            The Project Wrap-Up &amp; Offboarding Message
          </h2>
          <p>
            The last message of a project is the first message of the next one. Use it to recap
            results (so the client remembers the value), ask for a review (while the win is fresh),
            softly ask for a referral, and plant the seed for ongoing work. Most freelancers skip
            this — which is why most freelancers don&apos;t get repeat business.
          </p>
          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Template</h3>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-600">Hi [Client name], [project] is wrapped! 🎉 Quick recap of what shipped:</p>
            <ul className="text-slate-600 mt-2 ml-4 list-disc">
              <li>[Result 1 — e.g., &quot;New checkout live, mobile conversion up from 1.2% to 2.8%.&quot;]</li>
              <li>[Result 2]</li>
            </ul>
            <p className="text-slate-600 mt-3">
              Two quick asks: if you have 60 seconds, a short review would mean a lot — link here:
              [review link]. And if anyone in your network needs [your service], I&apos;d be grateful
              for an intro.
            </p>
            <p className="text-slate-600 mt-3">
              Also — if it&apos;d help, I can move to a small monthly retainer for [maintenance /
              iterations] so this never goes stale. Want me to send options?
            </p>
            <p className="text-slate-600 mt-3">Great working with you on this one.<br />[Your name]</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            5 Communication Rules That Apply to Every Message
          </h2>
          <ol>
            <li><strong>Set a reply SLA and beat it.</strong> Tell clients when you&apos;ll reply (&quot;within 4 business hours&quot;) and beat it. Reliability beats speed.</li>
            <li><strong>Lead with the answer, not the backstory.</strong> First line = the decision or status. Context goes after. Busy clients read top-down and quit.</li>
            <li><strong>One ask per message.</strong> Multiple questions get zero answers. If you need 3 decisions, send 3 short messages or a numbered list with one clear ask.</li>
            <li><strong>Mirror their channel and tone.</strong> Email person? Email. Slack person? Slack. Formal client → formal you. Matching their style is the fastest trust signal.</li>
            <li><strong>Document decisions in writing.</strong> After every call, send a 3-line recap: &quot;Decided: X. Next: Y by Z.&quot; It ends 90% of &quot;he-said-she-said&quot; disputes before they start.</li>
          </ol>
          <p>
            These five habits matter even more than the templates — because the templates only kick
            in at key moments, while the rules shape every interaction. Many of the worst
            communication breakdowns trace back to the same root causes as{" "}
            <Link href="/blog/upwork-proposal-mistakes" className="text-indigo-600 font-medium hover:underline">
              the proposal mistakes that kill your win rate
            </Link>{" "}
            — generic, self-centered, no clear ask. Fix the pattern once and every message improves.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Stop Writing Client Messages from Scratch
          </h2>
          <p>
            You don&apos;t need to reinvent the kickoff note every Monday. The templates above cover
            the 7 moments that decide whether a client renews, refers, or quietly disappears. Steal
            them, save them, and make them yours.
          </p>
          <p>
            And if you want to take the same system beyond client messages — to proposals,
            follow-ups, and onboarding sequences that write themselves —{" "}
            <Link href="/" className="text-indigo-600 font-medium hover:underline">
              ProposalAI
            </Link>{" "}
            can help. Paste a job description or client brief and it drafts proposals, kickoff
            messages, and scope-change responses in about 30 seconds. You can{" "}
            <Link href="/pricing" className="text-indigo-600 font-medium hover:underline">
              see the plans here
            </Link>{" "}
            or just try it free:
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
              href="/blog/freelance-contract-templates"
              className="group block bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                Contracts
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                Freelance Contract Templates: Protect Yourself on Every Project (2025)
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                The contract clauses that make scope-creep and overdue-invoice conversations 10x easier. Pair with the templates above.
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
                The same communication mistakes that lose clients mid-project also lose them in the proposal. Fix the pattern once.
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Write client messages that get you rehired
          </h2>
          <p className="mt-3 text-indigo-100 max-w-xl mx-auto">
            Proposals, kickoffs, and follow-ups — drafted in 30 seconds. AI-powered, client-ready, free to try.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" className="mt-6 bg-white text-indigo-700 hover:bg-indigo-50">
              Try It Free
            </Button>
          </Link>
        </div>
      </article>

      <BlogPostSchemas slug={slug} />
      <Footer />
    </div>
  );
}
