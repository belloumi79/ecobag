"use client";

import { useState } from "react";
import { Leaf, ShoppingBag, MapPin, Phone, Mail, Check, Factory } from "lucide-react";

const translations = {
  fr: {
    nav: { home: "Accueil", about: "À propos", products: "Produits", contact: "Contact" },
    hero: {
      badge: "🇹🇳 Fabrication 100% Tunisienne",
      title: "L'éco-responsabilité en sac",
      subtitle: "Sacs et emballages en tissu non-tissé de haute qualité",
      cta1: "Demander un devis",
      cta2: "Voir les produits"
    },
    stats: { delivered: "Sacs livrés", clients: "Clients satisfaits", eco: "Taux de recyclage" },
    about: {
      title: "À propos d'ECO BAG",
      desc1: "ECO BAG est une entreprise tunisienne spécialisée dans la fabrication de sacs en tissu non-tissé et d'emballages écologiques.",
      desc2: "Notre mission : offrir des solutions d'emballage durables, réutilisables et personnalisables pour les entreprises et les commerçants.",
      features: ["Tissu non-tissé premium", "Personnalisable (logo, couleurs)", "Réutilisable & durable", "Fabriqué en Tunisie"]
    },
    products: {
      title: "Nos Produits",
      items: [
        { name: "Sacs Cabas", desc: "Format standard, anses renforcées", price: "À partir de 1.500 DT" },
        { name: "Pochettes & Sachets", desc: "Petit format, idéal cadeaux", price: "À partir de 0.800 DT" },
        { name: "Emballages Personnalisés", desc: "Votre logo, vos couleurs", price: "Sur devis" },
        { name: "Sacs Industriels", desc: "Format XXL, usage intensif", price: "Sur devis" }
      ]
    },
    why: {
      title: "Pourquoi choisir ECO BAG ?",
      items: [
        { title: "100% Écologique", desc: "Matériaux recyclables, production éco-responsable" },
        { title: "Réutilisable", desc: "Durabilité supérieure, sacs qui durent des années" },
        { title: "Personnalisable", desc: "Impression de votre logo et couleurs de marque" },
        { title: "Prix Compétitif", desc: "Qualité premium à prix fabricant tunisien" },
        { title: "Livraison Rapide", desc: "Délai court de production et livraison" },
        { title: "Made in Tunisia", desc: "Fabrication 100% tunisienne, économie locale" }
      ]
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Demandez votre devis gratuit",
      phone: "+216 94 569 302",
      email: "ecobagtunisie@gmail.com",
      address: "3 Rue Karama, Montfleury, Tunis"
    },
    footer: "© 2024 ECO BAG Tunisie. Tous droits réservés."
  },
  ar: {
    nav: { home: "الرئيسية", about: "من نحن", products: "المنتجات", contact: "اتصل بنا" },
    hero: {
      badge: "🇹🇳 صناعة 100% تونسية",
      title: "الاستدامة في كل حقيبة",
      subtitle: "أكياس وعبوات صديقة للبيئة بجودة عالية",
      cta1: "اطلب عرض سعر",
      cta2: "شاهد المنتجات"
    },
    stats: { delivered: "كيس تم توصيله", clients: "عميل راضٍ", eco: "نسبة إعادة التدوير" },
    about: {
      title: "عن ECO BAG",
      desc1: "ECO BAG شركة تونسية متخصصة في تصنيع الأكياس والعبوات الصديقة للبيئة من القماش غير المنسوج.",
      desc2: "مهمتنا: تقديم حلول تعبئة مستدامة وقابلة لإعادة الاستخدام وقابلة للتخصيص للشركات والتجار.",
      features: ["قماش غير منسوج فاخر", "قابل للتخصيص (شعار - ألوان)", "قابل لإعادة الاستخدام - متين", "صنع في تونس"]
    },
    products: {
      title: "منتجاتنا",
      items: [
        { name: "أكياس كبيرة", desc: "الحجم القياسي، مقابض مقوّاة", price: "ابتداء من 1.500 دت" },
        { name: "أكياس صغيرة", desc: "حجم صغير، مثالي للهدايا", price: "ابتداء من 0.800 دت" },
        { name: "عبوات مخصصة", desc: "شعارك، ألوان علامتك التجارية", price: "حسب الطلب" },
        { name: "أكياس صناعية", desc: "حجم كبير جداً، استخدام مكثف", price: "حسب الطلب" }
      ]
    },
    why: {
      title: "لماذا تختار ECO BAG؟",
      items: [
        { title: "صديق للبيئة 100%", desc: "مواد قابلة لإعادة التدوير، إنتاج مسؤول بيئياً" },
        { title: "قابل لإعادة الاستخدام", desc: "متانة عالية، أكياس تدوم لسنوات" },
        { title: "قابل للتخصيص", desc: "طباعة شعارك وألوان علامتك التجارية" },
        { title: "أسعار تنافسية", desc: "جودة فاخرة بسعر الشركة التونسية" },
        { title: "توصيل سريع", desc: "مدة إنتاج وتوصيل قصيرة" },
        { title: "صنع في تونس", desc: "تصنيع 100% تونسي، اقتصاد محلي" }
      ]
    },
    contact: {
      title: "اتصل بنا",
      subtitle: "اطلب عرض السعر المجاني الخاص بك",
      phone: "00216 94 569 302",
      email: "ecobagtunisie@gmail.com",
      address: "3 شارع الكرامة، مونفلوري، تونس"
    },
    footer: "© 2024 ECO BAG تونس. جميع الحقوق محفوظة."
  }
};

