"use client";

import { useState } from "react";
import Image from "next/image";
import { Leaf, ShoppingBag, MapPin, Phone, Mail, Check, Factory, Award, Globe, Recycle, ChevronDown, ArrowRight, Users, TrendingDown } from "lucide-react";

const translations = {
  fr: {
    nav: { home: "Accueil", about: "À propos", products: "Produits", contact: "Contact", carbon: "Empreinte Carbone" },
    hero: {
      badge: "🇹🇳 Certifié Ministère de l'Environnement",
      title: "L'éco-responsabilité en sac",
      subtitle: "Sacs et emballages écologiques en tissu non-tissé - Qualité premium personnalisable pour votre marque",
      cta1: "Demander un devis",
      cta2: "Découvrir nos produits"
    },
    about: {
      badge: "Notre mission",
      title: "Réduire l'empreinte carbone des entreprises tunisiennes",
      para1: "ECO BAG Tunisie s'inscrit dans la stratégie nationale de transition écologique et la lutte contre la pollution plastique. Notre mission : offrir des alternatives durables aux emballages jetables.",
      para2: "Dans le cadre du décret n°32 du 16 janvier 2020 interdisant les sacs plastiques à usage unique, nous accompagnons les entreprises dans leur transformation écologique avec des solutions mesurables.",
      para3: "Chaque sac réutilisable ECO BAG remplace jusqu'à 500 sacs plastiques jetables sur sa durée de vie, réduisant significativement les émissions de CO₂ liées à la production et au transport.",
      stats: {
        co2: "-80%",
        co2Label: "Émissions CO₂ vs sacs plastiques",
        reutilisations: "100+",
        reutilisationsLabel: "Réutilisations par sac",
        dechet: "0",
        dechetLabel: "Déchet plastique évité"
      }
    },
    products: {
      title: "Nos Produits Écologiques",
      subtitle: "Des solutions durables certifiées pour chaque secteur d'activité",
      items: [
        { name: "Sacs Shopping", desc: "Personnalisable avec logo, poignées renforcées", image: "/products/sac-uni-boxbag.webp" },
        { name: "Sacs Pharmacie", desc: "Conforme normes santé, biodégradable", image: "/products/11224478_1719558774787792_8074364517910597348_n.jpg" },
        { name: "Sacs Livraison", desc: "Isotherme pour restaurant, lavable", image: "/products/ultrasonic-pizza-bag-nonwoven-pp-01-510x510.jpg" },
        { name: "Housses Protection", desc: "Auto, sièges, réutilisable", image: "/products/1.jfif" },
        { name: "Sacs Agriculture", desc: "Plantes, semis, biodégradable", image: "/products/sacs-a-semis-a-enterrer-lot-de-500.webp" },
        { name: "Emballage Premium", desc: "Boîte-cadeau, luxe, durable", image: "/products/1763.jpg" }
      ],
      cta: "Personnaliser votre commande"
    },
    certificate: {
      badge: "Certification Officielle 2025",
      title: "Reconnue par le Ministère de l'Environnement",
      subtitle: "Certificat de participation au concours national pour la lutte contre la pollution plastique",
      recognition: "Reconnaissance Nationale",
      recognitionText: "ECO BAG a été sélectionnée parmi les meilleures initiatives de promotion de l'économie circulaire en Tunisie, dans le cadre du programme \"Littoral Sans Plastique\" soutenu par la Banque Mondiale.",
      theme: "Thème du concours",
      themeText: "Promouvoir l'économie circulaire pour renforcer la transition écologique et mettre fin à la pollution par le plastique"
    },
    carbon: {
      badge: "Impact Environnemental Mesurable",
      title: "Réduction concrète de l'empreinte carbone",
      subtitle: "Chaque sac ECO BAG contribue activement aux objectifs de développement durable de la Tunisie",
      impact1: { title: "Économie carbone", value: "-80%", desc: "Moins d'émissions CO₂ vs production sacs plastiques" },
      impact2: { title: "Zéro déchet", value: "100%", desc: "Biodégradable à la fin de vie" },
      impact3: { title: "Consommation", value: "-70%", desc: "Moins d'énergie sur le cycle de vie complet" },
      context: "Contexte Stratégique Tunisien",
      contextText: "La Tunisie s'est engagée dans une trajectoire de décarbonation avec l'interdiction des sacs plastiques (Décret 2020-32). ECO BAG accompagne cette transition avec des solutions locales produites à Tunis.",
      cta: "Calculer votre économie carbone"
    },
    why: {
      title: "Pourquoi choisir ECO BAG ?",
      subtitle: "Des emballages durables qui reflètent vos valeurs environnementales",
      features: {
        eco: "100% Écologique",
        reusable: "Réutilisable 100+ fois",
        custom: "Personnalisable complet",
        local: "Made in Tunisia 🇹🇳"
      }
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Discutons de votre projet d'emballage écologique",
      address: { title: "Adresse" },
      phone: { title: "Téléphone" },
      email: { title: "Email" },
      cta: "Appeler maintenant",
      form: {
        name: "Votre nom",
        email: "Votre email",
        phone: "Votre téléphone",
        message: "Votre message...",
        submit: "Envoyer la demande"
      }
    },
    footer: "© 2025 ECO BAG Tunisie - Sacs écologiques certifiés Ministère de l'Environnement"
  },
  ar: {
    nav: { home: "الرئيسية", about: "من نحن", products: "منتجاتنا", contact: "اتصل بنا", carbon: "البصمة الكربونية" },
    hero: {
      badge: "🇹🇳 معتمد من وزارة البيئة",
      title: "الاستدامة في كل كيس",
      subtitle: "أكياس ومواد تغليف صديقة للبيئة من القماش غير المنسوج - جودة ممتازة قابلة للتخصيص",
      cta1: "اطلب عرض سعر",
      cta2: "اكتشف منتجاتنا"
    },
    about: {
      badge: "مهمتنا",
      title: "تقليل البصمة الكربونية للشركات التونسية",
      para1: "تندرج ECO BAG تونس في إطار الاستراتيجية الوطنية للانتقال البيئي والمكافحة ضد تلوث البلاستيك. مهمتنا: تقديم بدائل مستدامة للتغليف ذي الاستخدام الواحد.",
      para2: "في إطار المرسوم رقم 32 المؤرخ في 16 جانفي 2020 القاضي بحظر الأكياس البلاستيكية ذات الاستخدام الواحد، نرافق الشركات في تحولها البيئي مع حلول قابلة للقياس.",
      para3: "كل كيس قابل لإعادة الاستخدام من ECO BAG يستبدل ما يصل إلى 500 كيس بلاستيكي على مدى عمره الافتراضي، مما يقلل بشكل كبير من انبعاثات ثاني أكسيد الكربون المرتبطة بالإنتاج والنقل.",
      stats: {
        co2: "-80%",
        co2Label: "انبعاثات CO₂ مقارنة بالأكياس البلاستيكية",
        reutilisations: "100+",
        reutilisationsLabel: "مرة استخدام لكل كيس",
        dechet: "0",
        dechetLabel: "نفايات بلاستيكية مُتجنبة"
      }
    },
    products: {
      title: "منتجاتنا الصديقة للبيئة",
      subtitle: "حلول مستدامة معتمدة لكل قطاع نشاط",
      items: [
        { name: "أكياس التسوق", desc: "قابلة للتخصيص مع الشعار، مقابض معززة", image: "/products/sac-uni-boxbag.webp" },
        { name: "أكياس الصيدلية", desc: "مطابقة لمعايير الصحة، قابلة للتحلل البيولوجي", image: "/products/11224478_1719558774787792_8074364517910597348_n.jpg" },
        { name: "أكياس التوصيل", desc: "معزولة حرارياً للمطاعم، قابلة للغسيل", image: "/products/ultrasonic-pizza-bag-nonwoven-pp-01-510x510.jpg" },
        { name: "أغطية الحماية", desc: "للسيارات والمقاعد، قابلة لإعادة الاستخدام", image: "/products/1.jfif" },
        { name: "أكياس الزراعة", desc: "للنباتات والشتلات، قابلة للتحلل البيولوجي", image: "/products/sacs-a-semis-a-enterrer-lot-de-500.webp" },
        { name: "تغليف فاخر", desc: "صناديق هدايا، فاخرة، دائمة", image: "/products/1763.jpg" }
      ],
      cta: "تخصيص طلبك"
    },
    certificate: {
      badge: "شهادة رسمية 2025",
      title: "معترف بها من وزارة البيئة",
      subtitle: "شهادة مشاركة في المسابقة الوطنية لمكافحة تلوث البلاستيك",
      recognition: "اعتراف وطني",
      recognitionText: "تم اختيار ECO BAG من بين أفضل المبادرات لتعزيز الاقتصاد الدائري في تونس، في إطار برنامج \"الساحل بدون بلاستيك\" بدعم من البنك الدولي.",
      theme: "موضوع المسابقة",
      themeText: "تعزيز الاقتصاد الدائري لتقوية الانتقال البيئي ووضع حد لتلوث البلاستيك"
    },
    carbon: {
      badge: "تأثير بيئي قابل للقياس",
      title: "تخفيض ملموس للبصمة الكربونية",
      subtitle: "كل كيس من ECO BAG يسهم بشكل فعال في أهداف التنمية المستدامة لتونس",
      impact1: { title: "توفير الكربون", value: "-80%", desc: "انبعاثات CO₂ أقل مقارنة بإنتاج الأكياس البلاستيكية" },
      impact2: { title: "صفر نفايات", value: "100%", desc: "قابل للتحلل البيولوجي في نهاية العمر الافتراضي" },
      impact3: { title: "استهلاك", value: "-70%", desc: "طاقة أقل على دورة الحياة الكاملة" },
      context: "السياق الاستراتيجي التونسي",
      contextText: "التزمت تونس بمسار إزالة الكربون مع حظر الأكياس البلاستيكية (المرسوم 2020-32). ECO BAG ترافق هذا التحول مع حلول محلية تُنتج في تونس.",
      cta: "احسب توفير الكربون الخاص بك"
    },
    why: {
      title: "لماذا تختار ECO BAG؟",
      subtitle: "مواد تغليف دائمة تعكس قيمك البيئية",
      features: {
        eco: "100% صديق للبيئة",
        reusable: "قابل لإعادة الاستخدام 100+ مرة",
        custom: "قابل للتخصيص بالكامل",
        local: "صنع في تونس 🇹🇳"
      }
    },
    contact: {
      title: "اتصل بنا",
      subtitle: "لنناقش مشروع التغليف البيئي الخاص بك",
      address: { title: "العنوان" },
      phone: { title: "الهاتف" },
      email: { title: "البريد" },
      cta: "اتصل الآن",
      form: {
        name: "اسمك",
        email: "بريدك الإلكتروني",
        phone: "هاتفك",
        message: "رسالتك...",
        submit: "إرسال الطلب"
      }
    },
    footer: "© 2025 ECO BAG تونس - أكياس صديقة للبيئة معتمدة من وزارة البيئة"
  },
  en: {
    nav: { home: "Home", about: "About", products: "Products", contact: "Contact", carbon: "Carbon Footprint" },
    hero: {
      badge: "🇹🇳 Certified by Ministry of Environment",
      title: "Eco-responsibility in a bag",
      subtitle: "Eco-friendly bags and packaging in non-woven fabric - Premium quality customizable for your brand",
      cta1: "Request a quote",
      cta2: "Discover our products"
    },
    about: {
      badge: "Our mission",
      title: "Reducing the carbon footprint of Tunisian companies",
      para1: "ECO BAG Tunisia is part of the national strategy for ecological transition and the fight against plastic pollution. Our mission: to offer sustainable alternatives to single-use packaging.",
      para2: "Within the framework of Decree No. 32 of January 16, 2020 prohibiting single-use plastic bags, we accompany companies in their ecological transformation with measurable solutions.",
      para3: "Each reusable ECO BAG replaces up to 500 single-use plastic bags over its lifetime, significantly reducing CO₂ emissions related to production and transport.",
      stats: {
        co2: "-80%",
        co2Label: "CO₂ emissions vs plastic bags",
        reutilisations: "100+",
        reutilisationsLabel: "Reuses per bag",
        dechet: "0",
        dechetLabel: "Plastic waste avoided"
      }
    },
    products: {
      title: "Our Eco-friendly Products",
      subtitle: "Sustainable solutions for each sector of activity",
      items: [
        { name: "Shopping Bags", desc: "Customizable with logo, reinforced handles", image: "/products/sac-uni-boxbag.webp" },
        { name: "Pharmacy Bags", desc: "Conform to health standards, biodegradable", image: "/products/11224478_1719558774787792_8074364517910597348_n.jpg" },
        { name: "Delivery Bags", desc: "Insulated for restaurants, washable", image: "/products/ultrasonic-pizza-bag-nonwoven-pp-01-510x510.jpg" },
        { name: "Protection Covers", desc: "For cars, seats, reusable", image: "/products/1.jfif" },
        { name: "Agricultural Bags", desc: "Plants, seeds, biodegradable", image: "/products/sacs-a-semis-a-enterrer-lot-de-500.webp" },
        { name: "Premium Packaging", desc: "Gift box, luxury, durable", image: "/products/1763.jpg" }
      ],
      cta: "Customize your order"
    },
    certificate: {
      badge: "Official Certification 2025",
      title: "Recognized by the Ministry of Environment",
      subtitle: "Certificate of participation in the national competition for the fight against plastic pollution",
      recognition: "National Recognition",
      recognitionText: "ECO BAG was selected among the best initiatives for promoting circular economy in Tunisia, within the \"Littoral Sans Plastique\" program supported by the World Bank.",
      theme: "Competition Theme",
      themeText: "Promote circular economy to strengthen the ecological transition and put an end to plastic pollution"
    },
    carbon: {
      badge: "Measurable Environmental Impact",
      title: "Concrete reduction of carbon footprint",
      subtitle: "Each ECO BAG contributes actively to Tunisia's sustainable development goals",
      impact1: { title: "Carbon Economy", value: "-80%", desc: "Less CO₂ emissions vs plastic bag production" },
      impact2: { title: "Zero Waste", value: "100%", desc: "Biodegradable at end of life" },
      impact3: { title: "Consumption", value: "-70%", desc: "Less energy over the complete lifecycle" },
      context: "Strategic Tunisian Context",
      contextText: "Tunisia has committed to a decarbonization path with the ban on plastic bags (Decree 2020-32). ECO BAG accompanies this transition with locally produced solutions in Tunisia.",
      cta: "Calculate your carbon savings"
    },
    why: {
      title: "Why choose ECO BAG?",
      subtitle: "Eco-friendly packaging that reflects your environmental values",
      features: {
        eco: "100% Eco-friendly",
        reusable: "Reusable 100+ times",
        custom: "Complete customization",
        local: "Made in Tunisia 🇹🇳"
      }
    },
    contact: {
      title: "Contact us",
      subtitle: "Let's discuss your eco-packaging project",
      address: { title: "Address" },
      phone: { title: "Phone" },
      email: { title: "Email" },
      cta: "Call now",
      form: {
        name: "Your name",
        email: "Your email",
        phone: "Your phone",
        message: "Your message...",
        submit: "Send the request"
      }
    },
    footer: "© 2025 ECO BAG Tunisia - Eco-friendly bags certified by the Ministry of Environment"
  }
};

