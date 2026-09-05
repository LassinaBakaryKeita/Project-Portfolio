// =============================================
// PORTFOLIO DATA — LASSINA BAKARY KEÏTA
// Modifiez ce fichier pour mettre à jour le contenu
// =============================================


export const profile = {
  name: "Keïta",
  firstName: "Lassina Bakary",
  title: "Étudiant en Ingénierie Logicielle & Intelligence Artificielle",
  school: "ENSAF",
  schoolUrl: "https://ensaf.ac.ma/?controller=pages&action=home",
  email: "lassbakkeita6@gmail.com",
  photo: "/images/MaPhoto.jpeg",

  bio: `Passionné par le développement logiciel, je m'intéresse particulièrement à la conception et au développement d'applications web modernes, avec une forte affinité pour le développement backend. J'aime comprendre comment concevoir des solutions fiables, évolutives et pensées autour de véritables besoins utilisateurs.

Je m'intéresse également à l'Intelligence Artificielle et plus particulièrement à son intégration dans les applications web afin de créer des produits plus intelligents, utiles et interactifs. Mon objectif est progressivement de développer une expertise à l'intersection du génie logiciel, de l'IA et de l'architecture logicielle orientée produit.

Actuellement étudiant en deuxième année du cycle ingénieur en Ingénierie Logicielle et Intelligence Artificielle à l'École Nationale des Sciences Appliquées de Fès (ENSAF), je continue à développer mes compétences en frontend, backend et conception logicielle à travers des projets personnels, académiques et professionnels.`,

  typedStrings: [
    "Étudiant en Ingénierie Logicielle & Intelligence Artificielle",
    "Développeur Web Full-Stack",
    "Backend-Oriented Developer",
    "Web Developer & AI Enthusiast",
    "Futur Architecte Logiciel orienté produit"
  ],

  cvUrl: null,  // Ajoutez le chemin vers votre CV PDF ici, ex: "/cv/CV_Lassina_Bakary_Keita.pdf"
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
    id: "devknowledge",
    title: "DevKnowledge",
    shortDesc: "Plateforme de blogging full-stack pour ingénieurs logiciels, avec articles techniques et interactions.",
    description: `DevKnowledge est une plateforme de blogging full-stack où les ingénieurs logiciels peuvent publier des articles techniques, interagir via des likes et commentaires, et gérer leur propre contenu.
Construite from scratch avec React, Node.js, Express et MongoDB Atlas.
Fonctionnalités : authentification JWT, upload d'images, interface entièrement responsive, recherche d'articles, profils utilisateurs.`,
    image: "/images/PhotoProjet/devKnowledge.png",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "JWT"],
    liveUrl: "https://app-web-dev-knowledge.vercel.app/",
    githubUrl: "https://github.com/LassinaBakaryKeita/App-web-DevKnowledge",
    featured: true,
  },

  {
    id: "sinova-ai",
    title: "SinovaAI",
    shortDesc:
      "Plateforme d'apprentissage assistée par l'IA conçue pour faciliter l'apprentissage de la programmation grâce à la sélection intelligente de ressources et à des assistants IA contextuels.",
    description: `SinovaAI est une plateforme web conçue pour rendre l'apprentissage de la programmation plus intelligent et plus personnalisé grâce à l'Intelligence Artificielle.
Lorsqu'un utilisateur recherche un concept informatique, la plateforme exploite l'API YouTube pour identifier les meilleures ressources correspondant à sa recherche, puis applique ses propres critères afin de sélectionner les vidéos les plus pertinentes pour l'apprentissage.
SinovaAI permet également de retrouver des documents liés au concept recherché et propose un assistant IA contextuel associé aux ressources consultées, permettant à l'utilisateur de poser des questions en fonction du contenu qu'il est en train d'apprendre.
La plateforme intègre également un assistant IA généraliste destiné à répondre à des questions plus larges liées à l'apprentissage et au développement informatique.
Développée avec l'architecture PERN Stack.`,
    image: "/images/PhotoProjet/sinovaAI.png",
    technologies: [
      "PostgreSQL",
      "Express.js",
      "React.js",
      "Node.js",
      "Prisma",
      "Gemini API",
      "YouTube Data API",
      "JWT",
    ],
    liveUrl: "https://sinova-ai.vercel.app/",
    githubUrl: null,
    featured: true,
  },

  {
    id: "ouriam",
    title: "OURIAM",
    shortDesc:
      "Plateforme e-commerce dédiée à la présentation de vêtements, avec commandes via WhatsApp et Snapchat et un espace d'administration pour la gestion de l'activité.",
    description: `OURIAM est une plateforme e-commerce conçue pour présenter les collections et les vêtements d'une cliente et permettre aux utilisateurs de passer facilement leurs commandes via WhatsApp ou Snapchat.
Le site intègre également un espace d'administration permettant de gérer les produits, les catégories et les collections, ainsi que de suivre différentes informations liées à l'activité, notamment le chiffre d'affaires, les produits et les commandes.
Le projet a été développé avec une architecture PERN Stack et utilise Supabase Storage pour le stockage des images.`,
    image: "/images/PhotoProjet/ouriam.png",
    technologies: [
      "PostgreSQL",
      "Express.js",
      "React.js",
      "Node.js",
      "Prisma",
      "Supabase Storage",
      "JWT",
    ],
    liveUrl: "https://ouriam.vercel.app/",
    githubUrl: null,
    featured: true,
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
    githubUrl: "https://github.com/LassinaBakaryKeita/App-Web-Projevo",
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
    githubUrl: "https://github.com/LassinaBakaryKeita/Mini-Projet-Simulation-Reseau-Social",
    featured: false,
  },

  {
    id: "lassina-qualisol",
    title: "LassinaQualiSol",
    shortDesc: "Application web d'analyse de la qualité des sols agricoles.",
    description: `Application web d'analyse de la qualité des sols agricoles, développée avec HTML5, CSS3, JavaScript et Bootstrap 5.
Elle permet aux agriculteurs et chercheurs d'évaluer la qualité de leurs sols en entrant des paramètres clés et d'obtenir des recommandations.
Ce projet combine des compétences en développement web avec des notions d'agronomie pour créer un outil utile.`,
    image: "/images/PhotoProjet/lassinaQualiSol.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
    liveUrl: "https://lassinabakarykeita.github.io/Project-App-Web-LassinaQualiSol/",
    githubUrl: "https://github.com/LassinaBakaryKeita/Project-App-Web-LassinaQualiSol",
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
    id: "organic-food-store",
    title: "Organic Food Store",
    shortDesc: "Site e-commerce moderne et responsive pour une boutique de produits alimentaires biologiques.",
    description: `Organic Food Store est un site web responsive moderne pour une boutique de produits alimentaires 100% biologiques.
Il présente les produits de manière élégante, avec un catalogue complet, des fiches produit détaillées et un design soigné.
Ce projet m'a permis de progresser en design web responsive et d'utiliser des techniques CSS avancées pour créer une interface attrayante.`,
    image: "/images/PhotoProjet/ecommerceAlimentaire.png",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://lassinabakarykeita.github.io/Projet_Site_E-Commerce_Alimentaire/",
    githubUrl: "https://github.com/LassinaBakaryKeita/Projet_Site_E-Commerce_Alimentaire",
    featured: false,
  },

  {
    id: "azertype",
    title: "AzerType : Jeu de Dactylographie",
    shortDesc: "Application interactive pour s'entraîner à taper plus vite au clavier.",
    description: `AzerType est une application interactive conçue avec HTML5, CSS3 et JavaScript, permettant de s'entraîner à taper plus vite au clavier.
Elle propose différents modes d'entraînement, un chronomètre, un compteur de mots par minute et un score de précision.
Ce projet m'a permis d'approfondir mes connaissances en JavaScript, notamment la gestion des événements clavier et la manipulation du DOM.`,
    image: "/images/PhotoProjet/Azertype.png",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://lassinabakarykeita.github.io/Projet_Apprentissage_De_JavaScript/",
    githubUrl: "https://github.com/LassinaBakaryKeita/Projet_Apprentissage_De_JavaScript",
    featured: false,
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
    githubUrl: "https://github.com/LassinaBakaryKeita/Projet_Jeux_Quiz",
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
    githubUrl: "https://github.com/LassinaBakaryKeita/Projet_Lecteur-Musique",
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
    id: "robbie-lens-photography",
    title: "Site Web Robbie Lens Photography",
    shortDesc: "Site web de photographe professionnel présentant ses services, projets récents et portfolio.",
    description: `Ce site web de photographe professionnel, conçu en HTML5 et CSS3, présente ses services, ses projets récents et son portfolio.
Il offre une navigation intuitive, des galeries d'images élégantes et une présentation soignée du travail photographique.
C'est l'un de mes premiers projets web qui m'a permis d'acquérir des bases solides en structuration HTML et mise en page CSS.`,
    image: "/images/PhotoProjet/RobbieLensPhotography.png",
    technologies: ["HTML5", "CSS3"],
    liveUrl: "https://lassinabakarykeita.github.io/My-first-learning-project/",
    githubUrl: "https://github.com/LassinaBakaryKeita/My-first-learning-project",
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
    githubUrl: "https://github.com/LassinaBakaryKeita/Project-Calculator",
    featured: false,
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
        description:
          "Maîtrise des bases de la programmation en C et des principaux concepts du langage : fonctions, récursivité, pointeurs, allocation dynamique et structures de données.",
      },
      {
        name: "HTML5",
        image: "/images/PhotoSkills/logo-html5.png",
        description:
          "Maîtrise de la structuration de pages web : textes, images, liens, tableaux, formulaires et intégration avec CSS.",
      },
      {
        name: "CSS3",
        image: "/images/PhotoSkills/logo-css.png",
        description:
          "Maîtrise de la mise en forme et de la mise en page avec CSS : Flexbox, CSS Grid, responsive design, typographie, couleurs, bordures et effets visuels.",
      },
      {
        name: "JavaScript",
        image: "/images/PhotoSkills/logo-javascript.png",
        description:
          "Maîtrise des fondamentaux de JavaScript et expérience en manipulation du DOM, gestion des événements et développement d'interfaces web interactives.",
      },
      {
        name: "Java",
        image: "/images/PhotoSkills/logo-java.jpeg",
        description:
          "Connaissances en programmation orientée objet avec Java : classes, héritage, polymorphisme, interfaces, gestion des flux, fichiers et sérialisation.",
      },
      {
        name: "Python",
        image: "/images/PhotoSkills/logo-python.png",
        description:
          "Connaissances en Python pour la programmation générale et scientifique, notamment pour la manipulation et l'analyse de données.",
      },
      {
        name: "XML",
        image: "/images/PhotoSkills/logo-xml.jpg",
        description:
          "Connaissances en XML pour la structuration de données et la création d'interfaces Android, notamment avec les fichiers de layout.",
      },
      {
        name: "Dart",
        image: "/images/PhotoSkills/logo-dart.jpg",
        description:
          "Connaissances de base en Dart acquises dans le cadre du développement d'applications avec Flutter : variables, conditions, fonctions et structures de données simples.",
      },
      {
        name: "MATLAB",
        image: "/images/PhotoSkills/logo-matlab.jpeg",
        description:
          "Connaissances de base en MATLAB : création et manipulation de matrices, opérations mathématiques et développement de scripts simples.",
      },
      {
        name: "LabVIEW",
        image: "/images/PhotoSkills/logo-labview.jpeg",
        description:
          "Connaissances de base en LabVIEW pour la modélisation, la simulation et la réalisation de systèmes simples.",
      },
    ],
  },

  {
    category: "Frameworks & Librairies",
    icon: "layers",
    items: [
      {
        name: "Express.js",
        image: "/images/PhotoSkills/logo-express.png",
        description:
          "Compétences en développement d'API REST avec Express.js : structuration des routes et contrôleurs, création et utilisation de middleware, authentification avec JSON Web Token (JWT), gestion des mots de passe et sécurisation des applications.",
      },
      {
        name: "React.js",
        image: "/images/PhotoSkills/logo-reactjs.jpg",
        description:
          "Connaissances en développement d'interfaces avec React.js : création de composants, gestion de l'état, gestion des événements et structuration d'applications web modernes.",
      },
      {
        name: "Tailwind CSS",
        image: "/images/PhotoSkills/logo-tailwindcss.png",
        description:
          "Compétences en création d'interfaces web modernes et responsives avec Tailwind CSS et son approche basée sur les classes utilitaires.",
      },
      {
        name: "Bootstrap",
        image: "/images/PhotoSkills/logo-boostrap.jpeg",
        description:
          "Compétences en développement d'interfaces avec Bootstrap : utilisation des composants et classes utilitaires, adaptation de modèles et personnalisation.",
      },
      {
        name: "Spring Boot",
        image: "/images/PhotoSkills/logo-springboot.png",
        description:
          "En cours d'apprentissage : découverte de Spring Boot pour le développement d'applications backend avec Java.",
      },
      {
        name: "Flutter",
        image: "/images/PhotoSkills/logo-flutter.jpg",
        description:
          "Connaissances en développement multiplateforme avec Flutter : création d'interfaces à partir de widgets et gestion des données.",
      },
    ],
  },

  {
    category: "Bibliothèques scientifiques & Data",
    icon: "data",
    items: [
      {
        name: "NumPy",
        image: "/images/PhotoSkills/logo-numpy.png",
        description:
          "Bases en manipulation et traitement de données avec NumPy, notamment pour les opérations sur les tableaux et la préparation des données.",
      },
      {
        name: "Pandas",
        image: "/images/PhotoSkills/logo-pandas.png",
        description:
          "Bases en manipulation et nettoyage de données avec Pandas : lecture de jeux de données, traitement des valeurs manquantes, transformation et préparation des données.",
      },
      {
        name: "Matplotlib",
        image: "/images/PhotoSkills/logo-matplotlib.png",
        description:
          "Bases en visualisation de données avec Matplotlib : création de graphiques pour représenter et faciliter l'analyse des données.",
      },
      {
        name: "Seaborn",
        image: "/images/PhotoSkills/logo-seaborn.jpeg",
        description:
          "Bases en visualisation statistique avec Seaborn : création de graphiques pour explorer les relations entre les variables et faciliter leur interprétation.",
      },
    ],
  },

  {
    category: "Conception & Modélisation",
    icon: "workflow",
    items: [
      {
        name: "UML",
        image: "/images/PhotoSkills/logo-uml.jpg",
        description:
          "Connaissances en modélisation logicielle avec UML : diagrammes de cas d'utilisation, de classes, de séquence et d'activité, ainsi que diagrammes de packages et d'objets.",
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
        description:
          "Maîtrise de Git pour le versionnement, la gestion des branches et la collaboration sur des projets, notamment avec GitHub. Expérience en publication et maintenance de projets.",
      },
      {
        name: "VS Code",
        image: "/images/PhotoSkills/logo-vsCode.jpg",
        description:
          "Utilisation avancée de Visual Studio Code comme environnement de développement pour les projets web et logiciels.",
      },
      {
        name: "Antigravity",
        image: "/images/PhotoSkills/logo-antigravity.jpeg",
        description:
          "Utilisation d'Antigravity comme environnement de développement assisté par l'IA pour concevoir, développer et faire évoluer des projets logiciels.",
      },
      {
        name: "Android Studio",
        image: "/images/PhotoSkills/logo-androidStudio.jpg",
        description:
          "Connaissances en utilisation d'Android Studio pour le développement et les tests d'applications Android.",
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
        description:
          "Connaissances de base en modélisation et simulation de systèmes à l'aide de Simulink.",
      },
      {
        name: "CATIA V5",
        image: "/images/PhotoSkills/logo-catia.jpg",
        description:
          "Connaissances en conception et assemblage de pièces mécaniques avec CATIA V5.",
      },
    ],
  },
];

