import type { Metadata } from "next";
import { Leaf, ShoppingBag, MapPin, Phone, Mail, Check, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "ECO BAG Tunisie | Sacs et emballages écologiques",
  description: "Fabricant tunisien de sacs en tissu non-tissé et emballages écologiques. 100% écologique, réutilisable et personnalisable.",
  keywords: "sacs écologiques, emballages tunisie, tissu non-tissé, sacs réutilisables, ecobag",
  openGraph: {
    title: "ECO BAG Tunisie",
    description: "Sacs et emballages écologiques made in Tunisia",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-green-800">ECO BAG</h1>
              <p className="text-xs text-green-600">Tunisie</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#accueil" className="text-gray-600 hover:text-green-600 transition">Accueil</a>
            <a href="#apropos" className="text-gray-600 hover:text-green-600 transition">À propos</a>
            <a href="#produits" className="text-gray-600 hover:text-green-600 transition">Produits</a>
            <a href="#contact" className="text-gray-600 hover:text-green-600 transition">Contact</a>
          </nav>
          <a href="tel:+21694569302" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Appeler</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
            <Leaf className="w-4 h-4" />
            <span className="text-sm font-medium">100% Écologique</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            L&apos;éco-responsabilité
            <span className="text-green-600"> en sac</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Fabrication 100% Tunisienne de sacs et emballages en tissu non-tissé de haute qualité.
            La solution durable pour votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:ecobagtunisie@gmail.com" className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition font-semibold">
              Demander un devis
            </a>
            <a href="#produits" className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-xl hover:bg-green-50 transition font-semibold">
              Voir les produits
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-600">Écologique</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-green-600">∞</div>
              <div className="text-sm text-gray-600">Réutilisable</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-green-600">Custom</div>
              <div className="text-sm text-gray-600">Personnalisable</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-green-600">TN</div>
              <div className="text-sm text-gray-600">Made in Tunisie</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">À propos d&apos;ECO BAG</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre usine produit des sacs en tissu non-tissé et tous types d&apos;emballages écologiques pour les entreprises tunisiennes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-8 rounded-2xl">
              <Factory className="w-12 h-12 text-green-600 mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Production locale</h4>
              <p className="text-gray-600">
                Usine située à Montfleury, Tunis. Production artisanale avec des standards industriels de qualité.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl">
              <Leaf className="w-12 h-12 text-green-600 mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Engagement écologique</h4>
              <p className="text-gray-600">
                Matériaux durables, processus de fabrication responsable, emballages biodégradables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produits" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nos Produits</h3>
            <p className="text-gray-600">Solutions d&apos;emballage adaptées à vos besoins</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
              <div className="h-48 bg-green-100 flex items-center justify-center">
                <ShoppingBag className="w-20 h-20 text-green-600" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Sacs Cabas</h4>
                <p className="text-gray-600 mb-4">Grand format pour courses et événements. Personnalisable avec votre logo.</p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Plusieurs tailles disponibles</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Anses renforcées</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Impression personnalisée</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
              <div className="h-48 bg-green-100 flex items-center justify-center">
                <ShoppingBag className="w-16 h-16 text-green-600" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Pochettes</h4>
                <p className="text-gray-600 mb-4">Format moyen pour boutiques et cadeaux. Élégant et pratique.</p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Fermeture rabat</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Épaisseur 80-120g</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Couleurs variées</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
              <div className="h-48 bg-green-100 flex items-center justify-center">
                <ShoppingBag className="w-14 h-14 text-green-600" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Emballages</h4>
                <p className="text-gray-600 mb-4">Solutions sur mesure pour e-commerce et industrie.</p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Formats personnalisés</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Quantités flexibles</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Livraison rapide</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-green-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Pourquoi choisir ECO BAG ?</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Leaf, title: "Matériaux écologiques", desc: "Tissu non-tissé biodégradable et recyclable" },
              { icon: Check, title: "Haute qualité", desc: "Épaisseur et finitions professionnelles" },
              { icon: Factory, title: "Production locale", desc: "Made in Tunisia, circuits courts" },
              { icon: ShoppingBag, title: "Personnalisation", desc: "Votre logo, vos couleurs, votre format" },
              { icon: Phone, title: "Service client", desc: "Devis gratuit en 24h maximum" },
              { icon: Mail, title: "Commande facile", desc: "Par email ou téléphone, livraison incluse" },
            ].map((item, idx) => (
              <div key={idx} className="bg-green-700 p-6 rounded-xl">
                <item.icon className="w-8 h-8 mb-3" />
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-green-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Contactez-nous</h3>
            <p className="text-gray-600">Demandez votre devis gratuit dès maintenant</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Téléphone</p>
                    <a href="tel:+21694569302" className="text-lg font-semibold text-gray-900 hover:text-green-600">+216 94 569 302</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:ecobagtunisie@gmail.com" className="text-lg font-semibold text-gray-900 hover:text-green-600">ecobagtunisie@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Adresse</p>
                    <p className="text-lg font-semibold text-gray-900">3 Rue Karama, Montfleury, Tunis</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Horaires</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between"><span>Lundi - Vendredi</span><span>8h - 18h</span></div>
                    <div className="flex justify-between"><span>Samedi</span><span>9h - 13h</span></div>
                    <div className="flex justify-between"><span>Dimanche</span><span>Fermé</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">ECO BAG</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 ECO BAG Tunisie. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
