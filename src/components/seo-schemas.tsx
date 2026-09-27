"use client";

import Script from "next/script";

const siteUrl = "https://proposalai.top";

// ============== Article Schema ==============
export function ArticleSchema({
  title,
  description,
  slug,
  publishedTime,
  modifiedTime,
  author = "ProposalAI Team",
  image,
  keywords,
}: {
  title: string;
  description: string;
  slug: string;
  publishedTime: string;
  modifiedTime?: string;
  author?: string;
  image?: string;
  keywords?: string[];
}) {
  const url = `${siteUrl}/blog/${slug}`;
  const articleImage = image || `${siteUrl}/og/blog/${slug}.png`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [articleImage],
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      "@type": "Organization",
      name: author,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "ProposalAI",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: keywords?.join(", "),
  };

  return (
    <Script
      id={`jsonld-article-${slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      strategy="afterInteractive"
    />
  );
}

// ============== FAQ Schema ==============
export type FaqItem = { question: string; answer: string };

export function FaqSchema({ items }: { items: FaqItem[] }) {
  if (!items || items.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <Script
      id="jsonld-faq"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      strategy="afterInteractive"
    />
  );
}

// ============== BreadcrumbList Schema ==============
export type Crumb = { label: string; href: string };

export function BreadcrumbSchema({ crumbs }: { crumbs: Crumb[] }) {
  if (!crumbs || crumbs.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.label,
      item: crumb.href.startsWith("http")
        ? crumb.href
        : `${siteUrl}${crumb.href === "/" ? "" : crumb.href}`,
    })),
  };

  return (
    <Script
      id="jsonld-breadcrumb"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      strategy="afterInteractive"
    />
  );
}
