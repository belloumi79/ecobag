"use client";

import Link from "next/link";
import { ArrowLeft, Folder, ImageIcon } from "lucide-react";

const rubriques = [
  { id: "rangement", label: "RANGEMENT & ORGANISATION" },
  { id: "transport", label: "TRANSPORT & VOYAGE" },
  { id: "creatif", label: "CREATIF & ENFANTS" },
  { id: "textile", label: "TEXTILE & MODE" },
  { id: "retail", label: "GRANDE DISTRIBUTION" },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-green-600 text-white p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">Portfolio ECO BAG</h1>
          <Link href="/" className="text-white hover:underline flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Retour
          </Link>
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto p-6">
        <p className="text-gray-600 mb-6">Nos réalisations par catégorie.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rubriques.map(r => (
            <div key={r.id} className="border rounded-lg p-6 hover:shadow-lg transition">
              <Folder className="w-8 h-8 text-green-600 mb-3" />
              <h2 className="font-bold text-lg">{r.label}</h2>
              <p className="text-gray-500 text-sm mt-2 flex items-center gap-1">
                <ImageIcon className="w-3 h-3" /> Photos clients
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
