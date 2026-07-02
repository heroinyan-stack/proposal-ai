export const dynamic = "force-static";

const siteUrl = "https://proposalai.top";

const posts = [
  {
    slug: "fiverr-gig-description-examples",
    title: "7 Fiverr Gig Description Examples That Convert (2025)",
    description:
      "See real Fiverr gig description templates for logo design, development, SEO, video editing, and more. Learn why they convert.",
    pubDate: "2025-07-02",
    category: "Templates",
  },
  {
    slug: "upwork-profile-summary-examples",
    title: "How to Write an Upwork Profile Summary That Gets Clients",
    description:
      "Your profile summary is your first impression. Learn the 5 elements of a great summary with examples for 5 different careers.",
    pubDate: "2025-07-02",
    category: "Guides",
  },
  {
    slug: "upwork-vs-fiverr",
    title: "Upwork vs Fiverr: Which Platform Is Better for Freelancers in 2025?",
    description:
      "Full comparison of fees, project types, client quality, and competition. Find out which platform fits your freelance business.",
    pubDate: "2025-07-02",
    category: "Guides",
  },
  {
    slug: "freelance-pricing-strategies",
    title: "Freelance Pricing Strategies: How to Charge What You're Worth",
    description:
      "Stop undercharging. Learn hourly vs fixed vs value-based pricing, rate benchmarks for 2025, and how to raise your rates.",
    pubDate: "2025-07-02",
    category: "Guides",
  },
  {
    slug: "upwork-proposal-mistakes",
    title: "10 Upwork Proposal Mistakes That Kill Your Win Rate (2025)",
    description:
      "Avoid these common Upwork proposal mistakes that cost freelancers jobs. Learn what top-rated pros do differently to win more contracts at higher rates.",
    pubDate: "2025-07-02",
    category: "Strategy",
  },
  {
    slug: "upwork-proposal-templates",
    title: "5 Upwork Proposal Templates That Actually Win Jobs (2025)",
    description:
      "Copy-paste these proven proposal templates for web design, writing, development, and virtual assistant jobs. See what works and what to avoid.",
    pubDate: "2025-06-30",
    category: "Templates",
  },
  {
    slug: "upwork-cover-letter-examples",
    title: "Upwork Cover Letter Examples: 7 Samples That Get Responses",
    description:
      "Real cover letters from top-rated Upwork freelancers. Break down exactly why they work and how to adapt them to your niche.",
    pubDate: "2025-06-30",
    category: "Examples",
  },
  {
    slug: "how-to-get-first-job-on-upwork",
    title: "How to Get Your First Job on Upwork (10 Steps for Newbies)",
    description:
      "Complete guide for beginners: from profile optimization to landing your first client. No experience? No problem. Follow this exact roadmap.",
    pubDate: "2025-06-30",
    category: "Guides",
  },
];

export async function GET() {
  const feedItems = posts
    .map((post) => {
      const url = `${siteUrl}/blog/${post.slug}`;
      return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(post.pubDate).toUTCString()}</pubDate>
      <description><![CDATA[${post.description}]]></description>
      <category>${post.category}</category>
    </item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ProposalAI Blog</title>
    <link>${siteUrl}/blog</link>
    <description>
      <![CDATA[Proven strategies, templates, and examples to help you win more freelance contracts on Upwork and Fiverr.]]>
    </description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <generator>Next.js</generator>
    <webMaster>support@proposalai.top (ProposalAI Team)</webMaster>
${feedItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
