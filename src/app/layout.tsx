import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import { GraphNetwork } from "@/components/graph-network";
import "./globals.css";

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "CPC | Competitive Programming Club",
  description: "Learn to think, build, and compete without AI.",
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
