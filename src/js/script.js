// DOMCONTENTLOADED EVENT
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// INITIALIZE APP
function initializeApp() {
    console.log('Initializing app...');
    setupMobileMenu();
    setupStickyHeader();
    setupAnimations();
    setupFormHandling();
    setupSmoothScrolling();
    
    // Inicializar FAQs directamente
    setupFAQ();
}

// MOBILE MENU FUNCTIONALITY
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
   // PARALLAX EFFECT SUAVE PARA ELEMENTOS ESPECÍFICOS
function setupParallaxElements() {
    const parallaxElements = document.querySelectorAll('.hero-image, .about-card-icon, .service-icon');
    
    if (parallaxElements.length === 0) return;
    
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos * 0.1}px) rotateX(${scrolled * 0.01}deg)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
}

// ANIMACIONES DE MOUSE TRACKING PARA CARDS
function setupMouseTrackingCards() {
    const cards = document.querySelectorAll('.about-card, .team-card, .service-card, .testimonial-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!hamburger || !nav) return;

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        toggleMobileMenu();
    });

    // Close menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMobileMenu();
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
            closeMobileMenu();
        }
    });

    function toggleMobileMenu() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }

    function closeMobileMenu() {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
}

// STICKY HEADER FUNCTIONALITY
function setupStickyHeader() {
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    let scrollDirection = 'up';
    
    if (!header) return;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Determinar dirección del scroll
        if (scrollTop > lastScrollTop) {
            scrollDirection = 'down';
        } else {
            scrollDirection = 'up';
        }
        
        // Añadir clase 'scrolled' cuando se hace scroll
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Ocultar header cuando se hace scroll hacia abajo rápido
        if (scrollDirection === 'down' && scrollTop > 200) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, { passive: true });
}



// SCROLL ANIMATIONS - ANIMACIONES MEJORADAS Y SUAVES
function setupAnimations() {
    // Configurar Intersection Observer para animaciones de entrada
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Para elementos especiales, añadir delay escalonado
                if (entry.target.classList.contains('stagger-animation')) {
                    const children = entry.target.children;
                    Array.from(children).forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('animate-in');
                        }, index * 200);
                    });
                }
            }
        });
    }, observerOptions);

    // Observar elementos para animaciones
    const animateElements = document.querySelectorAll('.section-header, .about-card, .team-card, .service-card, .testimonial-card, .stat-item');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Configurar animaciones escalonadas para grids
    const grids = document.querySelectorAll('.about-cards, .team-cards, .services-grid, .testimonials-grid');
    grids.forEach(grid => {
        grid.classList.add('stagger-animation');
        observer.observe(grid);
    });
    
    // Card hover animations mejoradas
    setupCardAnimations();
    
    // Counter animations para estadísticas
    setupCounterAnimations();
    
    // Nuevas animaciones de parallax suave
    setupParallaxElements();
}

// CARD ANIMATIONS
function setupCardAnimations() {
    const cards = document.querySelectorAll('.team-card, .service-card, .testimonial-card, .about-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Team card special effects
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add ripple effect
            createRippleEffect(this);
        });
    });
}

// RIPPLE EFFECT
function createRippleEffect(element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (rect.width / 2 - size / 2) + 'px';
    ripple.style.top = (rect.height / 2 - size / 2) + 'px';
    ripple.classList.add('ripple');
    
    // Add ripple styles
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(38, 181, 166, 0.3);
            transform: scale(0);
            animation: rippleEffect 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes rippleEffect {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    
    if (!document.querySelector('style[data-ripple]')) {
        style.setAttribute('data-ripple', 'true');
        document.head.appendChild(style);
    }
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// COUNTER ANIMATIONS
function setupCounterAnimations() {
    const counters = document.querySelectorAll('[data-count]');
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// FORM HANDLING
function setupFormHandling() {
    const contactForm = document.querySelector('.contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmission(this);
    });
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearValidation(this);
        });
    });
}

function handleFormSubmission(form) {
    const formData = new FormData(form);
    const submitBtn = form.querySelector('.btn-primary');
    
    // Show loading state
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        showNotification('¡Mensaje enviado correctamente!', 'success');
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let message = '';
    
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        message = 'Este campo es requerido';
    } else if (field.type === 'email' && value && !isValidEmail(value)) {
        isValid = false;
        message = 'Ingresa un email válido';
    }
    
    if (!isValid) {
        showFieldError(field, message);
    } else {
        clearValidation(field);
    }
    
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFieldError(field, message) {
    clearValidation(field);
    
    field.style.borderColor = '#E63946';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.color = '#E63946';
    errorDiv.style.fontSize = '14px';
    errorDiv.style.marginTop = '5px';
    
    field.parentNode.appendChild(errorDiv);
}

