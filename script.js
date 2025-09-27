// Navigation functionality
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
    }
});

// Skills animation
const skillsSection = document.getElementById('skills');
const skillBars = document.querySelectorAll('.skill-progress');
let skillsAnimated = false;

const animateSkills = () => {
    if (!skillsAnimated) {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            setTimeout(() => {
                bar.style.width = width + '%';
            }, 300);
        });
        skillsAnimated = true;
    }
};

// Intersection Observer for skills animation
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
        }
    });
}, {
    threshold: 0.5
});

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Certificate modal functionality
const modal = document.getElementById('certModal');
const modalImg = document.getElementById('modalImage');
const closeModal = document.querySelector('.close');
const certCards = document.querySelectorAll('.cert-card');

// Open certificate modal
certCards.forEach(card => {
    card.addEventListener('click', () => {
        const certPath = card.getAttribute('data-cert');
        modalImg.src = certPath;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Close modal functionality
const closeModalFunction = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

closeModal.addEventListener('click', closeModalFunction);

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunction();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModalFunction();
    }
});

// Intersection Observer for fade-in animations
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

// Add fade-in animation to cards and sections
const animateElements = document.querySelectorAll('.cert-card, .project-card, .skill-item, .contact-item, .timeline-item');

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Video play/pause optimization for performance
const videos = document.querySelectorAll('video');

const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
            // Video is in viewport, allow it to be played
            video.preload = 'metadata';
        } else {
            // Video is out of viewport, pause if playing
            if (!video.paused) {
                video.pause();
            }
        }
    });
}, {
    threshold: 0.25
});

videos.forEach(video => {
    videoObserver.observe(video);
    
    // Add loading state
    video.addEventListener('loadstart', () => {
        video.style.opacity = '0.7';
    });
    
    video.addEventListener('loadeddata', () => {
        video.style.opacity = '1';
    });
});

// Typing animation for hero section
const heroTitle = document.querySelector('.hero-title');
const heroSubtitle = document.querySelector('.hero-subtitle');

if (heroTitle && heroSubtitle) {
    const titleText = heroTitle.textContent;
    const subtitleText = heroSubtitle.textContent;
    
    heroTitle.textContent = '';
    heroSubtitle.textContent = '';
    
    let titleIndex = 0;
    let subtitleIndex = 0;
    
    const typeTitle = () => {
        if (titleIndex < titleText.length) {
            heroTitle.textContent += titleText[titleIndex];
            titleIndex++;
            setTimeout(typeTitle, 100);
        } else {
            setTimeout(typeSubtitle, 300);
        }
    };
    
    const typeSubtitle = () => {
        if (subtitleIndex < subtitleText.length) {
            heroSubtitle.textContent += subtitleText[subtitleIndex];
            subtitleIndex++;
            setTimeout(typeSubtitle, 80);
        }
    };
    
    // Start typing animation after page load
    window.addEventListener('load', () => {
        setTimeout(typeTitle, 500);
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroVisual) {
        const speed = scrolled * 0.5;
        heroVisual.style.transform = `translateY(${speed}px)`;
    }
});

// Add click ripple effect to buttons
const buttons = document.querySelectorAll('.btn, .cert-card, .project-card');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(0, 255, 136, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .btn, .cert-card, .project-card {
        position: relative;
        overflow: hidden;
    }
`;

document.head.appendChild(style);

// Contact form functionality (if needed in future)
const contactButtons = document.querySelectorAll('.social-link');

contactButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Add click animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'translateY(-5px)';
        }, 100);
    });
});

// Initialize AOS (Animate On Scroll) alternative
const initScrollAnimations = () => {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(el => {
        scrollObserver.observe(el);
    });
};

// Loading screen
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
    
    // Initialize scroll animations
    initScrollAnimations();
});

// Performance optimization: Debounce scroll events
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Debounced scroll handler
const debouncedScrollHandler = debounce(() => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroVisual) {
        const speed = scrolled * 0.3;
        heroVisual.style.transform = `translateY(${speed}px)`;
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Console welcome message
console.log(`
🔒 Welcome to Maaz Shahid's Cybersecurity Portfolio! 
🛡️ Securing the digital world, one line of code at a time.
📧 Contact: sirmaazshahid1111@gmail.com
🔗 LinkedIn: linkedin.com/in/maaz-shahid-556193347
`);