"use client";

import { useState } from "react";
import Image from "next/image";
import { Leaf, ShoppingBag, MapPin, Phone, Mail, Check, F
[truncated]
sName={`w-12 h-12 rounded-xl flex items-center jus
[truncated]
ded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <Image src={product.image} alt={product.name[lang]} width={400} height={300} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">{product.name[lang]}</h3>
              <p className="text-gray-600 text-sm">{product.desc[lang]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
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
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-4">{t.why.title}</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">{t.why.subtitle}</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div key={i} className="bg-green-50 p-6 rounded-xl text-center hover:bg-green-100 transition">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
              <f.icon className="w-6 h-6" />
            </div>
            <p className="font-semibold">{f.text}</p>
          </div>
        ))}
      </div>
    </div>
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
              <p className="text-gray-600 italic">"{t.certificate.themeText}"</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-lg">
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">Ministère de l'Environnement</span>
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
    <div className="bg-green-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <p className="text-gray-600">00216 94 569 302</p>
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
              <a 
                href="tel:0021694569302" 
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                <Phone className="w-5 h-5" />
                {t.contact.cta}
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-2xl">
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder={t.contact.form.name}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input 
                type="email" 
                placeholder={t.contact.form.email}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input 
                type="tel" 
                placeholder={t.contact.form.phone}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <textarea 
                placeholder={t.contact.form.message}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button 
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                {t.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
