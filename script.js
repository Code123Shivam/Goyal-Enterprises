/* ============================================
   GOYAL ENTERPRISES - VANILLA JAVASCRIPT
   Modern, Interactive, Production-Ready
   ============================================ */

// ============================================
// GLOBAL STATE & VARIABLES
// ============================================
let currentLanguage = localStorage.getItem('language') || 'en';

// ============================================
// LANGUAGE TOGGLE SYSTEM
// ============================================
const languageToggle = document.getElementById('languageToggle');
const languageText = document.querySelector('.lang-text');

if (languageToggle) {
    languageToggle.addEventListener('click', toggleLanguage);
    // Apply saved language on load
    if (currentLanguage === 'hi') {
        applyLanguage('hi');
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'hi' : 'en';
    localStorage.setItem('language', currentLanguage);
    applyLanguage(currentLanguage);
}

function applyLanguage(lang) {
    const isHindi = lang === 'hi';
    
    document.querySelectorAll('[data-en]').forEach(el => {
        if (el.hasAttribute('data-hi')) {
            const text = isHindi ? el.getAttribute('data-hi') : el.getAttribute('data-en');
            
            // Handle title attributes separately
            if (el.tagName === 'A' || el.tagName === 'BUTTON') {
                if (el.hasAttribute('title')) {
                    const titleEn = el.getAttribute('title');
                    const titleHi = el.getAttribute('data-hi');
                    if (titleHi && titleHi.startsWith('title:')) {
                        el.setAttribute('title', titleHi.replace('title: ', ''));
                    }
                }
            }
            
            // Update text content
            if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
                el.textContent = text;
            } else if (!el.querySelector('svg')) {
                el.textContent = text;
            }
        }
    });
    
    // Update language toggle button
    if (languageText) {
        languageText.textContent = isHindi ? 'English' : 'हिंदी';
    }
}

// ============================================
// NAVBAR INTERACTIONS
// ============================================
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
}

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    menuToggle.querySelector('span:nth-child(1)').style.transform = 
        navMenu.classList.contains('active') ? 'rotate(45deg) translateY(10px)' : 'none';
    menuToggle.querySelector('span:nth-child(2)').style.opacity = 
        navMenu.classList.contains('active') ? '0' : '1';
    menuToggle.querySelector('span:nth-child(3)').style.transform = 
        navMenu.classList.contains('active') ? 'rotate(-45deg) translateY(-10px)' : 'none';
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
        resetMenuToggleStyles();
    });
});

function resetMenuToggleStyles() {
    if (menuToggle) {
        menuToggle.querySelectorAll('span').forEach(span => {
            span.style.transform = 'none';
            span.style.opacity = '1';
        });
    }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Show/hide scroll to top button
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        scrollTopBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
    }
});

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================
function setupScrollReveal() {
    const elements = document.querySelectorAll('[data-reveal]');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.animation = `cardReveal 0.6s ease forwards`;
                        entry.target.style.opacity = '1';
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        elements.forEach(el => {
            observer.observe(el);
        });
    } else {
        // Fallback for older browsers
        elements.forEach((el, index) => {
            el.style.animation = `cardReveal 0.6s ease forwards`;
            el.style.opacity = '1';
        });
    }
}

document.addEventListener('DOMContentLoaded', setupScrollReveal);

// ============================================
// WHATSAPP INQUIRY SYSTEM
// ============================================
function sendWhatsAppInquiry(productName) {
    const phoneNumber = '918989774040';
    const message = `Hello! I am interested in ${productName}. Can you please provide more details and pricing information?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
}

// Make all inquiry buttons functional
document.querySelectorAll('.btn-inquiry').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const productName = btn.parentElement.querySelector('.product-name').textContent.trim();
        sendWhatsAppInquiry(productName);
    });
});

// ============================================
// CONTACT FORM HANDLING
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const phone = contactForm.querySelector('input[type="tel"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        if (name && email && phone && message) {
            // Create WhatsApp message
            const fullMessage = `New Inquiry:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
            const encodedMessage = encodeURIComponent(fullMessage);
            const whatsappURL = `https://wa.me/918989774040?text=${encodedMessage}`;
            
            // Open WhatsApp
            window.open(whatsappURL, '_blank');
            
            // Show success message
            showFormFeedback('Thank you! Your inquiry has been sent via WhatsApp.', 'success');
            
            // Reset form
            contactForm.reset();
        } else {
            showFormFeedback('Please fill in all fields.', 'error');
        }
    });
}

