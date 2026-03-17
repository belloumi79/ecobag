import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "ECO BAG Tunisie | Sacs & Emballages Écologiques",
  description: "Fabricant tunisien de sacs et emballages en tissu non-tissé personnalisés. Solutions écologiques pour pharmacies, commerces, restauration et agriculture. Devis gratuit.",
  keywords: "sacs écologiques, emballages tunisie, tissu non-tissé, sacs personnalisés, packaging durable, sacs pharmacie, sacs shopping, housses protection, sacs biodégradables, صناعة تونسية, أكياس صديقة للبيئة",
  authors: [{ name: "ECO BAG Tunisie" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "ECO BAG Tunisie | Sacs & Emballages Écologiques",
    description: "Fabricant tunisien de sacs et emballages en tissu non-tissé. Solutions écologiques personnalisées.",
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["ar_TN"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
