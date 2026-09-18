import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CPC | Competitive Programming Club",
  description: "Learn to think, build, and compete without AI.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
