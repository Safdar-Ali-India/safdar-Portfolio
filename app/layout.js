import Theming from '../theme/Theming';
import Header from '../components/Navbar';
import Footer from '../components/Footer';

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Safdar Ali - Portfolio",
  description: "Portfolio of a Passionate Frontend Developer and YouTuber by Profession from India 🇮🇳",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theming>
          <Header />
          {children}
          <SpeedInsights />
          <Analytics />
          <Footer />
        </Theming>
      </body>
    </html>
  );
}
