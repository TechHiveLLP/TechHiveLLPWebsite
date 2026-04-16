import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "TechHive — Innovative Software Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#020617",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Gradient accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #60a5fa, #38bdf8, #22d3ee)",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "48px",
          }}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 40 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0L40 11.5V34.5L20 46L0 34.5V11.5L20 0Z"
              fill="url(#og_grad)"
            />
            <defs>
              <linearGradient id="og_grad" x1="0" y1="0" x2="40" y2="46" gradientUnits="userSpaceOnUse">
                <stop stopColor="#60a5fa" />
                <stop offset="1" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
          </svg>
          <span
            style={{
              fontSize: "22px",
              fontWeight: "600",
              color: "#f8fafc",
              letterSpacing: "-0.02em",
            }}
          >
            TechHive
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: "700",
            color: "#f8fafc",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "24px",
            maxWidth: "900px",
          }}
        >
          We build software that moves business forward
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "22px",
            color: "#94a3b8",
            fontWeight: "400",
          }}
        >
          IT Consulting · Custom Software · AI Products
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            fontSize: "16px",
            color: "#64748b",
          }}
        >
          tech-hive.in
        </div>
      </div>
    ),
    { ...size }
  );
}