function showFormFeedback(message, type) {
    const feedbackEl = document.createElement('div');
    feedbackEl.className = `form-feedback ${type}`;
    feedbackEl.textContent = message;
    feedbackEl.style.cssText = `
        padding: 15px;
        border-radius: 10px;
        margin-top: 15px;
        font-weight: 600;
        animation: slideUpFade 0.3s ease;
        background: ${type === 'success' ? '#4caf50' : '#f44336'};
        color: white;
    `;
    
    const form = document.getElementById('contactForm');
    if (form) {
        const existingFeedback = form.parentElement.querySelector('.form-feedback');
        if (existingFeedback) existingFeedback.remove();
        form.parentElement.appendChild(feedbackEl);
        
        setTimeout(() => {
            feedbackEl.remove();
        }, 5000);
    }
}

// ============================================
// SMOOTH SCROLLING
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// FLOATING BUTTONS ANIMATIONS
// ============================================
function initializeFloatingButtons() {
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    const callBtn = document.querySelector('.call-btn');
    
    if (whatsappBtn) {
        whatsappBtn.classList.add('pulse');
    }
    
    // Click handlers
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://wa.me/918989774040?text=Hello Goyal Enterprises, I am interested in your products', '_blank');
        });
    }
    
    if (callBtn) {
        callBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'tel:+91-8989774040';
        });
    }
}

document.addEventListener('DOMContentLoaded', initializeFloatingButtons);

// ============================================
// SCROLL TO TOP FUNCTIONALITY
// ============================================
const scrollTopBtn = document.getElementById('scrollTopBtn');

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// HERO SCROLL INDICATOR
// ============================================
const heroScroll = document.querySelector('.hero-scroll');

if (heroScroll) {
    heroScroll.addEventListener('click', () => {
        const productsSection = document.getElementById('products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// ============================================
// LAZY LOAD ANIMATIONS
// ============================================
function setupLazyAnimations() {
    const elements = document.querySelectorAll('[data-reveal], .service-card');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    }
}

document.addEventListener('DOMContentLoaded', setupLazyAnimations);

// ============================================
// UTILITY: Stagger animations for multiple elements
// ============================================
function staggerElements(selector, delay = 100) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * delay}ms`;
    });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Stagger product cards
    staggerElements('.product-card', 100);
    staggerElements('.service-card', 100);
    
    // Ensure all elements are visible after load
    document.querySelectorAll('[data-reveal]').forEach(el => {
        if (el.style.opacity === '0' || el.style.opacity === '') {
            el.style.opacity = '1';
        }
    });
});

// ============================================
// ACCESSIBILITY: Keyboard navigation
// ============================================
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        resetMenuToggleStyles();
    }
});

// ============================================
// PERFORMANCE: Debounce scroll events
// ============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// PRODUCTION: Analytics tracking (Optional)
// ============================================
function trackEvent(eventName, description) {
    // This can be connected to Google Analytics or other tracking services
    console.log(`Event: ${eventName} - ${description}`);
}

// Track important interactions
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
        trackEvent('whatsapp_click', 'User clicked WhatsApp button');
    });
}

// ============================================
// RESPONSIVE: Handle window resize
// ============================================
window.addEventListener('resize', debounce(() => {
    if (window.innerWidth > 768 && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        resetMenuToggleStyles();
    }
}, 250));

// ============================================
// THEME: Dark mode toggle (Optional for future)
// ============================================
function initDarkMode() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (prefersDark && !savedTheme)) {
        document.documentElement.style.colorScheme = 'dark';
    }
}

// Uncomment to enable dark mode
// document.addEventListener('DOMContentLoaded', initDarkMode);

// ============================================
// CONSOLE MESSAGE (For fun!)
// ============================================
console.log('%cGoyal Enterprises', 'color: #667eea; font-size: 24px; font-weight: bold;');
console.log('%cPremium Hardware & Plywood Solutions', 'color: #764ba2; font-size: 14px;');
console.log('%cBuilt with ❤️ using HTML5, CSS3 & Vanilla JavaScript', 'color: #25d366; font-size: 12px;');
