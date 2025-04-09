// Advanced Modern Animations for BVRIT Learning Platform - Dark Theme with Blue Accents

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP animations if GSAP is available
    if (typeof gsap !== 'undefined') {
        // Add a small delay to ensure all elements are properly loaded
        setTimeout(() => {
            initGSAPAnimations();
            // Add particle effects to the hero section
            initParticleEffects();
        }, 100);
    } else {
        // Fallback to CSS animations if GSAP is not available
        console.warn('GSAP not loaded, using CSS animations as fallback');
        document.body.classList.add('use-css-animations');
    }

    // Initialize advanced button hover effects
    initAdvancedButtonEffects();

    // Initialize navbar scroll effects with glow
    initNavbarScrollEffects();

    // Initialize magnetic effect on buttons
    initMagneticEffect();
});

// Create particle effect for hero section
function initParticleEffects() {
    const heroContent = document.querySelector('.hero-content');
    if (!heroContent) return;

    // Create particle container
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.position = 'absolute';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    particleContainer.style.overflow = 'hidden';
    particleContainer.style.pointerEvents = 'none';
    particleContainer.style.zIndex = '2';

    heroContent.appendChild(particleContainer);

    // Create particles
    for (let i = 0; i < 30; i++) {
        createParticle(particleContainer);
    }
}

// Create individual particle
function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 5 + 1 + 'px';
    particle.style.height = particle.style.width;

    // Use blue colors that match our theme
    const blueColors = [
        'rgba(0, 115, 245, ' + (Math.random() * 0.5 + 0.2) + ')',
        'rgba(51, 143, 255, ' + (Math.random() * 0.5 + 0.2) + ')',
        'rgba(0, 87, 183, ' + (Math.random() * 0.5 + 0.2) + ')'
    ];
    particle.style.backgroundColor = blueColors[Math.floor(Math.random() * blueColors.length)];

    // Add glow effect
    particle.style.boxShadow = '0 0 ' + (Math.random() * 5 + 2) + 'px ' + particle.style.backgroundColor;
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';

    // Random starting position
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;

    particle.style.left = startX + '%';
    particle.style.top = startY + '%';

    container.appendChild(particle);

    // Animate with GSAP
    gsap.to(particle, {
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 200,
        opacity: 0,
        scale: Math.random() * 1.5 + 0.5,
        duration: Math.random() * 10 + 5,
        ease: 'power1.out',
        onComplete: function() {
            if (particle.parentNode === container) {
                container.removeChild(particle);
            }
            createParticle(container);
        }
    });
}

// Initialize GSAP animations
function initGSAPAnimations() {
    // Register ScrollTrigger plugin if available
    if (gsap.registerPlugin && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    // Animate navbar
    animateNavbar();

    // Animate hero section
    animateHeroSection();

    // Animate cards
    animateCards();

    // Animate sections
    animateSections();

    // Animate footer
    animateFooter();
}

// Navbar animations
function animateNavbar() {
    const navbar = document.querySelector('.navbar-modern');
    if (!navbar) return;

    gsap.from(navbar, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    const navItems = document.querySelectorAll('.nav-item-modern');
    gsap.from(navItems, {
        y: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        delay: 0.5,
        ease: 'power2.out'
    });

    // Change navbar on scroll
    if (ScrollTrigger) {
        ScrollTrigger.create({
            start: 'top top',
            end: '+=100',
            onUpdate: (self) => {
                const progress = self.progress;
                gsap.to(navbar, {
                    backgroundColor: `rgba(255, 255, 255, ${progress})`,
                    boxShadow: `0 4px 20px rgba(0, 0, 0, ${progress * 0.1})`,
                    duration: 0.3
                });
            }
        });
    }
}

// Hero section animations
function animateHeroSection() {
    const heroSection = document.querySelector('.hero-modern');
    if (!heroSection) return;

    gsap.from(heroSection, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out'
    });

    // Animate carousel captions
    const carouselCaptions = document.querySelectorAll('.carousel-caption-modern h5, .carousel-caption-modern p');
    gsap.from(carouselCaptions, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out'
    });
}

