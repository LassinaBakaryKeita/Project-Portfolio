/**
 * PORTFOLIO - SCRIPT PRINCIPAL
 * Gestion complète des fonctionnalités interactives
 */

// ============================================
// GESTION DU MENU HAMBURGER
// ============================================

/**
 * Initialise le menu hamburger pour les écrans mobiles
 */
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (!hamburger || !navLinks) return;
    
    // Gestion du clic sur le hamburger
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Empêche le défilement quand le menu est ouvert
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Ferme le menu au clic sur un lien
    document.querySelectorAll('.liensNavivation').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Ferme le menu en cliquant à l'extérieur
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// EFFET DE FRAPPE ANIMÉ (TYPED.JS)
// ============================================

/**
 * Initialise l'effet de frappe animé pour la description
 */
function initTypedEffect() {
    const typedElement = document.getElementById('ma-filiere');
    if (!typedElement) return;
    
    new Typed(typedElement, {
        strings: [
            "Software Engineering and Artificial Intelligence Student",
            "Artificial Intelligence Enthusiast",
            "Web & Mobile Developer",
            "Passionate about Data Science",
            "Future AI Engineer"
        ],
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: "|",
        contentType: 'html'
    });
}

// ============================================
// ANIMATION DE ZOOM SUR LE NOM
// ============================================

/**
 * Anime le nom en créant un effet de zoom pulsant
 */
function initNameZoomEffect() {
    const monNom = document.getElementById('mon-nom');
    
    if (!monNom) return;
    
    // Applique l'effet de zoom toutes les 2 secondes
    setInterval(() => {
        monNom.classList.toggle('zoom');
    }, 2000);
    
    // Effet supplémentaire au clic
    monNom.addEventListener('click', () => {
        monNom.classList.add('zoom');
        setTimeout(() => monNom.classList.remove('zoom'), 600);
    });
}

// ============================================
// EFFET FLIP SUR LES CARTES DE COMPÉTENCES
// ============================================

/**
 * Initialise l'effet flip sur toutes les cartes de compétences
 */
function initFlipCards() {
    const cards = document.querySelectorAll('.gsap-card');
    
    cards.forEach(card => {
        let flipped = false;
        
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            flipped = !flipped;
            
            if (flipped) {
                // Animation pour retourner la carte
                gsap.to(card.querySelector('.front'), {
                    rotateY: 180,
                    duration: 0.6,
                    ease: "power2.inOut"
                });
                
                gsap.to(card.querySelector('.back'), {
                    rotateY: 0,
                    duration: 0.6,
                    ease: "power2.inOut"
                });
            } else {
                // Animation pour remettre la carte
                gsap.to(card.querySelector('.front'), {
                    rotateY: 0,
                    duration: 0.6,
                    ease: "power2.inOut"
                });
                
                gsap.to(card.querySelector('.back'), {
                    rotateY: 180,
                    duration: 0.6,
                    ease: "power2.inOut"
                });
            }
        });
        
        // Animation au survol
        card.addEventListener('mouseenter', () => {
            if (!flipped) {
                gsap.to(card, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (!flipped) {
                gsap.to(card, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });
    });
    
    // Permet de fermer les cartes en cliquant ailleurs
    document.addEventListener('click', () => {
        cards.forEach(card => {
            if (card.querySelector('.front').style.transform.includes('180deg')) {
                gsap.to(card.querySelector('.front'), {
                    rotateY: 0,
                    duration: 0.4,
                    ease: "power2.inOut"
                });
                
                gsap.to(card.querySelector('.back'), {
                    rotateY: 180,
                    duration: 0.4,
                    ease: "power2.inOut"
                });
            }
        });
    });
}

// ============================================
// NAVIGATION SMOOTH SCROLL
// ============================================

/**
 * Améliore la navigation interne avec un scroll fluide
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '#!') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                // Calcul de la position de défilement
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// GESTION DU FORMULAIRE DE CONTACT
// ============================================

/**
 * Gère la soumission du formulaire de contact
 */
function initContactForm() {
    const contactForm = document.querySelector('#contact-me form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validation basique
        const inputs = this.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = '#ff4444';
                isValid = false;
                
                // Retire le style d'erreur après correction
                input.addEventListener('input', () => {
                    input.style.borderColor = '';
                });
            }
        });
        
        if (!isValid) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }
        
        // Récupération des données
        const formData = new FormData(this);
        const data = {
            prenom: formData.get('prenom'),
            nom: formData.get('nom'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        
        // Ici, vous pouvez ajouter l'envoi AJAX vers votre serveur
        console.log('Message reçu :', data);
        
        // Message de confirmation
        alert('Message envoyé avec succès !\nJe vous répondrai dans les plus brefs délais.');
        
        // Réinitialisation du formulaire
        this.reset();
    });
}

// ============================================
// HIGHLIGHT DE LA NAVIGATION ACTIVE
// ============================================

/**
 * Met en surbrillance le lien de navigation actif
 */
function initActiveNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.liensNavivation');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const headerHeight = document.querySelector('header').offsetHeight;
            
            if (scrollY >= (sectionTop - headerHeight - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// ANIMATIONS AU SCROLL
// ============================================

/**
 * Ajoute des animations d'apparition progressive
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observer les éléments à animer
    document.querySelectorAll('.card, .timeline-item, .form-container').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ============================================
// BOUTON TÉLÉCHARGER CV
// ============================================

/**
 * Gère le bouton de téléchargement du CV
 */
function initDownloadCV() {
    const btnCV = document.querySelector('.btn-cv');
    
    if (!btnCV) return;
    
    btnCV.addEventListener('click', () => {
        // Ici, vous pouvez ajouter le lien vers votre CV
        // Pour l'instant, c'est un exemple
        alert('Fonctionnalité de téléchargement du CV en cours...');
        
        //  Fonctionalité de telechargement du lien ( que j'utiliserai ulteurièrement)
        //window.open('chemin/monCv.pdf', '_blank');
    });
}

// ============================================
// RESPONSIVE ADJUSTMENTS
// ============================================

/**
 * Ajustements spécifiques pour le responsive
 */
function handleResponsiveAdjustments() {
    const screenWidth = window.innerWidth;
    
    // Désactive les animations de flip sur mobile si nécessaire
    if (screenWidth < 768) {
        document.querySelectorAll('.gsap-card').forEach(card => {
            card.style.cursor = 'default';
        });
    }
}

// ============================================
// INITIALISATION AU CHARGEMENT
// ============================================

/**
 * Point d'entrée principal
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio de Lassina Bakary Keïta - Initialisation...');
    
    // Initialisation de toutes les fonctionnalités
    initHamburgerMenu();
    initTypedEffect();
    initNameZoomEffect();
    initFlipCards();
    initSmoothScroll();
    initContactForm();
    initActiveNavHighlight();
    initScrollAnimations();
    initDownloadCV();
    handleResponsiveAdjustments();
    
    console.log(' Portfolio initialisé avec succès !');
});

// ============================================
// GESTION DU REDIMENSIONNEMENT
// ============================================

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        handleResponsiveAdjustments();
    }, 250);
});
