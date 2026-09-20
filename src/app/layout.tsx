import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import { GraphNetwork } from "@/components/graph-network";
import "./globals.css";

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CPC | Competitive Programming Club",
    template: "%s | CPC",
  },
  description: "Competitive programming for students who want to understand the code — not just see AI code. Weekly sessions, real algorithms, zero shortcuts.",
  metadataBase: new URL("https://cpc.jainuniversity.ac.in"),
  openGraph: {
    siteName: "CPC — Competitive Programming Club",
    type: "website",
    locale: "en_IN",
    title: "CPC | Competitive Programming Club",
    description: "Competitive programming for students who want to understand the code — not just see AI code.",
    images: [{ url: "/og-home.png", width: 1200, height: 630, alt: "CPC — No AI. Just Code." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CPC | Competitive Programming Club",
    description: "Competitive programming for students who want to understand the code — not just see AI code.",
    images: ["/og-home.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased ${bodyFont.variable} ${displayFont.variable}`}>
      <body className="min-h-full flex flex-col relative">
        <div className="site-network-bg"><GraphNetwork /></div>
        {children}
      </body>
    </html>
  );
}
