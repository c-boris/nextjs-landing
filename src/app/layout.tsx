"use client";

import Script from "next/script";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { GeistSans } from "geist/font/sans";
import "../styles/index.css";
import { Toaster } from "react-hot-toast";
import CookieConsent from "@/components/CookieConsent";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`bg-[#FCFCFC] dark:bg-black ${GeistSans.className}`}>
        <Providers>
          <Header />
          {children}
          <CookieConsent />
          <Footer />
          <Toaster position="top-right" />
          <ScrollToTop />
          <Script
            src="https://www.googletagmanager.com/gtm.js?id=GTM-5FSWDXW5"
            strategy="lazyOnload"
          />
        </Providers>
      </body>
    </html>
  );
}
