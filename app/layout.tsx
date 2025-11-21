import type { ReactNode } from "react";
import "./globals.css";
import type { Metadata } from "next";
export const metadata = {
  title: "Colucci Law Firm, P.C. | 柯奇律师事务所",
  description: "Bilingual English-Chinese law firm website migrated to Next.js",
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
