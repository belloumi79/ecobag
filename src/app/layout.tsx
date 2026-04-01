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
  title: {
    default: "ECO BAG Tunisie | Sacs & Emballages Écologiques en Tissu Non-Tissé",
    template: "%s | ECO BAG Tunisie",
  },
  description:
    "Fabricant tunisien de sacs et emballages écologiques en tissu non-tissé personnalisés. Solutions durables pour pharmacies, supermarchés, restauration, agriculture et événementiel. Certifié Ministère de l'Environnement. Devis gratuit.",
  keywords: [
    "sacs écologiques Tunisie",
    "emballage écologique",
    "sacs tissu non-tissé",
    "sacs réutilisables Tunisie",
    "emballage biodégradable",
    "sacs personnalisés Tunis",
    "sacs shopping écologiques",
    "sacs pharmacie biodégradables",
    "sacs livraison restaurant",
    "housses protection automobile",
    "sacs agriculture pépinière",
    "emballage premium cadeau",
    "alternative sacs plastiques",
    "décret 2020-32 Tunisie",
    "économie circulaire Tunisie",
    "ECO BAG",
    "fabricant sacs Tunis",
    "sacs non-tissé personnalisables",
    "empreinte carbone emballage",
    "sacs publicitaires Tunisie",
    "أكياس صديقة للبيئة تونس",
    "eco-friendly bags Tunisia",
    "non-woven bags manufacturer",
  ],
  authors: [{ name: "ECO BAG Tunisie", url: "https://ecobagtn.tn" }],
  creator: "ECO BAG Tunisie",
  publisher: "ECO BAG Tunisie",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ecobagtn.tn",
    languages: {
      fr: "https://ecobagtn.tn",
      ar: "https://ecobagtn.tn/?lang=ar",
      en: "https://ecobagtn.tn/?lang=en",
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "ECO BAG Tunisie | Sacs & Emballages Écologiques Certifiés",
    description:
      "Fabricant tunisien de sacs et emballages en tissu non-tissé. Solutions écologiques personnalisées, certifiées Ministère de l'Environnement. -80% CO₂ vs plastique.",
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["ar_TN", "en_US"],
    siteName: "ECO BAG Tunisie",
    url: "https://ecobagtn.tn",
    images: [
      {
        url: "/products/1763.jpg",
        width: 1200,
        height: 630,
        alt: "ECO BAG Tunisie - Sacs et emballages écologiques en tissu non-tissé",
        type: "image/jpeg",
      },
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Logo ECO BAG Tunisie",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ECO BAG Tunisie | Sacs & Emballages Écologiques",
    description:
      "Fabricant tunisien de sacs écologiques personnalisés. Certifié Ministère de l'Environnement. -80% CO₂ vs plastique. Devis gratuit.",
    images: ["/products/1763.jpg"],
  },
  category: "Emballage écologique",
  verification: {
    google: "9t5TJ8Y-LjMErqZ9jhmmReCi3W_vSbthMJSd9poIfpQ",
  },
};

