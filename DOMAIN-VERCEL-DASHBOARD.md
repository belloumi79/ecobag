# 🚀 CONFIGURATION DOMAINE VIA DASHBOARD VERCEL
## ecobagtn.tn → Simple & Rapide

---

## ✅ MÉTHODE : Interface Vercel (Recommandée)

### Étape 1 : Acheter le domaine chez OVH
- Allez sur https://www.ovhcloud.com/fr-tn/domains/
- Recherchez **ecobagtn.tn**
- Créez compte + paiement (~40 DT/an)

### Étape 2 : Ajouter dans Dashboard Vercel
1. Connectez-vous : https://vercel.com/dashboard
2. Cliquez sur votre projet **ecobag-next**
3. Allez dans **Settings** → **Domains**
4. Bouton **Add Domain**
5. Saisissez : `ecobagtn.tn`
6. Cliquez **Add**

### Étape 3 : Configurer DNS chez OVH (automatique !)
Vercel vous montre exactement quoi copier :

```
Type: A
Name: @
Value: [IP affichée par Vercel]

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

1. Copiez ces valeurs
2. Allez dans Manager OVH → Domaines → ecobagtn.tn → DNS
3. Ajoutez les 2 entrées
4. Retournez sur Vercel et cliquez **Validate**

### Étape 4 : HTTPS automatique
- Vercel génère le certificat SSL Let's Encrypt **automatiquement**
- Pas d'action nécessaire de votre part

---

## ⚡ AVANTAGES Dashboard Vercel

| Fonction | Dashboard Vercel | Config Manuelle |
|----------|------------------|-----------------|
 **Temps** | 5 min | 30 min |
**SSL** | Auto | Manuel |
**Renewal** | Auto | À surveiller |
**Redirect www** | 1 clic | DNS + Code |
**Stats** | Dashboard intégré | Externe |

---

## 📸 CAPTURES D'ÉCRAN

### 1. Settings → Domains
```
[Settings] → [Domains] → [Add Domain]
```

### 2. Entrer le domaine
```
Domain: ecobagtn.tn
Redirect: www.ecobagtn.tn → ecobagtn.tn (cocher)
```

### 3. Records DNS fournis par Vercel
Vercel affiche :
```
📝 Copier dans votre registrar :

A Record:
  Name: @
  Value: 76.76.21.21

CNAME Record:
  Name: www
  Value: cname.vercel-dns.com
```

### 4. Validation
Après ajout DNS chez OVH :
```
[Validate] → Status: ✅ Valid
```

---

## 🎯 CHECKLIST VERCEL

- [ ] Domaine ecobagtn.tn acheté chez OVH
- [ ] Domaine ajouté dans Settings → Domains
- [ ] DNS records copiés dans Manager OVH
- [ ] Bouton "Validate" cliqué
- [ ] Statut affiche "Valid" (vert)
- [ ] HTTPS testé : https://ecobagtn.tn

---

## 🛟 SI ÇA NE MARCHE PAS

Dans Vercel → **Domains** → **Verify** :
- Attendez 5-30 minutes
- Clear cache DNS local
- Vérifier avec https://dnschecker.org/

---

## 🎉 GO-LIVE !
Une fois "Valid", votre site est accessible sur :
- ✅ https://ecobagtn.tn
- ✅ https://www.ecobagtn.tn (redirige vers sans-www)

---

*Version courte : Acheter → Ajouter dans Vercel → Copier DNS chez OVH → Valider → ✅*
