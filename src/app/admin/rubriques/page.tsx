"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Save, ArrowLeft, Check } from "lucide-react";

const IMAGES = [
  "WhatsApp Image 2026-03-11 at 21.13.49-4bad99d25d4b.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.49 (1)-8ca04c0d568f.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.49 (2)-0cfd1052300e.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.49 (3)-85fbe19d34a0.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.48 (2)-e68a2c9e864d.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.48 (1)-726d45d964ad.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.48-d4968799b2a8.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.40 (2)-e68a2c9e864d.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.40 (1)-726d45d964ad.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.40-d670cfe67576.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.39 (4)-98ec6498e92d.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.39 (3)-b9d6d5e922b6.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.39 (2)-b34db89f65fe.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.39 (1)-131775000fcd.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.39-74de3e7442f9.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.49-4bad99d25d4b.jpeg",
  "WhatsApp Image 2026-03-11 at 21.13.49 (1)-8ca04c0d568f.jpeg",
];

const RUBRIQUES = [
  { id: "rangement", fr: "RANGEMENT & ORGANISATION", icon: "🏠" },
  { id: "transport", fr: "TRANSPORT & VOYAGE", icon: "✈️" },
  { id: "creatif", fr: "CRÉATIF & ENFANTS", icon: "🎨" },
  { id: "textile", fr: "TEXTILE & MODE", icon: "👕" },
  { id: "retail", fr: "GRANDE DISTRIBUTION", icon: "🛒" },
];

export default function AdminRubriques() {
  const [assignments, setAssignments] = useState<Record<string, string[]>>({});
  const [activeRubrique, setActiveRubrique] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("rubriques-config");
    if (saved) setAssignments(JSON.parse(saved));
  }, []);

  const toggleImage = (rubriqueId: string, image: string) => {
    setAssignments(prev => {
      const current = prev[rubriqueId] || [];
      const exists = current.includes(image);
      return { 
        ...prev, 
        [rubriqueId]: exists 
          ? current.filter(i => i !== image)
          : [...current, image]
      };
    });
  };

  const save = () => {
    localStorage.setItem("rubriques-config", JSON.stringify(assignments));
    alert("Sauvegarde réussie!");
  };

  const count = (id: string) => assignments[id]?.length || 0;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Configuration Rubriques</h1>
            <p className="text-gray-500 text-sm">Plusieurs photos par rubrique</p>
          </div>
          <div className="flex gap-3">
            <a href="/" className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Retour</a>
            <button onClick={save} className="px-4 py-2 bg-green-600 text-white rounded flex items-center gap-2">
              <Save className="w-4 h-4" /> Sauvegarder
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <div className="grid md:grid-cols-5 gap-4 mb-8">
          {RUBRIQUES.map(rub => {
            const isActive = activeRubrique === rub.id;
            const nb = count(rub.id);
            return (
              <button
                key={rub.id}
                onClick={() => setActiveRubrique(isActive ? "" : rub.id)}
                className={`p-4 rounded-lg border-2 text-left transition ${
                  isActive ? 'border-blue-500 bg-blue-50' : nb > 0 ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'
                }`}
              >
                <div className="text-2xl mb-2">{rub.icon}</div>
                <div className="font-bold text-sm">{rub.fr}</div>
                <div className="text-xs text-gray-500 mt-1">
                  {nb > 0 ? <span className="text-green-600 flex items-center gap-1"><Check className="w-3 h-3"/> {nb} photo{nb>1?'s':''}</span> : "Cliquez pour assigner"}
                </div>
              </button>
            );
          })}
        </div>

        {activeRubrique && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">
              Sélection pour: {RUBRIQUES.find(r => r.id === activeRubrique)?.fr}
            </h2>
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
              {IMAGES.map(img => {
                const isSelected = assignments[activeRubrique]?.includes(img);
                return (
                  <div 
                    key={img}
                    onClick={() => toggleImage(activeRubrique, img)}
                    className={`relative aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer border-4 ${
                      isSelected ? 'border-green-500' : 'border-transparent hover:border-blue-400'
                    }`}
                  >
                    <Image src={`/clients/${img}`} alt="" fill className="object-cover" />
                    {isSelected && (
                      <div className="absolute inset-0 bg-green-500/30 flex items-center justify-center">
                        <Check className="w-8 h-8 text-green-600 bg-white rounded-full p-1" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