// Card animations
function animateCards() {
    const cards = document.querySelectorAll('.card-modern');
    if (!cards.length) return;

    if (ScrollTrigger) {
        cards.forEach((card) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: 'power2.out'
            });
        });
    } else {
        // Fallback without ScrollTrigger
        gsap.from(cards, {
            opacity: 0,
            y: 50,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power2.out',
            delay: 0.5
        });
    }

    // Add hover animations
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// Section animations
function animateSections() {
    const sections = document.querySelectorAll('.section-modern');
    if (!sections.length) return;

    if (ScrollTrigger) {
        sections.forEach((section) => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom-=100',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power2.out'
            });
        });
    }

    // Animate section headings
    const sectionHeadings = document.querySelectorAll('.section-modern h2');
    if (ScrollTrigger) {
        sectionHeadings.forEach((heading) => {
            gsap.from(heading, {
                scrollTrigger: {
                    trigger: heading,
                    start: 'top bottom-=100',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: 'power2.out'
            });
        });
    }
}

// Footer animations
function animateFooter() {
    const footer = document.querySelector('.footer-modern');
    if (!footer) return;

    if (ScrollTrigger) {
        gsap.from(footer, {
            scrollTrigger: {
                trigger: footer,
                start: 'top bottom-=50',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out'
        });
    }
}

// Advanced button hover effects with glow and ripple
function initAdvancedButtonEffects() {
    const buttons = document.querySelectorAll('.button-modern');

    buttons.forEach(button => {
        const iconContainer = button.querySelector('.icon-container');
        if (!iconContainer) return;

        // Create glow effect element
        const glowEffect = document.createElement('div');
        glowEffect.className = 'button-glow';
        glowEffect.style.position = 'absolute';
        glowEffect.style.top = '0';
        glowEffect.style.left = '0';
        glowEffect.style.width = '100%';
        glowEffect.style.height = '100%';
        glowEffect.style.borderRadius = 'inherit';
        glowEffect.style.boxShadow = '0 0 0 rgba(0, 115, 245, 0)';
        glowEffect.style.transition = 'box-shadow 0.5s ease';
        glowEffect.style.pointerEvents = 'none';
        glowEffect.style.zIndex = '-1';

        button.style.position = 'relative';
        button.appendChild(glowEffect);

        // Mouse enter effect
        button.addEventListener('mouseenter', () => {
            if (typeof gsap !== 'undefined') {
                // Animate icon container
                gsap.to(iconContainer, {
                    width: 'calc(100% - 1rem)',
                    duration: 0.5,
                    ease: 'power2.out'
                });

                // Animate glow effect
                gsap.to(glowEffect, {
                    boxShadow: '0 0 20px 5px rgba(0, 115, 245, 0.5)',
                    duration: 0.5,
                    ease: 'power2.out'
                });

                // Scale button slightly
                gsap.to(button, {
                    scale: 1.03,
                    duration: 0.5,
                    ease: 'back.out(1.5)'
                });

                // Create ripple effect
                createRippleEffect(button, event);
            } else {
                // CSS fallback
                iconContainer.style.width = 'calc(100% - 1rem)';
                glowEffect.style.boxShadow = '0 0 20px 5px rgba(0, 115, 245, 0.5)';
            }
        });

        // Mouse leave effect
        button.addEventListener('mouseleave', () => {
            if (typeof gsap !== 'undefined') {
                // Animate icon container back
                gsap.to(iconContainer, {
                    width: '2rem',
                    duration: 0.5,
                    ease: 'power2.out'
                });

                // Remove glow effect
                gsap.to(glowEffect, {
                    boxShadow: '0 0 0 rgba(0, 115, 245, 0)',
                    duration: 0.5,
                    ease: 'power2.out'
                });

                // Scale button back
                gsap.to(button, {
                    scale: 1,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            } else {
                // CSS fallback
                iconContainer.style.width = '2rem';
                glowEffect.style.boxShadow = '0 0 0 rgba(0, 115, 245, 0)';
            }
        });

        // Click effect
        button.addEventListener('click', (event) => {
            if (typeof gsap !== 'undefined') {
                // Quick scale down and up
                gsap.timeline()
                    .to(button, {
                        scale: 0.95,
                        duration: 0.1,
                        ease: 'power2.out'
                    })
                    .to(button, {
                        scale: 1,
                        duration: 0.3,
                        ease: 'back.out(1.5)'
                    });

                // Create ripple effect
                createRippleEffect(button, event);
            }
        });
    });
}

// Create ripple effect on button click
function createRippleEffect(button, event) {
    // Create ripple element
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    ripple.style.transform = 'scale(0)';
    ripple.style.pointerEvents = 'none';

    // Position ripple based on click or center
    let x, y;
    if (event) {
        const rect = button.getBoundingClientRect();
        x = event.clientX - rect.left;
        y = event.clientY - rect.top;
    } else {
        x = button.offsetWidth / 2;
        y = button.offsetHeight / 2;
    }

    // Set ripple size based on button dimensions
    const size = Math.max(button.offsetWidth, button.offsetHeight) * 2;
    ripple.style.width = size + 'px';
    ripple.style.height = size + 'px';
    ripple.style.left = x - (size / 2) + 'px';
    ripple.style.top = y - (size / 2) + 'px';

    button.appendChild(ripple);

    // Animate ripple
    gsap.to(ripple, {
        scale: 1,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: () => {
            if (ripple.parentNode === button) {
                button.removeChild(ripple);
            }
        }
    });
}

// Magnetic effect for buttons
function initMagneticEffect() {
    const buttons = document.querySelectorAll('.button-modern');

    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            if (typeof gsap === 'undefined') return;

            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;

            gsap.to(button, {
                x: deltaX * 10,
                y: deltaY * 5,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', () => {
            if (typeof gsap === 'undefined') return;

            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.3)'
            });
        });
    });
}

