// GSAP Animation Utilities

// Initialize GSAP animations on page load
function initGSAPAnimations() {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  
  // Animate navbar on scroll
  animateNavbar();
  
  // Animate hero section
  animateHero();
  
  // Animate cards on scroll
  animateCards();
  
  // Animate sections on scroll
  animateSections();
}

// Navbar animations
function animateNavbar() {
  const navbar = document.querySelector('nav');
  if (!navbar) return;
  
  // Initial state
  gsap.set(navbar, { 
    backgroundColor: 'rgba(255, 255, 255, 0)',
    boxShadow: '0 0 0 rgba(0, 0, 0, 0)'
  });
  
  // Scroll animation
  ScrollTrigger.create({
    start: 'top top',
    end: '+=100',
    onUpdate: (self) => {
      gsap.to(navbar, { 
        backgroundColor: `rgba(255, 255, 255, ${self.progress})`,
        boxShadow: `0 4px 20px rgba(0, 0, 0, ${self.progress * 0.1})`,
        duration: 0.3
      });
    }
  });
  
  // Animate nav items
  const navItems = document.querySelectorAll('.nav-items > div');
  gsap.from(navItems, {
    opacity: 0,
    y: -20,
    stagger: 0.1,
    duration: 0.8,
    ease: 'power2.out',
    delay: 0.5
  });
}

// Hero section animations
function animateHero() {
  const heroSection = document.querySelector('#carouselExampleIndicators');
  if (!heroSection) return;
  
  gsap.from(heroSection, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
  });
  
  // Animate hero text
  const heroText = document.querySelectorAll('.carousel-caption h5, .carousel-caption p');
  gsap.from(heroText, {
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
  const cards = document.querySelectorAll('.tutorial-card');
  if (cards.length === 0) return;
  
  cards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top bottom-=100',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: index * 0.1,
      ease: 'power2.out'
    });
  });
  
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
  const sections = document.querySelectorAll('.container > .row, .containeru');
  if (sections.length === 0) return;
  
  sections.forEach(section => {
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

// Button hover animations
function initButtonAnimations() {
  const buttons = document.querySelectorAll('.button-container');
  
  buttons.forEach(button => {
    const iconContainer = button.querySelector('.icon-container');
    
    button.addEventListener('mouseenter', () => {
      gsap.to(iconContainer, {
        width: 'calc(100% - 0.6em)',
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(iconContainer, {
        width: '2.2em',
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });
}

// Text reveal animations
function textRevealAnimation() {
  const textElements = document.querySelectorAll('h1, h2, h3, .subtitle');
  
  textElements.forEach(element => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top bottom-=50',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out'
    });
  });
}

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Wait for GSAP to be loaded
  if (typeof gsap !== 'undefined') {
    initGSAPAnimations();
    initButtonAnimations();
    textRevealAnimation();
  } else {
    console.error('GSAP not loaded');
  }
});
