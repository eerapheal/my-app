import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Global Network For Investors",
  description:
    "At Global Network For Investors, we believe in the power of great ideas and the people behind them. Our mission is to empower visionary entrepreneurs worldwide, helping them turn their dreams into successful businesses.",
  openGraph: {
    title: "Global Network For Investors",
    description:
      "At Global Network For Investors, we believe in the power of great ideas and the people behind them. Our mission is to empower visionary entrepreneurs worldwide, helping them turn their dreams into successful businesses.",
    url: "https://gnfinvestors.vercel.app",
    type: "website",
    images: [
      {
        url: "/gnfi.webp",
        width: 1200,
        height: 630,
        alt: "Global Network For Investors logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Network For Investors",
    description:
      "At Global Network For Investors, we believe in the power of great ideas and the people behind them. Our mission is to empower visionary entrepreneurs worldwide, helping them turn their dreams into successful businesses.",
    site: "@globalnetworkforinvestors",
    creator: "@globalnetworkforinvestors",
    images: ["/gnfi.webp"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <Header />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
