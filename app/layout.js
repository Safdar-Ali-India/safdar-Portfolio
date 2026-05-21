import Theming from "../theme/Theming";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import JsonLd from "../components/seo/JsonLd";
import { buildSiteGraph } from "../lib/structured-data";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const SITE_URL = "https://safdarali.in";

const siteGraph = buildSiteGraph();

/** Google Search Console (HTML tag method). Override locally with NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION if you rotate the token. */
const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "RJa8ea2hjcm9iyb-J3xPx7eizkCTEVUWG5_lx2--QQs";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  title: {
    default: "Safdar Ali — Next.js & React developer | Bengaluru, India",
    template: "%s | Safdar Ali",
  },
  description:
    "Portfolio of Safdar Ali — software engineer, Next.js and React developer in Bengaluru, India. YouTuber, writer, and freelance-friendly frontend specialist.",
  applicationName: "Safdar Ali Portfolio",
  authors: [{ name: "Safdar Ali", url: SITE_URL }],
  creator: "Safdar Ali",
  publisher: "Safdar Ali",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Safdar Ali",
    title: "Safdar Ali — Next.js & React developer | Bengaluru, India",
    description:
      "Software engineer and frontend developer building with Next.js and React. Projects, case studies, and articles.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safdar Ali — Next.js & React developer",
    description:
      "Software engineer in Bengaluru, India. Portfolio, projects, and technical writing.",
    creator: "@safdarali___",
  },
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
  manifest: "/manifest.json",
  verification: {
    google: googleSiteVerification,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body className={inter.className}>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <JsonLd data={siteGraph} />
        <Theming>
          <Header />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <SpeedInsights />
          <Analytics />
          <Footer />
        </Theming>
      </body>
    </html>
  );
}
