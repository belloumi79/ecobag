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
];

const CLIENTS = [
  { id: "buta", name: "Buta Airways", category: "Transport" },
  { id: "amir", name: "Amir Textile", category: "Rangement" },
  { id: "carrefour", name: "Carrefour", category: "Grande Distribution" },
  { id: "kids", name: "Kids Creative", category: "Creatif Enfants" },
  { id: "zen", name: "ZEN Accessories", category: "Textile" },
  { id: "entsar", name: "Entsar Bio", category: "Bio" },
];

export default function Admin() {
  const [assignments, setAssignments] = useState<Record<string, string>>({});
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-assignments");
    if (saved) setAssignments(JSON.parse(saved));
  }, []);

  const assign = (clientId: string, image: string) => {
    setAssignments(prev => ({ ...prev, [clientId]: image }));
  };

  const save = () => {
    localStorage.setItem("portfolio-assignments", JSON.stringify(assignments));
    alert("Configuration sauvegardee!");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Configuration Portfolio Clients</h1>
          <div className="flex gap-3">
            <a href="/" className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Retour</a>
            <button onClick={save} className="px-4 py-2 bg-green-600 text-white rounded flex items-center gap-2">
              <Save className="w-4 h-4" /> Sauvegarder
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {/* Clients */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {CLIENTS.map(client => (
            <div key={client.id} className="bg-white rounded-lg shadow p-4">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h3 className="font-bold text-lg">{client.name}</h3>
                  <span className="text-sm text-gray-500">{client.category}</span>
                </div>
                {assignments[client.id] && (
                  <span className="text-green-600 flex items-center gap-1">
                    <Check className="w-4 h-4" /> Image assignee
                  </span>
                )}
              </div>
              
              {assignments[client.id] ? (
                <div className="relative h-40 bg-gray-100 rounded overflow-hidden">
                  <Image 
                    src={`/clients/${assignments[client.id]}`}
                    alt={client.name}
                    fill
                    className="object-cover"
                  />
                  <button 
                    onClick={() => setAssignments(prev => { const n = {...prev}; delete n[client.id]; return n; })}
                    className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs"
                  >
                    Changer
                  </button>
                </div>
              ) : (
                <p className="text-gray-400 text-sm italic">Cliquez sur une image ci-dessous pour assigner</p>
              )}
            </div>
          ))}
        </div>

        {/* Gallery */}
        <h2 className="text-xl font-bold mb-4">Galerie d'images disponibles</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {IMAGES.map(img => {
            const isUsed = Object.values(assignments).includes(img);
            return (
              <div 
                key={img}
                onClick={() => !isUsed && setPreview(img)}
                className={`relative aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer border-2 ${
                  isUsed ? 'border-green-500 opacity-50' : 'border-transparent hover:border-blue-500'
                }`}
              >
                <Image src={`/clients/${img}`} alt="" fill className="object-cover" />
                {isUsed && (
                  <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Preview Modal */}
        {preview && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setPreview(null)}>
            <div className="bg-white rounded-lg p-4 max-w-2xl w-full mx-4" onClick={e => e.stopPropagation()}>
              <div className="relative h-96 bg-gray-100 rounded mb-4">
                <Image src={`/clients/${preview}`} alt="" fill className="object-contain" />
              </div>
              <p className="text-center text-gray-600 mb-4">Assigner cette image a:</p>
              <div className="grid grid-cols-2 gap-3">
                {CLIENTS.filter(c => !assignments[c.id]).map(client => (
                  <button
                    key={client.id}
                    onClick={() => { assign(client.id, preview); setPreview(null); }}
                    className="p-3 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    {client.name}
                  </button>
                ))}
              </div>
              <button onClick={() => setPreview(null)} className="w-full mt-3 p-2 text-gray-600 hover:bg-gray-100 rounded">
                Annuler
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
