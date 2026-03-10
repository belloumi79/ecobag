"use client";

import { useState } from "react";
import Image from "next/image";
import { Leaf, ShoppingBag, MapPin, Phone, Mail, Check, Factory, Award, Globe, Recycle } from "lucide-react";

const translations = {
  fr: {
    nav: { home: "Accueil", about: "À propos", products: "Produits", contact: "Contact" },
    hero: {
      badge: "🇹🇳 Fabrication 100% Tunisienne",
      title: "L'éco-responsabilité en sac",
      subtitle: "Sacs et emballages écologiques personnalisables. Certifié par le Ministère de l'Environnement.",
      cta1: "Demander un devis",
      cta2: "Voir les produits"
    },
    products: {
      title: "Nos Produits",
      subtitle: "Des solutions écologiques pour tous vos besoins d'emballage"
    },
    why: {
      title: "Pourquoi nous choisir ?",
      subtitle: "Une expertise reconnue nationale et internationale",
      features: {
        eco: "100% Écologique",
        reusable: "Réutilisable +100 fois",
        custom: "Personnalisable",
        local: "Made in Tunisia"
      }
    },
    certificate: {
      badge: "Certification Officielle 2025",
      title: "Reconnu par l'État Tunisien",
      subtitle: "Lauréat du concours national de lutte contre la pollution plastique",
      recognition: "Reconnaissance officielle",
      recognitionText: "Certificat décerné par le Ministère de l'Environnement et la Banque Mondiale le 29 mai 2025.",
      theme: "Thème du concours",
      themeText: "Promouvoir l'économie circulaire pour renforcer la transition écologique et mettre fin à la pollution par le plastique."
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Obtenez votre devis personnalisé en 24h",
      address: { title: "Adresse" },
      phone: { title: "Téléphone" },
      email: { title: "Email" },
      cta: "Appeler maintenant",
      form: {
        name: "Votre nom",
        email: "Votre email",
        phone: "Votre téléphone",
        message: "Votre message",
        submit: "Envoyer la demande"
      }
    },
    footer: "© 2024 ECO BAG Tunisie. Tous droits réservés. Certifié Ministère de l'Environnement."
  },
  ar: {
    nav: { home: "الرئيسية", about: "من نحن", products: "المنتجات", contact: "اتصل بنا" },
    hero: {
      badge: "🇹🇳 صناعة 100% تونسية",
      title: "الأكياس الصديقة للبيئة",
      subtitle: "أكياس وعبوات قابلة لإعادة الاستخدام +100 مرة. معتمدة من وزارة البيئة.",
      cta1: "اطلب عرض سعر",
      cta2: "اكتشف المنتجات"
    },
    products: {
      title: "منتجاتنا",
      subtitle: "حلول صديقة للبيئة لجميع احتياجات التغليف الخاصة بك"
    },
    why: {
      title: "لماذا تختارنا؟",
      subtitle: "خبرة معترف بها وطنيا ودوليا",
      features: {
        eco: "100% صديق للبيئة",
        reusable: "قابل لإعادة الاستخدام +100 مرة",
        custom: "قابل للتخصيص",
        local: "صنع في تونس"
      }
    },
    certificate: {
      badge: "شهادة رسمية 2025",
      title: "معتمد من الدولة التونسية",
      subtitle: "فائز في المسابقة الوطنية لمكافحة تلوث البلاستيك",
      recognition: "اعتراف رسمي",
      recognitionText: "شهادة منحها وزير البيئة وممثل البنك الدولي في 29 مايو 2025.",
      theme: "موضوع المسابقة",
      themeText: "تعزيز الاقتصاد الدائري لتعزيز الانتقال البيئي ووضع حد لتلوث البلاستيك."
    },
    contact: {
      title: "اتصل بنا",
      subtitle: "احصل على عرض السعر المخصص في غضون 24 ساعة",
      address: { title: "العنوان" },
      phone: { title: "الهاتف" },
      email: { title: "البريد الإلكتروني" },
      cta: "اتصل الآن",
      form: {
        name: "اسمك",
        email: "بريدك الإلكتروني",
        phone: "هاتفك",
        message: "رسالتك",
        submit: "إرسال الطلب"
      }
    },
    footer: "© 2024 ECO BAG تونس. جميع الحقوق محفوظة. معتمد من وزارة البيئة."
  }
};

type Translation = typeof translations.fr;

const products = [
  {
    image: "/products/1763.jpg",
    name: { fr: "Sac Shopping Premium", ar: "حقيبة تسوق بريميوم" },
    desc: { fr: "Sac personnalisable pour pharmacies et boutiques", ar: "حقيبة قابلة للتخصيص للصيدليات والمتاجر" }
  },
  {
    image: "/products/1.jfif",
    name: { fr: "Housses Protection", ar: "أغطية حماية" },
    desc: { fr: "Housses sièges voiture et équipements", ar: "أغطية لمقاعد السيارات والمعدات" }
  },
  {
    image: "/products/ultrasonic-pizza-bag-nonwoven-pp-01-510x510.jpg",
    name: { fr: "Sacs Livraison Alimentaire", ar: "أكياس توصيل الطعام" },
    desc: { fr: "Sacs isothermes pour restaurants et livraison", ar: "أكياس حرارية للمطاعم والتوصيل" }
  },
  {
    image: "/products/sacs-a-semis-a-enterrer-lot-de-500.webp",
    name: { fr: "Sacs Agriculture", ar: "أكياس الزراعة" },
    desc: { fr: "Sacs de semis biodégradables", ar: "أكياس زرع قابلة للتحلل" }
  },
  {
    image: "/products/sac-total-1.webp",
    name: { fr: "Sac Publicitaire", ar: "حقيبة إعلانية" },
    desc: { fr: "Sac personnalisé avec logo entreprise", ar: "حقيبة مخصصة بشعار الشركة" }
  },
  {
    image: "/products/sac-uni-boxbag.webp",
    name: { fr: "Sac Écologique UNI", ar: "حقيبة بيئية UNI" },
    desc: { fr: "Sac réutilisable avec message environnemental", ar: "حقيبة قابلة لإعادة الاستخدام مع رسالة بيئية" }
  }
];