export default function Home() {
  const [lang, setLang] = useState<"fr" | "ar">("fr");
  const t = translations[lang];
  const isRTL = lang === "ar";

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? "font-sans text-right" : ""}`} dir={isRTL ? "rtl" : "ltr"}>
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-green-800">ECO BAG</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#accueil" className="text-gray-700 hover:text-green-600 font-medium">{t.nav.home}</a>
            <a href="#apropos" className="text-gray-700 hover:text-green-600 font-medium">{t.nav.about}</a>
            <a href="#produits" className="text-gray-700 hover:text-green-600 font-medium">{t.nav.products}</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium">{t.nav.contact}</a>
          </nav>
          <div className="flex gap-2">
            <button onClick={() => setLang("fr")} className={`px-3 py-1 rounded font-medium transition ${lang === "fr" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>FR</button>
            <button onClick={() => setLang("ar")} className={`px-3 py-1 rounded font-medium transition ${lang === "ar" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>AR</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-green-600/80 text-white px-4 py-1 rounded-full text-sm font-medium">{t.hero.badge}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.hero.title}</h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl">{t.hero.subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />
              {t.hero.cta1}
            </a>
            <a href="#produits" className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-500 transition inline-flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-green-50 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-700">+500K</div>
            <div className="text-gray-700 mt-1">{t.stats.delivered}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-700">+150</div>
            <div className="text-gray-700 mt-1">{t.stats.clients}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-700">100%</div>
            <div className="text-gray-700 mt-1">{t.stats.eco}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-700">2019</div>
            <div className="text-gray-700 mt-1">Depuis</div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="apropos" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Factory className="w-6 h-6 text-green-600" />
              <h2 className="text-3xl font-bold text-gray-900">{t.about.title}</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">{t.about.desc1}</p>
            <p className="text-gray-700 text-lg leading-relaxed">{t.about.desc2}</p>
            <ul className="mt-6 space-y-3">
              {t.about.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-green-100 rounded-2xl p-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-green-600 flex items-center justify-center">
                <Leaf className="w-24 h-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">ECO BAG</h3>
                <p className="text-gray-600">Il se caractérise par sa durabilité et sa haute qualité c'est un modèle unique dans la préservation de l'environnement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="produits" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.products.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.products.items.map((product, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
                <div className="h-40 bg-green-600 flex items-center justify-center">
                  <ShoppingBag className="w-16 h-16 text-white" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{product.desc}</p>
                  <div className="text-green-700 font-semibold">{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.why.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.why.items.map((item, i) => (
              <div key={i} className="bg-green-50 rounded-xl p-6 hover:bg-green-100 transition">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 text-white">
                  {i === 0 && <Leaf className="w-6 h-6" />}
                  {i === 1 && <ShoppingBag className="w-6 h-6" />}
                  {i === 2 && <Check className="w-6 h-6" />}
                  {i === 3 && <Leaf className="w-6 h-6" />}
                  {i === 4 && <ShoppingBag className="w-6 h-6" />}
                  {i === 5 && <MapPin className="w-6 h-6" />}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 bg-green-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">{t.contact.title}</h2>
          <p className="text-center text-green-100 mb-12">{t.contact.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-8">
            <a href={`tel:${t.contact.phone.replace(/\s/g, '')}`} className="bg-green-800 rounded-xl p-6 text-center hover:bg-green-700 transition">
              <Phone className="w-10 h-10 mx-auto mb-4 text-green-300" />
              <h3 className="font-semibold mb-2">Téléphone</h3>
              <p className="text-green-100">{t.contact.phone}</p>
            </a>
            <a href={`mailto:${t.contact.email}`} className="bg-green-800 rounded-xl p-6 text-center hover:bg-green-700 transition">
              <Mail className="w-10 h-10 mx-auto mb-4 text-green-300" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-green-100">{t.contact.email}</p>
            </a>
            <div className="bg-green-800 rounded-xl p-6 text-center">
              <MapPin className="w-10 h-10 mx-auto mb-4 text-green-300" />
              <h3 className="font-semibold mb-2">Adresse</h3>
              <p className="text-green-100">{t.contact.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold">ECO BAG</span>
          </div>
          <p className="text-gray-400 text-sm">{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
