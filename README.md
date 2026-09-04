# 💼 Portfolio – Lassina Bakary Keïta

Bienvenue sur le dépôt de mon **portfolio personnel**.  
Ce projet présente mon profil, mes compétences techniques, mes projets et mes expériences en tant qu’étudiant en **Génie Logiciel & Intelligence Artificielle (ILIA)** à l'**ENSAF**.

---

## 🌐 Aperçu du projet

Ce portfolio a pour objectif de :
- Présenter mon profil professionnel et mes aspirations dans l'IA et le génie logiciel.
- Mettre en valeur mes **projets concrets** (web, mobile, algorithmes, logiciels).
- Détailler mes **compétences techniques** (langages, frameworks, outils).
- Exposer mon parcours académique à l'ENSAF et mes expériences.
- Faciliter la prise de contact via un formulaire interactif (intégré avec EmailJS et mailto).
- Offrir une expérience utilisateur fluide avec support natif du **Mode Sombre / Mode Clair**.

---

## 🛠️ Technologies utilisées

- **Core** : [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing** : [React Router v7](https://reactrouter.com/) (Single Page Application)
- **Styling** : CSS moderne modulaire avec variables de design system (inspiré de Framer)
- **Animations** : `react-type-animation`, CSS transitions et keyframes fluides
- **Icônes** : [Lucide React](https://lucide.dev/) + icônes vectorielles SVG personnalisées
- **Formulaire de contact** : [EmailJS](https://www.emailjs.com/) avec solution de secours mailto automatique
- **Hébergement & Déploiement** : [Vercel](https://vercel.com/) (avec configuration SPA `vercel.json`) & [GitHub](https://github.com/)

---

## 📂 Structure du projet

```bash
📁 Projet_Portfolio/
│
├── public/                     # Assets statiques distribués tels quels
│   ├── favicon.svg             # Favicon moderne LBK
│   └── images/                 # Photos de profil, projets et logos de compétences
│       ├── MaPhoto.jpeg
│       ├── PhotoProjet/
│       └── PhotoSkills/
│
├── src/
│   ├── components/
│   │   ├── layout/             # Layout global, Sidebar, TopBar
│   │   │   ├── Layout.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── TopBar.jsx
│   │   ├── sections/           # Pages et vues principales
│   │   │   ├── Overview.jsx        # Accueil / Aperçu & switcher Travail
│   │   │   ├── Projects.jsx        # Liste filtrable des projets
│   │   │   ├── ProjectDetail.jsx   # Vue détaillée d'un projet (/projets/:id)
│   │   │   ├── Skills.jsx          # Grille des compétences techniques
│   │   │   ├── Experience.jsx      # Frise chronologique des expériences
│   │   │   ├── Education.jsx       # Formation académique (ENSAF)
│   │   │   ├── Certifications.jsx   # Certifications obtenues
│   │   │   ├── About.jsx           # Présentation détaillée (/a-propos)
│   │   │   ├── Resume.jsx          # Visualisation et téléchargement du CV
│   │   │   ├── Privacy.jsx         # Politique de confidentialité
│   │   │   └── NotFound.jsx        # Page 404 élégante
│   │   └── ui/                 # Composants d'interface réutilisables
│   │       ├── ContactForm.jsx
│   │       ├── ProjectCard.jsx
│   │       ├── ThemeToggle.jsx
│   │       └── Icons.jsx
│   ├── data/
│   │   └── portfolio.js        # Données centralisées (projets, profil, compétences, etc.)
│   ├── hooks/
│   │   └── useTheme.js         # Gestion du thème clair / sombre (localStorage + prefers-color-scheme)
│   ├── index.css               # Design system complet et variables CSS
│   ├── App.jsx                 # Routeur et configuration de l'application
│   └── main.jsx                # Point d'entrée React
│
├── index.html                  # HTML principal avec balises meta SEO
├── vercel.json                 # Configuration des réécritures d'URL pour Vercel
├── vite.config.js              # Configuration de Vite
└── package.json                # Dépendances et scripts de build
```

---

## 📑 Pages et fonctionnalités

- **Aperçu (`/`)** : Hero avec animation de frappe, sélecteur profil / contact direct, projets en vedette.
- **Projets (`/projets`)** : Galerie avec filtres dynamiques par technologie.
- **Détail du projet (`/projets/:id`)** : Vue détaillée avec capture haute résolution, description complète, technologies, liens GitHub et live demo.
- **Compétences (`/competences`)** : Organisation par catégories (Langages, Web & Frameworks, Outils, IA/Data) avec infobulles explicatives au survol.
- **Expériences (`/experiences`)** : Timeline claire et structurée.
- **Formation (`/formation`)** : Détail du cycle d'ingénieur à l'ENSAF.
- **Certifications (`/certifications`)** : Espace dédié aux certifications et distinctions.
- **À propos (`/a-propos`)** : Biographie, faits marquants et perspectives professionnelles.
- **CV (`/cv`)** : Synthèse de profil avec option de téléchargement ou demande par email.
- **Confidentialité (`/confidentialite`)** : Engagements RGPD et respect des données personnelles.

---

## 🚀 Lancer le projet en local

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/LassinaBakaryKeita/Project-Portfolio.git
   cd Project-Portfolio
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```
   L'application s'ouvre sur `http://localhost:3000`.

4. **Tester le build de production** :
   ```bash
   npm run build
   npm run preview
   ```

---

## 🌐 Déploiement sur Vercel

Le projet est configuré pour un déploiement continu et automatique avec **Vercel** :

1. Connectez votre compte GitHub sur [Vercel](https://vercel.com/).
2. Cliquez sur **"Add New Project"** et importez `Project-Portfolio`.
3. Vercel détecte automatiquement la configuration Vite :
   - **Framework Preset** : `Vite`
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
4. *(Optionnel)* Si vous utilisez EmailJS, renseignez les variables d'environnement dans les paramètres Vercel :
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
5. Cliquez sur **Deploy**. Grâce au fichier [vercel.json](file:///c:/Ensa%20cours/Cycle%20Ingenieur/ILIA1/developpement%20web/Mes_Projets/Projet_Portfolio/vercel.json), toutes les routes directes (ex: `/projets`, `/a-propos`) fonctionnent immédiatement sans erreur 404.

---

## 📬 Me contacter

- **LinkedIn** : [Lassina Bakary Keïta](https://www.linkedin.com/in/lassina-bakary-ke%C3%AFta-b28626370/)
- **GitHub** : [LassinaBakaryKeita](https://github.com/LassinaBakaryKeita)
- **TikTok** : [@lassina.bakary.ke](https://www.tiktok.com/@lassina.bakary.ke)
- **Facebook** : [Lassina Bakary Keita](https://www.facebook.com/lassina.bakary.keita)
- **Email** : [lassinabakarykeita@gmail.com](mailto:lassinabakarykeita@gmail.com)

---

## 📄 Licence

Ce projet est à usage personnel et professionnel.  
© Lassina Bakary Keïta. Tous droits réservés.
