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
  title: "ECO BAG Tunisie | Sacs et emballages écologiques",
  description: "Fabricant tunisien de sacs en tissu non-tissé et emballages écologiques. 100% écologique, réutilisable et personnalisable.",
  keywords: "sacs écologiques, emballages tunisie, tissu non-tissé, sacs réutilisables, ecobag",
  authors: [{ name: "ECO BAG Tunisie" }],
  openGraph: {
    title: "ECO BAG Tunisie",
    description: "Sacs et emballages écologiques made in Tunisia",
    type: "website",
    locale: "fr_FR",
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
