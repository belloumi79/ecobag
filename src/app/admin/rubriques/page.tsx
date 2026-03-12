"use client";

import Link from "next/link";
import { Save, ArrowLeft, Check, Folder, ImageIcon } from "lucide-react";

const rubriques = [
  { id: "rangement", label: "RANGEMENT & ORGANISATION" },
  { id: "transport", label: "TRANSPORT & VOYAGE" },
  { id: "creatif", label: "CRÉATIF & ENFANTS" },
  { id: "textile", label: "TEXTILE & MODE" },
  { id: "retail", label: "GRANDE DISTRIBUTION" },
];

export default function AdminRubriques() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Administration Rubriques</h1>
      <p className="text-gray-600 mb-6">Cette page permet de configurer les images pour chaque rubrique du portfolio.</p>
      <div className="space-y-2">
        {rubriques.map(r => (
          <div key={r.id} className="flex items-center gap-2 bg-white p-4 rounded-lg shadow">
            <Folder className="w-5 h-5 text-green-600" />
            <span className="font-medium">{r.label}</span>
            <ImageIcon className="w-4 h-4 text-gray-400 ml-auto" />
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Retour au site
        </Link>
      </div>
    </div>
  );
}
