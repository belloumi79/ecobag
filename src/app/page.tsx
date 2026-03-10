"use client";

import { useState } from "react";
import { Leaf, ShoppingBag, MapPin, Phone, Mail, Check, Factory, Menu, X, ChevronRight, Star, Truck, Shield } from "lucide-react";
import Image from "next/image";

const translations = {
  fr: {
    nav: { home: "Accueil", about: "À propos", products: "Produits", contact: "Contact", clients: "Nos Clients" },
    hero: {
      badge: "🇹🇳 Fabrication 100% Tunisienne",
      title: "L'éco-responsabilité en sac",
      subtitle: "Sacs et emballages en tissu non-tissé de haute qualité, personnalisés pour votre marque",
      cta1: "Demander un devis",
      cta2: "Découvrir nos produits"
    },
    stats: [
      { value: "10+", label: "Années d'expérience" },
      { value: "50+", label: "Clients satisfaits" },
      { value: "1M+", label: "Sacs produits" },
      { value: "100%", label: "Personnalisable" }
    ],
    products: {
      title: "Nos Produits",
      subtitle: "Des solutions d'emballage écologiques pour tous vos besoins",
      items: [
        {
          name: "Sacs Shopping Personnalisés",
          description: "Sacs avec anses, personnalisables avec votre logo et couleurs",
          image: "/products/Add-a-heading-37-min-1-1024x536-1.webp",
          tags: ["Commerce", "Événementiel"]
        },
        {
          name: "Sacs Pharmacie Bilingues",
          description: "Sacs spéciaux pour pharmacies avec texte FR/AR",
          image: "/products/11224478_1719558774787792_8074364517910597348_n.jpg",
          tags: ["Santé", "Pharmacie"]
        },
        {
          name: "Sacs de Livraison Pizza",
          description: "Sacs isothermes personnalisés pour livraison alimentaire",
          image: "/products/1763.jpg",
          tags: ["Restauration", "Food"]
        },
        {
          name: "Housses Protection Auto",
          description: "Protection sièges voiture en tissu non-tissé",
          image: "/products/1.jfif",
          tags: ["Automobile", "Garage"]
        },
        {
          name: "Sacs de Semis Biodégradables",
          description: "Sacs pour plantations écologiques, 100% biodégradables",
          image: "/products/3.jpg",
          tags: ["Agriculture", "Jardin"]
        },
        {
          name: "Housses Protection Plantes",
          description: "Protection hivernale pour arbres et plantes",
          image: "/products/non-woven-auto-parts-covers-1000x1000.webp",
          tags: ["Jardinage", "Agriculture"]
        }
      ]
    },
    clients: {
      title: "Ils nous font confiance",
      subtitle: "Des marques qui ont choisi l'éco-responsabilité",
      brands: ["Total", "Pharmacie", "Bon Marché", "Pizza Hut"]
    },
    why: {
      title: "Pourquoi choisir ECO BAG ?",
      features: [
        { icon: "leaf", title: "100% Écologique", desc: "Tissu non-tissé recyclable et biodégradable" },
        { icon: "shield", title: "Réutilisable", desc: "Durabilité exceptionnelle, +100 utilisations" },
        { icon: "star", title: "Personnalisable", desc: "Votre logo, vos couleurs, votre message" },
        { icon: "factory", title: "Made in Tunisie", desc: "Fabrication locale, emploi local" },
        { icon: "truck", title: "Livraison Rapide", desc: "Délai 7-15 jours selon quantité" },
        { icon: "check", title: "Garantie Qualité", desc: "Contrôle qualité à chaque étape" }
      ]
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Demandez votre devis personnalisé gratuit",
      phone: "00216 94 569 302",
      email: "ecobagtunisie@gmail.com",
      address: "3 Rue Karama, Montfleury, Tunis",
      form: {
        name: "Votre nom",
        company: "Entreprise",
        phone: "Téléphone",
        email: "Email",
        message: "Votre message / Demande de devis",
        submit: "Envoyer ma demande"
      }
    },
    footer: "© 2026 ECO BAG Tunisie. Tous droits réservés."
  },
  ar: {
    nav: { home: "الرئيسية", about: "من نحن", products: "منتجاتنا", contact: "اتصل بنا", clients: "عملاؤنا" },
    hero: {
      badge: "🇹🇳 صناعة 100% تونسية",
      title: "الاستدامة في كل حقيبة",
      subtitle: "أكياس وعبوات من القماش غير المنسوج عالي الجودة، مخصصة لعلامتك التجارية",
      cta1: "اطلب عرض سعر",
      cta2: "اكتشف منتجاتنا"
    },
    stats: [
      { value: "10+", label: "سنوات خبرة" },
      { value: "50+", label: "عميل راضٍ" },
      { value: "1M+", label: "كيس تم إنتاجه" },
      { value: "100%", label: "قابل للتخصيص" }
    ],
    products: {
      title: "منتجاتنا",
      subtitle: "حلول تغليف صديقة للبيئة لجميع احتياجاتك",
      items: [
        {
          name: "أكياس تسوق مخصصة",
          description: "أكياس بمقابض، قابلة للتخصيص بشعارك وألوانك",
          image: "/products/Add-a-heading-37-min-1-1024x536-1.webp",
          tags: ["تجارة", "فعاليات"]
        },
        {
          name: "أكياس صيدلية ثنائية اللغة",
          description: "أكياس خاصة بالصيدليات بنص FR/AR",
          image: "/products/11224478_1719558774787792_8074364517910597348_n.jpg",
          tags: ["صحة", "صيدلية"]
        },
        {
          name: "أكياس توصيل البيتزا",
          description: "أكياس معزولة مخصصة للتوصيل الغذائي",
          image: "/products/1763.jpg",
          tags: ["مطاعم", "توصيل"]
        },
        {
          name: "أغطية حماية السيارات",
          description: "حماية مقاعد السيارات من القماش غير المنسوج",
          image: "/products/1.jfif",
          tags: ["سيارات", "كراج"]
        },
        {
          name: "أكياس زراعة قابلة للتحلل",
          description: "أكياس للزراعة البيئية، 100% قابلة للتحلل",
          image: "/products/3.jpg",
          tags: ["زراعة", "حدائق"]
        },
        {
          name: "أغطية حماية النباتات",
          description: "حماية شتوية للأشجار والنباتات",
          image: "/products/non-woven-auto-parts-covers-1000x1000.webp",
          tags: ["بستنة", "زراعة"]
        }
      ]
    },
    clients: {
      title: "يثقون بنا",
      subtitle: "علامات تجارية اختارت الاستدامة",
      brands: ["توتال", "صيدلية", "بون مارشي", "بيتزا هت"]
    },
    why: {
      title: "لماذا تختار ECO BAG؟",
      features: [
        { icon: "leaf", title: "100% صديق للبيئة", desc: "قماش غير منسوج قابل لإعادة التدوير والتحلل" },
        { icon: "shield", title: "قابل لإعادة الاستخدام", desc: "متانة استثنائية، +100 استخدام" },
        { icon: "star", title: "قابل للتخصيص", desc: "شعارك، ألوانك، رسالتك" },
        { icon: "factory", title: "صنع في تونس", desc: "صناعة محلية، توظيف محلي" },
        { icon: "truck", title: "توصيل سريع", desc: "مدة 7-15 يوم حسب الكمية" },
        { icon: "check", title: "ضمان الجودة", desc: "مراقبة الجودة في كل مرحلة" }
      ]
    },
    contact: {
      title: "اتصل بنا",
      subtitle: "اطلب عرض السعر المخصص المجاني الخاص بك",
      phone: "00216 94 569 302",
      email: "ecobagtunisie@gmail.com",
      address: "3 شارع الكرامة، مونفلوري، تونس",
      form: {
        name: "اسمك",
        company: "الشركة",
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        message: "رسالتك / طلب عرض السعر",
        submit: "إرسال طلبي"
      }
    },
    footer: "© 2026 ECO BAG تونس. جميع الحقوق محفوظة."
  }
};

