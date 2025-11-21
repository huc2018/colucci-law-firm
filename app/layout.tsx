import type { ReactNode } from "react";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Colucci Law Firm, P.C. — New Jersey Chinese Community Legal Services",
    template: "%s | Colucci Law Firm, P.C.",
  },
  description:
    "New Jersey Colucci Law Firm specializes in litigation, family law, immigration, business law, real estate, and injury claims. 20+ years serving the Chinese community.",
  keywords: [
    "New Jersey lawyer",
    "Chinese lawyer Edison",
    "Colucci Law",
    "immigration lawyer",
    "family law NJ",
    "criminal defense NJ",
    "Joseph Colucci Esq",
  ],
  openGraph: {
    title: "Colucci Law Firm, P.C.",
    description:
      "Trusted legal services in New Jersey — litigation, immigration, family law, business law and more.",
    url: "https://coluccilawfirm.com",
    siteName: "Colucci Law Firm",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Colucci Law Firm, P.C.",
    description:
      "Legal services for the New Jersey Chinese community. Over 20 years of trusted legal experience.",
    images: ["https://images.unsplash.com/photo-1560250097-0b93528c311a"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Colucci Law Firm, P.C.",
              image:
                "https://images.unsplash.com/photo-1560250097-0b93528c311a",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1967 Route 27, Suite 26",
                addressLocality: "Edison",
                addressRegion: "NJ",
                postalCode: "08817",
                addressCountry: "US",
              },
              telephone: "732-668-1420",
              url: "https://coluccilawfirm.com",
              areaServed: "New Jersey",
              description:
                "Trusted New Jersey Chinese community lawyer with 20+ years of legal experience.",
              sameAs: [
                "https://www.facebook.com/",
                "https://www.linkedin.com/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