type Translation = typeof translations.fr;

export default function Home() {
  const [lang, setLang] = useState<"fr" | "ar" | "en">("fr");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white" dir={lang === "ar" ? "rtl" : "ltr"}>
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="ECO BAG" width={40} height={40} className="rounded-lg" />
              <span className="font-bold text-xl">ECO BAG</span>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-600 hover:text-green-600 transition font-medium">{t.nav.home}</button>
              <button onClick={() => scrollToSection('a-propos')} className="text-gray-600 hover:text-green-600 transition font-medium">{t.nav.about}</button>
              <button onClick={() => scrollToSection('produits')} className="text-gray-600 hover:text-green-600 transition font-medium">{t.nav.products}</button>
              <button onClick={() => scrollToSection('empreinte')} className="text-gray-600 hover:text-green-600 transition font-medium">{t.nav.carbon}</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-green-600 transition font-medium">{t.nav.contact}</button>
            </nav>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                {lang !== "fr" && (
                  <button onClick={() => setLang("fr")} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-200 transition">FR</button>
                )}
                {lang !== "ar" && (
                  <button onClick={() => setLang("ar")} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-200 transition">AR</button>
                )}
                {lang !== "en" && (
                  <button onClick={() => setLang("en")} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-200 transition">EN</button>
                )}
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {lang === "fr" ? "🇫🇷 FR" : lang === "ar" ? "🇹🇳 AR" : "🇬🇧 EN"}
                </span>
              </div>
              
              {/* Mobile menu button */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
                <ChevronDown className={`w-6 h-6 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white border-t px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('accueil')} className="block w-full text-left text-gray-600 hover:text-green-600 py-2">{t.nav.home}</button>
            <button onClick={() => scrollToSection('a-propos')} className="block w-full text-left text-gray-600 hover:text-green-600 py-2">{t.nav.about}</button>
            <button onClick={() => scrollToSection('produits')} className="block w-full text-left text-gray-600 hover:text-green-600 py-2">{t.nav.products}</button>
            <button onClick={() => scrollToSection('empreinte')} className="block w-full text-left text-gray-600 hover:text-green-600 py-2">{t.nav.carbon}</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-600 hover:text-green-600 py-2">{t.nav.contact}</button>
          </nav>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="accueil" className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={lang === "ar" ? "text-right" : ""}>
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-semibold text-green-700 shadow-sm mb-6">
                  <Award className="w-4 h-4" />
                  {t.hero.badge}
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  {t.hero.title}
                </h1>
                <p className="text-xl text-gray-600 mb-8">{t.hero.subtitle}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    {t.hero.cta1}
                  </a>
                  <button onClick={() => scrollToSection('produits')} className="bg-white text-green-700 border-2 border-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition flex items-center justify-center gap-2">
                    <ArrowRight className="w-5 h-5" />
                    {t.hero.cta2}
                  </button>
                </div>
              </div>
              <div className="relative">
                <Image src="/products/1763.jpg" alt="ECO BAG Products" width={600} height={500} className="rounded-2xl shadow-2xl" />
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">-80%</div>
                    <span className="text-sm font-medium">CO₂ vs plastique</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AboutSection t={t} lang={lang} />
        <CarbonSection t={t} lang={lang} />
        <Certificate t={t} />
        <ProductsSection t={t} lang={lang} />
        <WhyChooseUs t={t} />
        <Contact t={t} lang={lang} />
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="ECO BAG" width={32} height={32} className="rounded" />
              <span className="font-bold">ECO BAG</span>
            </div>
            <p className="text-gray-400 text-sm">{t.footer}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AboutSection({ t, lang }: { t: Translation; lang: "fr" | "ar" | "en" }) {
  return (
    <section id="a-propos" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <TrendingDown className="w-4 h-4" />
            {t.about.badge}
          </div>
          <h2 className="text-3xl font-bold mb-4">{t.about.title}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={lang === "ar" ? "text-right order-2" : "order-1"}>
            <p className="text-gray-600 mb-4 leading-relaxed">{t.about.para1}</p>
            <p className="text-gray-600 mb-4 leading-relaxed">{t.about.para2}</p>
            <p className="text-gray-600 mb-6 leading-relaxed">{t.about.para3}</p>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="font-bold text-green-800 mb-4">{lang === "fr" ? "Impact mesurable" : "تأثير قابل للقياس"}</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{t.about.stats.co2}</div>
                  <div className="text-xs text-gray-600">{t.about.stats.co2Label}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{t.about.stats.reutilisations}</div>
                  <div className="text-xs text-gray-600">{t.about.stats.reutilisationsLabel}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{t.about.stats.dechet}</div>
                  <div className="text-xs text-gray-600">{t.about.stats.dechetLabel}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={lang === "ar" ? "order-1" : "order-2"}>
            <Image src="/products/Add-a-heading-37-min-1-1024x536-1.webp" alt="ECO BAG Manufacturing" width={600} height={400} className="rounded-2xl shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CarbonSection({ t, lang }: { t: Translation; lang: "fr" | "ar" | "en" }) {
  return (
    <section id="empreinte" className="py-16 bg-gradient-to-br from-green-900 to-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Leaf className="w-4 h-4" />
            {t.carbon.badge}
          </div>
          <h2 className="text-3xl font-bold mb-4">{t.carbon.title}</h2>
          <p className="text-green-100 max-w-2xl mx-auto">{t.carbon.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center">
            <div className="text-4xl font-bold mb-2">{t.carbon.impact1.value}</div>
            <div className="font-semibold mb-1">{t.carbon.impact1.title}</div>
            <div className="text-sm text-green-200">{t.carbon.impact1.desc}</div>
          </div>
          <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center">
            <div className="text-4xl font-bold mb-2">{t.carbon.impact2.value}</div>
            <div className="font-semibold mb-1">{t.carbon.impact2.title}</div>
            <div className="text-sm text-green-200">{t.carbon.impact2.desc}</div>
          </div>
          <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center">
            <div className="text-4xl font-bold mb-2">{t.carbon.impact3.value}</div>
            <div className="font-semibold mb-1">{t.carbon.impact3.title}</div>
            <div className="text-sm text-green-200">{t.carbon.impact3.desc}</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-xl p-8">
          <div className="flex items-start gap-4">
            <Globe className="w-8 h-8 flex-shrink-0" />
            <div className={lang === "ar" ? "text-right" : ""}>
              <h3 className="font-bold text-xl mb-2">{t.carbon.context}</h3>
              <p className="text-green-100 mb-4">{t.carbon.contextText}</p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Décret 2020-32</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Banque Mondiale</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Ministère Environnement</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Made in Tunisia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Certificate({ t }: { t: Translation }) {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <Image src="/certificat-ministere.jpg" alt="Certificat Ministère" width={600} height={400} className="rounded-xl shadow-2xl" />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-sm">World Bank</span>
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
              <p className="text-gray-600 italic">&ldquo;{t.certificate.themeText}&rdquo;</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-lg">
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">Ministère Environnement</span>
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

function ProductsSection({ t, lang }: { t: Translation; lang: "fr" | "ar" | "en" }) {
  return (
    <section id="produits" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.products.title}</h2>
          <p className="text-gray-600">{t.products.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.products.items.map((product, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition border border-gray-100">
              <Image src={product.image} alt={product.name} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition">
            <ShoppingBag className="w-5 h-5" />
            {t.products.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs({ t }: { t: Translation }) {
  const features = [
    { icon: Leaf, text: t.why.features.eco },
    { icon: Recycle, text: t.why.features.reusable },
    { icon: Check, text: t.why.features.custom },
    { icon: Factory, text: t.why.features.local },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">{t.why.title}</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">{t.why.subtitle}</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-xl text-center hover:bg-green-50 transition shadow-sm">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                <f.icon className="w-6 h-6" />
              </div>
              <p className="font-semibold">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Contact({ t, lang }: { t: Translation; lang: "fr" | "ar" | "en" }) {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-gray-600">{t.contact.subtitle}</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold">{t.contact.address.title}</h4>
                <p className="text-gray-600">3 Rue Karama Montfleury Tunis</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold">{t.contact.phone.title}</h4>
                <p className="text-gray-600"><span dir="ltr">00216 94 569 302</span></p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold">{t.contact.email.title}</h4>
                <p className="text-gray-600">ecobagtunisie@gmail.com</p>
              </div>
            </div>

            <div className="pt-4">
              <a href="tel:0021694569302" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                <Phone className="w-5 h-5" />
                {t.contact.cta}
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-2xl">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder={t.contact.form.name} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600" />
              <input type="email" placeholder={t.contact.form.email} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600" />
              <input type="tel" placeholder={t.contact.form.phone} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600" />
              <textarea placeholder={t.contact.form.message} rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"></textarea>
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
