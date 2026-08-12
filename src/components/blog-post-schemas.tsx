"use client";

import { ArticleSchema, BreadcrumbSchema, FaqSchema, type FaqItem } from "@/components/seo-schemas";

// ============= FAQ 配置（按 slug 映射，每篇 2-4 个精选问答）=============
const FAQ_BY_SLUG: Record<string, FaqItem[]> = {
  "upwork-proposal-mistakes": [
    {
      question: "What is the #1 Upwork proposal mistake freelancers make?",
      answer: "Using a generic opening line like \"Hi, I'm interested in your project.\" When 40+ applicants open with the exact same line, your proposal becomes invisible. Open with a specific reference to their problem instead — e.g., \"Your Shopify checkout has a 68% abandonment rate — I helped a client cut that to 41%.\""
    },
    {
      question: "How long should an Upwork proposal be?",
      answer: "Between 100 and 200 words. That's enough to show you understand the problem, prove you can solve it, and ask a question. Long proposals get skimmed and closed before paragraph 2. If the client wants more detail, they'll ask for it on a call."
    },
    {
      question: "Should I bid below the client's budget on Upwork?",
      answer: "No. New freelancers often bid 30-50% below budget thinking it makes them competitive. It doesn't — low bids signal low confidence and low quality. Bid at or slightly above budget, then justify it with your track record: \"I charge more because I deliver in half the time with fewer revisions.\""
    },
    {
      question: "What is a good Upwork proposal win rate?",
      answer: "The Upwork site average is roughly 1 in 10 (10%). Top-rated freelancers win 30-50% of the proposals they send. The difference isn't talent — it's avoiding the 10 common mistakes covered in this guide, like generic openings, talking about yourself instead of the problem, and skipping the closing question."
    },
  ],
  "fiverr-gig-promotion": [
    {
      question: "How do I promote my Fiverr gig and get more orders?",
      answer: "A winning promotion strategy combines on-platform and off-platform tactics. On-platform: optimize your gig title and tags for Fiverr search, add a video, price competitively, and deliver early so you can ask for a 5-star review. Off-platform: share your gig on Reddit (r/Freelance, r/SideProject), Medium, and freelancer forums with genuine value posts (not spam)."
    },
    {
      question: "Do Fiverr gig promotions work?",
      answer: "Fiverr's in-house Promoted Gigs feature can work for established sellers with reviews, but as a new seller it rarely pays off. Your best ROI is organic SEO + genuine community content. Write a blog post about your niche, link to your gig, and answer relevant Quora questions."
    },
    {
      question: "How do I get my first order on Fiverr?",
      answer: "Optimize your gig for long-tail keywords (e.g., \"WordPress speed optimization\" not just \"WordPress\"), add a 60-second video walkthrough of your process, price at $5 for your entry package to lower buyer friction, and set your availability to \"Online Now\" 8+ hours a day. Respond to buyer requests within 10 minutes."
    },
  ],
  "upwork-job-invitation-response": [
    {
      question: "Should I accept every Upwork job invitation?",
      answer: "No. Accept only invitations where you have a strong skills match, the client has a verified payment method, and the scope is clearly defined. Declining politely is better than accepting a project you can't deliver on — it protects your Job Success Score."
    },
    {
      question: "How do I respond to an Upwork invitation quickly?",
      answer: "Within 15 minutes if possible. Use the invitation as a warm lead. Mention the specific part of their job post that caught your eye, link to one relevant portfolio piece, and ask a clarifying question. A fast, specific response triples your chance of getting hired."
    },
    {
      question: "How do I politely decline an Upwork invitation?",
      answer: "\"Hi [Name], thanks so much for the invite! After reviewing the scope more carefully, I don't think I'm the best fit for this exact project because [brief, honest reason — e.g., I specialize in React but this needs Angular]. That said, I'd love to be considered for any future [your niche] work you might have. Best of luck with the project!\""
    },
  ],
  "upwork-connects-tips": [
    {
      question: "How many Upwork Connects should I use per proposal?",
      answer: "Only spend more than 4-6 Connects if the job is an excellent match: verified payment method, under 15 proposals, detailed description, and you have a direct portfolio sample. Throwing 16 Connects at every job you're somewhat qualified for is the #1 waste."
    },
    {
      question: "What happens if I run out of Upwork Connects?",
      answer: "You can't apply to paid jobs. Freelancers on the free plan get 10 Connects per month. Plus members get 80. If you run out, the upgrade to Plus ($14.99/mo) almost always pays for itself within 2-3 additional hires."
    },
    {
      question: "Do more Connects = more hires on Upwork?",
      answer: "Not directly. A well-written proposal sent for 4 Connects beats a generic one sent for 16 Connects every time. Use the number of Connects as a signal of how confident you are in the match, not as a substitute for proposal quality."
    },
  ],
  "upwork-proposal-templates": [
    {
      question: "Are Upwork proposal templates effective?",
      answer: "Yes — if you customize them per job post. A template gives you the structure (hook → proof → question). But you must fill in the client's specific problem and a portfolio piece that matches their project. Sent as-is, templates are worse than useless; used as structure, they consistently outperform writing from scratch."
    },
    {
      question: "What is the best format for an Upwork proposal?",
      answer: "Hook (specific reference to their problem in sentence 1) → Proof (one quantified result) → Question (a specific, project-related question at the end). Keep it between 100 and 200 words. Mirror the client's tone: formal client → formal proposal, casual client → casual pitch."
    },
    {
      question: "How do I end an Upwork proposal?",
      answer: "End with a specific, thoughtful question about their current setup. Examples: \"Are you currently using [tool], or open to alternatives?\" \"What's the biggest bottleneck in your current workflow?\" \"Would you prefer a quick 15-minute call or a detailed document first?\" Questions double your reply rate."
    },
  ],
  "upwork-cover-letter-examples": [
    {
      question: "What is the difference between an Upwork proposal and a cover letter?",
      answer: "On Upwork, they're the same thing — clients use the terms interchangeably. But compared to a traditional job cover letter, Upwork proposals need to be much shorter (100-200 words), lead with the client's problem not your resume, and end with a direct question."
    },
    {
      question: "How do you write a cover letter that stands out on Upwork?",
      answer: "Three techniques: (1) Open by name-dropping a specific detail from their post — not \"I read your job post.\" (2) Include one quantified result in a project similar to theirs. (3) End with a question. These three changes alone make your proposal feel like a real person wrote it."
    },
  ],
  "how-to-get-first-job-on-upwork": [
    {
      question: "How do I get my first job on Upwork with no experience?",
      answer: "Pick a narrow niche (e.g., \"Shopify landing page fixes\" not \"web development\"), build 2-3 spec projects for your portfolio even if unpaid, price 30% below the market average for your first 3 jobs to get reviews, and apply to only jobs with verified payment and fewer than 10 proposals submitted. Quality beats quantity by a mile."
    },
    {
      question: "How long does it take to get the first job on Upwork?",
      answer: "Most new freelancers get their first job within 2-4 weeks if they apply to 3-5 well-matched jobs per day with customized proposals. If after 6 weeks you've had zero interviews, your profile headline, overview, or proposal opening needs a rewrite."
    },
    {
      question: "Do I need experience to start on Upwork?",
      answer: "No, but you need portfolio samples. Do 2-3 free or low-cost projects for friends/family or create spec work (sample websites, writing samples, designs) in your niche. Clients hire based on demonstrated output, not years on a resume."
    },
  ],
  "fiverr-gig-description-examples": [
    {
      question: "How do I write a Fiverr gig description that converts?",
      answer: "Lead with the client's problem, not your skills. Use the first 2 sentences to describe what they get. Include 2-3 specific deliverables with bullet points, add social proof (reviews or case studies from outside Fiverr if new), and end with a clear CTA: \"Click Order Now or message me with any questions.\""
    },
    {
      question: "What should I avoid in my Fiverr gig description?",
      answer: "Don't start with \"I am a professional with 5 years of experience.\" Don't overpromise unrealistic turnarounds (24-hour complete rebrand = red flag). Don't write walls of text — use short paragraphs, bullet points, and bold keywords."
    },
    {
      question: "How many keywords should I put in my Fiverr gig description?",
      answer: "5-7 keywords naturally woven into the content. Fiverr's search engine looks for exact matches in your gig title, category, tags, and description. Stuffing 20+ keywords gets you penalized. Prioritize long-tail phrases that buyers actually type."
    },
  ],
  "upwork-profile-summary-examples": [
    {
      question: "What should I write in my Upwork profile overview?",
      answer: "The 5 elements of a strong summary: (1) A one-line positioning statement, (2) 2-3 quantified results, (3) a list of specific tools/skills, (4) a short client success story, and (5) a clear CTA like \"Invite me to your job and I'll respond within 2 hours.\" Keep it under 300 words."
    },
    {
      question: "How important is my Upwork profile title?",
      answer: "Extremely important — it shows up in search results next to your name and hourly rate. Use the formula: [Your Niche] + [Core Benefit] + [Social Proof if you have it]. Example: \"WordPress Developer — I fix slow sites in 48 hours or less.\""
    },
  ],
  "upwork-vs-fiverr": [
    {
      question: "Which is better for beginners: Upwork or Fiverr?",
      answer: "For absolute beginners with no portfolio, Fiverr is easier to get your first 3 reviews because of the low price points and package-based structure. Once you have reviews and want higher rates (>$40/hr), migrate to Upwork where clients consistently pay more for custom work."
    },
    {
      question: "Can I be on both Upwork and Fiverr at the same time?",
      answer: "Yes. Most multi-platform freelancers use Fiverr for quick, packageable work (logos, short writing) and Upwork for larger, custom projects ($500+). Just tailor your pricing and profile copy to each platform — don't copy-paste the same bio."
    },
    {
      question: "Which platform takes higher fees, Upwork or Fiverr?",
      answer: "They're essentially equivalent at the basic tier. Upwork charges 20% on the first $500 per client, 10% on $500-$10,000, 5% above that. Fiverr takes a flat 20% on every order regardless of amount. For high-ticket recurring clients, Upwork's tiered fees are significantly cheaper long-term."
    },
  ],
  "freelance-pricing-strategies": [
    {
      question: "How much should I charge as a freelancer?",
      answer: "Start by calculating your target annual income, divide by 1,000 billable hours (industry standard — the rest goes to marketing, admin, vacation), and that's your minimum hourly rate. Then add 20-40% based on the complexity of the project and the value delivered, not the hours worked."
    },
    {
      question: "Is hourly or fixed-price better for freelancers?",
      answer: "Early in your career: hourly, because your estimates will be wrong. Once you can reliably estimate projects: fixed-price with value-based pricing. A website that takes you 40 hours but increases a client's revenue by $50k shouldn't be priced at 40 × $80 — it should be priced as a fraction of the value it delivers."
    },
    {
      question: "How do I raise my freelance rates without losing clients?",
      answer: "Three strategies: (1) Raise rates for new clients first, keeping existing clients at their rate for 6-12 months. (2) Reposition as a specialist in a narrow niche — specialists charge 30-50% more than generalists. (3) Bundle additional services into a higher-tier package instead of a rate increase on the same service."
    },
  ],
  "upwork-proposal-for-developers": [
    {
      question: "What should I include in an Upwork proposal for a dev job?",
      answer: "Lead with a specific technical reference to their stack or a particular bottleneck they mentioned: \"I noticed your app is using Next.js 13 pages router — migrating to App Router + Server Components would cut TTFB by 40-60% based on a client project I just finished.\" Then link to one GitHub repo or deployed example with the same stack, and end with a technical question."
    },
    {
      question: "How do I stand out as a developer on Upwork?",
      answer: "Stop saying \"I'm a full-stack developer with 5 years of experience.\" Everyone does. Instead, open every proposal with the specific bug, architecture question, or performance issue the client described. Attach a 60-second Loom walking through one relevant code file, or propose a 10-minute code review of their repo — applicants who demonstrate technical thinking before being hired get 3x more interviews."
    },
    {
      question: "Should I do a paid test project as a developer on Upwork?",
      answer: "Yes, if it's a 1-3 hour, well-scoped micro-milestone (e.g., \"Fix this one API timeout bug\") and the client has verified payment. Decline free \"auditions\" that ask for 4+ hours of real work. A paid test is a legitimate way to prove you're not one of the 70% of applicants who exaggerate their skills."
    },
  ],
  "cold-email-for-freelancers": [
    {
      question: "How do I find the right person to cold email?",
      answer: "For most freelancers, target the head of the department you'd serve (Head of Marketing, Head of Engineering, Founder for under-20-person companies), not HR or generic info@. Use LinkedIn Sales Navigator free tier or Apollo.io free credits to find names, then test first.last@, first@, and hello@ formats with an email verifier like Hunter.io."
    },
    {
      question: "What's the best cold email openers for freelancers?",
      answer: "Open with something specific and recent you found about them — a tweet, a blog post, a recent hire, a broken link on their site, or a public metric (their Lighthouse score, a review they got). Avoid generic openers like \"I came across your company and think my services could help.\" That opener lands in the spam folder of the mind."
    },
    {
      question: "How many cold emails should I send per day?",
      answer: "Quality beats quantity every time. Spend 15-20 minutes on 5 personalized emails per day for a 20-30% reply rate, instead of blasting 100 generic ones with a 2% reply rate. A consistent 5 emails/day pipeline for 30 days typically yields 2-4 paying clients — more than most freelancers get from a month of Upwork bidding."
    },
    {
      question: "What do I put in the follow-up email?",
      answer: "Send exactly one follow-up after 3 business days, 1/3 the length of the original. Just say: \"Hey [First], quick follow-up since I know things get lost in inboxes. No pressure at all, but did the below make sense for your team right now? If not, totally understand — just don't want you to miss out on [specific value point].\" Never send more than two follow-ups."
    },
  ],
  "upwork-skills-test": [
    {
      question: "Do Upwork Skills Tests actually improve my ranking?",
      answer: "Yes, but selectively. Upwork has confirmed that 'Expert' and 'Top 10%' scores on relevant tests factor into search ranking for jobs that list that skill. But a 'Below Average' score actively hurts you — so only take a test if you're reasonably confident you'll place in the top 30%. Hide any test score that isn't at least 'Proficient.'"
    },
    {
      question: "Which Upwork skills tests are worth taking first?",
      answer: "Prioritize: (1) The exact skills listed in jobs you apply to most often, (2) Niche-specific tests over general ones (e.g., 'WordPress' over 'English Vocabulary'), (3) Tests where you can find reputable prep material. The most universally valuable are Upwork Readiness, Upwork English Spelling & Grammar, and your primary software/tool test."
    },
    {
      question: "Can I retake an Upwork skill test if I score poorly?",
      answer: "Yes, after a 3-month cooldown period (some tests allow 1 month). Use that window to study: find the official topics covered, review the study guides freelancers post on YouTube, and take practice quizzes on the same concepts. The questions repeat often enough that focused prep makes a dramatic difference."
    },
  ],
  "freelance-client-communication": [
    {
      question: "How do you handle a client who keeps changing the scope?",
      answer: "Don't say no. Say: 'Great question — happy to add that. That's a bit beyond what we originally scoped out, so it would be an extra $X and add Y days to the timeline. Want me to send over a quick add-on quote?' Write this exact line down and use it verbatim. You'll be shocked how many clients say 'Oh, you know what, let's keep the original scope.'"
    },
    {
      question: "How often should I update a client on progress?",
      answer: "Minimum once a week, ideally twice for fixed-price projects. Even a 2-sentence email is better than radio silence. The formula: 'Done this week: X, Y. Next week: Z. Here's one question I need from you: [question]?' Uncertainty is what makes clients message you at 9pm on Sunday."
    },
    {
      question: "How do you politely follow up on an overdue invoice?",
      answer: "First email (day 2): super friendly, assume they just forgot: 'Quick note that Invoice #123 for $4,200 went out on Tuesday — just pinging in case it got buried!' Second email (day 7): slightly firmer, attach invoice again, mention late fee if in contract. Third email (day 14): suggest a payment plan. After day 21, pause all work until paid."
    },
  ],
  "freelance-contract-templates": [
    {
      question: "What 7 clauses should every freelance contract have?",
      answer: "(1) Clear scope of work with deliverables listed, (2) Payment terms + late fee clause (typically 1.5-2% monthly), (3) Revisions clause (e.g., '2 rounds of revisions included, additional billed hourly'), (4) Kill fee clause (50% of the remaining fee if client cancels mid-project), (5) IP transfer (IP transfers upon full payment only), (6) Termination notice period, (7) Limited liability clause."
    },
    {
      question: "Can I use a free contract template from the internet?",
      answer: "Yes, but customize 3 things: the scope, the payment structure, and the IP clause to your situation. Generic templates are fine 80% of the time but they won't protect you if a client dispute hits. When the project is over $10k, it's worth a $150-300 consultation with a contract lawyer to review once and build your own permanent template."
    },
    {
      question: "Do digital signatures hold up legally for freelance contracts?",
      answer: "Yes, in most countries (US via ESIGN Act, EU via eIDAS, UK via Electronic Communications Act). Clickwrap agreements, DocuSign, HelloSign, and even typed signatures at the bottom of a countersigned PDF are all generally enforceable. The real protection is having the terms in writing, not the signature medium."
    },
  ],
  "upwork-proposal-for-designers": [
    {
      question: "How do you structure an Upwork proposal for a design job?",
      answer: "The winning formula: (1) Reference a specific visual element in their post or brand ('Love that you're leaning into the vintage 70s color palette') — proves you didn't spam. (2) Link to exactly 2 portfolio pieces that match their industry + deliverable, not your whole Behance. (3) Attach a 1-sentence creative direction idea: 'I'd explore 3 directions: minimalist, bold-editorial, and playful-organic.' (4) End with a design question."
    },
    {
      question: "What should I put in my Upwork designer portfolio?",
      answer: "Curate 6-8 case studies, not 50 random pieces. Each case study needs: the client's problem, your process (sketches + mockups + iterations), and the outcome ('Rebrand led to 38% more signups'). Clients hire based on demonstrated results, not pretty pictures. Even spec work with a realistic hypothetical outcome beats random logo dumps."
    },
    {
      question: "How do I price design work on Upwork?",
      answer: "Don't price per logo or per page — price based on scope tiers. Example Tier 1 ($300-600): Logo + 1 revision. Tier 2 ($1,200-2,000): Full brand identity (logo, colors, typography, 5 applications, brand guide). Tier 3 ($4,000+): Identity + launch assets + social template pack. New designers can start with Tier 1 to build reviews; once you have 5 reviews, jump to Tier 2 pricing."
    },
  ],
  "upwork-proposal-for-writers": [
    {
      question: "How do you write an Upwork proposal for writing jobs?",
      answer: "Lead with a 1-sentence writing sample — write the hook of the blog post they want, right in the proposal, so they immediately see your style: 'A few months ago, a SaaS founder told me their blog was getting 5k visitors/month but zero signups. I rewrote 7 key posts; 3 months later they hit 22k visitors and 120+ signups/month.' Then link to 2 published pieces in their exact niche, not your whole portfolio."
    },
    {
      question: "How do I prove I'm a good writer if I don't have published clips?",
      answer: "Write 2-3 spec articles (300-500 words) in the exact niche of the job. Even if they're not published anywhere, attach them as Google Docs or a PDF. Clients care more about whether you can write like their brand voice than where you've written. Bonus: write a spec post about their company/product and send it — that's the most compelling proof of skill."
    },
    {
      question: "How do I charge per word vs per article on Upwork?",
      answer: "Price per project (per article), not per word, for 3 reasons: (1) You get paid for research time, not just typing. (2) Per-word pricing punishes you for being concise. (3) It's easier for clients to budget. Rule of thumb: if you were pricing per word, multiply by 400-600 words, then add 30% for revisions and client calls. Round up to a clean number."
    },
  ],
};

