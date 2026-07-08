import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://proposalai.top";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ProposalAI - AI Proposal Generator for Upwork & Fiverr Freelancers",
    template: "%s | ProposalAI",
  },
  description:
    "AI-powered proposal generator for Upwork and Fiverr freelancers. Generate 3 proposal versions in 30 seconds with client analysis, keyword optimization, and pricing advice. Craft better proposals, faster.",
  keywords: [
    "upwork proposal generator",
    "fiverr proposal template",
    "ai proposal writer",
    "freelance proposal template",
    "upwork cover letter generator",
    "ai cover letter for freelancers",
    "proposal writing ai",
    "freelance proposal ai",
    "upwork proposal template",
    "fiverr gig proposal",
  ],
  authors: [{ name: "ProposalAI Team" }],
  creator: "ProposalAI",
  publisher: "ProposalAI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "ProposalAI",
    title: "ProposalAI - AI Proposal Generator for Upwork & Fiverr Freelancers",
    description:
      "AI-optimized proposals for Upwork and Fiverr freelancers. Generate 3 versions in 30 seconds with client analysis, keyword optimization, and pricing advice.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProposalAI - AI Proposal Generator for Upwork & Fiverr",
    description:
      "AI-optimized proposals for freelancers. Generate Upwork cover letters in 30 seconds.",
    creator: "@proposalai",
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [
        {
          url: "/feed.xml",
          title: "ProposalAI Blog RSS Feed",
        },
      ],
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ProposalAI",
  description:
    "AI-powered proposal generator for Upwork and Fiverr freelancers. Generate optimized proposals with client analysis and pricing advice.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "200",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      <Script
        id="jsonld-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="afterInteractive"
      />
    </html>
  );
}
