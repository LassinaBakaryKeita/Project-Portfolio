// =============================================
// PORTFOLIO DATA — LASSINA BAKARY KEÏTA
// Modifiez ce fichier pour mettre à jour le contenu
// =============================================

export const profile = {
  name: "Lassina Bakary Keïta",
  firstName: "Lassina",
  title: "Étudiant en Génie Logiciel & Intelligence Artificielle",
  school: "ENSAF",
  schoolUrl: "https://ensaf.ac.ma/?controller=pages&action=home",
  email: "lassinabakarykeita@gmail.com",
  photo: "/images/MaPhoto.jpeg",
  bio: `Passionné par le monde du développement logiciel, je m'intéresse particulièrement au développement web, mobile et logiciel.
Je suis également très intéressé par l'Intelligence Artificielle et la Data Science, des domaines qui me motivent à apprendre chaque jour et à relever de nouveaux défis.
Actuellement étudiant en première année du cycle ingénieur (ILIA1) à l'École Nationale des Sciences Appliquées de Fès (ENSAF), je cherche à combiner mes compétences techniques avec ma curiosité intellectuelle pour créer des solutions innovantes.`,
  typedStrings: [
    "Génie Logiciel & IA à l'ENSAF",
    "Développeur Web & Mobile",
    "Passionné d'Intelligence Artificielle",
    "Étudiant en Data Science",
    "Futur Ingénieur IA"
  ],
  cvUrl: null, // Ajoutez le chemin vers votre CV PDF ici, ex: "/cv/CV_Lassina_Bakary_Keita.pdf"
};

export const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/LassinaBakaryKeita",
    icon: "github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/lassina-bakary-ke%C3%AFta-b28626370/",
    icon: "linkedin",
  },
  {
    id: "tiktok",
    label: "TikTok",
    url: "https://www.tiktok.com/@lassina.bakary.ke",
    icon: "tiktok",
  },
  {
    id: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/lassina.bakary.keita",
    icon: "facebook",
  },
];

