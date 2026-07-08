import { ImageResponse } from "next/og";

export const alt =
  "ProposalAI - AI Proposal Generator for Upwork & Fiverr Freelancers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #9333ea 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Lightning bolt icon */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 20,
            background: "rgba(255,255,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <path
              d="M13 10V3L4 14h7v7l9-11h-7z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "white",
            marginBottom: 16,
            letterSpacing: "-0.02em",
          }}
        >
          ProposalAI
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: "rgba(255,255,255,0.85)",
            marginBottom: 40,
          }}
        >
          AI Proposal Generator for Upwork & Fiverr
        </div>

        {/* Feature pills */}
        <div style={{ display: "flex", gap: 16 }}>
          {[
            "Smart Proposals",
            "30-Second Generation",
            "Client Analysis",
          ].map((text) => (
            <div
              key={text}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 24px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.12)",
                color: "white",
                fontSize: 22,
                fontWeight: 500,
              }}
            >
              {text}
            </div>
          ))}
        </div>

        {/* URL at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 20,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          proposalai.top
        </div>
      </div>
    ),
    { ...size }
  );
}
