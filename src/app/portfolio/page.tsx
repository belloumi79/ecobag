"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const RUBRIQUES = {
  rangement: { fr: "RANGEMENT & ORGANISATION", ar: "التخزين والتنظيم", en: "STORAGE & ORGANIZATION", icon: "🏠" },
  transport: { fr: "TRANSPORT & VOYAGE", ar: "النقل والسفر", en: "TRANSPORT & TRAVEL", icon: "✈️" },
  creatif: { fr: "CRÉATIF & ENFANTS", ar: "الإبداع والأطفال", en: "CREATIVE & KIDS", icon: "🎨" },
  textile: { fr: "TEXTILE & MODE", ar: "النسيج والموضة", en: "TEXTILE & FASHION", icon: "👕" },
  retail: { fr: "GRANDE DISTRIBUTION", ar: "التوزيع الكبير", en: "RETAIL & DISTRIBUTION", icon: "🛒" },
};

type Lang = "fr" | "ar" | "en";

export default function Portfolio() {
  const [config, setConfig] = useState<Record<string, string[]>>({});
  const [lang, setLang] = useState<Lang>("fr");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/rubriques-config.json')
      .then(r => r.json())
      .then(data => {
        setConfig(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;

  return (
    <div className="min-h-screen bg-gray-50" dir={lang === "ar" ? "rtl" : "ltr"}>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-green-600">
              <ArrowLeft className="w-5 h-5" />
              Retour
            </Link>
            <h1 className="text-2xl font-bold">Portfolio</h1>
          </div>
          <div className="flex gap-2">
            {(["fr", "ar", "en"] as Lang[]).map(l => (
              <button key={l} onClick={() => setLang(l)} className={`px-3 py-1 rounded ${lang === l ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {Object.entries(RUBRIQUES).map(([key, rub]) => {
          const images = config[key] || [];
          if (images.length === 0) return null;
          return (
            <section key={key} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span>{rub.icon}</span> {rub[lang]}
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                {images.map((img, i) => (
                  <div key={i} className="relative aspect-square bg-white rounded-xl shadow overflow-hidden">
                    <Image src={`/clients/${img}`} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {Object.values(config).flat().length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">Aucune image configurée.</p>
            <p className="text-gray-400">Allez dans Admin pour ajouter des photos aux rubriques.</p>
          </div>
        )}
      </main>
    </div>
  );
}
