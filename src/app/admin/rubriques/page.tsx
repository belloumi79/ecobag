"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const IMAGES = [
  "WhatsApp Image 2026-03-11 at 21.13.28 (1)-a4654721506f.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.28-a962938c755e.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.39 (1)-131775000fcd.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.39 (2)-b34db89f65fe.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.39 (3)-b9d6d5e922b6.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.39 (4)-98ec6498e92d.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.39-74de3e7442f9.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.40 (1)-726d45d964ad.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.40 (2)-e68a2c9e864d.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.40-d670cfe67576.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.48 (1)-726d45d964ad.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.48 (2)-e68a2c9e864d.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.48-d4968799b2a8.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.49 (1)-8ca04c0d568f.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.49 (2)-0cfd1052300e.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.49 (3)-85fbe19d34a0.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.49-4bad99d25d4b.jpeg",
];

const RUBRIQUES = [
  { id: "rangement", label: "🏠 RANGEMENT & ORGANISATION" },
  { id: "transport", label: "✈️ TRANSPORT & VOYAGE" },
  { id: "creatif", label: "🎨 CRÉATIF & ENFANTS" },
  { id: "textile", label: "👕 TEXTILE & MODE" },
  { id: "retail", label: "🛒 GRANDE DISTRIBUTION" },
];

export default function AdminRubriques() {
  const [selected, setSelected] = useState<Record<string, string[]>>({});
  const [activeRubrique, setActiveRubrique] = useState("");

  const toggleImage = (img: string) => {
    if (!activeRubrique) return;
    setSelected(s => {
      const current = s[activeRubrique] || [];
      const isSelected = current.includes(img);
      return { ...s, [activeRubrique]: isSelected ? current.filter(i => i !== img) : [...current, img] };
    });
  };

  const isSelected = (img: string) => selected[activeRubrique]?.includes(img);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin - Configuration Rubriques</h1>
            <p className="text-gray-600">Sélectionnez d&apos;abord une rubrique, puis les images associées</p>
          </div>
          <Link href="/" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Retour</Link>
        </div>

        <div className="grid md:grid-cols-5 gap-4 mb-8">
          {RUBRIQUES.map(r => (
            <button
              key={r.id}
              onClick={() => setActiveRubrique(r.id)}
              className={`p-4 rounded-xl border-2 text-center ${activeRubrique === r.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}
            >
              <div className="text-2xl mb-2">{r.label.split(' ')[0]}</div>
              <div className="font-bold text-sm">{r.label.split(' ').slice(1).join(' ')}</div>
              <div className="text-xs text-gray-500 mt-1">{selected[r.id]?.length || 0} photos</div>
            </button>
          ))}
        </div>

        {activeRubrique ? (
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">
              Photos pour: {RUBRIQUES.find(r => r.id === activeRubrique)?.label}
            </h2>
            <p className="text-gray-500 mb-4">Cliquez sur les images pour les sélectionner ({selected[activeRubrique]?.length || 0} sélectionnées)</p>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {IMAGES.map((img, i) => (
                <div
                  key={i}
                  onClick={() => toggleImage(img)}
                  className={`relative aspect-square cursor-pointer border-4 rounded-lg overflow-hidden ${isSelected(img) ? 'border-green-500' : 'border-transparent hover:border-blue-300'}`}
                >
                  <Image src={`/clients/${img}`} alt="" fill className="object-cover" sizes="100px" />
                  {isSelected(img) && (
                    <div className="absolute inset-0 bg-green-500/30 flex items-center justify-center">
                      <span className="text-2xl">✓</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center p-12 bg-white rounded-xl">
            <p className="text-gray-500 text-lg">👆 Cliquez sur une rubrique ci-dessus pour commencer</p>
          </div>
        )}
      </div>
    </div>
  );
}
