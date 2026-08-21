import type { MetadataRoute } from "next";

const siteUrl = "https://proposalai.top";

const blogSlugs = [
  "freelance-contract-templates",
  "upwork-proposal-mistakes",
  "upwork-proposal-for-designers",
  "freelance-client-communication",
  "upwork-job-invitation-response",
  "upwork-connects-tips",
  "upwork-proposal-templates",
  "upwork-cover-letter-examples",
  "how-to-get-first-job-on-upwork",
  "fiverr-gig-description-examples",
  "fiverr-gig-promotion",
  "freelance-pricing-strategies",
  "upwork-profile-summary-examples",
  "upwork-proposal-for-developers",
  "upwork-skills-test",
  "upwork-vs-fiverr",
  "cold-email-for-freelancers",
  "upwork-proposal-for-writers",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const basePages = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  const blogPages = blogSlugs.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...basePages, ...blogPages];
}
