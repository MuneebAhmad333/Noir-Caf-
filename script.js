// ===========================
// NOIR CAFÉ - INTERACTIVE FEATURES
// ===========================

// ===========================
// Mobile Video Autoplay Fix
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.hero-video');
    if (video) {
        // Try to play the video
        video.play().catch(error => {
            // If autoplay fails, show poster and let user tap to play
            console.log('Autoplay prevented:', error);
        });
    }
});

// ===========================
// Counter Animation for Stats
// ===========================

function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const target = parseInt(entry.target.closest('.stat-card').dataset.stat);
                animateCounter(entry.target, target);
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// ===========================
// Lightbox Gallery
// ===========================

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');
const galleryItems = document.querySelectorAll('[data-lightbox="gallery"]');

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        lightboxImage.src = img.src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

// ===========================
// Smooth Scroll Navigation
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===========================
// Scroll Reveal Animation
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe menu cards, gallery items, and other elements
document.querySelectorAll('.menu-card, .gallery-item, .info-card, .highlight').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ===========================
// Navbar Background on Scroll
// ===========================

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// ===========================
// Active Navigation Link on Scroll
// ===========================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===========================
// Parallax Effect (Optional - Subtle)
// ===========================

const heroContent = document.querySelector('.hero-content');
if (heroContent) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        if (scrollPosition < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrollPosition * 0.5}px)`;
            heroContent.style.opacity = 1 - scrollPosition / (window.innerHeight * 1.5);
        }
    });
}

// ===========================
// Video Fallback for Mobile
// ===========================

const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
    // Pause video on mobile for performance
    if (window.innerWidth < 768) {
        heroVideo.style.display = 'none';
    }

    // Handle video errors
    heroVideo.addEventListener('error', () => {
        console.log('Video failed to load');
        const videoPoster = heroVideo.getAttribute('poster');
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground && videoPoster) {
            heroBackground.style.backgroundImage = `url('${videoPoster}')`;
            heroBackground.style.backgroundSize = 'cover';
            heroBackground.style.backgroundPosition = 'center';
        }
    });
}

// ===========================
// Button Ripple Effect
// ===========================

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===========================
// Form Validation & CTA Enhancement
// ===========================

// Enhanced phone call functionality
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', (e) => {
        // Allow default behavior on mobile, preventDefault on desktop for notification
        if (!isMobileDevice()) {
            e.preventDefault();
            showNotification('Call: 0323-5646874');
        }
    });
});

// Enhanced map link functionality
document.querySelectorAll('a[href*="maps.google.com"]').forEach(link => {
    link.addEventListener('click', () => {
        showNotification('Opening directions...');
    });
});

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function showNotification(message) {
    // Simple notification (can be enhanced with toast library)
    console.log(message);
    // You can replace this with a toast notification library if desired
}

// ===========================
// Lazy Loading Images (Performance Optimization)
// ===========================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// Page Load Complete Animation
// ===========================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    animateCounters();
    console.log('🎭 Noir Café - Premium Experience Loaded');
});

// ===========================
// Performance Monitoring (Optional)
// ===========================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page Load Time: ${pageLoadTime}ms`);
    });
}

// ===========================
// Social Media Links Enhancement
// ===========================

document.querySelectorAll('.social-link').forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
    link.addEventListener('mouseenter', function() {
        this.style.color = '#f4a46a';
    });
    link.addEventListener('mouseleave', function() {
        this.style.color = '#c9a87c';
    });
});

// ===========================
// Contact Information Copy to Clipboard
// ===========================

const phoneNumber = '0323-5646874';
const locationText = 'Teen Meela Chowk, Near Total Parco, Attock City';

// Allow users to easily share contact info
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.title = 'Click to call or copy number';
});

// ===========================
// Accessibility Enhancements
// ===========================

// Ensure all interactive elements are keyboard accessible
document.querySelectorAll('.menu-card, .gallery-item').forEach(item => {
    if (!item.hasAttribute('tabindex')) {
        item.setAttribute('tabindex', '0');
    }
});

// ===========================
// Analytics Event Tracking (Optional)
// ===========================

// Track CTA clicks
function trackEvent(eventName, eventData = {}) {
    if (window.gtag) {
        gtag('event', eventName, eventData);
    }
    console.log(`📊 Event tracked: ${eventName}`, eventData);
}

// Track button clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const btnText = button.textContent.trim();
        trackEvent('button_click', { button_name: btnText });
    });
});

// Track gallery opens
document.querySelectorAll('[data-lightbox="gallery"]').forEach((item, index) => {
    item.addEventListener('click', () => {
        trackEvent('gallery_open', { item_index: index });
    });
});
