import { ImageResponse } from "next/og";

export const alt = "About Safdar Ali — Next.js developer and YouTube educator in Bengaluru, India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function AboutOpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #171717 50%, #0f172a 100%)",
          padding: 72,
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#737373",
          }}
        >
          About
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 68,
            fontWeight: 800,
            letterSpacing: -2,
            color: "#fafafa",
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          Safdar Ali
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            fontWeight: 500,
            color: "#a3a3a3",
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          Next.js developer · 70+ YouTube tutorials · Bengaluru, India
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 26,
            color: "#737373",
          }}
        >
          safdarali.in/about
        </div>
      </div>
    ),
    { ...size }
  );
}