/* ─── Comprehensive JSON-LD Structured Data ─── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    /* Organization */
    {
      "@type": "Organization",
      "@id": "https://ecobagtn.tn/#organization",
      name: "ECO BAG Tunisie",
      url: "https://ecobagtn.tn",
      logo: {
        "@type": "ImageObject",
        url: "https://ecobagtn.tn/logo.png",
        width: 512,
        height: 512,
      },
      description:
        "Fabricant tunisien de sacs et emballages écologiques en tissu non-tissé personnalisés. Certifié Ministère de l'Environnement.",
      foundingDate: "2020",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3 Rue Karama Montfleury",
        addressLocality: "Tunis",
        addressRegion: "Tunis",
        postalCode: "1004",
        addressCountry: "TN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+216-94-569-302",
          email: "ecobagtunisie@gmail.com",
          contactType: "customer service",
          availableLanguage: ["French", "Arabic", "English"],
        },
      ],
      sameAs: ["https://ecobagtn.tn"],
    },
    /* LocalBusiness */
    {
      "@type": "LocalBusiness",
      "@id": "https://ecobagtn.tn/#localbusiness",
      name: "ECO BAG Tunisie",
      image: "https://ecobagtn.tn/products/1763.jpg",
      url: "https://ecobagtn.tn",
      telephone: "+216-94-569-302",
      email: "ecobagtunisie@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3 Rue Karama Montfleury",
        addressLocality: "Tunis",
        addressRegion: "Tunis",
        postalCode: "1004",
        addressCountry: "TN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 36.7948,
        longitude: 10.1719,
      },
      priceRange: "$$",
      description:
        "Fabricant de sacs et emballages écologiques en tissu non-tissé. Solutions personnalisées pour entreprises.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Produits ECO BAG",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Sacs Shopping",
            description: "Sacs shopping personnalisables avec logo et poignées renforcées",
          },
          {
            "@type": "OfferCatalog",
            name: "Sacs Pharmacie",
            description: "Sacs pharmacie conformes aux normes santé, biodégradables",
          },
          {
            "@type": "OfferCatalog",
            name: "Sacs Livraison",
            description: "Sacs isothermes pour restaurant, lavables et réutilisables",
          },
          {
            "@type": "OfferCatalog",
            name: "Housses Protection",
            description: "Housses de protection automobile et sièges réutilisables",
          },
          {
            "@type": "OfferCatalog",
            name: "Sacs Agriculture",
            description: "Sacs agricoles biodégradables pour plantes et semis",
          },
          {
            "@type": "OfferCatalog",
            name: "Emballage Premium",
            description: "Boîtes-cadeau et emballages luxe durables",
          },
        ],
      },
    },
    /* WebSite with SearchAction */
    {
      "@type": "WebSite",
      "@id": "https://ecobagtn.tn/#website",
      url: "https://ecobagtn.tn",
      name: "ECO BAG Tunisie",
      publisher: { "@id": "https://ecobagtn.tn/#organization" },
      inLanguage: ["fr", "ar", "en"],
    },
    /* WebPage */
    {
      "@type": "WebPage",
      "@id": "https://ecobagtn.tn/#webpage",
      url: "https://ecobagtn.tn",
      name: "ECO BAG Tunisie | Sacs & Emballages Écologiques en Tissu Non-Tissé",
      isPartOf: { "@id": "https://ecobagtn.tn/#website" },
      about: { "@id": "https://ecobagtn.tn/#organization" },
      description:
        "Fabricant tunisien de sacs et emballages écologiques en tissu non-tissé personnalisés. Certifié Ministère de l'Environnement.",
      inLanguage: "fr",
      datePublished: "2024-01-01",
      dateModified: "2025-03-31",
    },
    /* BreadcrumbList */
    {
      "@type": "BreadcrumbList",
      "@id": "https://ecobagtn.tn/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://ecobagtn.tn",
        },
      ],
    },
    /* Product entries */
    {
      "@type": "Product",
      name: "Sacs Shopping Écologiques",
      description:
        "Sacs shopping personnalisables en tissu non-tissé avec logo et poignées renforcées. Idéal pour supermarchés et boutiques en Tunisie.",
      image: "https://ecobagtn.tn/products/sac-uni-boxbag.webp",
      brand: {
        "@type": "Brand",
        name: "ECO BAG Tunisie",
      },
      manufacturer: { "@id": "https://ecobagtn.tn/#organization" },
      category: "Sacs écologiques",
      material: "Tissu non-tissé (polypropylène)",
      isRelatedTo: {
        "@type": "Thing",
        name: "Emballage écologique",
      },
    },
    {
      "@type": "Product",
      name: "Sacs Pharmacie Biodégradables",
      description:
        "Sacs pharmacie conformes aux normes sanitaires, biodégradables. Pour officines et parapharmacies en Tunisie.",
      image: "https://ecobagtn.tn/products/11224478_1719558774787792_8074364517910597348_n.jpg",
      brand: {
        "@type": "Brand",
        name: "ECO BAG Tunisie",
      },
      manufacturer: { "@id": "https://ecobagtn.tn/#organization" },
      category: "Sacs pharmacie",
      material: "Tissu non-tissé biodégradable",
    },
    {
      "@type": "Product",
      name: "Sacs Livraison Isothermes",
      description:
        "Sacs de livraison isothermes pour restaurants, lavables et réutilisables. Transport alimentaire sécurisé.",
      image: "https://ecobagtn.tn/products/ultrasonic-pizza-bag-nonwoven-pp-01-510x510.jpg",
      brand: {
        "@type": "Brand",
        name: "ECO BAG Tunisie",
      },
      manufacturer: { "@id": "https://ecobagtn.tn/#organization" },
      category: "Sacs livraison",
      material: "Tissu non-tissé isotherme",
    },
    /* FAQPage for rich snippets */
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quels types de sacs écologiques fabrique ECO BAG Tunisie ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ECO BAG Tunisie fabrique des sacs shopping, sacs pharmacie, sacs de livraison isothermes, housses de protection automobile, sacs agricoles pour pépinières et emballages premium cadeau. Tous nos produits sont en tissu non-tissé, réutilisables et personnalisables.",
          },
        },
        {
          "@type": "Question",
          name: "ECO BAG est-il certifié par le Ministère de l'Environnement ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, ECO BAG Tunisie est certifié par le Ministère de l'Environnement tunisien. Nous avons été sélectionnés parmi les meilleures initiatives de promotion de l'économie circulaire dans le cadre du programme 'Littoral Sans Plastique' soutenu par la Banque Mondiale.",
          },
        },
        {
          "@type": "Question",
          name: "Quel est l'impact environnemental des sacs ECO BAG vs plastique ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chaque sac réutilisable ECO BAG remplace jusqu'à 500 sacs plastiques jetables. Nos sacs génèrent 80% moins d'émissions CO₂ que les sacs plastiques et consomment 70% moins d'énergie sur leur cycle de vie complet. Ils sont 100% biodégradables en fin de vie.",
          },
        },
        {
          "@type": "Question",
          name: "Peut-on personnaliser les sacs avec notre logo ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, tous nos sacs sont entièrement personnalisables : choix des couleurs, impression de votre logo, dimensions sur mesure, et finitions adaptées à votre secteur d'activité (pharmacie, supermarché, restauration, événementiel).",
          },
        },
        {
          "@type": "Question",
          name: "Comment contacter ECO BAG Tunisie pour un devis ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vous pouvez nous contacter par téléphone au 00216 94 569 302, par email à ecobagtunisie@gmail.com, ou via le formulaire de contact sur notre site ecobagtn.tn. Notre adresse : 3 Rue Karama Montfleury, Tunis.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
