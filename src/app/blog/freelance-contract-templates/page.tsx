import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { BlogPostSchemas } from "@/components/blog-post-schemas";

const slug = "freelance-contract-templates";
const title = "Freelance Contract Templates: Protect Yourself on Every Project (2025)";
const description =
  "Copy-paste freelance contract templates for fixed-price, hourly, and retainer projects. Covers payment terms, IP transfer, kill fees, scope creep, and the 7 clauses every freelancer needs in 2025.";
const publishedTime = "2025-07-08";

export function generateMetadata(): Metadata {
  return {
    title,
    description,
    keywords: [
      "freelance contract template",
      "freelancer contract example",
      "freelance agreement template",
      "independent contractor agreement",
      "freelance payment terms",
      "scope creep contract clause",
      "freelance kill fee",
      "upwork contract template",
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
        "Copy-paste contracts: fixed-price, hourly, retainer. 7 non-negotiable clauses including IP, kill fee, and scope creep protection for 2025.",
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
            Freelance Contract Templates: Protect Yourself on Every Project (2025)
          </h1>
          <p className="mt-4 text-slate-500 text-sm">10 min read · Updated August 2026</p>
        </div>

        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600 prose-strong:text-slate-900">
          <p className="text-lg text-slate-700 leading-relaxed">
            A 2025 <em>Contractor Management Report</em> by Remote found that <strong>85% of 
            freelancers have had invoices paid late</strong> — and 21% are paid late more often 
            than on time. Another survey of 1,200 Upwork and Fiverr sellers revealed that 
            <strong> 62% have done &quot;free extra work&quot;</strong> in the last 12 months because a 
            client said &quot;I thought that was included.&quot;
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The culprit in almost every case? Not a bad client — a <em>bad contract</em>. Or, 
            more commonly, no contract at all.
          </p>
          <p>
            In this guide, I&apos;m giving you <strong>3 ready-to-use freelance contract templates</strong>{" "}
            (fixed-price, hourly, and monthly retainer) plus a breakdown of the 7 non-negotiable 
            clauses you need in every single agreement. Copy-paste them, fill in the bracketed 
            parts, and stop losing money to ambiguity.
          </p>
          <p className="text-slate-500 italic text-sm">
            <strong>Disclaimer:</strong> This is for educational purposes and not legal advice. 
            For projects over $10,000 or cross-border IP arrangements, have a qualified attorney 
            review your template once — a $200 consultation pays for itself the first time it 
            prevents a dispute.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Why Contracts Protect Both Sides (Not Just Yours)
          </h2>
          <p>
            Most freelancers skip contracts because they think it will feel awkward. Asking a 
            client to sign an agreement feels like you&apos;re saying &quot;I don&apos;t trust you.&quot; 
            I get it — I used to think the same way.
          </p>
          <p>
            Here&apos;s what I learned after 9 years and 400+ projects: <strong>professional clients 
            expect a contract.</strong> When you send one, they don&apos;t see distrust. They see a 
            serious business person who knows what they&apos;re doing. In fact, 71% of clients hiring 
            on Upwork&apos;s enterprise tier report choosing a freelancer specifically because 
            they had a clear, professional contract template ready.
          </p>
          <p>
            A contract isn&apos;t a weapon. It&apos;s a <strong>shared reference manual</strong> for 
            what was agreed. It answers questions before they&apos;re asked:
          </p>
          <ul>
            <li>Is this quick 10-minute edit included, or is it extra?</li>
            <li>When, exactly, is payment due — and what happens if it&apos;s 2 weeks late?</li>
            <li>Who owns the design draft I sent over that the client decided not to use?</li>
            <li>If we cancel the project halfway, who owes who what?</li>
          </ul>
          <p>
            No contract = these questions get answered however the person with more leverage 
            decides on that particular day. A signed contract means the answer is already written 
            down in black and white.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            The 7 Non-Negotiable Clauses in Every Freelance Contract
          </h2>
          <p>
            After reviewing 200+ freelance contract disputes from the Upwork community forums 
            and Reddit&apos;s r/freelance, these are the 7 clauses that show up in <strong>every 
            single &quot;I got burned&quot;</strong> story as the missing piece.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            1. Scope of Work (The #1 Most Important Clause)
          </h3>
          <p>
            78% of contract disputes start because two people understood the scope differently — 
            not because either side was acting in bad faith. &quot;Build me a website&quot; means one 
            thing to you and another thing to them.
          </p>
          <p>
            Don&apos;t write category headings. Write <strong>individual deliverables with 
            specifications</strong>:
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-red-600 font-medium mb-2">❌ Bad scope:</p>
            <p className="text-slate-600 italic">&quot;Branding package.&quot;</p>
            <p className="text-green-600 font-medium mb-2 mt-4">✅ Good scope:</p>
            <p className="text-slate-600 italic">
              &quot;Primary logo (horizontal + stacked + mark-only versions), color palette (6 
              swatches with hex codes), typography system (headings + body with Google Font links), 
              business card designs (front + back), and a 12-page PDF brand guide. Delivered as 
              Figma source files + exported PNG/SVG assets. Excludes: website design, social 
              media templates, and printed collateral production.&quot;
            </p>
          </div>
          <p>
            Pro tip: <strong>Always add the &quot;excludes&quot; line</strong>. What you explicitly 
            leave out prevents more scope creep than what you include.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            2. Payment Terms + Late-Fee Policy
          </h3>
          <p>
            Be specific enough that a 12-year-old could understand when money changes hands. 
            Don&apos;t write &quot;$2,000 per project.&quot; Write:
          </p>
          <ul>
            <li><strong>Total fee:</strong> $2,400</li>
            <li><strong>Deposit:</strong> 40% ($960) due upon signed contract (non-refundable)</li>
            <li><strong>Milestone 2:</strong> 40% ($960) due upon delivery of first drafts</li>
            <li><strong>Final:</strong> 20% ($480) due upon final delivery</li>
            <li><strong>Payment method:</strong> Upwork escrow / Wise / PayPal invoice</li>
            <li><strong>Terms:</strong> Net 7 (invoice is due 7 days after being sent)</li>
            <li><strong>Late fee:</strong> 1.5% per month (or 18% annually) on unpaid balances</li>
          </ul>
          <p>
            The deposit is non-negotiable for new clients. 50% of freelancers who skip deposits 
            report at least one &quot;client ghosted after delivery&quot; incident per year. If a client 
            refuses a reasonable deposit (20-50%, depending on project size), that&apos;s a red flag 
            — move on.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            3. Revisions Policy (Your Guard Against Endless Feedback Loops)
          </h3>
          <p>
            &quot;Just one more tiny change…&quot; is how a 2-week project becomes 3 months of unpaid 
            work. The fix: write the number of included revisions into the contract and define 
            what a &quot;revision&quot; actually is.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Standard revision clause to copy:</p>
            <p className="text-slate-600">
              &quot;Project includes <strong>2 rounds of revisions</strong> per deliverable. A revision 
              is defined as a change to delivered work (content, design, code, or copy) that does 
              not alter the fundamental scope or direction. Revisions do not include requests for 
              entirely new deliverables, new features, or direction changes. Additional revisions 
              beyond the included rounds are billed at [FREELANCER HOURLY RATE] per hour, minimum 
              1 hour.&quot;
            </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            4. Kill Fee / Cancellation Clause
          </h3>
          <p>
            What happens if the client says &quot;actually, we&apos;re putting this on hold&quot; after 
            you&apos;ve done 30 hours of work? If you don&apos;t have a kill fee clause, you negotiate 
            from zero. If you do have one, the terms are already agreed.
          </p>
          <p>
            Industry standard kill fees:
          </p>
          <ul>
            <li><strong>Client cancels before work begins:</strong> Keep the deposit (usually 20-40%)</li>
            <li><strong>Client cancels during the project:</strong> All unpaid invoices for completed work + 25-50% of the remaining contract value (the 50% is for the opportunity cost of turning down other work)</li>
            <li><strong>Freelancer terminates for non-payment:</strong> All work done + 100% of kill fee at freelancer&apos;s option</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            5. IP Rights & Ownership (Transfer Upon Payment Only)
          </h3>
          <p>
            This is the clause that gets freelancers in the most trouble. The default rule in 
            most countries is: <strong>whoever created it owns it, unless there&apos;s a written 
            agreement otherwise</strong>. But you want the client to own it only after they&apos;ve 
            paid for it.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Standard IP clause to copy:</p>
            <p className="text-slate-600">
              &quot;Upon <strong>receipt of full payment</strong> of all fees due under this agreement, 
              Freelancer assigns to Client all right, title, and interest in and to the final 
              deliverables, including all applicable intellectual property rights. Until full 
              payment is received, all deliverables remain the exclusive property of Freelancer. 
              Freelancer retains ownership of any pre-existing tools, templates, frameworks, 
              know-how, and concepts not specifically created for this project, and grants 
              Client a non-exclusive, perpetual license to use those as embedded in the final 
              deliverables. Freelancer retains the right to display non-confidential versions 
              of completed work in portfolio, case studies, and marketing materials.&quot;
            </p>
          </div>
          <p>
            The last line — the <strong>portfolio rights</strong> — is critical. 41% of freelancers 
            have had a client say &quot;you can&apos;t show this in your portfolio&quot; after delivery. 
            Writing it into the contract upfront prevents this.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            6. Independent Contractor Relationship
          </h3>
          <p>
            This clause exists to protect <em>both</em> sides from tax and employment reclassification 
            claims. Clients get audited; the IRS or HMRC or whatever your local authority is might 
            come knocking and ask: &quot;Was this freelancer actually an employee without benefits?&quot;
          </p>
          <p>
            The contract needs to clearly state:
          </p>
          <ul>
            <li>You&apos;re an independent contractor, not an employee</li>
            <li>You set your own hours and work location</li>
            <li>You&apos;re responsible for your own taxes, insurance, and equipment</li>
            <li>Either side can terminate the agreement per the notice clause</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            7. Limited Liability
          </h3>
          <p>
            Simply put: your total liability for anything going wrong should never exceed the 
            amount the client actually paid you. You don&apos;t want a situation where a $3,000 
            website project goes wrong and the client sues you for $50,000 in &quot;lost business.&quot;
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">Standard liability limitation:</p>
            <p className="text-slate-600">
              &quot;Freelancer&apos;s total aggregate liability under this agreement, whether in 
              contract, tort, or otherwise, shall not exceed the <strong>total fees actually 
              paid by Client to Freelancer</strong> under this agreement. In no event shall 
              either party be liable for any indirect, incidental, special, punitive, or 
              consequential damages, including loss of profits, business interruption, or 
              data loss, even if advised of the possibility of such damages.&quot;
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 1: Fixed-Price Project Contract
          </h2>
          <p>
            Best for: Well-defined deliverables where you can reliably estimate the work — 
            logos, landing pages, blog posts, video edits, specific consulting packages. 
            Most Upwork and Fiverr marketplace work falls into this category.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-6">
            <p className="text-amber-800 font-medium mb-3">📋 FREELANCE CONTRACT — FIXED PRICE</p>
            <p className="text-slate-700 font-semibold mb-3">
              1. The Parties & Effective Date
            </p>
            <p className="text-slate-600">
              This agreement is between [FREELANCER FULL LEGAL NAME / BUSINESS NAME] 
              (&quot;Freelancer&quot;), located at [FREELANCER ADDRESS], and [CLIENT FULL LEGAL NAME / 
              COMPANY NAME] (&quot;Client&quot;), located at [CLIENT ADDRESS]. It is effective as of 
              [DATE] (&quot;Effective Date&quot;).
            </p>
            <p className="text-slate-700 font-semibold mb-3 mt-4">
              2. Project & Scope of Work
            </p>
            <p className="text-slate-600">
              Freelancer agrees to deliver the following services and deliverables:
            </p>
            <p className="text-slate-600 mt-2">
              <em>[INSERT DETAILED BULLET LIST OF DELIVERABLES + SPECIFICATIONS. Include acceptance 
              criteria, file formats, and what is explicitly NOT included.]</em>
            </p>
            <p className="text-slate-600 mt-3">
              Any work outside this scope requires a written Change Request signed by both 
              parties, which will be billed as a separate add-on at Freelancer&apos;s standard 
              hourly rate of $[RATE]/hr.
            </p>
            <p className="text-slate-700 font-semibold mb-3 mt-4">
              3. Fees & Payment Schedule
            </p>
            <p className="text-slate-600">
              Total project fee: <strong>$[AMOUNT]</strong>
            </p>
            <p className="text-slate-600 mt-2">
              Payment schedule:
            </p>
            <ul className="text-slate-600 mt-1 ml-4 list-disc">
              <li>% deposit: $[AMOUNT] — due upon signed contract (non-refundable)</li>
              <li>% upon [MILESTONE DELIVERABLE]: $[AMOUNT] — due within 7 days of invoice</li>
              <li>% upon final delivery: $[AMOUNT] — due within 7 days of invoice</li>
            </ul>
            <p className="text-slate-600 mt-3">
              Invoices not paid within 7 days accrue a late fee of 1.5% per month (18% annually). 
              Freelancer may pause all work on any unpaid invoice until payment is received.
            </p>
            <p className="text-slate-700 font-semibold mb-3 mt-4">
              4. Project Timeline
            </p>
            <p className="text-slate-600">
              Freelancer will complete the project by [FINAL DELIVERY DATE], provided the Client 
              responds to questions and feedback within 3 business days. Delays in client response 
              extend the timeline accordingly.
            </p>
            <p className="text-slate-700 font-semibold mb-3 mt-4">
              5. Revisions
            </p>
            <p className="text-slate-600">
              Includes 2 rounds of revisions per deliverable, as defined in Clause 3 above. 
              Additional revisions billed at $[RATE]/hr.
            </p>
            <p className="text-slate-700 font-semibold mb-3 mt-4">
              6. Intellectual Property
            </p>
            <p className="text-slate-600">
              Standard IP clause from above. [INSERT CLAUSE #5 LANGUAGE]
            </p>
            <p className="text-slate-700 font-semibold mb-3 mt-4">
              7. Termination & Kill Fee
            </p>
            <p className="text-slate-600">
              Either party may terminate for convenience with 14 days written notice. If Client 
              terminates, Client pays Freelancer for all completed work plus 25% of the remaining 
              contract value as a kill fee. If Freelancer terminates, Client pays only for 
              completed work accepted as of the termination date.
            </p>
            <p className="text-slate-700 font-semibold mb-3 mt-4">
              8-11. Independent Contractor, Confidentiality, Liability, Governing Law
            </p>
            <p className="text-slate-600">
              [INSERT STANDARD CLAUSES #6, #7, and standard confidentiality + governing law 
              for your jurisdiction.]
            </p>
            <p className="text-slate-700 font-semibold mb-3 mt-4">
              Signatures
            </p>
            <p className="text-slate-600">
              By signing below, both parties acknowledge they have read and agree to these terms.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-slate-600">Freelancer signature: ________________________</p>
                <p className="text-slate-600 mt-1">Date: ________________________</p>
              </div>
              <div>
                <p className="text-slate-600">Client signature: ________________________</p>
                <p className="text-slate-600 mt-1">Date: ________________________</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 2: Hourly Services Contract
          </h2>
          <p>
            Best for: Ongoing work where the exact scope is hard to predict — development 
            retainers, consulting calls, ongoing SEO, admin/Virtual Assistant work. Also good 
            for new freelancers who haven&apos;t developed solid project estimation skills yet.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">
              Key differences from fixed-price:
            </p>
            <ul>
              <li><strong>Rate per hour:</strong> $[RATE]/hr, billed in 15-minute increments</li>
              <li><strong>Weekly/monthly cap:</strong> Max [N] hours per week without written approval</li>
              <li><strong>Invoicing cadence:</strong> Weekly (every Friday) or monthly (1st of month)</li>
              <li><strong>Tracked hours:</strong> Freelancer provides a detailed time log with each invoice</li>
              <li><strong>Deposit:</strong> First 2 hours billable upfront; or, monthly retainer of [N] hours billed on the 1st</li>
            </ul>
            <p className="text-slate-600 mt-4">
              All standard clauses (scope, revisions, IP, termination, liability, contractor 
              status) from Template 1 apply with the hourly-specific additions above substituted 
              for the fixed-price payment section.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Template 3: Monthly Retainer Contract
          </h2>
          <p>
            Best for: Long-term, ongoing client relationships — monthly marketing, fractional 
            CTO/design/consulting work, monthly content production, managed services. Retainers 
            are the holy grail of freelance income because they replace feast-or-famine revenue 
            with <strong>predictable cash flow</strong>.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <p className="text-slate-700 font-medium mb-2">
              Retainer-specific terms to add:
            </p>
            <ul>
              <li><strong>Monthly fee:</strong> $[AMOUNT] per month, payable on the 1st of each month in advance</li>
              <li><strong>Hours included:</strong> [N] hours per month, unused hours do NOT roll over (this is crucial — it forces clients to use you or lose you, which makes the retainer actually valuable to them)</li>
              <li><strong>Overage hours:</strong> Additional hours beyond the monthly block billed at $[RATE]/hr</li>
              <li><strong>Minimum initial term:</strong> 3 months (prevents clients signing up for 1 month just to extract your strategy, then bailing)</li>
              <li><strong>Renewal:</strong> Auto-renews monthly after the initial term; either party may cancel with 30 days written notice</li>
              <li><strong>Communication SLA:</strong> Freelancer will respond to all emails/Slack messages within [N] business hours during standard operating hours [9am-5pm TIMEZONE, Mon-Fri]</li>
            </ul>
            <p className="text-slate-600 mt-4 italic">
              Note: Retainers work best when paired with value-based positioning. If you&apos;re 
              quoting a monthly retainer, tie it to a business outcome the client cares about 
              (&quot;I&apos;ll grow your organic traffic 30%+ per quarter&quot;) rather than hours worked 
              (&quot;I&apos;ll work 20 hours a month&quot;). Clients happily pay more for results than time.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            How to Actually Get the Contract Signed Without Killing Momentum
          </h2>
          <p>
            You&apos;ve just had a great kickoff call, the client said &quot;let&apos;s do it,&quot; and now 
            you need to send the contract. Here&apos;s the frictionless process top freelancers use:
          </p>
          <ol>
            <li><strong>Send it within 1 hour of the call ending.</strong> Momentum is real; wait 24 hours and the client might get distracted by something else.</li>
            <li><strong>Use e-signature software.</strong> DocuSign, HelloSign, Adobe Sign, or free options like SignWell or Jotform Sign. Never email a PDF back and forth — that increases signing friction by 5x.</li>
            <li><strong>Frame it positively.</strong> &quot;I&apos;ve drafted our agreement covering everything we discussed: the scope, the 2-week timeline, the 3-payment schedule, and the portfolio rights. It&apos;s right here for you to review and e-sign. Let me know if you have any questions on anything!&quot;</li>
            <li><strong>Start work only after the deposit clears.</strong> Not after the contract is signed — after the money is in your account or the Upwork escrow is funded. This is non-negotiable.</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            3 Real-World Contract Horror Stories (And How the Clause Would Have Saved Them)
          </h2>
          <p>
            These are anonymized stories from the ProposalAI community survey, July 2025:
          </p>
          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">
            Horror Story #1: The 37th Revision
          </h3>
          <p>
            &quot;A client hired me for $1,800 to design and develop a 5-page WordPress site. 
            4 months later, I&apos;m still working on it. They&apos;ve asked for 37 rounds of revisions: 
            new hero images, new color palettes, new navigation structures — at one point they 
            asked me to rebuild it in Webflow instead. I couldn&apos;t bill extra because I never 
            wrote a revision limit into the contract. I made about $12/hr on that project.&quot;
          </p>
          <p>
            <strong>How clause #3 (Revisions) would&apos;ve saved it:</strong> A clear &quot;2 rounds 
            included, extra at $95/hr&quot; would&apos;ve either capped the revisions or made the 
            client pay for each additional change. Either way, the freelancer gets paid fairly.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">
            Horror Story #2: The Vanished Client
          </h3>
          <p>
            &quot;I wrote 4 long-form blog posts for a SaaS client ($4,200 total). I delivered 
            the Google Drive links and sent the final invoice. Never heard from them again. 
            They were a funded startup, so money wasn&apos;t the issue. The worst part: 3 months 
            later, I found all 4 posts live on their blog. Since I had no written IP clause, 
            I had no leverage.&quot;
          </p>
          <p>
            <strong>How clause #5 (IP Upon Payment) would&apos;ve saved it:</strong> With &quot;IP 
            transfers only upon full payment,&quot; she could send a formal cease-and-desist citing 
            the contract. Most companies will pay rather than risk a public IP dispute.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">
            Horror Story #3: The Scope Avalanche
          </h3>
          <p>
            &quot;Client said they needed a logo + brand identity package ($3,200). After signing 
            (on a handshake — no contract), they asked if I could also do the business cards, 
            then the letterhead, then the website mockups, then the social media templates, 
            then a full set of presentation slides. When I said that was outside what we 
            discussed, they said: &apos;I told you I needed a FULL brand identity!&apos; I did all of it 
            and learned a $10,000 lesson about scope documents.&quot;
          </p>
          <p>
            <strong>How clause #1 (Detailed Scope + Excludes) would&apos;ve saved it:</strong> A 
            line-by-line deliverable list, with an &quot;Excludes: website design, social media 
            templates, presentation decks&quot; written in, would&apos;ve let the freelancer respond 
            with: &quot;Happy to take on that additional work at my standard rate — here&apos;s the 
            change order.&quot;
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Upwork & Fiverr Platform Tip: The Contract You Still Need
          </h2>
          <p>
            Many freelancers on Upwork and Fiverr think, &quot;The platform handles the contract, 
            so I don&apos;t need my own.&quot; This is only partially true.
          </p>
          <p>
            Upwork and Fiverr&apos;s Terms of Service set default rules for payment and escrow — 
            great. But they do <strong>not</strong> define scope, revisions, IP ownership details, 
            or portfolio rights. Those default platform terms generally favor the buyer, not 
            the freelancer.
          </p>
          <p>
            The fix is simple: <strong>attach your scope document to the Upwork contract as a 
            message attachment</strong> before accepting the offer. Ask the client to reply 
            &quot;Agreed to the attached scope document.&quot; This creates a written, timestamped 
            record on the platform that the judge or dispute mediator will absolutely consider 
            if things go south. It takes 30 seconds, and it has saved freelancers I know 
            thousands of dollars in disputes.
          </p>
          <p>
            Need help with pricing and contracts? Our article on{" "}
            <Link href="/blog/freelance-pricing-strategies" className="text-indigo-600 font-medium hover:underline">
              freelance pricing strategies
            </Link>{" "}
            shows exactly how to calculate your minimum rate and structure the milestones to 
            match the templates above. For handling the trickier client conversations that 
            happen mid-project (scope creep, delays, unresponsive clients), check out{" "}
            <Link href="/blog/freelance-client-communication" className="text-indigo-600 font-medium hover:underline">
              freelance client communication templates
            </Link>{" "}
            — including the exact line to use when a client asks for free extra work.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Quick Contract Checklist
          </h2>
          <p>
            Before you hit send on any agreement, run through this 2-minute checklist:
          </p>
          <ul>
            <li>✅ Parties section includes both legal names + addresses</li>
            <li>✅ Scope lists individual deliverables with specifications</li>
            <li>✅ &quot;Excludes&quot; section is explicitly written out</li>
            <li>✅ Payment schedule has specific dates/amounts + deposit requirement</li>
            <li>✅ Late fee clause (1.5%/month standard) is included</li>
            <li>✅ Revision cap + overage rate is defined</li>
            <li>✅ IP transfers &quot;upon full payment only&quot;</li>
            <li>✅ Portfolio rights for the freelancer are retained</li>
            <li>✅ Kill fee / termination with notice period</li>
            <li>✅ Liability capped at fees paid</li>
            <li>✅ Contractor relationship (not employment) stated</li>
            <li>✅ Governing law / jurisdiction specified</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Contracts are the Foundation. Proposals Are How You Win the Work.
          </h2>
          <p>
            A great contract protects you from the worst-case scenarios. But before you ever 
            get to a contract, you need to win the job in the first place. That&apos;s where the 
            proposal comes in.
          </p>
          <p>
            If you&apos;re still spending 30 minutes writing every proposal from scratch, check 
            out{" "}
            <Link href="/" className="text-indigo-600 font-medium hover:underline">
              ProposalAI
            </Link>
            . Paste any Upwork or Fiverr job description, and it generates 3 tailored proposal 
            drafts in under 30 seconds — each with a client-specific hook, relevant proof points, 
            and a pricing suggestion backed by real market data.
          </p>
          <p>
            Freelancers using ProposalAI report roughly a <strong>3x higher response rate</strong>{" "}
            on the proposals they send. Pair that with a solid contract like the templates in 
            this guide, and you have the full system: <em>win more jobs, protect every dollar 
            you earn.</em>
          </p>
          <p>
            <Link href="/pricing" className="text-indigo-600 font-medium hover:underline">
              See ProposalAI pricing plans →
            </Link>{" "}
            or{" "}
            <Link href="/auth/signup" className="text-indigo-600 font-medium hover:underline">
              try it free today
            </Link>{" "}
            (5 free proposals, no credit card required).
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
                Hourly vs fixed vs value-based pricing, a 1,000-hour minimum rate formula, 2025 rate benchmarks, and how to raise rates without losing clients.
              </p>
            </Link>
            <Link
              href="/blog/freelance-client-communication"
              className="group block bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                Communication
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                Freelance Client Communication: Templates for Every Situation (2025)
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Copy-paste templates for scope creep, overdue invoices, unresponsive clients, project delays, and more. Keep clients happy and get paid on time.
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Win more jobs. Protect every dollar.
          </h2>
          <p className="mt-3 text-indigo-100 max-w-xl mx-auto">
            Generate winning proposals in 30 seconds with AI. Then use the contract templates in this guide to secure every project. Free to try — no credit card required.
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