export const projects = [
  {
    id: "robbie-lens-photography",
    title: "Site Web Robbie Lens Photography",
    shortDesc: "Site web de photographe professionnel présentant ses services, projets récents et portfolio.",
    description: `Ce site web de photographe professionnel, conçu en HTML5 et CSS3, présente ses services, ses projets récents et son portfolio.
Il offre une navigation intuitive, des galeries d'images élégantes et une présentation soignée du travail photographique.
C'est l'un de mes premiers projets web qui m'a permis d'acquérir des bases solides en structuration HTML et mise en page CSS.`,
    image: "/images/PhotoProjet/RobbieLensPhotography.png",
    technologies: ["HTML5", "CSS3"],
    liveUrl: "https://lassinabakarykeita.github.io/My-first-learning-project/",
    githubUrl: null,
    featured: false,
  },
  {
    id: "calculatrice-web",
    title: "La Calculatrice de Lassina",
    shortDesc: "Calculatrice web simple mais puissante avec interface interactive et réactive.",
    description: `Il s'agit d'une calculatrice simple mais puissante, construite avec HTML5, CSS3 et JavaScript, offrant une interface interactive et réactive.
Elle supporte les opérations arithmétiques de base (addition, soustraction, multiplication, division) ainsi qu'une gestion des erreurs robuste.
Ce projet m'a permis de maîtriser la manipulation du DOM et la gestion des événements en JavaScript.`,
    image: "/images/PhotoProjet/Calculatrice.png",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://lassinabakarykeita.github.io/Project-Calculator/",
    githubUrl: null,
    featured: false,
  },
  {
    id: "ilia-site",
    title: "Site Web de la Filière ILIA",
    shortDesc: "Projet collaboratif de présentation de la communauté ILIA et facilitation du partage de connaissances.",
    description: `Il s'agit d'un projet de collaboration basé sur une présentation de la communauté ILIA et la facilitation du partage de connaissances.
Ce site web a été développé en équipe pour présenter notre filière à l'ENSAF, ses membres, ses projets et ses actualités.
Ce projet m'a appris la collaboration en équipe, la gestion de versions avec Git et le travail sur une codebase partagée.`,
    image: "/images/PhotoProjet/iliasite.png",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://farahcrafts.github.io/Ilia-site/",
    githubUrl: null,
    featured: false,
  },
  {
    id: "azertype",
    title: "AzerType — Jeu de Dactylographie",
    shortDesc: "Application interactive pour s'entraîner à taper plus vite au clavier.",
    description: `AzerType est une application interactive conçue avec HTML5, CSS3 et JavaScript, permettant de s'entraîner à taper plus vite au clavier.
Elle propose différents modes d'entraînement, un chronomètre, un compteur de mots par minute et un score de précision.
Ce projet m'a permis d'approfondir mes connaissances en JavaScript, notamment la gestion des événements clavier et la manipulation du DOM.`,
    image: "/images/PhotoProjet/Azertype.png",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://lassinabakarykeita.github.io/Projet_Apprentissage_De_JavaScript/",
    githubUrl: null,
    featured: false,
  },
  {
    id: "reseau-social-c",
    title: "Simulation d'un Réseau Social (C)",
    shortDesc: "Simulation d'un réseau social en C axé sur l'implémentation de structures de données.",
    description: `Projet de simulation d'un réseau social en C axé sur l'implémentation et l'interconnexion des structures de données.
Ce projet implémente des fonctionnalités comme l'ajout d'amis, la recherche d'utilisateurs, les suggestions de connexions et la gestion de profils.
Il m'a permis de maîtriser les concepts avancés du langage C : pointeurs, listes chaînées, arbres, graphes et gestion dynamique de la mémoire.`,
    image: "/images/PhotoProjet/ReseauSocial.jpg",
    technologies: ["C", "Structures de données", "Algorithmes"],
    liveUrl: "https://youtu.be/IIDaGb9QXGk",
    githubUrl: null,
    featured: false,
  },
  {
    id: "organic-food-store",
    title: "Organic Food Store",
    shortDesc: "Site e-commerce moderne et responsive pour une boutique de produits alimentaires biologiques.",
    description: `Organic Food Store est un site web responsive moderne pour une boutique de produits alimentaires 100% biologiques.
Il présente les produits de manière élégante, avec un catalogue complet, des fiches produit détaillées et un design soigné.
Ce projet m'a permis de progresser en design web responsive et d'utiliser des techniques CSS avancées pour créer une interface attrayante.`,
    image: "/images/PhotoProjet/ecommerceAlimentaire.png",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://lassinabakarykeita.github.io/Projet_Site_E-Commerce_Alimentaire/",
    githubUrl: null,
    featured: false,
  },
  {
    id: "lassina-qualisol",
    title: "LassinaQualiSol",
    shortDesc: "Application web d'analyse de la qualité des sols agricoles.",
    description: `Application web innovante d'analyse de la qualité des sols agricoles, développée avec HTML5, CSS3, JavaScript et Bootstrap 5.
Elle permet aux agriculteurs et chercheurs d'évaluer la qualité de leurs sols en entrant des paramètres clés et d'obtenir des recommandations.
Ce projet combine des connaissances techniques en développement web avec des notions d'agronomie pour créer un outil utile.`,
    image: "/images/PhotoProjet/lassinaQualiSol.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
    liveUrl: "https://lassinabakarykeita.github.io/Project-App-Web-LassinaQualiSol/",
    githubUrl: null,
    featured: false,
  },
  {
    id: "lassi-expense",
    title: "LassiExpense",
    shortDesc: "Application mobile Flutter de gestion de budget et suivi des dépenses.",
    description: `Application mobile de gestion de budget développée avec Flutter et Dart pour suivre les dépenses et gérer les budgets.
Elle permet d'ajouter, catégoriser et visualiser ses dépenses, de définir des budgets par catégorie et de générer des rapports.
Ce projet m'a initié au développement mobile cross-platform avec Flutter et m'a permis de maîtriser Dart.`,
    image: "/images/PhotoProjet/lassiExpense.png",
    technologies: ["Flutter", "Dart"],
    liveUrl: null,
    githubUrl: "https://github.com/LassinaBakaryKeita/Projet-App-Mobile-LassiExpense",
    featured: true,
  },
  {
    id: "quiz-master",
    title: "Quiz Master",
    shortDesc: "Application web de quiz interactif multi-matières et multi-niveaux.",
    description: `Application web de quiz interactif multi-matières et multi-niveaux, développée avec HTML5, CSS3 et JavaScript.
Elle propose des quiz dans différentes matières (mathématiques, informatique, culture générale) avec différents niveaux de difficulté.
Le système de scoring, les animations et l'interface intuitive rendent l'apprentissage ludique et engageant.`,
    image: "/images/PhotoProjet/quizMaster.png",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://lassinabakarykeita.github.io/Projet_Jeux_Quiz/",
    githubUrl: null,
    featured: false,
  },
  {
    id: "calculatrice-android",
    title: "Calculatrice Android",
    shortDesc: "Application Android de calculatrice avec opérations arithmétiques et conversions.",
    description: `Application mobile Android développée en Java et XML avec Android Studio pour opérations arithmétiques et conversions.
Elle offre une interface intuitive inspirée des calculatrices modernes avec historique de calculs et conversions d'unités.
Ce projet m'a permis de maîtriser le développement Android natif avec Java et Android Studio.`,
    image: "/images/PhotoProjet/CalculatriceAndroid.png",
    technologies: ["Java", "XML", "Android Studio"],
    liveUrl: null,
    githubUrl: "https://github.com/LassinaBakaryKeita/Projet_Android_Calculatrice",
    featured: false,
  },
  {
    id: "lecteur-musique",
    title: "Lecteur de Musique",
    shortDesc: "Lecteur de musique web moderne avec playlist dynamique et contrôles interactifs.",
    description: `Un lecteur de musique web moderne et responsive développé en HTML, CSS et JavaScript.
Il permet de lire et gérer une playlist audio avec des contrôles interactifs : lecture, pause, suivant, précédent, volume.
L'interface offre une navigation fluide, une barre de progression, une playlist dynamique et la lecture automatique des morceaux suivants.`,
    image: "/images/PhotoProjet/LecteurMusique.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Web Audio API"],
    liveUrl: "https://lassinabakarykeita.github.io/Projet_Lecteur-Musique/",
    githubUrl: null,
    featured: false,
  },
  {
    id: "projevo",
    title: "Projevo",
    shortDesc: "Application web full-stack de gestion de projets avec tableau de bord analytique.",
    description: `Une application web full-stack de gestion de projets développée en PHP, MySQL et JavaScript.
Elle permet aux utilisateurs de créer, organiser et suivre leurs projets et tâches avec une interface moderne.
Fonctionnalités : authentification sécurisée, tableau de bord analytique, gestion complète des données en temps réel, rôles utilisateurs.`,
    image: "/images/PhotoProjet/projevo.png",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    liveUrl: "https://projevo-app-web.rf.gd/index.php",
    githubUrl: null,
    featured: true,
  },
  {
    id: "devknowledge",
    title: "DevKnowledge",
    shortDesc: "Plateforme de blogging full-stack pour ingénieurs logiciels, avec articles techniques et interactions.",
    description: `DevKnowledge est une plateforme de blogging full-stack où les ingénieurs logiciels peuvent publier des articles techniques, interagir via des likes et commentaires, et gérer leur propre contenu.
Construite from scratch avec React, Node.js, Express et MongoDB Atlas.
Fonctionnalités : authentification JWT, upload d'images, interface entièrement responsive, recherche d'articles, profils utilisateurs.`,
    image: "/images/PhotoProjet/devKnowledge.png",
    technologies: ["React", "Node.js", "Express", "MongoDB Atlas", "JWT"],
    liveUrl: "https://app-web-dev-knowledge.vercel.app/",
    githubUrl: null,
    featured: true,
  },
];