export default function Home() {
  const [lang, setLang] = useState<"fr" | "ar">("fr");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", company: "", phone: "", email: "", message: "" });
  const t = translations[lang];
  const isRTL = lang === "ar";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:ecobagtunisie@gmail.com?subject=Demande devis - ${formData.company}&body=${formData.message}%0A%0ANom: ${formData.name}%0AEntreprise: ${formData.company}%0ATel: ${formData.phone}`;
  };

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      leaf: <Leaf className="w-6 h-6" />,
      shield: <Shield className="w-6 h-6" />,
      star: <Star className="w-6 h-6" />,
      factory: <Factory className="w-6 h-6" />,
      truck: <Truck className="w-6 h-6" />,
      check: <Check className="w-6 h-6" />
    };
    return icons[iconName] || <Check className="w-6 h-6" />;
  };

  return (
    <div className={`min-h-screen bg-white ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ECO BAG</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#accueil" className="text-gray-700 hover:text-green-600 transition">{t.nav.home}</a>
              <a href="#produits" className="text-gray-700 hover:text-green-600 transition">{t.nav.products}</a>
              <a href="#clients" className="text-gray-700 hover:text-green-600 transition">{t.nav.clients}</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition">{t.nav.contact}</a>
              <button 
                onClick={() => setLang(lang === "fr" ? "ar" : "fr")}
                className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition"
              >
                {lang === "fr" ? "AR" : "FR"}
              </button>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-2">
              <a href="#accueil" className="block py-2 text-gray-700">{t.nav.home}</a>
              <a href="#produits" className="block py-2 text-gray-700">{t.nav.products}</a>
              <a href="#clients" className="block py-2 text-gray-700">{t.nav.clients}</a>
              <a href="#contact" className="block py-2 text-gray-700">{t.nav.contact}</a>
              <button 
                onClick={() => setLang(lang === "fr" ? "ar" : "fr")}
                className="w-full py-2 bg-green-100 text-green-700 rounded-lg"
              >
                {lang === "fr" ? "العربية" : "Français"}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
              <span>{t.hero.badge}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition inline-flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                {t.hero.cta1}
              </a>
              <a href="#produits" className="bg-white text-green-700 border-2 border-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition inline-flex items-center justify-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                {t.hero.cta2}
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-green-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.products.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.products.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.products.items.map((product, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="relative h-56 bg-gray-100 overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {product.tags.map((tag, j) => (
                      <span key={j} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <a href="#contact" className="inline-flex items-center gap-1 text-green-600 font-medium hover:gap-2 transition">
                    {lang === "fr" ? "Demander un devis" : "اطلب عرض سعر"} <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.clients.title}</h2>
            <p className="text-gray-600">{t.clients.subtitle}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {t.clients.brands.map((brand, i) => (
              <div key={i} className="bg-white px-8 py-4 rounded-xl shadow-sm font-semibold text-gray-700">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.why.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.why.features.map((feature, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-2xl hover:bg-green-50 transition">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white mb-4">
                  {getIcon(feature.icon)}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-green-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contact.title}</h2>
              <p className="text-green-100 text-xl mb-8">{t.contact.subtitle}</p>
              
              <div className="space-y-6">
                <a href={`tel:${t.contact.phone}`} className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-green-200">{lang === "fr" ? "Téléphone" : "الهاتف"}</div>
                    <div className="font-semibold">{t.contact.phone}</div>
                  </div>
                </a>
                
                <a href={`mailto:${t.contact.email}`} className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-green-200">Email</div>
                    <div className="font-semibold">{t.contact.email}</div>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-green-200">{lang === "fr" ? "Adresse" : "العنوان"}</div>
                    <div className="font-semibold">{t.contact.address}</div>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6">{lang === "fr" ? "Demande de devis" : "طلب عرض سعر"}</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder={t.contact.form.name}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
                <input 
                  type="text" 
                  placeholder={t.contact.form.company}
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input 
                  type="tel" 
                  placeholder={t.contact.form.phone}
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
                <input 
                  type="email" 
                  placeholder={t.contact.form.email}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <textarea 
                  placeholder={t.contact.form.message}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  required
                />
                <button 
                  type="submit"
                  className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  {t.contact.form.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold">ECO BAG</span>
            </div>
            <p className="text-gray-400 text-sm">{t.footer}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
