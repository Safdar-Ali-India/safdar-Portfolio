import Theming from "../theme/Theming";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import { CONTACT_EMAIL } from "../lib/site";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const SITE_URL = "https://safdarali.in";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Safdar Ali",
  url: SITE_URL,
  jobTitle: "Software Engineer & Frontend Developer",
  image: `${SITE_URL}/safdar-ali.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  email: CONTACT_EMAIL,
  sameAs: [
    "https://github.com/Safdar-Ali-India",
    "https://www.linkedin.com/in/safdarali25/",
    "https://www.youtube.com/@safdarali_",
    "https://twitter.com/safdarali___",
    "https://www.instagram.com/codewithsafdar",
    "https://dev.to/safdarali25",
    "https://linktr.ee/safdaralii",
  ],
};

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata = {
  metadataBase: new URL(SITE_URL),
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
  ...(googleSiteVerification
    ? {
        verification: {
          google: googleSiteVerification,
        },
      }
    : {}),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body className={inter.className}>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
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