export const skills = [
  {
    category: "Langages de programmation",
    icon: "code",
    items: [
      {
        name: "C",
        image: "/images/PhotoSkills/logo-langageC.png",
        description: "Maîtrise des bases (variables, chaînes, boucles) et concepts avancés : fonctions, récursivité, pointeurs, allocation dynamique, structures de données.",
      },
      {
        name: "HTML5",
        image: "/images/PhotoSkills/logo-html5.png",
        description: "Maîtrise de la création et structuration de pages web : textes, images, liens, tableaux, formulaires, et intégration CSS.",
      },
      {
        name: "CSS3",
        image: "/images/PhotoSkills/logo-css.png",
        description: "Maîtrise du style et mise en page : couleurs, typographies, bordures, ombres, Flexbox, CSS Grid et responsive design avec Media Queries.",
      },
      {
        name: "JavaScript",
        image: "/images/PhotoSkills/logo-javascript.png",
        description: "Maîtrise des bases de la programmation, des concepts essentiels et expérience en manipulation du DOM et gestion des événements.",
      },
      {
        name: "Java",
        image: "/images/PhotoSkills/logo-java.jpeg",
        description: "Maîtrise de Java orienté objet (classes, héritage, polymorphisme, interfaces), gestion du flux, fichiers et sérialisation.",
      },
      {
        name: "XML",
        image: "/images/PhotoSkills/logo-xml.jpg",
        description: "Maîtrise de XML pour la création d'interfaces Android, incluant structuration des layouts et configuration des composants.",
      },
      {
        name: "Dart",
        image: "/images/PhotoSkills/logo-dart.jpg",
        description: "Connaissance de Dart via le développement Flutter, incluant variables, conditions, fonctions et structures simples.",
      },
      {
        name: "Python",
        image: "/images/PhotoSkills/logo-python.png",
        description: "Maîtrise des bases de Python et de la programmation scientifique : manipulation de données, utilisation de bibliothèques comme NumPy et Pandas.",
      },
      {
        name: "MATLAB",
        image: "/images/PhotoSkills/logo-matlab.jpeg",
        description: "Maîtrise des bases : création et manipulation de matrices, opérations mathématiques et programmation de scripts simples.",
      },
      {
        name: "LabVIEW",
        image: "/images/PhotoSkills/logo-labview.jpeg",
        description: "Maîtrise des bases comme modélisation et simulation de systèmes et circuits simples.",
      },
    ],
  },
  {
    category: "Frameworks & Librairies",
    icon: "layers",
    items: [
      {
        name: "Bootstrap",
        image: "/images/PhotoSkills/logo-boostrap.jpeg",
        description: "Maîtrise de Bootstrap et de son approche utilitaire, incluant utilisation des classes prédéfinies, adaptation de modèles et personnalisation.",
      },
      {
        name: "React.js",
        image: "/images/PhotoSkills/logo-reactjs.jpg",
        description: "Connaissances en développement d'interfaces avec React.js : création de composants, gestion de l'état (useState), manipulation des événements et structuration d'applications web modernes.",
      },
      {
        name: "Flutter",
        image: "/images/PhotoSkills/logo-flutter.jpg",
        description: "Maîtrise de Flutter pour le développement multiplateforme, incluant création d'interfaces avec widgets et gestion des données.",
      },
    ],
  },
  {
    category: "Outils & Environnements",
    icon: "tool",
    items: [
      {
        name: "Git",
        image: "/images/PhotoSkills/logo-git.jpg",
        description: "Maîtrise de Git pour le versionnement et la publication sur GitHub. Expérience en déploiement et maintenance de projets.",
      },
      {
        name: "VS Code",
        image: "/images/PhotoSkills/logo-vsCode.jpg",
        description: "Maîtrise de Visual Studio Code comme environnement principal pour le développement web et logiciel.",
      },
      {
        name: "Android Studio",
        image: "/images/PhotoSkills/logo-androidStudio.jpg",
        description: "Maîtrise d'Android Studio pour le développement et le déploiement d'applications Android.",
      },
    ],
  },
  {
    category: "Outils de simulation",
    icon: "cpu",
    items: [
      {
        name: "Simulink",
        image: "/images/PhotoSkills/logo-simulink.jpg",
        description: "Maîtrise des bases : modélisation et simulation de systèmes et circuits simples.",
      },
      {
        name: "CATIA V5",
        image: "/images/PhotoSkills/logo-catia.jpg",
        description: "Niveau opérationnel : conception et assemblage de pièces mécaniques, utilisation des fonctionnalités avancées de modélisation.",
      },
    ],
  },
];