// ============= Article meta 配置（按 slug 映射）=============
type ArticleMeta = {
  title: string;
  description: string;
  publishedTime: string;
  keywords?: string[];
};

const ARTICLE_META: Record<string, ArticleMeta> = {
  "upwork-proposal-mistakes": {
    title: "10 Upwork Proposal Mistakes That Kill Your Win Rate",
    description: "Avoid the 10 most common Upwork proposal mistakes. Learn what top-rated freelancers do differently to win more contracts and boost your win rate.",
    publishedTime: "2025-07-02",
    keywords: ["upwork proposal mistakes", "upwork win rate", "upwork proposal tips", "freelance proposal"],
  },
  "fiverr-gig-promotion": {
    title: "How to Promote Your Fiverr Gig: 12 Proven Strategies",
    description: "12 proven strategies to promote your Fiverr gig and get more orders. From on-platform SEO optimization to social media marketing and community outreach.",
    publishedTime: "2025-07-02",
    keywords: ["fiverr gig promotion", "how to get fiverr orders", "fiverr marketing", "promote fiverr gig"],
  },
  "upwork-job-invitation-response": {
    title: "How to Respond to Upwork Job Invitations",
    description: "Learn how to respond to Upwork job invitations like a pro. Copy-paste templates for accepting, negotiating, declining, and turning invites into long-term clients.",
    publishedTime: "2025-07-02",
    keywords: ["upwork invitation", "upwork job invitation response", "upwork invite template"],
  },
  "upwork-connects-tips": {
    title: "How to Use Upwork Connects Wisely",
    description: "Master Upwork Connects: how many you get, when to spend them, which jobs to bid on, and proven strategies to maximize your ROI. Stop wasting connects.",
    publishedTime: "2025-07-02",
    keywords: ["upwork connects", "upwork connects tips", "how to use upwork connects", "save connects"],
  },
  "upwork-proposal-templates": {
    title: "5 Upwork Proposal Templates That Actually Win Jobs",
    description: "Copy-paste these proven Upwork proposal templates for web design, writing, development, VA, and marketing jobs. See exactly what works and what to avoid.",
    publishedTime: "2025-07-02",
    keywords: ["upwork proposal template", "upwork cover letter sample", "upwork proposal example", "freelance proposal template"],
  },
  "upwork-cover-letter-examples": {
    title: "Upwork Cover Letter Examples: 7 Samples That Get Responses",
    description: "7 real cover letters from top-rated Upwork freelancers. Break down exactly why they work and how to adapt them to your niche. Includes a free template.",
    publishedTime: "2025-07-02",
    keywords: ["upwork cover letter examples", "upwork cover letter sample", "best upwork cover letters"],
  },
  "how-to-get-first-job-on-upwork": {
    title: "How to Get Your First Job on Upwork (10 Steps for Newbies)",
    description: "Complete step-by-step guide for getting your first Upwork job with no experience. Learn profile optimization, proposal strategy, and how to stand out.",
    publishedTime: "2025-07-02",
    keywords: ["how to get first job on upwork", "upwork for beginners", "first upwork job no experience"],
  },
  "fiverr-gig-description-examples": {
    title: "7 Fiverr Gig Description Examples That Convert",
    description: "See real Fiverr gig description templates for logo design, development, SEO, video editing, and more. Learn exactly why each one converts.",
    publishedTime: "2025-07-02",
    keywords: ["fiverr gig description examples", "fiverr gig description template", "fiverr description that sells"],
  },
  "upwork-profile-summary-examples": {
    title: "How to Write an Upwork Profile Summary That Gets Clients",
    description: "Your Upwork profile summary is your first impression. Learn the 5 elements of a great summary with examples for 5 different career paths.",
    publishedTime: "2025-07-02",
    keywords: ["upwork profile summary examples", "upwork overview sample", "upwork profile bio", "upwork summary that gets clients"],
  },
  "upwork-vs-fiverr": {
    title: "Upwork vs Fiverr: Which Platform Is Better for Freelancers?",
    description: "Full comparison of fees, project types, client quality, and competition. Find out which platform fits your freelance business in 2025.",
    publishedTime: "2025-07-02",
    keywords: ["upwork vs fiverr", "which is better upwork or fiverr", "upwork vs fiverr for beginners", "upwork vs fiverr fees"],
  },
  "freelance-pricing-strategies": {
    title: "Freelance Pricing Strategies: How to Charge What You're Worth",
    description: "Stop undercharging. Learn hourly vs fixed vs value-based pricing, rate benchmarks for 2025, and exactly how to raise your rates without losing clients.",
    publishedTime: "2025-07-02",
    keywords: ["freelance pricing strategies", "how much to charge freelance", "freelance rates", "freelance value pricing"],
  },
  "upwork-proposal-for-developers": {
    title: "Upwork Proposals for Developers: Win More Web Dev Jobs (2025)",
    description: "Learn how to write Upwork proposals that win web development, mobile app, and software engineering jobs. Includes templates, real examples, and niche-specific strategies for developers.",
    publishedTime: "2025-07-08",
    keywords: ["upwork proposal for developers", "upwork web developer proposal", "upwork developer cover letter", "upwork software engineer proposal", "win upwork dev jobs", "freelance developer proposal template"],
  },
  "cold-email-for-freelancers": {
    title: "Cold Email Templates for Freelancers: Get Clients Without Platforms (2025)",
    description: "Learn how to write cold emails that land freelance clients. Includes 7 proven templates, personalization techniques, and outreach strategies to win high-paying work without Upwork or Fiverr.",
    publishedTime: "2025-07-08",
    keywords: ["cold email templates freelancers", "freelance cold outreach", "get freelance clients without platforms", "freelance cold email", "how to find freelance clients", "freelance outreach templates", "pitch freelance services via email"],
  },
  "upwork-skills-test": {
    title: "Upwork Skills Tests: Do They Matter and Which to Take (2025)",
    description: "Upwork Skills Tests can boost your profile visibility and win rate. Find out which tests are worth taking, how they affect your search ranking, and the best strategy to pass them.",
    publishedTime: "2025-07-08",
    keywords: ["upwork skills test", "upwork skills tests worth taking", "upwork skills test answers", "upwork profile optimization", "upwork search ranking", "freelance certifications"],
  },
  "freelance-client-communication": {
    title: "Freelance Client Communication: Templates for Every Situation (2025)",
    description: "Copy-paste client communication templates for freelancers — kickoff, scope creep, delays, unresponsive clients, overdue invoices, and more. Keep clients happy and get paid on time.",
    publishedTime: "2025-07-08",
    keywords: ["freelance client communication", "freelancer email templates", "client communication templates", "scope creep email", "overdue invoice email freelancer", "freelance client onboarding"],
  },
  "freelance-contract-templates": {
    title: "Freelance Contract Templates: Protect Yourself on Every Project (2025)",
    description: "Copy-paste freelance contract templates for fixed-price, hourly, and retainer projects. Covers payment terms, IP transfer, kill fees, scope creep, and the 7 clauses every freelancer needs in 2025.",
    publishedTime: "2025-07-08",
    keywords: ["freelance contract template", "freelancer contract example", "freelance agreement template", "independent contractor agreement", "freelance payment terms", "scope creep contract clause", "freelance kill fee", "upwork contract template"],
  },
  "upwork-proposal-for-designers": {
    title: "Upwork Proposals for Designers: Win More Creative Jobs (2025)",
    description: "Learn how to write Upwork proposals that win graphic design, UI/UX, branding, and illustration jobs. Includes templates, real examples, and niche-specific strategies for designers.",
    publishedTime: "2025-07-08",
    keywords: ["upwork proposal for designers", "upwork graphic design proposal", "upwork ui ux designer proposal", "upwork designer cover letter", "win upwork design jobs", "freelance designer proposal template", "upwork branding proposal", "upwork creative designer"],
  },
  "upwork-proposal-for-writers": {
    title: "Upwork Proposals for Writers: Win More Content Jobs (2025)",
    description: "Learn how to write Upwork proposals that win blog writing, copywriting, technical writing, SEO content, and ghostwriting jobs. Includes templates, real examples, and niche-specific strategies for writers.",
    publishedTime: "2025-07-08",
    keywords: ["upwork proposal for writers", "upwork content writing proposal", "upwork copywriting proposal", "upwork writer cover letter", "win upwork writing jobs", "freelance writer proposal template", "upwork blog writer proposal", "upwork ghostwriter proposal"],
  },
};

// ============= 聚合组件：一篇博客调用一次，注入全部 3 种 Schema =============
export function BlogPostSchemas({ slug, titleOverride, descriptionOverride }: {
  slug: string;
  titleOverride?: string;
  descriptionOverride?: string;
}) {
  const meta = ARTICLE_META[slug];

  if (!meta) {
    console.warn(`[BlogPostSchemas] No ARTICLE_META entry found for slug: "${slug}"`);
    return null;
  }

  const title = titleOverride || meta.title;
  const description = descriptionOverride || meta.description;
  const faqs = FAQ_BY_SLUG[slug] || [];

  return (
    <>
      <BreadcrumbSchema crumbs={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: title, href: `/blog/${slug}` },
      ]} />
      <ArticleSchema
        title={title}
        description={description}
        slug={slug}
        publishedTime={meta.publishedTime}
        keywords={meta.keywords}
      />
      {faqs.length > 0 && <FaqSchema items={faqs} />}
    </>
  );
}
