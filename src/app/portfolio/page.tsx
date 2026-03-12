"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, Building2, Plane, Shirt, ShoppingBag, Home, Palette, Leaf } from "lucide-react";

const translations = {
  fr: {
    title: "Nos Clients & Réalisations",
    subtitle: "Des entreprises de confiance qui ont choisi l'éco-responsabilité avec ECO BAG",
    back: "Retour à l'accueil",
    categories: {
      retail: "Grande Distribution",
      transport: "Transport & Voyage",
      textile: "Textile & Mode",
      storage: "Rangement & Organisation", 
      creative: "Créatif & Enfants",
      organic: "Bio & Écologie"
    }
  },
  ar: {
    title: "عملاؤنا وإنجازاتنا",
    subtitle: "شركات موثوقة اختارت الاستدامة مع ECO BAG",
    back: "العودة إلى الصفحة الرئيسية",
    categories: {
      retail: "التوزيع الكبير",
      transport: "النقل والسفر",
      textile: "النسيج والموضة",
      storage: "التخزين والتنظيم",
      creative: "الإبداع والأطفال",
      organic: "العضوي والبيئة"
    }
  },
  en: {
    title: "Our Clients & Achievements",
    subtitle: "Trusted companies that chose eco-responsibility with ECO BAG",
    back: "Back to homepage",
    categories: {
      retail: "Retail & Distribution",
      transport: "Transport & Travel",
      textile: "Textile & Fashion",
      storage: "Storage & Organization",
      creative: "Creative & Kids",
      organic: "Organic & Ecology"
    }
  }
};

const clients = [
  {
    id: "carrefour",
    name: "Carrefour",
    category: "retail",
    description: { fr: "Sacs shopping écologiques", ar: "أكياس تسوق صديقة للبيئة", en: "Eco-friendly shopping bags" },
    image: "/clients/WhatsApp Image 2026-03-11 at 21.13.49 (2)-0cfd1052300e.jpeg",
    icon: ShoppingBag
  },
  {
    id: "buta",
    name: "Buta Airways",
    category: "transport", 
    description: { fr: "Pochettes de voyage premium", ar: "محافظ سفر فاخرة", en: "Premium travel pouches" },
    image: "/clients/WhatsApp Image 2026-03-11 at 21.13.49 (3)-85fbe19d34a0.jpeg",
    icon: Plane
  },
  {
    id: "amir",
    name: "Amir Textile",
    category: "textile",
    description: { fr: "Emballage oreillers", ar: "تغليف المخدات", en: "Pillow packaging" },
    image: "/clients/WhatsApp Image 2026-03-11 at 21.13.49 (1)-8ca04c0d568f.jpeg",
    icon: Shirt
  },
  {
    id: "zen",
    name: "ZEN Accessories",
    category: "textile",
    description: { fr: "Sacs accessoires", ar: "أكياس الإكسسوارات", en: "Accessory bags" },
    image: "/clients/WhatsApp Image 2026-03-11 at 21.13.49-4bad99d25d4b.jpeg",
    icon: ShoppingBag
  },
  {
    id: "storage",
    name: "Solutions Rangement",
    category: "storage",
    description: { fr: "Housses de rangement", ar: "أغطية التخزين", en: "Storage covers" },
    image: "/clients/WhatsApp Image 2026-03-11 at 21.13.48 (2)-e68a2c9e864d.jpeg",
    icon: Home
  },
  {
    id: "shoes",
    name: "Protection Chaussures",
    category: "storage",
    description: { fr: "Sacs à chaussures", ar: "أكياس الأحذية", en: "Shoe bags" },
    image: "/clients/WhatsApp Image 2026-03-11 at 21.13.48 (1)-726d45d964ad.jpeg",
    icon: ShoppingBag
  },
  {
    id: "creative",
    name: "Kids Creative",
    category: "creative",
    description: { fr: "Sacs à colorier", ar: "أكياس للتلوين", en: "Coloring bags" },
    image: "/clients/WhatsApp Image 2026-03-11 at 21.13.48-d4968799b2a8.jpeg",
    icon: Palette
  },
  {
    id: "entsar",
    name: "Entsar Bio",
    category: "organic",
    description: { fr: "Sacs produits bio", ar: "أكياس المنتجات العضوية", en: "Organic product bags" },
    image: "/clients/WhatsApp Image 2026-03-11 at 21.13.40 (3)-b9d6d5e922b6.jpeg",
    icon: Leaf
  }
];

export default function Portfolio() {
  const [lang, setLang] = useState<"fr" | "ar" | "en">("fr");
  const t = translations[lang];

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "retail": return ShoppingBag;
      case "transport": return Plane;
      case "textile": return Shirt;
      case "storage": return Home;
      case "creative": return Palette;
      case "organic": return Leaf;
      default: return Building2;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="ECO BAG" width={40} height={40} className="rounded-lg" />
              <span className="font-bold text-xl">ECO BAG</span>
            </a>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <button onClick={() => setLang("fr")} className={`px-3 py-1 rounded-full text-sm font-medium ${lang === "fr" ? "bg-green-600 text-white" : "bg-gray-100"}`}>FR</button>
                <button onClick={() => setLang("ar")} className={`px-3 py-1 rounded-full text-sm font-medium ${lang === "ar" ? "bg-green-600 text-white" : "bg-gray-100"}`}>AR</button>
                <button onClick={() => setLang("en")} className={`px-3 py-1 rounded-full text-sm font-medium ${lang === "en" ? "bg-green-600 text-white" : "bg-gray-100"}`}>EN</button>
              </div>
              <a href="/" className="flex items-center gap-2 text-gray-600 hover:text-green-600">
                <ArrowLeft className="w-4 h-4" />
                <span>{t.back}</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client) => {
              const Icon = getCategoryIcon(client.category);
              return (
                <div key={client.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group">
                  <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={client.image} 
                      alt={client.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full">
                      <Icon className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-2">
                      {t.categories[client.category as keyof typeof t.categories]}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{client.name}</h3>
                    <p className="text-gray-600">{client.description[lang]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {lang === "fr" ? "Devenez notre prochain client" : lang === "ar" ? "كن عميلنا القادم" : "Become our next client"}
          </h2>
          <p className="text-gray-600 mb-8">
            {lang === "fr" ? "Rejoignez les entreprises qui font le choix de l'écologie" : 
             lang === "ar" ? "انضم إلى الشركات التي تختار البيئة" : 
             "Join companies choosing ecology"}
          </p>
          <a 
            href="/#contact" 
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition"
          >
            {lang === "fr" ? "Demander un devis" : lang === "ar" ? "اطلب عرض سعر" : "Request a quote"}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2025 ECO BAG Tunisie</p>
        </div>
      </footer>
    </div>
  );
}
