"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { GeistSans } from "geist/font/sans"; // Import correct de GeistSans
import "../styles/index.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "react-hot-toast";
import CookieConsent from "@/components/CookieConsent";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning className={GeistSans.className}>
      <body className="bg-[#FCFCFC] dark:bg-black">
        <Providers>
          <Header />
          {children}
          <CookieConsent />
          <Footer />
          <Toaster position="top-right" />
          <ScrollToTop />
          <GoogleAnalytics gaId="G-18GXDJ6K9Q" />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
