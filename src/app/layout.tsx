import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16a34a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ecobagtn.tn"),
  title: "ECO BAG Tunisie | Sacs & Emballages Écologiques",
  description: "Fabricant tunisien de sacs et emballages en tissu non-tissé personnalisés. Solutions écologiques pour pharmacies, commerces, restauration et agriculture. Devis gratuit.",
  keywords: "sacs écologiques, emballages tunisie, tissu non-tissé, sacs personnalisés, packaging durable, sacs pharmacie, sacs shopping, housses protection, sacs biodégradables, صناعة تونسية, أكياس صديقة للبيئة",
  authors: [{ name: "ECO BAG Tunisie" }],
  alternates: {
    canonical: "https://ecobagtn.tn",
    languages: {
      "fr": "https://ecobagtn.tn",
      "ar": "https://ecobagtn.tn/?lang=ar",
      "en": "https://ecobagtn.tn/?lang=en",
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "ECO BAG Tunisie | Sacs & Emballages Écologiques",
    description: "Fabricant tunisien de sacs et emballages en tissu non-tissé. Solutions écologiques personnalisées.",
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["ar_TN", "en_US"],
    siteName: "ECO BAG Tunisie",
  },
  twitter: {
    card: "summary_large_image",
    title: "ECO BAG Tunisie | Sacs & Emballages Écologiques",
    description: "Fabricant tunisien de sacs et emballages écologiques personnalisés. Certifié Ministère de l'Environnement.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ecobagtn.tn/#organization",
      name: "ECO BAG Tunisie",
      url: "https://ecobagtn.tn",
      logo: "https://ecobagtn.tn/logo.png",
      description: "Fabricant tunisien de sacs et emballages en tissu non-tissé personnalisés",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3 Rue Karama Montfleury",
        addressLocality: "Tunis",
        addressCountry: "TN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+216-94-569-302",
        email: "ecobagtunisie@gmail.com",
        contactType: "customer service",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://ecobagtn.tn/#website",
      url: "https://ecobagtn.tn",
      name: "ECO BAG Tunisie",
      publisher: { "@id": "https://ecobagtn.tn/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": "https://ecobagtn.tn/#webpage",
      url: "https://ecobagtn.tn",
      name: "ECO BAG Tunisie | Sacs & Emballages Écologiques",
      isPartOf: { "@id": "https://ecobagtn.tn/#website" },
      about: { "@id": "https://ecobagtn.tn/#organization" },
      description: "Fabricant tunisien de sacs et emballages en tissu non-tissé personnalisés",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
