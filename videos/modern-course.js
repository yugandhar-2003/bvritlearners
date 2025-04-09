// Modern Course Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Set the first tab as active by default
    if (tabButtons.length > 0 && tabContents.length > 0) {
        tabButtons[0].classList.add('active');
        tabContents[0].classList.add('active');
    }
    
    // Add click event listeners to tab buttons
    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            tabContents[index].classList.add('active');
            
            // Add animation to the tab content
            tabContents[index].classList.add('fade-in');
            
            // Optional: Add GSAP animation if available
            if (window.gsap) {
                gsap.from(tabContents[index], {
                    opacity: 0,
                    y: 20,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            }
        });
    });
    
    // Add hover animations with GSAP if available
    if (window.gsap) {
        tabButtons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                if (!button.classList.contains('active')) {
                    gsap.to(button, { y: -3, duration: 0.3, ease: 'power2.out' });
                }
            });
            
            button.addEventListener('mouseleave', () => {
                if (!button.classList.contains('active')) {
                    gsap.to(button, { y: 0, duration: 0.3, ease: 'power2.out' });
                }
            });
        });
    }
    
    // Ensure navigation is visible (if using the same header as main site)
    if (typeof ensureNavigationVisible === 'function') {
        ensureNavigationVisible();
    }
});