export const experiences = [
  {
    id: "stage-initiation",
    title: "Stagiaire en Développement Web",
    organization: "Ecole Polytechnique des Génies (EPG)",
    startDate: "Juin 2026",
    endDate: "Juillet 2026",
    current: false,
    description:
      "Conception et développement intégral d'un projet proposé dans le cadre du stage, depuis l'analyse du besoin jusqu'à la réalisation de la solution. Mise en pratique des compétences en développement Web, conception d'application et résolution de problèmes.",
    tags: [
      "Développement Web",
      "Conception",
      "Développement Full-Stack",
      "Résolution de problèmes",
    ],
    link: "[Lien vers le projet / GitHub / Démo]",
  },

  {
    id: "projet-client-ouriam",
    title: "Développeur Full-Stack : Projet Client",
    organization: "Projet client OURIAM",
    startDate: "Juillet 2026",
    endDate: "Aout 2026",
    current: false,
    description:
      "Conception et développement intégral d'une plateforme e-commerce pour une cliente, avec mise en place de l'interface utilisateur, du backend, de la base de données et des fonctionnalités de gestion des produits. Participation également à la mise en ligne et à la configuration technique du projet.",
    tags: [
      "Développement Full-Stack",
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
    ],
    link: "[Lien vers le site / projet]",
  },

  {
    id: "asem",
    title: "Membre Actif",
    organization: "Association des Étudiants Maliens (ASEM)",
    startDate: "Janvier 2025",
    endDate: "Décembre 2025",
    current: false,
    description:
      "Engagement associatif, travail en équipe et actions communautaires. Participation active à l'organisation d'événements culturels et éducatifs au sein de la communauté estudiantine malienne.",
    tags: [
      "Travail en équipe",
      "Organisation d'événements",
      "Leadership",
      "Communication",
    ],
  },

  {
    id: "centre-appel",
    title: "Agent Centre d'Appel",
    organization: "Centre d'appel",
    startDate: "Juillet 2025",
    endDate: "Août 2025",
    current: false,
    description:
      "Prospection téléphonique et prise de rendez-vous. Gestion de la relation client et développement des compétences en communication professionnelle.",
    tags: [
      "Relation client",
      "Communication",
      "Prospection",
      "Gestion du temps",
    ],
  },
];