export const experiences = [
  {
    id: "asem",
    title: "Membre Actif",
    organization: "Association des Étudiants Maliens (ASEM)",
    startDate: "Janvier 2025",
    endDate: "Décembre 2025",
    current: false,
    description: "Engagement associatif, travail en équipe et actions communautaires. Participation active à l'organisation d'événements culturels et éducatifs au sein de la communauté estudiantine malienne.",
    tags: ["Travail en équipe", "Organisation d'événements", "Leadership", "Communication"],
  },
  {
    id: "centre-appel",
    title: "Agent Centre d'Appel",
    organization: "Centre d'appel",
    startDate: "Juillet 2025",
    endDate: "Août 2025",
    current: false,
    description: "Prospection téléphonique et prise de rendez-vous. Gestion de la relation client et développement des compétences en communication professionnelle.",
    tags: ["Relation client", "Communication", "Prospection", "Gestion du temps"],
  },
];

export const education = [
  {
    id: "ensaf-ilia",
    degree: "Cycle Ingénieur — Génie Logiciel & Intelligence Artificielle (ILIA)",
    institution: "École Nationale des Sciences Appliquées de Fès (ENSAF)",
    institutionUrl: "https://ensaf.ac.ma/?controller=pages&action=home",
    startDate: "2024",
    endDate: "2027 (prévu)",
    current: true,
    description: "Formation d'ingénieur en Informatique spécialisée en Génie Logiciel et Intelligence Artificielle. Cours en algorithmique avancée, développement logiciel, IA, Data Science, systèmes embarqués et développement web/mobile.",
    location: "Fès, Maroc",
  },
];