function clearValidation(field) {
    field.style.borderColor = 'transparent';
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

// SMOOTH SCROLLING
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Antes se restaba headerHeight, ahora navegamos directamente
                // const headerHeight = document.getElementById('header').offsetHeight;
                // const targetPosition = targetElement.offsetTop - headerHeight;
                const targetPosition = targetElement.offsetTop;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// NOTIFICATION SYSTEM
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add notification styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 10px;
            color: white;
            z-index: 1000;
            animation: slideInRight 0.3s ease, slideOutRight 0.3s ease 2.7s;
            font-family: var(--font-display);
            font-size: 16px;
        }
        
        .notification-success {
            background: #26B5A6;
        }
        
        .notification-error {
            background: #E63946;
        }
        
        .notification-info {
            background: #1A2A33;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    
    if (!document.querySelector('style[data-notifications]')) {
        style.setAttribute('data-notifications', 'true');
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// PARALLAX EFFECT FOR HERO
function setupParallaxEffect() {
    const hero = document.querySelector('.hero');
    
    if (!hero) return;
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        
        hero.style.transform = `translateY(${parallax}px)`;
    });
}

// LAZY LOADING FOR IMAGES
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// TYPING ANIMATION
function setupTypingAnimation() {
    const typingElements = document.querySelectorAll('[data-typing]');
    
    typingElements.forEach(element => {
        const text = element.getAttribute('data-typing');
        element.textContent = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 100);
    });
}

// PROGRESSIVE WEB APP FEATURES
function setupPWA() {
    // Register service worker if available
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js').then(function(registration) {
                console.log('ServiceWorker registration successful');
            }).catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
        });
    }
}

// PERFORMANCE OPTIMIZATIONS
function optimizePerformance() {
    // Preload critical resources
    const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Just+Another+Hand:wght@400&display=swap'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'style';
        document.head.appendChild(link);
    });
}

// ACCESSIBILITY IMPROVEMENTS
function improveAccessibility() {
    // Add skip navigation link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Saltar al contenido principal';
    skipLink.className = 'skip-link';
    
    const skipLinkStyle = document.createElement('style');
    skipLinkStyle.textContent = `
        .skip-link {
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--primary-color);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1000;
        }
        
        .skip-link:focus {
            top: 6px;
        }
    `;
    
    document.head.appendChild(skipLinkStyle);
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content ID
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.id = 'main-content';
    }
}

// INITIALIZE ADDITIONAL FEATURES
document.addEventListener('DOMContentLoaded', function() {
    // Nuevas funciones añadidas
    setupParallaxElements();
    setupMouseTrackingCards();
    setupLazyLoading();
    setupPWA();
    optimizePerformance();
    improveAccessibility();
    
    // Aseguramos que el FAQ funcione incluso después de cargar todo
    window.addEventListener('load', function() {
        document.querySelectorAll('.faq-question').forEach(question => {
            if (!question.hasAttribute('data-initialized')) {
                question.setAttribute('data-initialized', 'true');
                question.addEventListener('click', function() {
                    const faqItem = this.parentNode;
                    const wasActive = faqItem.classList.contains('active');
                    
                    document.querySelectorAll('.faq-item').forEach(item => {
                        item.classList.remove('active');
                    });
                    
                    if (!wasActive) {
                        faqItem.classList.add('active');
                    }
                });
            }
        });
        
        console.log("FAQ event listeners added directly after page load");
    });
});

// FAQ FUNCTIONALITY
function setupFAQ() {
    console.log('Setting up FAQ functionality');
    
    // Implementación directa sin timeouts complejos
    document.querySelectorAll('.faq-question').forEach(question => {
        // Eliminar eventos previos si existen
        const newQuestion = question.cloneNode(true);
        if (question.parentNode) {
            question.parentNode.replaceChild(newQuestion, question);
        }
        
        // Añadir el evento de clic
        newQuestion.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obtener el elemento padre (faq-item)
            const faqItem = this.parentNode;
            console.log('FAQ item clicked:', faqItem);
            
            // Comprobar si ya está activo
            const wasActive = faqItem.classList.contains('active');
            
            // Cerrar todas las preguntas
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Si no estaba activo, abrirlo
            if (!wasActive) {
                faqItem.classList.add('active');
                console.log('FAQ item activated');
            } else {
                console.log('FAQ item deactivated');
            }
        });
    });
    
    // Activar la primera pregunta automáticamente para mostrar que funciona
    const firstQuestion = document.querySelector('.faq-question');
    if (firstQuestion) {
        setTimeout(() => {
            firstQuestion.click();
            console.log('First FAQ question automatically opened');
        }, 1000);
    }
    
    console.log('FAQ setup completed');
}

// EXPORT FUNCTIONS FOR TESTING
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setupMobileMenu,
        setupScrollEffects,
        setupAnimations,
        validateField,
        isValidEmail,
        setupFAQ
    };
}