export const education = [
  {
    id: "ensaf-ilia",
    degree: "Cycle Ingénieur : Ingénierie Logicielle & Intelligence Artificielle (ILIA)",
    institution: "École Nationale des Sciences Appliquées de Fès (ENSAF)",
    institutionUrl: "https://ensaf.ac.ma/?controller=pages&action=home",
    startDate: "2023",
    endDate: "2028 (prévu)",
    current: true,
    description:
      "Formation d'ingénieur en informatique spécialisée en Ingénierie Logicielle et Intelligence Artificielle. Cours en algorithmique avancée, développement logiciel, intelligence artificielle, Data Science, systèmes embarqués et développement web et mobile.",
    location: "Fès, Maroc",
  },

  {
    id: "bac-malien",
    degree: "Baccalauréat Malien, Série Sciences Exactes",
    institution: "Lycée Les Castors",
    institutionUrl: "https://lyceelescastors.com/",
    startDate: "2020",
    endDate: "2023",
    current: false,
    description:
      "Formation secondaire scientifique progressive sur trois années, débutant par une année de formation générale en sciences, économie et littérature, puis deux années de spécialisation scientifique. Approfondissement des mathématiques, de la physique-chimie, de la biologie et de la géologie, avec pour objectif de consolider les bases scientifiques et le raisonnement nécessaires à la poursuite d'études supérieures, notamment dans les domaines scientifiques et technologiques.",
    location: "Badalabougou, Bamako, Mali",
  },

  {
    id: "def-malien",
    degree: "Diplôme d'Études Fondamentales (DEF)",
    institution: "École Fondamentale Publique",
    institutionUrl: "#",
    startDate: "2010",
    endDate: "2020",
    current: false,
    description:
      "Formation fondamentale destinée à construire un socle de connaissances générales et à préparer à la poursuite des études secondaires. Enseignements en mathématiques, sciences physiques et naturelles, français, anglais, histoire-géographie, éducation civique et morale, éducation physique et sportive, ainsi que dans les principales disciplines linguistiques. Cette formation a permis d'acquérir les bases scolaires, le raisonnement et la culture générale nécessaires pour aborder le cycle secondaire.",
    location: "Kalaban Coura, Bamako, Mali",
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

Pour toute question relative à cette politique de confidentialité, vous pouvez me contacter à l'adresse : lassbakkeita6@gmail.com

### 8. Modifications

Cette politique peut être mise à jour ponctuellement. La date de dernière mise à jour est indiquée en haut de cette page.
  `.trim(),
};
