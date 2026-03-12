"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, Plane, Home, Palette } from "lucide-react";

const translations = {
  fr: {
    title: "Nos Clients & Réalisations",
    subtitle: "Des entreprises de confiance qui ont choisi l'éco-responsabilité",
    back: "Retour à l'accueil",
  },
  ar: {
    title: "عملاؤنا وإنجازاتنا",
    subtitle: "شركات موثوقة اختارت الاستدامة",
    back: "العودة إلى الصفحة الرئيسية",
  },
  en: {
    title: "Our Clients & Achievements", 
    subtitle: "Trusted companies that chose eco-responsibility",
    back: "Back to homepage",
  }
};

// CORRECTED CLIENT-IMAGE MATCHING - FIXED 3 ERRORS
const clients = [
  {
    name: "Buta Airways",
    category: "Transport & Voyage", // ✅ CORRECT
    // Image: Red/white Buta Airways pouches with flame logo
    image: "/clients/WhatsApp Image 2026-03-11 at 21.13.48-d4968799b2a8.jpeg",
    icon: Plane,
  },
  {
    name: "Amir Textile",
    category: "Rangement & Organisation", // ✅ CHANGED from "Textile" to "Home" category
    // Image: White pillow packaging for Amir Textile
    image: "/clients/WhatsApp Image 2026-03-11 at 21.13.49 (3)-85fbe19d34a0.jpeg",
    icon: Home,
  },
  {
    name: "Kids Creative",
    category: "Créatif & Enfants", // ✅ CORRECT
    // Image: Kids coloring bags with fish, owl, castle drawings
    image: "/clients/WhatsApp Image 2026-03-11 at 21.13.39 (4)-98ec6498e92d.jpeg",
    icon: Palette,
  },
  {
    name: "Carrefour",
    category: "Grande Distribution",
    // Image: Green Carrefour shopping bag  
    image: "/clients/WhatsApp Image 2026-03-11 at 21.13.49 (1)-8ca04c0d568f.jpeg",
    icon: Home,
  },
  {
    name: "Solutions Rangement",
    category: "Rangement & Organisation",
    // Image: Orange storage boxes
    image: "/clients/WhatsApp Image 2026-03-11 at 21.13.49 (2)-0cfd1052300e.jpeg",
    icon: Home,
  },
  {
    name: "ZEN Accessories",
    category: "Textile & Mode",
    // Image: White ZEN bag
    image: "/clients/WhatsApp Image 2026-03-11 at 21.13.49-4bad99d25d4b.jpeg",
    icon: Home,
  }
];

export default function Portfolio() {
  const [lang, setLang] = useState<"fr" | "ar" | "en">("fr");
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gray-50" dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">ECO</div>
            <span className="font-bold text-xl">BAG</span>
          </div>
          <a href="/" className="text-gray-600 hover:text-green-600 flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            {t.back}
          </a>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">{t.title}</h1>
          <p className="text-green-100 mt-2">{t.subtitle}</p>
        </div>
      </div>

      {/* Gallery - CORRECTED */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-56 bg-gray-100 relative">
                <Image 
                  src={client.image} 
                  alt={client.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">
                  {client.category}
                </span>
                <h3 className="font-bold text-lg mt-1">{client.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