// Navbar scroll effects with glow for dark theme
function initNavbarScrollEffects() {
    const navbar = document.querySelector('.navbar-modern');
    if (!navbar) return;

    // Create glow effect for navbar
    const navbarGlow = document.createElement('div');
    navbarGlow.className = 'navbar-glow';
    navbarGlow.style.position = 'absolute';
    navbarGlow.style.bottom = '-1px';
    navbarGlow.style.left = '0';
    navbarGlow.style.width = '100%';
    navbarGlow.style.height = '1px';
    navbarGlow.style.background = 'linear-gradient(90deg, transparent, rgba(0, 115, 245, 0.7), transparent)';
    navbarGlow.style.opacity = '0';
    navbarGlow.style.transition = 'opacity 0.5s ease';
    navbarGlow.style.pointerEvents = 'none';

    navbar.style.position = 'relative';
    navbar.appendChild(navbarGlow);

    // Handle scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');

            // Add glow effect
            if (typeof gsap !== 'undefined') {
                gsap.to(navbarGlow, {
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power2.out'
                });

                // Add box shadow
                gsap.to(navbar, {
                    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 115, 245, 0.2)',
                    duration: 0.5,
                    ease: 'power2.out'
                });

                // Animate background color
                gsap.to(navbar, {
                    backgroundColor: 'rgba(18, 18, 18, 0.95)',
                    duration: 0.5,
                    ease: 'power2.out'
                });
            } else {
                // CSS fallback
                navbarGlow.style.opacity = '1';
                navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 115, 245, 0.2)';
                navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
            }
        } else {
            navbar.classList.remove('scrolled');

            // Remove glow effect
            if (typeof gsap !== 'undefined') {
                gsap.to(navbarGlow, {
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.out'
                });

                // Remove box shadow
                gsap.to(navbar, {
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    duration: 0.5,
                    ease: 'power2.out'
                });

                // Animate background color
                gsap.to(navbar, {
                    backgroundColor: 'rgba(18, 18, 18, 0.8)',
                    duration: 0.5,
                    ease: 'power2.out'
                });
            } else {
                // CSS fallback
                navbarGlow.style.opacity = '0';
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
                navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.8)';
            }
        }
    });

    // Trigger scroll event to initialize navbar state
    window.dispatchEvent(new Event('scroll'));
}

// Utility function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Add CSS animation classes when elements come into view (fallback for no GSAP)
function handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .slide-in-right, .slide-in-left');

    animatedElements.forEach(element => {
        if (isInViewport(element) && !element.classList.contains('animated')) {
            element.classList.add('animated');
        }
    });
}

// Add scroll listener for CSS fallback animations
if (document.body.classList.contains('use-css-animations')) {
    window.addEventListener('scroll', handleScrollAnimations);
    // Initial check
    handleScrollAnimations();
}
