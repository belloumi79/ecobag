#!/bin/bash
# Script de déploiement Vercel pour ECO BAG

echo "🚀 Déploiement ECO BAG sur Vercel..."

# Vérifier si vercel est installé
if ! command -v vercel &> /dev/null; then
    echo "📦 Installation de Vercel CLI..."
    npm i -g vercel
fi

# Se connecter à Vercel (première fois uniquement)
echo "🔗 Connexion à Vercel..."
vercel login

# Déployer
echo "🚀 Lancement du déploiement..."
vercel --prod

echo "✅ Déploiement terminé !"
