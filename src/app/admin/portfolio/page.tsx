"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Leaf, ShoppingBag, Package, Truck, LayoutGrid } from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "Toutes nos créations", icon: LayoutGrid },
  { id: "shopping", label: "Shopping & Retail", icon: ShoppingBag },
  { id: "agriculture", label: "Agriculture & Pépinière", icon: Leaf },
  { id: "specific", label: "Emballages Spécifiques", icon: Package },
  { id: "divers", label: "Sur Mesure & Divers", icon: Truck },
];

const PORTFOLIO_ITEMS = [
  {
    src: "sac-bretelles-otop-1.webp",
    title: "Sac à bretelles Otop",
    desc: "Sac T-shirt résistant pour la grande distribution. Écologique et réutilisable.",
    category: "shopping",
    alt: "Sac à bretelles Otop en tissu non-tissé pour grande distribution - ECO BAG Tunisie",
  },
  {
    src: "sac-carrefour-2.webp",
    title: "Sac Carrefour personnalisé",
    desc: "Sac cabas grande contenance pour supermarchés avec logo imprimé.",
    category: "shopping",
    alt: "Sac cabas Carrefour personnalisé avec logo imprimé en tissu non-tissé - ECO BAG Tunisie",
  },
  {
    src: "sac-total-1.webp",
    title: "Sac Total promotionnel",
    desc: "Sac publicitaire robuste et réutilisable avec impression haute qualité.",
    category: "shopping",
    alt: "Sac promotionnel Total réutilisable avec impression haute qualité - ECO BAG Tunisie",
  },
  {
    src: "sac-uni-boxbag.webp",
    title: "Boxbag Uni",
    desc: "Sac cabas boxbag de couleur unie, élégant et très solide pour boutiques.",
    category: "shopping",
    alt: "Sac boxbag uni élégant en tissu non-tissé pour boutiques - ECO BAG Tunisie",
  },
  {
    src: "sacs-a-semis-a-enterrer-lot-de-500.webp",
    title: "Sacs pour Semis",
    desc: "Sacs agricoles biodégradables à enterrer, conçus pour la protection des racines.",
    category: "agriculture",
    alt: "Sacs agricoles biodégradables pour semis à enterrer - ECO BAG Tunisie",
  },
  {
    src: "sacs-a-semis-a-enterrer-lot-de-500.jpg",
    title: "Lot Sacs Pépinière",
    desc: "Lot de sacs non-tissés pour plants et pépinières. Favorise le drainage.",
    category: "agriculture",
    alt: "Lot de sacs non-tissés pour pépinières favorisant le drainage - ECO BAG Tunisie",
  },
  {
    src: "ultrasonic-pizza-bag-nonwoven-pp-01-510x510.jpg",
    title: "Sac de Livraison Pizza",
    desc: "Soudure ultrasonique robuste, format plat parfaitement adapté au transport des pizzas.",
    category: "specific",
    alt: "Sac de livraison pizza à soudure ultrasonique en tissu non-tissé - ECO BAG Tunisie",
  },
  {
    src: "non-woven-auto-parts-covers-1000x1000.webp",
    title: "Housses Pièces Automobiles",
    desc: "Protection sur mesure pour carrosseries et équipements de l'industrie auto.",
    category: "specific",
    alt: "Housses de protection pièces automobiles en tissu non-tissé - ECO BAG Tunisie",
  },
  {
    src: "63581a4fa2713b4048373e53-24-pcs-travel-shoe-bags-for-men-and.jpg",
    title: "Sacs à Chaussures & Voyage",
    desc: "Sacs de rangement à cordon, format pratique, aérés contre l'humidité.",
    category: "specific",
    alt: "Sacs à chaussures de voyage à cordon en tissu non-tissé - ECO BAG Tunisie",
  },
  {
    src: "WhatsApp-Image-2025-11-05-at-5.28.34-PM.jpeg",
    title: "Cabas Personnalisé",
    desc: "Réalisation sur mesure avec une poignée confort et finition premium.",
    category: "divers",
    alt: "Cabas personnalisé sur mesure avec poignée confort - ECO BAG Tunisie",
  },
  {
    src: "WhatsApp-Image-2025-12-19-at-7.13.31-PM.jpeg",
    title: "Série Spéciale",
    desc: "Exemple de notre savoir-faire polyvalent et de qualité tunisienne.",
    category: "divers",
    alt: "Série spéciale de sacs écologiques qualité tunisienne - ECO BAG Tunisie",
  },
  {
    src: "gh3.jpg",
    title: "Sac Événementiel",
    desc: "Parfait pour les séminaires, salons professionnels et conférences.",
    category: "divers",
    alt: "Sac événementiel pour séminaires et conférences - ECO BAG Tunisie",
  },
  {
    src: "media-4-2.jpg",
    title: "Sac Boutique Prêt-à-porter",
    desc: "Design épuré et doux au toucher pour les marques de vêtements.",
    category: "shopping",
    alt: "Sac boutique prêt-à-porter design épuré en tissu non-tissé - ECO BAG Tunisie",
  },
  {
    src: "11224478_1719558774787792_8074364517910597348_n.jpg",
    title: "Création Print Premium",
    desc: "Impression brillante qui valorise l'image de votre marque.",
    category: "divers",
    alt: "Impression premium sur sac écologique avec finition brillante - ECO BAG Tunisie",
  },
  {
    src: "Add-a-heading-37-min-1-1024x536.webp",
    title: "Pack Agencement",
    desc: "Conception spécifique de sets et d'aménagements textiles non-tissés.",
    category: "divers",
    alt: "Pack agencement textiles non-tissés sur mesure - ECO BAG Tunisie",
  },
  {
    src: "3.jpg",
    title: "Pochette Cadeau",
    desc: "Emballage de petite taille idéal pour la parfumerie et les événements.",
    category: "divers",
    alt: "Pochette cadeau écologique pour parfumerie et événements - ECO BAG Tunisie",
  },
  {
    src: "470725392_1120403279449747_7568361138859084856_n.jpg",
    title: "Super Résistance",
    desc: "Conception renforcée spécialement étudiée pour porter de lourdes charges.",
    category: "shopping",
    alt: "Sac renforcé haute résistance pour charges lourdes - ECO BAG Tunisie",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* HEADER SECTION */}
      <header className="relative bg-teal-800 text-white shadow-xl overflow-hidden" role="banner">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-[-10%] w-full h-1/2 bg-gradient-to-t from-teal-900 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-teal-100 hover:text-white mb-8 transition-colors"
            aria-label="Retour à la page d'accueil ECO BAG Tunisie"
          >
            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
            <span className="font-medium tracking-wide">Retour à l&apos;accueil</span>
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">
            Notre <span className="text-teal-300">Portfolio</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-teal-100 leading-relaxed font-light">
            Découvrez nos réalisations chez ECO BAG Tunisie. Une large gamme de sacs écologiques en
            tissu non-tissé, 100% personnalisables, pour répondre aux besoins de chaque secteur
            d&apos;activité.
          </p>
        </div>
      </header>

      {/* FILTER TABS */}
      <nav
        className="sticky top-0 z-20 bg-slate-50/80 backdrop-blur-md border-b border-slate-200"
        aria-label="Filtrer par catégorie de produits"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-2 hide-scrollbar" role="tablist">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="portfolio-gallery"
                  className={`
                    flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap
                    ${
                      isActive
                        ? "bg-teal-700 text-white shadow-md transform scale-105"
                        : "bg-white text-slate-600 hover:bg-teal-50 hover:text-teal-700 border border-slate-200"
                    }
                  `}
                >
                  <Icon
                    className={`w-4 h-4 ${isActive ? "text-teal-100" : "text-slate-400"}`}
                    aria-hidden="true"
                  />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* GALLERY SECTION */}
      <main
        id="portfolio-gallery"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        role="tabpanel"
      >
        <div className="mb-10 text-slate-500 font-medium">
          Affichage de {filteredItems.length} réalisation{filteredItems.length > 1 ? "s" : ""}
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-slate-300">
            <Package className="w-16 h-16 mx-auto text-slate-300 mb-4" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-700 mb-2">Aucune réalisation</h2>
            <p className="text-slate-500">
              Il n&apos;y a pas d&apos;images pour cette catégorie actuellement.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item, index) => (
              <article
                key={index}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-teal-200 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative aspect-square w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={`/portfolio-images/${item.src}`}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-teal-800 text-xs font-bold rounded-full shadow-sm">
                    {CATEGORIES.find((c) => c.id === item.category)?.label}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-slate-800 mb-2 line-clamp-1 group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow line-clamp-3">
                    {item.desc}
                  </p>
                  <div className="w-8 h-1 bg-teal-500 rounded-full mt-6 transition-all duration-300 group-hover:w-16"></div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* FOOTER CTA */}
      <section className="bg-teal-900 py-16 text-center text-white px-4" aria-labelledby="cta-title">
        <h2 id="cta-title" className="text-3xl md:text-4xl font-bold mb-6">
          Prêt à emballer votre succès avec nous ?
        </h2>
        <p className="text-teal-100 max-w-2xl mx-auto mb-8 text-lg">
          Nos conseillers sont à votre disposition pour créer un emballage qui reflète parfaitement
          votre image de marque.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-white text-teal-900 hover:bg-teal-50 hover:shadow-lg transition-all"
          aria-label="Contactez ECO BAG Tunisie pour un devis personnalisé"
        >
          Contactez-nous pour un devis
        </Link>
      </section>
    </div>
  );
}