export default function Home() {
  const [lang, setLang] = useState<"fr" | "ar">("fr");
  const t = translations[lang];
  const isRTL = lang === "ar";

  return (
    <div className={`min-h-screen bg-white ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="ECO BAG Logo" width={40} height={40} className="rounded" />
              <span className="text-xl font-bold text-green-700">ECO BAG</span>
            </div>
            <div className="hidden md:flex gap-8">
              {Object.entries(t.nav).map(([key, label]) => (
                <a key={key} href={`#${key}`} className="text-gray-600 hover:text-green-600 transition">
                  {label}
                </a>
              ))}
            </div>
            <button
              onClick={() => setLang(lang === "fr" ? "ar" : "fr")}
              className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-200 transition"
            >
              {lang === "fr" ? "العربية" : "FR"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            {t.hero.badge}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0021694569302" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition">
              <Phone className="w-5 h-5" />
              {t.hero.cta1}
            </a>
            <a href="#products" className="inline-flex items-center gap-2 border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition">
              <ShoppingBag className="w-5 h-5" />
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <Certificate t={t} />

      {/* Products Section */}
      <Products t={t} lang={lang} />

      {/* Why Choose Us */}
      <WhyChooseUs t={t} />

      {/* Stats */}
      <Stats />

      {/* Contact */}
      <Contact t={t} />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="ECO BAG" width={32} height={32} className="rounded" />
              <span className="font-bold">ECO BAG Tunisie</span>
            </div>
            <p className="text-gray-400 text-sm">{t.footer}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Products({ t, lang }: { t: Translation; lang: "fr" | "ar" }) {
  return (
    <section id="products" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.products.title}</h2>
          <p className="text-gray-600">{t.products.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div key={i} className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
              <Image src={product.image} alt={product.name[lang]} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{product.name[lang]}</h3>
                <p className="text-gray-600 text-sm">{product.desc[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs({ t }: { t: Translation }) {
  const features = [
    { icon: Leaf, text: t.why.features.eco },
    { icon: ShoppingBag, text: t.why.features.reusable },
    { icon: Check, text: t.why.features.custom },
    { icon: Factory, text: t.why.features.local },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.why.title}</h2>
          <p className="text-gray-600">{t.why.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                <f.icon className="w-6 h-6" />
              </div>
              <p className="font-semibold">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certificate({ t }: { t: Translation }) {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Award className="w-4 h-4" />
            {t.certificate.badge}
          </div>
          <h2 className="text-3xl font-bold mb-4">{t.certificate.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.certificate.subtitle}</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <Image 
              src="/certificat-ministere.jpg" 
              alt="Certificat Ministère de l'Environnement" 
              width={600} 
              height={400}
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-sm">World Bank Partner</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-600" />
                {t.certificate.recognition}
              </h3>
              <p className="text-gray-600">{t.certificate.recognitionText}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Recycle className="w-5 h-5 text-blue-600" />
                {t.certificate.theme}
              </h3>
              <p className="text-gray-600 italic">&quot;{t.certificate.themeText}&quot;</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-lg">
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">Ministère de l&apos;Environnement</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-lg">
                <Globe className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">Banque Mondiale</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { number: "10+", label: "Années d'expérience" },
    { number: "50+", label: "Clients satisfaits" },
    { number: "1M+", label: "Sacs produits" },
    { number: "100%", label: "Personnalisable" },
  ];

  return (
    <div className="bg-green-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {items.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-green-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Contact({ t }: { t: Translation }) {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-gray-600">{t.contact.subtitle}</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold">{t.contact.address.title}</h4>
                <p className="text-gray-600">3 Rue Karama Montfleury Tunis</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold">{t.contact.phone.title}</h4>
                <p className="text-gray-600">00216 94 569 302</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold">{t.contact.email.title}</h4>
                <p className="text-gray-600">ecobagtunisie@gmail.com</p>
              </div>
            </div>

            <a href="tel:0021694569302" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              <Phone className="w-5 h-5" />
              {t.contact.cta}
            </a>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-2xl">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder={t.contact.form.name} className="w-full px-4 py-3 rounded-lg border border-gray-200" />
              <input type="email" placeholder={t.contact.form.email} className="w-full px-4 py-3 rounded-lg border border-gray-200" />
              <input type="tel" placeholder={t.contact.form.phone} className="w-full px-4 py-3 rounded-lg border border-gray-200" />
              <textarea placeholder={t.contact.form.message} rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200" />
              <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                {t.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
