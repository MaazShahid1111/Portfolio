/* =============================================
   MAAZ SHAHID — CYBERSECURITY PORTFOLIO
   script.js — Full Redesign 2025
   ============================================= */

/* ─── Loader ─── */
// Script is at bottom of body so DOM is already ready — plain timeout, no events needed.
setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.opacity = '0';
        loader.style.pointerEvents = 'none';
        setTimeout(() => loader.remove(), 600);
    }
    initScrollAnimations();
    animateOnScroll();
}, 800);

/* ─── Matrix Canvas ─── */
const canvas = document.getElementById('matrixCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let cols, drops;

    const resize = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        cols = Math.floor(canvas.width / 18);
        drops = Array(cols).fill(1);
    };

    window.addEventListener('resize', resize);
    resize();

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ∑Ψ∆ΩΦ';

    const drawMatrix = () => {
        ctx.fillStyle = 'rgba(5, 10, 14, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff88';
        ctx.font = '14px Share Tech Mono';

        drops.forEach((y, i) => {
            const char = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(char, i * 18, y * 18);

            if (y * 18 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        });
    };

    setInterval(drawMatrix, 55);
}

/* ─── Navigation ─── */
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link, .nav-cta');

navToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const current = window.scrollY;
    if (navbar) {
        if (current > 80) {
            navbar.style.borderBottomColor = 'rgba(0,255,136,0.25)';
        } else {
            navbar.style.borderBottomColor = 'rgba(0,255,136,0.15)';
        }
    }
    lastScroll = current;
});

// Active nav link highlight
const sections = document.querySelectorAll('section[id]');
const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            if (active) active.classList.add('active');
        }
    });
}, { threshold: 0.4 });

sections.forEach(s => navObserver.observe(s));

/* ─── Fade-up scroll animations ─── */
function initScrollAnimations() {
    const animatables = document.querySelectorAll(
        '.cert-card, .project-card, .skill-category, .contact-item, .timeline-item, .cert-featured-card, .about-terminal, .hero-stats'
    );

    animatables.forEach((el, i) => {
        el.classList.add('fade-up');
        el.style.transitionDelay = `${(i % 4) * 0.07}s`;
    });

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    animatables.forEach(el => fadeObserver.observe(el));
}

/* ─── Skill bars animation ─── */
function animateOnScroll() {
    const skillsSection = document.getElementById('skills');
    let skillsDone = false;

    if (!skillsSection) return;

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillsDone) {
                skillsDone = true;
                document.querySelectorAll('.skill-progress').forEach((bar, i) => {
                    const width = bar.getAttribute('data-width');
                    setTimeout(() => {
                        bar.style.width = width + '%';
                    }, i * 80 + 200);
                });
            }
        });
    }, { threshold: 0.3 });

    skillObserver.observe(skillsSection);
}

/* ─── Terminal typing effect ─── */
const terminalBody = document.getElementById('terminalBody');
if (terminalBody) {
    const lines = terminalBody.querySelectorAll('.t-line');
    lines.forEach((line, i) => {
        line.style.opacity = '0';
        line.style.transform = 'translateX(-10px)';
        line.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
        }, 1400 + i * 200);
    });
}

/* ─── Certificate Modal ─── */
const modal = document.getElementById('certModal');
const modalImg = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const closeBtn = document.getElementById('closeModal');

function openCert(src, title) {
    if (!modal || !modalImg) return;
    modalImg.src = src;
    if (modalTitle) modalTitle.textContent = title || '';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCert() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { modalImg.src = ''; }, 300);
}

// Cert cards (older certs)
document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', () => {
        const src = card.getAttribute('data-cert');
        const title = card.querySelector('h3')?.textContent || '';
        if (src) openCert(src, title);
    });
});

closeBtn?.addEventListener('click', closeCert);
modal?.addEventListener('click', (e) => { if (e.target === modal) closeCert(); });
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCert();
});

/* ─── Video optimization ─── */
const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
            video.play().catch(() => {});
        } else {
            video.pause();
        }
    });
}, { threshold: 0.25 });

document.querySelectorAll('video').forEach(video => {
    videoObserver.observe(video);
    video.addEventListener('loadeddata', () => {
        video.style.opacity = '1';
        video.style.transition = 'opacity 0.3s ease';
    });
});

/* ─── Ripple effect ─── */
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(0,255,136,0.25);
        transform: scale(0);
        animation: ripple-anim 0.6s linear;
        pointer-events: none;
        z-index: 10;
    }
    @keyframes ripple-anim {
        to { transform: scale(4); opacity: 0; }
    }
    .nav-link.active {
        color: var(--primary) !important;
    }
`;
document.head.appendChild(rippleStyle);

document.querySelectorAll('.btn, .cert-card, .cert-featured-card').forEach(el => {
    el.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.cssText = `
            width:${size}px; height:${size}px;
            left:${e.clientX - rect.left - size/2}px;
            top:${e.clientY - rect.top - size/2}px;
        `;
        ripple.classList.add('ripple');
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
    });
});

/* ─── Console message ─── */
console.log(`
%c
███╗   ███╗ █████╗  █████╗ ███████╗
████╗ ████║██╔══██╗██╔══██╗╚════██║
██╔████╔██║███████║███████║    ██╔╝
██║╚██╔╝██║██╔══██║██╔══██║   ██╔╝ 
██║ ╚═╝ ██║██║  ██║██║  ██║   ██║  
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝  

🔒 Maaz Shahid — Cybersecurity Researcher
🎓 NEDUET CS · Cybersecurity Specialization
🐛 Bug Bounty Hunter | AI Tool Builder
📧 sirmaazshahid1111@gmail.com
🔗 github.com/MaazShahid1111
`, 'color: #00ff88; font-family: monospace; font-size: 10px;');