export const certifications = [
  // Vide pour l'instant — ajoutez vos certifications ici
  // Exemple :
  // {
  //   id: "cert-1",
  //   name: "Nom de la certification",
  //   issuer: "Organisation émettrice",
  //   date: "Mois Année",
  //   credentialUrl: "https://...",
  //   image: null,
  // }
];

export const contactReasons = [
  { value: "collaboration", label: "Collaboration sur un projet" },
  { value: "opportunity", label: "Opportunité professionnelle" },
  { value: "proposal", label: "Proposition de projet" },
  { value: "technical", label: "Discussion technique" },
  { value: "internship", label: "Stage / Alternance" },
  { value: "other", label: "Autre" },
];

export const privacyPolicy = {
  lastUpdated: "Septembre 2026",
  content: `
## Politique de Confidentialité

### 1. Introduction

Bienvenue sur le portfolio de Lassina Bakary Keïta. Cette politique de confidentialité explique comment vos informations personnelles sont collectées, utilisées et protégées lorsque vous visitez ce site.

### 2. Informations collectées

**Via le formulaire de contact :**
- Prénom et nom
- Adresse email
- Motif du contact
- Contenu du message

Ces informations sont uniquement utilisées pour répondre à vos demandes. Elles ne sont pas stockées dans une base de données et ne sont pas partagées avec des tiers.

### 3. Utilisation des informations

Les informations que vous fournissez via le formulaire de contact sont utilisées exclusivement pour :
- Répondre à votre message
- Vous recontacter si nécessaire

### 4. Cookies

Ce site n'utilise pas de cookies de traçage ou d'analyse. Un cookie local peut être utilisé uniquement pour mémoriser votre préférence de thème (clair/sombre).

### 5. Services tiers

Ce site utilise EmailJS pour l'envoi des messages du formulaire de contact. EmailJS traite les données conformément à sa propre politique de confidentialité.

### 6. Sécurité

Votre vie privée est prise au sérieux. Les informations transmises via le formulaire de contact sont envoyées de manière sécurisée.

### 7. Contact

Pour toute question relative à cette politique de confidentialité, vous pouvez me contacter à l'adresse : lassinabakarykeita@gmail.com

### 8. Modifications

Cette politique peut être mise à jour ponctuellement. La date de dernière mise à jour est indiquée en haut de cette page.
  `.trim(),
};
