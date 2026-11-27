/* ===================================================
   RESCUEFLEET — COMPONENTS.JS
   Shared navbar, footer, dark/RTL toggles, utilities
   =================================================== */

(function() {
    try {
        if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
        if (!window.location.hash) {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            if (document.documentElement) document.documentElement.scrollTop = 0;
            if (document.body) document.body.scrollTop = 0;
        }
        window.addEventListener('pageshow', function() {
            if (!window.location.hash) {
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            }
        });
        const savedDark = localStorage.getItem('rf-dark');
        if (savedDark === '1') document.documentElement.classList.add('dark');
        else if (savedDark === '0') document.documentElement.classList.remove('dark');
        const savedDir = localStorage.getItem('rf-rtl');
        if (savedDir === '1') document.documentElement.setAttribute('dir', 'rtl');
        else if (savedDir === '0') document.documentElement.setAttribute('dir', 'ltr');
    } catch (e) {}
})();

/* ---- LOGO SVG ---- */
const LOGO_SVG = `<svg width="38" height="38" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#D35400"/><stop offset="100%" stop-color="#E67E22"/></linearGradient></defs>
  <rect width="100" height="100" rx="18" fill="url(#logoBg)"/>
  <path d="M20 65h15V45h12l8-12h10v32h15" stroke="white" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="30" cy="68" r="6" fill="white" stroke="#D35400" stroke-width="2.5"/>
  <circle cx="70" cy="68" r="6" fill="white" stroke="#D35400" stroke-width="2.5"/>
</svg>`;

const BRAND_LOGO_HTML = `${LOGO_SVG}
                <div class="nav-logo-text">
                    <span class="brand-top">Roadside Assistance</span>
                    <span class="brand-bottom">RescueFleet</span>
                </div>`;

/* ---- FontAwesome Icon Helper ---- */
const ICONS = {
    sun: '<i class="fa-solid fa-sun"></i>',
    moon: '<i class="fa-solid fa-moon"></i>',
    rtl: '<i class="fa-solid fa-right-left"></i>',
    menu: '<i class="fa-solid fa-bars"></i>',
    x: '<i class="fas fa-xmark"></i>',
    chevronDown: '<i class="fas fa-chevron-down"></i>',
    facebook: '<i class="fab fa-facebook-f"></i>',
    instagram: '<i class="fab fa-instagram"></i>',
    linkedin: '<i class="fab fa-linkedin-in"></i>',
    twitter: '<i class="fab fa-x-twitter"></i>',
    eye: '<i class="fas fa-eye"></i>',
    eyeOff: '<i class="fas fa-eye-slash"></i>',
};

/* ---- SOCIAL SVGs (for OAuth) ---- */
const GOOGLE_SVG = `<svg width="20" height="20" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.9 33.5 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.2-2.7-.4-3.9z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.5 18.8 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.8-3.5-11.3-8.3l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.2-2.7-.4-3.9z"/></svg>`;
const APPLE_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.32-1.96 4.41-3.74 4.25z"/></svg>`;
const FACEBOOK_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.13 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg>`;

/* ---- CURRENT PAGE ---- */
function getCurrentPage() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    return path;
}

/* ---- NAVBAR ---- */
function renderNavbar() {
    const page = getCurrentPage();
    const links = [
        { href: 'index.html', label: 'Home' },
        { href: 'home2.html', label: 'Home 2' },
        { href: 'about.html', label: 'About' },
        { href: 'services.html', label: 'Services' },
        { href: 'coverage.html', label: 'Coverage' },
        { href: 'contact.html', label: 'Contact' },
    ];

    const isDark = document.documentElement.classList.contains('dark');
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

    const navLinksHtml = links.map(l => {
        const isActive = page === l.href || (page === '' && l.href === 'index.html');
        return `<a href="${l.href}" class="nav-link ${isActive ? 'active' : ''}">${l.label}</a>`;
    }).join('');

    const mobLinksHtml = links.map(l => {
        const isActive = page === l.href || (page === '' && l.href === 'index.html');
        return `<a href="${l.href}" class="mob-link ${isActive ? 'active' : ''}">${l.label}</a>`;
    }).join('');

    const html = `
    <nav class="navbar" id="navbar">
        <div class="nav-inner">
            <a href="index.html" class="nav-logo" aria-label="RescueFleet Home">
                ${BRAND_LOGO_HTML}
            </a>
            <div class="nav-links">${navLinksHtml}</div>
            <div class="nav-actions">
                <button onclick="toggleTheme()" class="nav-icon-btn" id="darkToggleNav" aria-label="Toggle dark mode" title="Toggle Dark Mode">
                    <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
                </button>
                <button onclick="toggleDir()" class="nav-icon-btn${isRTL ? ' rtl-active' : ''}" id="rtlToggleNav" aria-label="Toggle RTL" title="Toggle RTL">
                    ${ICONS.rtl}
                </button>
                <a href="login.html" class="btn btn-primary btn-sm nav-cta-btn">Sign In</a>
                <a href="dashboard.html" class="btn-nav-dashboard ${page === 'dashboard.html' ? 'active' : ''}">Dashboard</a>
                <button class="mobile-menu-btn" id="mobileMenuBtn" onclick="toggleMobileMenu(event)" aria-label="Open menu" aria-expanded="false">
                    <span class="mobile-menu-icon">${ICONS.menu}</span>
                </button>
            </div>
        </div>
        <div class="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            ${mobLinksHtml}
            <div class="mob-actions">
                <a href="login.html" class="btn btn-primary w-full">Sign In</a>
                <a href="dashboard.html" class="btn btn-secondary w-full">Dashboard</a>
            </div>
            <div class="mob-toggles">
                <button onclick="toggleTheme()" class="nav-icon-btn" id="darkToggleMob" aria-label="Toggle dark mode" title="Toggle Theme">
                    <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
                </button>
                <button onclick="toggleDir()" class="nav-icon-btn${isRTL ? ' rtl-active' : ''}" id="rtlToggleMob" aria-label="Toggle RTL" title="Toggle Direction">
                    ${ICONS.rtl}
                </button>
            </div>
        </div>
    </nav>
    <div class="mobile-backdrop" id="mobile-backdrop" onclick="toggleMobileMenu(event)"></div>
    <div class="navbar-spacer"></div>`;

    const container = document.getElementById('navbar-placeholder') || document.getElementById('main-nav') || document.getElementById('navbar');
    if (container) {
        if (container.id === 'navbar') container.outerHTML = html;
        else container.innerHTML = html;
    } else document.body.insertAdjacentHTML('afterbegin', html);
    initNavbar();
}

function toggleMobileMenu(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-backdrop');
    const btn = document.getElementById('mobileMenuBtn') || document.querySelector('.mobile-menu-btn');
    const iconEl = document.querySelector('.mobile-menu-icon');
    if (!menu) return;
    const isOpen = menu.classList.contains('open');
    if (isOpen) {
        menu.classList.remove('open');
        if (backdrop) backdrop.classList.remove('open');
        if (btn) btn.setAttribute('aria-expanded', 'false');
        if (iconEl) iconEl.innerHTML = ICONS.menu;
    } else {
        menu.classList.add('open');
        if (backdrop) backdrop.classList.add('open');
        if (btn) btn.setAttribute('aria-expanded', 'true');
        if (iconEl) iconEl.innerHTML = ICONS.x;
    }
}
window.toggleMobileMenu = toggleMobileMenu;

function initNavbar() {
    const nav = document.getElementById('navbar');
    if (nav) {
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 15);
        }, { passive: true });
    }

    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-backdrop');
    const btn = document.getElementById('mobileMenuBtn') || document.querySelector('.mobile-menu-btn');

    if (menu) {
        menu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', (e) => {
                const href = a.getAttribute('href');
                const currentPage = getCurrentPage();
                if (href) {
                    const targetPage = href.split('#')[0].split('?')[0];
                    if ((targetPage === currentPage || (targetPage === 'index.html' && (currentPage === '' || currentPage === 'index.html'))) && !href.includes('#')) {
                        e.preventDefault();
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }
                }
                menu.classList.remove('open');
                if (backdrop) backdrop.classList.remove('open');
                const iconEl = document.querySelector('.mobile-menu-icon');
                if (iconEl) iconEl.innerHTML = ICONS.menu;
                if (btn) btn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    document.querySelectorAll('.nav-links a').forEach(a => {
        a.addEventListener('click', (e) => {
            const href = a.getAttribute('href');
            const currentPage = getCurrentPage();
            if (href) {
                const targetPage = href.split('#')[0].split('?')[0];
                if ((targetPage === currentPage || (targetPage === 'index.html' && (currentPage === '' || currentPage === 'index.html'))) && !href.includes('#')) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }
            }
        });
    });

    document.addEventListener('click', function(e) {
        if (!menu || !menu.classList.contains('open')) return;
        if (btn && (btn === e.target || btn.contains(e.target))) return;
        if (menu.contains(e.target)) return;
        menu.classList.remove('open');
        if (backdrop) backdrop.classList.remove('open');
        const iconEl = document.querySelector('.mobile-menu-icon');
        if (iconEl) iconEl.innerHTML = ICONS.menu;
        if (btn) btn.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu && menu.classList.contains('open')) {
            menu.classList.remove('open');
            if (backdrop) backdrop.classList.remove('open');
            const iconEl = document.querySelector('.mobile-menu-icon');
            if (iconEl) iconEl.innerHTML = ICONS.menu;
            if (btn) btn.setAttribute('aria-expanded', 'false');
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024 && menu && menu.classList.contains('open')) {
            menu.classList.remove('open');
            if (backdrop) backdrop.classList.remove('open');
            const iconEl = document.querySelector('.mobile-menu-icon');
            if (iconEl) iconEl.innerHTML = ICONS.menu;
            if (btn) btn.setAttribute('aria-expanded', 'false');
        }
    }, { passive: true });

    updateDarkIcons();
    updateRTLIndicators();
}

/* ---- FOOTER ---- */
function renderFooter() {
    const html = `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="index.html" class="nav-logo footer-logo" aria-label="RescueFleet Home">
                        ${BRAND_LOGO_HTML}
                    </a>
                    <p>Your trusted 24/7 roadside assistance partner. Fast towing, jump-starts, tire changes, and more — wherever you are, we'll be there.</p>
                    <div class="footer-socials">
                        <a href="https://facebook.com" target="_blank" rel="noopener" class="footer-social-link" aria-label="Facebook">${ICONS.facebook}</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener" class="footer-social-link" aria-label="Instagram">${ICONS.instagram}</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener" class="footer-social-link" aria-label="LinkedIn">${ICONS.linkedin}</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener" class="footer-social-link" aria-label="Twitter / X">${ICONS.twitter}</a>
                    </div>
                </div>
                <div class="footer-col">
                    <h4 class="footer-col-title">QUICK LINKS</h4>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="home2.html">Home 2 — Premium</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="coverage.html">Coverage</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 class="footer-col-title">RESOURCES</h4>
                    <ul class="footer-links">
                        <li><a href="dashboard.html">Dashboard</a></li>
                        <li><a href="coming-soon.html">Coming Soon</a></li>
                        <li><a href="404.html">404 Page</a></li>
                        <li><a href="login.html">Sign In</a></li>
                        <li><a href="signup.html">Sign Up</a></li>
                    </ul>
                </div>
                <div class="footer-col footer-col-newsletter">
                    <div class="footer-newsletter-card">
                        <h4 class="footer-newsletter-title">Stay Updated</h4>
                        <p class="footer-newsletter-desc">Subscribe for roadside safety tips, service updates & exclusive discounts.</p>
                        <form class="footer-newsletter-form" onsubmit="event.preventDefault(); alert('Thank you! You are now subscribed to RescueFleet updates.'); this.reset();">
                            <input type="email" class="footer-newsletter-input" placeholder="your@email.com" aria-label="Email address" required>
                            <button type="submit" class="footer-newsletter-btn">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="footer-copyright">&copy; ${new Date().getFullYear()} RESCUEFLEET. All rights reserved.</p>
                <div class="footer-bottom-links">
                    <a href="coming-soon.html">Privacy Policy</a>
                    <a href="coming-soon.html">Terms of Service</a>
                    <a href="tel:18007372831">1-800-RESCUE-1</a>
                </div>
            </div>
        </div>
    </footer>`;

    const container = document.getElementById('footer-placeholder') || document.getElementById('footer');
    if (container) {
        if (container.id === 'footer') container.outerHTML = html;
        else container.innerHTML = html;
    } else document.body.insertAdjacentHTML('beforeend', html);
}

/* ---- BACK TO TOP ---- */
function renderBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.id = 'backToTop';
    btn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    btn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(btn);
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ---- DARK MODE ---- */
let _isDarkToggling = false;
function toggleDark() {
    if (_isDarkToggling) return;
    _isDarkToggling = true;
    setTimeout(() => { _isDarkToggling = false; }, 80);
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    if (document.body) document.body.classList.toggle('dark', isDark);
    try { localStorage.setItem('rf-dark', isDark ? '1' : '0'); } catch (e) {}
    updateDarkIcons();
}

function updateDarkIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    document.querySelectorAll('.theme-icon-wrap').forEach(el => {
        el.innerHTML = isDark ? ICONS.sun : ICONS.moon;
    });
    document.querySelectorAll('#darkToggleNav, #darkToggleMob, .auth-dark-toggle, .auth-toggle-btn, .dash-hdr-pill-btn[onclick*="toggleDark"]').forEach(btn => {
        const icon = btn.querySelector('i');
        if (icon && (icon.classList.contains('fa-moon') || icon.classList.contains('fa-sun'))) {
            icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        }
        btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        btn.setAttribute('title', isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme');
    });
}

function initDark() {
    const saved = localStorage.getItem('rf-dark');
    if (saved === '1') {
        document.documentElement.classList.add('dark');
        if (document.body) document.body.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
        if (document.body) document.body.classList.remove('dark');
    }
    updateDarkIcons();
}

/* ---- RTL ---- */
function updateRTLIndicators() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
    document.querySelectorAll('.dir-indicator, .dir-label').forEach(el => {
        el.textContent = isRTL ? 'LTR' : 'RTL';
    });
    document.querySelectorAll('#rtlToggleNav, #rtlToggleMob, .dash-hdr-pill-btn[onclick*="toggleRTL"]').forEach(btn => {
        btn.classList.toggle('rtl-active', isRTL);
        btn.setAttribute('aria-label', isRTL ? 'Switch to LTR' : 'Switch to RTL');
        btn.setAttribute('title', isRTL ? 'Switch to LTR' : 'Switch to RTL');
    });
}

let _isRTLToggling = false;
function toggleRTL() {
    if (_isRTLToggling) return;
    _isRTLToggling = true;
    setTimeout(() => { _isRTLToggling = false; }, 80);
    const html = document.documentElement;
    const isRTL = html.getAttribute('dir') === 'rtl';
    html.setAttribute('dir', isRTL ? 'ltr' : 'rtl');
    try { localStorage.setItem('rf-rtl', isRTL ? '0' : '1'); } catch (e) {}
    updateRTLIndicators();
}

function initRTL() {
    if (localStorage.getItem('rf-rtl') === '1') {
        document.documentElement.setAttribute('dir', 'rtl');
    }
    updateRTLIndicators();
}

/* ---- SCROLL PARALLAX EFFECTS ---- */
function initScrollParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let ticking = false;
    function updateScroll() {
        const shift = Math.min(28, window.scrollY * 0.04);
        document.documentElement.style.setProperty('--scroll-shift', shift.toFixed(1) + 'px');
        ticking = false;
    }
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateScroll);
            ticking = true;
        }
    }, { passive: true });
    updateScroll();
}

/* ---- SCROLL ANIMATIONS ---- */
function initScrollAnimations() {
    const staggerParents = document.querySelectorAll(
        '.service-grid, .services-grid, .vehicle-grid, .safety-grid, .safety-grid-2, .process-grid, ' +
        '.testimonial-grid, .testimonials-grid, .tech-grid, .tech-grid-2, .compare-visual-grid, .bento-grid, ' +
        '.trust-grid, .fleet-grid, .pricing-grid, .zone-grid, .stats-grid, .values-grid, .team-grid, ' +
        '.cert-grid, .contact-cards, .hours-grid, .response-grid, .corporate-metrics, .timeline'
    );
    staggerParents.forEach(parent => {
        parent.classList.remove('scroll-reveal');
        Array.from(parent.children).forEach((child, idx) => {
            if (!child.classList.contains('reveal-item')) {
                child.classList.add('reveal-item');
                child.style.setProperty('--reveal-delay', ((idx % 6) * 70) + 'ms');
            }
        });
    });

    const targets = document.querySelectorAll(
        '.fade-up, .fade-in, .scale-in, .slide-left, .slide-right, .scroll-reveal, .reveal-item'
    );
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        targets.forEach(el => el.classList.add('animate-in'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.06, rootMargin: '0px 0px -24px 0px' });

    targets.forEach(el => observer.observe(el));

    // Reveal above-the-fold elements immediately after initial layout frame
    window.requestAnimationFrame(() => {
        const vh = window.innerHeight || document.documentElement.clientHeight;
        targets.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < vh * 0.96 && rect.bottom > 0) {
                el.classList.add('animate-in');
                observer.unobserve(el);
            }
        });
    });
}

/* ---- FAQ TOGGLE ---- */
function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item.active').forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
}

/* ---- PASSWORD TOGGLE ---- */
function togglePasswordVisibility(inputId, btnEl) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    const pwIcon = btnEl ? btnEl.querySelector('.pw-icon') : null;
    if (pwIcon) {
        const iTag = pwIcon.querySelector('i');
        if (iTag) iTag.className = isPassword ? 'fas fa-eye-slash' : 'fas fa-eye';
        else pwIcon.innerHTML = isPassword ? '<i class="fas fa-eye-slash"></i>' : '<i class="fas fa-eye"></i>';
        return;
    }
    const icon = btnEl ? btnEl.querySelector('i') : null;
    if (icon) icon.className = isPassword ? 'fas fa-eye-slash' : 'fas fa-eye';
}

function initPasswordToggle() {
    document.querySelectorAll('.password-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.closest('.password-wrap, .password-wrapper')?.querySelector('input') || btn.previousElementSibling;
            if (!input) return;
            const isPassword = input.type === 'password';
            input.type = isPassword ? 'text' : 'password';
            const icon = btn.querySelector('i');
            if (icon) icon.className = isPassword ? 'fas fa-eye-slash' : 'fas fa-eye';
        });
    });
}

/* ---- COUNTER ANIMATION ---- */
function animateCounters() {
    const counters = document.querySelectorAll('[data-count], [data-target], .counter');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const raw = el.dataset.count || el.dataset.target || el.textContent;
                const isFloat = String(raw).includes('.');
                const target = parseFloat(raw);
                if (isNaN(target)) return;
                const suffix = el.dataset.suffix || '';
                const prefix = el.dataset.prefix || '';
                let current = 0;
                const step = isFloat ? Math.max(0.05, target / 45) : Math.max(1, Math.floor(target / 60));
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) { current = target; clearInterval(timer); }
                    el.textContent = prefix + (isFloat ? current.toFixed(1) : current.toLocaleString()) + suffix;
                }, 20);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.3 });
    counters.forEach(c => observer.observe(c));
}

/* ---- COUNTDOWN (coming-soon) ---- */
function initCountdown() {
    const target = new Date();
    target.setDate(target.getDate() + 30);
    target.setHours(target.getHours() + 14);
    target.setMinutes(target.getMinutes() + 25);
    function update() {
        const now = new Date();
        const diff = target - now;
        if (diff <= 0) return;
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        const dEl = document.getElementById('cd-days');
        const hEl = document.getElementById('cd-hours');
        const mEl = document.getElementById('cd-mins') || document.getElementById('cd-minutes');
        const sEl = document.getElementById('cd-secs') || document.getElementById('cd-seconds');
        if (dEl) dEl.textContent = String(d).padStart(2, '0');
        if (hEl) hEl.textContent = String(h).padStart(2, '0');
        if (mEl) mEl.textContent = String(m).padStart(2, '0');
        if (sEl) sEl.textContent = String(s).padStart(2, '0');
    }
    update();
    setInterval(update, 1000);
}

/* ---- HERO PATROL RESCUE CHOREOGRAPHY ---- */
function initHeroRescue(slider) {
    const truck = document.getElementById('heroPatrolTruck');
    const rig = document.getElementById('heroPatrolRig');
    const deck = document.getElementById('rtDeckGroup');
    const car = document.getElementById('rtRescueCar');
    const carShadow = document.getElementById('rtCarRoadShadow');
    const straps = document.getElementById('rtCarStraps');
    const flood = document.getElementById('rtFloodBeam');
    const winch = document.getElementById('rtWinchLine');
    const hydBase = document.getElementById('rtHydraulicBase');
    const hydRod = document.getElementById('rtHydraulicRod');
    const brakeGlow = document.getElementById('rtBrakeLampGlow');
    const backupGlow = document.getElementById('rtBackupGlow');
    const wRear = document.getElementById('rtWheelRearRot');
    const wFront = document.getElementById('rtWheelFrontRot');
    const cWheelRear = document.getElementById('rtCarWheelRear');
    const cWheelFront = document.getElementById('rtCarWheelFront');
    if (!truck || !deck || !car) return;

    const fxStage = truck.closest('.hero-slide-fx') || slider;
    const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
    const smoothstep = (p) => { const x = clamp(p, 0, 1); return x * x * (3 - 2 * x); };
    const lerp = (a, b, t) => a + (b - a) * t;
    const xfDeck = (x, y, angDeg, slideX) => {
        const rad = angDeg * Math.PI / 180;
        const sx = x + slideX - 88;
        const sy = y - 95;
        return [
            88 + sx * Math.cos(rad) - sy * Math.sin(rad),
            95 + sx * Math.sin(rad) + sy * Math.cos(rad)
        ];
    };

    const LOOP_SEC = 26.2;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const stageW = Math.max(320, fxStage.clientWidth || 960);
        const truckW = truck.clientWidth || 320;
        truck.style.transform = `translateX(${((stageW - truckW) * 0.5).toFixed(1)}px)`;
        deck.setAttribute('transform', 'rotate(0, 88, 95) translate(0, 0)');
        car.setAttribute('transform', 'translate(0, 0) rotate(0, 61, 76)');
        if (straps) straps.setAttribute('opacity', '1');
        return;
    }

    let elapsed = 1.9; // Start with empty patrol truck entering calmly at steady pace
    let lastTs = null;
    let prevTruckX = null;
    let prevPhase = 1;
    let truckWheelDeg = 0;
    let carWheelDeg = 0;

    function tick(ts) {
        if (lastTs === null) lastTs = ts;
        const dt = Math.min(0.05, Math.max(0, (ts - lastTs) / 1000));
        lastTs = ts;
        const prevT = elapsed;
        elapsed = (elapsed + dt) % LOOP_SEC;
        if (elapsed < prevT) {
            prevTruckX = null;
        }

        const stageW = Math.max(320, fxStage.clientWidth || window.innerWidth);
        const truckW = truck.clientWidth || 320;
        const u = truckW / 360;
        const stopX = stageW * 0.5 - 87.5 * u;
        const carWaitWorldX = stopX - 196 * u;
        const startX = -truckW - 40;
        const endX = stageW + 40;

        let truckX = stopX;
        let truckOp = 1;
        let carOp = 1;
        let deckSlide = 0;
        let deckAngle = 0;
        let carTx = 0;
        let carTy = 0;
        let carRot = 0;
        let carOnRoadWeight = 0;
        let strapAlpha = 0;
        let floodAlpha = 0;
        let winchAlpha = 0;
        let brakeAlpha = 0.22;
        let backupAlpha = 0;
        let rigPitchDeg = 0;
        let isLoading = false;

        const t = elapsed;
        const phase = t < 9.5 ? 1 : (t < 12.6 ? 2 : 3);
        if (phase !== prevPhase && (phase === 1 || prevPhase === 1)) {
            prevTruckX = null;
        }
        prevPhase = phase;

        if (t < 9.5) {
            // Phase 1: Slow steady empty dispatch patrol left-to-right (constant calm road speed, zero overlap)
            const p = clamp(t / 9.5, 0, 1);
            truckX = lerp(startX, endX, p);
            const fadeIn = t < 0.7 ? t / 0.7 : 1;
            const fadeOut = t > 8.6 ? 1 - clamp((t - 8.6) / 0.9, 0, 1) : 1;
            truckOp = fadeIn * fadeOut;
            carOp = 0;
            carTx = 0;
            carTy = 0;
        } else if (t < 12.6) {
            // Phase 2: Breakdown scene ahead + slow cautious reverse alignment
            const p = smoothstep((t - 9.5) / 3.1);
            const revStartX = stopX + 190 * u;
            truckX = lerp(revStartX, stopX, p);
            const fadeIn = clamp((t - 9.5) / 0.65, 0, 1);
            truckOp = fadeIn;
            carOp = fadeIn;
            carTx = (carWaitWorldX - truckX) / u;
            carTy = 42.2;
            carRot = 0;
            carOnRoadWeight = 1;
            backupAlpha = p < 0.9 ? 0.85 : 0;
            brakeAlpha = p > 0.72 ? 0.88 : 0.65;
            rigPitchDeg = p > 0.75 && p < 1 ? Math.sin(((p - 0.75) / 0.25) * Math.PI) * -0.45 : 0;
            isLoading = true;
        } else if (t < 13.2) {
            // Phase 3: Parked cleanly ahead of stranded car
            truckX = stopX;
            carTx = -196;
            carTy = 42.2;
            carOnRoadWeight = 1;
            brakeAlpha = 0.88;
            isLoading = true;
        } else if (t < 15.2) {
            // Phase 4: Heavy hydraulic rollback slides rearwards & tilts onto asphalt
            const p = smoothstep((t - 13.2) / 2.0);
            truckX = stopX;
            deckSlide = -46 * p;
            deckAngle = -15 * p;
            carTx = -196;
            carTy = lerp(42.2, 43.0, p);
            carOnRoadWeight = 1;
            floodAlpha = p;
            winchAlpha = smoothstep((t - 14.6) / 0.55);
            brakeAlpha = 0.85;
            rigPitchDeg = -0.45 * p;
            isLoading = true;
        } else if (t < 18.6) {
            // Phase 5: Winch slowly pulls stranded sedan up ramp onto tilted bed
            truckX = stopX;
            deckSlide = -46;
            deckAngle = -15;
            floodAlpha = 1;
            winchAlpha = 1;
            brakeAlpha = 0.85;
            isLoading = true;
            rigPitchDeg = -0.45;
            if (t < 16.7) {
                const u1 = smoothstep((t - 15.2) / 1.5);
                const [ex, ey] = xfDeck(61, 76, -15, -46 - 92);
                const entryTx = ex - 61;
                const entryTy = ey - 76;
                carTx = lerp(-196, entryTx, u1);
                carTy = lerp(43.0, entryTy, u1);
                carRot = lerp(0, -15, u1);
                carOnRoadWeight = lerp(1, 0.65, u1);
                carWheelDeg = (u1 * 180) % 360;
            } else {
                const u2 = smoothstep((t - 16.7) / 1.9);
                const sCar = -92 * (1 - u2);
                const [lx, ly] = xfDeck(61, 76, -15, -46 + sCar);
                carTx = lx - 61;
                carTy = ly - 76;
                carRot = -15;
                carOnRoadWeight = lerp(0.65, 0.14, u2);
                carWheelDeg = (180 + u2 * 240) % 360;
            }
        } else if (t < 19.15) {
            // Phase 6a: Ratchet tie-down straps lock over tires
            truckX = stopX;
            deckSlide = -46;
            deckAngle = -15;
            const [lx, ly] = xfDeck(61, 76, -15, -46);
            carTx = lx - 61;
            carTy = ly - 76;
            carRot = -15;
            carOnRoadWeight = 0.14;
            strapAlpha = smoothstep((t - 18.6) / 0.5);
            winchAlpha = 1;
            floodAlpha = 1;
            brakeAlpha = 0.85;
            isLoading = true;
            rigPitchDeg = -0.4;
        } else if (t < 20.9) {
            // Phase 6b: Hydraulic piston steadily raises loaded deck level
            const p = 1 - smoothstep((t - 19.15) / 1.75);
            truckX = stopX;
            deckSlide = -46 * p;
            deckAngle = -15 * p;
            const [lx, ly] = xfDeck(61, 76, deckAngle, deckSlide);
            carTx = lx - 61;
            carTy = ly - 76;
            carRot = deckAngle;
            carOnRoadWeight = 0.14;
            strapAlpha = 1;
            winchAlpha = 1;
            floodAlpha = p;
            brakeAlpha = lerp(0.25, 0.85, p);
            rigPitchDeg = -0.4 * p;
            isLoading = p > 0.25;
        } else if (t < 25.8) {
            // Phase 7: Calm smooth acceleration into steady departure carrying rescued car
            const p = clamp((t - 20.9) / 4.9, 0, 1);
            const easeOutAccel = (p < 0.25 ? (p * p) / 0.5 : p - 0.125) / 0.875;
            truckX = lerp(stopX, stageW + 240, easeOutAccel);
            carTx = 0;
            carTy = 0;
            carRot = 0;
            carOnRoadWeight = 0.14;
            strapAlpha = 1;
            winchAlpha = 1;
            brakeAlpha = 0.22;
            const fadeOut = clamp((t - 24.9) / 0.85, 0, 1);
            truckOp = 1 - fadeOut;
            carOp = truckOp;
            carWheelDeg = 0;
        } else {
            // Brief offscreen reset beat
            truckX = startX;
            truckOp = 0;
            carOp = 0;
        }

        // True rolling physics for commercial truck wheels (rotates forward OR backward cleanly)
        if (prevTruckX !== null && Math.abs(truckX - prevTruckX) < 120) {
            const dx = truckX - prevTruckX;
            const wheelR = Math.max(1, 21 * u);
            truckWheelDeg = (truckWheelDeg + (dx / wheelR) * (180 / Math.PI)) % 360;
        }
        prevTruckX = truckX;

        truck.style.opacity = truckOp.toFixed(3);
        truck.style.transform = `translateX(${truckX.toFixed(1)}px)`;
        truck.classList.toggle('loading-active', isLoading);
        if (rig) {
            rig.style.transform = rigPitchDeg ? `rotate(${rigPitchDeg.toFixed(2)}deg)` : '';
        }

        deck.setAttribute('transform', `rotate(${deckAngle.toFixed(2)}, 88, 95) translate(${deckSlide.toFixed(2)}, 0)`);
        car.setAttribute('opacity', carOp.toFixed(3));
        car.setAttribute('transform', `translate(${carTx.toFixed(2)}, ${carTy.toFixed(2)}) rotate(${carRot.toFixed(2)}, 61, 76)`);

        if (carShadow) carShadow.setAttribute('opacity', (carOnRoadWeight * 0.9).toFixed(2));
        if (straps) straps.setAttribute('opacity', strapAlpha.toFixed(2));
        if (flood) flood.setAttribute('opacity', floodAlpha.toFixed(2));
        if (brakeGlow) brakeGlow.setAttribute('opacity', brakeAlpha.toFixed(2));
        if (backupGlow) backupGlow.setAttribute('opacity', backupAlpha.toFixed(2));

        // Update hydraulic tilt piston geometry & winch cable taut between moving anchors
        if (hydBase && hydRod) {
            const [hx, hy] = xfDeck(178, 93, deckAngle, deckSlide);
            const mx = lerp(138, hx, 0.56);
            const my = lerp(103, hy, 0.56);
            hydBase.setAttribute('x2', mx.toFixed(1));
            hydBase.setAttribute('y2', my.toFixed(1));
            hydRod.setAttribute('x1', lerp(138, hx, 0.44).toFixed(1));
            hydRod.setAttribute('y1', lerp(103, hy, 0.44).toFixed(1));
            hydRod.setAttribute('x2', hx.toFixed(1));
            hydRod.setAttribute('y2', hy.toFixed(1));
        }

        if (winch) {
            winch.setAttribute('opacity', (winchAlpha * carOp).toFixed(2));
            if (winchAlpha > 0.01) {
                const [wx, wy] = xfDeck(181, 82, deckAngle, deckSlide);
                const cRad = carRot * Math.PI / 180;
                const bx = (61 + carTx) + 107 * Math.cos(cRad) - 1 * Math.sin(cRad);
                const by = (76 + carTy) + 107 * Math.sin(cRad) + 1 * Math.cos(cRad);
                winch.setAttribute('x1', wx.toFixed(1));
                winch.setAttribute('y1', wy.toFixed(1));
                winch.setAttribute('x2', bx.toFixed(1));
                winch.setAttribute('y2', by.toFixed(1));
            }
        }

        const wTf = `rotate(${truckWheelDeg.toFixed(1)})`;
        if (wRear) wRear.setAttribute('transform', wTf);
        if (wFront) wFront.setAttribute('transform', wTf);
        const cTf = `rotate(${carWheelDeg.toFixed(1)})`;
        if (cWheelRear) cWheelRear.setAttribute('transform', cTf);
        if (cWheelFront) cWheelFront.setAttribute('transform', cTf);

        requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
}

/* ---- HERO SLIDER ---- */
function initHome2HeroSlider() {
    const slider = document.getElementById('home2HeroSlider');
    if (!slider) return;
    const slides = slider.querySelectorAll('.home2-hero-slide');
    if (slides.length <= 1) return;

    const dotsContainer = document.getElementById('home2HeroDots');
    if (dotsContainer && !dotsContainer.children.length) {
        slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', 'Hero slide ' + (i + 1));
            const fill = document.createElement('span');
            fill.className = 'hero-dot-fill';
            dot.appendChild(fill);
            dotsContainer.appendChild(dot);
        });
    }

    const dots = slider.querySelectorAll('.hero-dot');
    const prevBtn = document.getElementById('home2PrevBtn');
    const nextBtn = document.getElementById('home2NextBtn');
    const duration = 5000;
    let currentIndex = 0;
    let timer = null;

    function updateSlide(index) {
        currentIndex = (index + slides.length) % slides.length;
        slides.forEach((slide, i) => {
            const isActive = i === currentIndex;
            slide.classList.toggle('active', isActive);
            slide.setAttribute('aria-hidden', String(!isActive));
        });
        dots.forEach((dot, i) => {
            const isActive = i === currentIndex;
            dot.classList.toggle('active', isActive);
            dot.setAttribute('aria-selected', String(isActive));
            const fill = dot.querySelector('.hero-dot-fill');
            if (fill) {
                fill.style.animation = 'none';
                if (isActive) {
                    void fill.offsetWidth;
                    fill.style.animation = `heroProgress ${duration}ms linear forwards`;
                }
            }
        });
    }

    function nextSlide() { updateSlide(currentIndex + 1); }
    function prevSlide() { updateSlide(currentIndex - 1); }
    function startTimer() {
        if (timer) clearInterval(timer);
        timer = setInterval(nextSlide, duration);
    }

    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startTimer(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startTimer(); });
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            if (currentIndex !== i) {
                updateSlide(i);
                startTimer();
            }
        });
    });

    let touchStartX = 0;
    slider.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    slider.addEventListener('touchend', (e) => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 45) {
            const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
            diff > 0 ? (isRTL ? prevSlide() : nextSlide()) : (isRTL ? nextSlide() : prevSlide());
            startTimer();
        }
    }, { passive: true });

    updateSlide(0);
    startTimer();
}

function initHeroSlider() {
    initHome2HeroSlider();
    const slider = document.getElementById('heroSlider');
    if (!slider) return;
    initHeroRescue(slider);
    const slides = slider.querySelectorAll('.hero-slide');
    if (!slides.length) return;

    if (slides.length <= 1) return;

    const dotsContainer = document.getElementById('heroSliderDots');
    if (dotsContainer && !dotsContainer.children.length) {
        slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', 'Slide ' + (i + 1));
            dot.innerHTML = '<span class="hero-dot-fill"></span>';
            dotsContainer.appendChild(dot);
        });
    }
    const dots = slider.querySelectorAll('.hero-dot');
    const sliderBtns = slider.querySelectorAll('.hero-slider-btn');
    const prevBtn = document.getElementById('heroPrevBtn') || sliderBtns[0];
    const nextBtn = document.getElementById('heroNextBtn') || sliderBtns[1];

    let currentIndex = 0;
    let timer = null;
    const duration = 5000;

    function updateSlide(index) {
        currentIndex = (index + slides.length) % slides.length;
        slides.forEach((slide, i) => {
            const isActive = i === currentIndex;
            slide.classList.toggle('active', isActive);
            slide.setAttribute('aria-hidden', !isActive);
        });
        dots.forEach((dot, i) => {
            const isActive = i === currentIndex;
            dot.classList.toggle('active', isActive);
            const fill = dot.querySelector('.hero-dot-fill');
            if (fill) {
                fill.style.animation = 'none';
                if (isActive) {
                    void fill.offsetWidth;
                    fill.style.animation = `heroProgress ${duration}ms linear forwards`;
                }
            }
        });
    }

    function nextSlide() { updateSlide(currentIndex + 1); }
    function prevSlide() { updateSlide(currentIndex - 1); }
    function startTimer() { stopTimer(); timer = setInterval(nextSlide, duration); }
    function stopTimer() { if (timer) { clearInterval(timer); timer = null; } }
    function resetTimer() { startTimer(); }

    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetTimer(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetTimer(); });
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => { if (currentIndex !== i) { updateSlide(i); resetTimer(); } });
    });

    let touchStartX = 0;
    slider.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    slider.addEventListener('touchend', (e) => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 45) {
            const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
            diff > 0 ? (isRTL ? prevSlide() : nextSlide()) : (isRTL ? nextSlide() : prevSlide());
            resetTimer();
        }
    }, { passive: true });

    updateSlide(0);
    startTimer();
    slider._changeSlide = (dir) => {
        updateSlide(currentIndex + dir);
        resetTimer();
    };
}

// Global aliases
window.toggleTheme = toggleDark;
window.toggleDark = toggleDark;
window.toggleDir = toggleRTL;
window.toggleRTL = toggleRTL;
window.togglePasswordVisibility = togglePasswordVisibility;
window.initAuthPage = function() { initDark(); initRTL(); };
window.changeSlide = function(dir) {
    const slider = document.getElementById('heroSlider');
    if (!slider) return;
    if (typeof slider._changeSlide === 'function') {
        slider._changeSlide(dir);
        return;
    }
    const slides = slider.querySelectorAll('.hero-slide');
    if (!slides.length) return;
    let current = 0;
    slides.forEach((s, i) => { if (s.classList.contains('active')) current = i; });
    const next = (current + dir + slides.length) % slides.length;
    slides.forEach((s, i) => { s.classList.toggle('active', i === next); });
    const dots = slider.querySelectorAll('.hero-dot');
    dots.forEach((d, i) => { d.classList.toggle('active', i === next); });
};

/* ---- QUOTE ESTIMATOR (Home 1) ---- */
function initQuoteEstimator() {
    const root = document.getElementById('quoteEstimator');
    if (!root) return;
    const options = root.querySelectorAll('.estimator-option');
    const vehiclePills = root.querySelectorAll('.estimator-vehicle-pill');
    const slider = document.getElementById('estMilesSlider');
    const milesOut = document.getElementById('estMilesLabel');
    const priceOut = document.getElementById('estTotalPrice');
    const etaOut = document.getElementById('estEtaLabel');
    const unitOut = document.getElementById('estUnitLabel');
    const stageMilesEl = document.getElementById('estStageMiles');
    if (!options.length || !slider || !priceOut) return;

    let baseRate = 75;
    let perMile = 4;
    let vehicleFee = 0;
    let etaText = '15 min avg ETA';
    let unitText = 'Flatbed Carrier';

    function renderEstimate() {
        const miles = parseInt(slider.value, 10) || 0;
        const extraMiles = perMile > 0 ? Math.max(0, miles - 5) : 0;
        const total = baseRate + extraMiles * perMile + vehicleFee;
        if (milesOut) milesOut.textContent = miles + ' miles';
        if (stageMilesEl) stageMilesEl.textContent = miles + ' mi route';
        priceOut.textContent = '$' + total;
        priceOut.classList.remove('price-pop');
        void priceOut.offsetWidth;
        priceOut.classList.add('price-pop');
        if (etaOut) etaOut.textContent = etaText;
        if (unitOut) unitOut.textContent = unitText;
    }

    options.forEach(btn => {
        btn.addEventListener('click', () => {
            options.forEach(o => o.classList.remove('active'));
            btn.classList.add('active');
            baseRate = parseInt(btn.dataset.base, 10) || 55;
            perMile = parseInt(btn.dataset.rate, 10) || 0;
            etaText = btn.dataset.eta || '15 min avg ETA';
            unitText = btn.dataset.unit || 'Service Unit';
            renderEstimate();
        });
    });

    vehiclePills.forEach(pill => {
        pill.addEventListener('click', () => {
            vehiclePills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            vehicleFee = parseInt(pill.dataset.surcharge, 10) || 0;
            renderEstimate();
        });
    });

    slider.addEventListener('input', renderEstimate);
    renderEstimate();
}

/* ---- INTERACTIVE TRUCK SCENES (Home 1 Sec 12 & Home 2) ---- */
function initInteractiveTruckScenes() {
    // Home 1 Sec 12: Safety highway stage + cards sync
    const safetyStage = document.getElementById('safetyStage');
    const safetyStatus = document.getElementById('safetyStageStatus');
    if (safetyStage) {
        const stepLabels = {
            '1': 'Step 1: Hazard flashers active',
            '2': 'Step 2: Safe shoulder perimeter set',
            '3': 'Step 3: Live GPS pin transmitted',
            '4': 'Step 4: Unit #RF-42 verifying ID'
        };
        const setSafetyStep = (step) => {
            safetyStage.setAttribute('data-step', step);
            if (safetyStatus) safetyStatus.textContent = stepLabels[step] || stepLabels['1'];
            safetyStage.querySelectorAll('.safety-stage-tab').forEach(t => t.classList.toggle('active', t.dataset.step === step));
            document.querySelectorAll('.safety-card[data-safety-step]').forEach(c => c.classList.toggle('active', c.dataset.safetyStep === step));
        };
        safetyStage.querySelectorAll('.safety-stage-tab').forEach(tab => {
            tab.addEventListener('click', () => setSafetyStep(tab.dataset.step));
        });
        document.querySelectorAll('.safety-card[data-safety-step]').forEach(card => {
            card.addEventListener('click', () => setSafetyStep(card.dataset.safetyStep));
            card.addEventListener('mouseenter', () => setSafetyStep(card.dataset.safetyStep));
        });
    }

    // Home 2 Sec 8: AI Dispatch Radar interactive unit pins + tech cards
    const radarStage = document.getElementById('techRadarStage');
    if (radarStage) {
        const unitOut = document.getElementById('radarUnit');
        const etaOut = document.getElementById('radarEta');
        const speedOut = document.getElementById('radarSpeed');
        const activateRadarPin = (pin) => {
            radarStage.querySelectorAll('.radar-truck-pin').forEach(p => p.classList.remove('active'));
            pin.classList.add('active');
            if (unitOut) unitOut.textContent = pin.dataset.unit || '';
            if (etaOut) etaOut.textContent = pin.dataset.eta || '';
            if (speedOut) speedOut.textContent = pin.dataset.speed || '';
            const step = pin.dataset.step;
            document.querySelectorAll('.tech-card[data-tech-step]').forEach(c => c.classList.toggle('active', c.dataset.techStep === step));
        };
        radarStage.querySelectorAll('.radar-truck-pin').forEach(pin => {
            pin.addEventListener('click', () => activateRadarPin(pin));
        });
        document.querySelectorAll('.tech-card[data-tech-step]').forEach(card => {
            card.addEventListener('click', () => {
                const matchPin = radarStage.querySelector(`.radar-truck-pin[data-step="${card.dataset.techStep}"]`);
                if (matchPin) activateRadarPin(matchPin);
                else {
                    document.querySelectorAll('.tech-card[data-tech-step]').forEach(c => c.classList.remove('active'));
                    card.classList.add('active');
                }
            });
        });
    }

    // Home 2 Sec 10: Membership visual tier cards highlight table column
    const compareGrid = document.getElementById('compareVisualGrid');
    const compareTable = document.getElementById('compareTable');
    if (compareGrid && compareTable) {
        const highlightCol = (colIdx) => {
            compareGrid.querySelectorAll('.compare-visual-card').forEach(c => c.classList.toggle('active', c.dataset.col === colIdx));
            compareTable.querySelectorAll('tr').forEach(row => {
                Array.from(row.children).forEach((cell, idx) => {
                    cell.classList.toggle('col-selected', String(idx) === String(colIdx));
                });
            });
        };
        compareGrid.querySelectorAll('.compare-visual-card[data-col]').forEach(card => {
            const selectCol = () => highlightCol(card.dataset.col);
            card.addEventListener('click', selectCol);
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectCol();
                }
            });
        });
        highlightCol('2');
    }

    // Home 2 Sec 12: Commercial Fleet Convoy Corridor Switchboard
    const convoyStage = document.getElementById('convoyStage');
    if (convoyStage) {
        const routeOut = document.getElementById('convoyRoute');
        const unitsOut = document.getElementById('convoyUnits');
        const etaOut = document.getElementById('convoyEta');
        convoyStage.querySelectorAll('.convoy-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                convoyStage.querySelectorAll('.convoy-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                if (routeOut) routeOut.textContent = tab.dataset.route || '';
                if (unitsOut) unitsOut.textContent = tab.dataset.units || '';
                if (etaOut) etaOut.textContent = tab.dataset.eta || '';
            });
        });
    }
}

/* ---- INTERACTIVE POINTER SPOTLIGHT (Testimonials & Timeline) ---- */
function initCardSpotlights() {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    document.querySelectorAll('.testimonial-card, .timeline-content').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
            card.style.setProperty('--my', (e.clientY - rect.top) + 'px');
        }, { passive: true });
    });

    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        document.querySelectorAll('.fleet-showcase-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                card.style.setProperty('--rx', (-y * 6).toFixed(2) + 'deg');
                card.style.setProperty('--ry', (x * 6).toFixed(2) + 'deg');
            }, { passive: true });
            card.addEventListener('mouseleave', () => {
                card.style.setProperty('--rx', '0deg');
                card.style.setProperty('--ry', '0deg');
            });
        });
    }
}

/* ---- COVERAGE ZONE LOOKUP (Coverage Page CTA) ---- */
function initCoverageChecker() {
    const form = document.getElementById('coverageZipForm');
    const input = document.getElementById('coverageZipInput');
    const resultEl = document.getElementById('coverageZipResult');
    if (!form || !input || !resultEl) return;

    const metroCities = ['houston', 'dallas', 'austin', 'san antonio', 'fort worth', 'el paso', 'arlington', 'plano', 'corpus christi', 'lubbock', 'laredo', 'irving', 'garland', 'frisco', 'mckinney'];
    const corridorTerms = ['i-10', 'i-35', 'i-45', 'i-20', 'us-290', 'corridor', 'highway'];

    const setStatusMessage = (iconClass, text, isWarn) => {
        resultEl.classList.toggle('warn', Boolean(isWarn));
        resultEl.replaceChildren();
        const icon = document.createElement('i');
        icon.className = 'fa-solid ' + iconClass;
        const span = document.createElement('span');
        span.textContent = text;
        resultEl.append(icon, span);
    };

    const evaluateQuery = (raw) => {
        const q = raw.trim();
        const lower = q.toLowerCase();
        if (!q) {
            setStatusMessage('fa-circle-info', 'Enter a ZIP code, city, or highway corridor to verify dispatch times.', true);
            return;
        }
        const zipMatch = q.match(/\b(\d{5})\b/);
        if (metroCities.some(c => lower.includes(c)) || (zipMatch && /^7[5-9]/.test(zipMatch[1]))) {
            setStatusMessage('fa-circle-check', `Primary Coverage Confirmed (${q}) — Avg 12–15 min Urban Metro Dispatch.`, false);
        } else if (corridorTerms.some(c => lower.includes(c))) {
            setStatusMessage('fa-circle-check', `Active Highway Corridor Patrol (${q}) — Avg 18–22 min Interstate ETA.`, false);
        } else {
            setStatusMessage('fa-circle-check', `Extended Coverage & Partner Relay available for "${q}" — call (800) 555-1234 for live ETA.`, false);
        }
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        evaluateQuery(input.value);
    });

    input.addEventListener('input', () => {
        document.querySelectorAll('.coverage-zip-chip').forEach(c => c.classList.remove('active'));
        evaluateQuery(input.value);
    });

    document.querySelectorAll('.coverage-zip-chip[data-loc]').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.coverage-zip-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            input.value = chip.dataset.loc;
            evaluateQuery(chip.dataset.loc);
        });
    });
}

/* ---- ABOUT STANDARDS PILLARS (About Page) ---- */
function initAboutPillars() {
    const root = document.getElementById('aboutPillarsCard');
    if (!root) return;
    const tabs = root.querySelectorAll('.about-pillar-tab[data-pillar]');
    const panels = root.querySelectorAll('.about-pillar-panel[data-panel]');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const key = tab.dataset.pillar;
            tabs.forEach(t => {
                const isMatch = t === tab;
                t.classList.toggle('active', isMatch);
                t.setAttribute('aria-selected', String(isMatch));
            });
            panels.forEach(panel => {
                panel.classList.toggle('active', panel.dataset.panel === key);
            });
        });
    });
}

/* ---- SERVICES SYMPTOM MATCHER (Services Page) ---- */
function initServiceMatcher() {
    const root = document.getElementById('serviceMatcherCard');
    if (!root) return;
    const scenarios = {
        battery: {
            badge: 'On-Site Resolution',
            icon: 'fa-bolt',
            eta: '12 min avg ETA',
            title: 'Rapid Mobile Battery & Jump Unit',
            desc: 'Our service van arrives with a commercial 3000A lithium booster and alternator load tester so you can restart safely without waiting on a tow.',
            items: [
                'Safe surge-protected jump-start & voltage test',
                'Battery terminal clean & charging output check',
                'Park with hazards on and pop hood latch if safe'
            ]
        },
        tire: {
            badge: 'Shoulder Tire Service',
            icon: 'fa-circle-dot',
            eta: '15 min avg ETA',
            title: 'Hydraulic Tire Swap & Inflation Support',
            desc: 'If you have a usable spare or need wheel lug extraction, our rapid van lifts cleanly on the shoulder. Missing spare? We dispatch a flatbed instead.',
            items: [
                '3-ton floor jack, calibrated torque wrench & lock lug tools',
                'Spare inflation & valve stem safety check included',
                'Set wheel lock key on front seat if vehicle uses one'
            ]
        },
        awd: {
            badge: 'Zero-Drag Transport',
            icon: 'fa-shield-halved',
            eta: '15–18 min avg ETA',
            title: '11° Low-Angle Hydraulic Tilt Flatbed',
            desc: 'All-wheel-drive vehicles, EVs, and sports sedans must keep all four wheels off the pavement. We secure tires with soft nylon straps — zero metal hooks.',
            items: [
                'Full-deck clearance preserves bumper splitters & differentials',
                'EV transport-mode & polymer wheel skates carried onboard',
                'Drop to home, dealership, or preferred repair facility'
            ]
        },
        lockout: {
            badge: 'Damage-Free Entry',
            icon: 'fa-key',
            eta: '14 min avg ETA',
            title: 'Non-Damaging Air-Wedge Lockout Unit',
            desc: 'Certified lockout technicians open passenger doors in minutes using protective silicone cushions and vinyl-coated reach tools with zero paint or seal scratches.',
            items: [
                'Window frame & weatherstrip fully protected',
                'Works on frameless doors, trucks & commercial vans',
                'Keep government photo ID ready to verify vehicle ownership'
            ]
        },
        winch: {
            badge: 'Controlled Extraction',
            icon: 'fa-road',
            eta: '20 min avg ETA',
            title: '50-Ft Soft-Shackle Winch-Out Carrier',
            desc: 'Slid off a slick shoulder, unpaved turnout, or muddy construction apron? Our recovery rig anchors safely and pulls at a controlled low-stress angle.',
            items: [
                'Synthetic recovery lines prevent bumper or suspension damage',
                'High-visibility safety cone perimeter while extracting',
                'Stay clear of winch cable line and leave vehicle in neutral when guided'
            ]
        },
        fuel: {
            badge: 'Fast Roadside Refuel',
            icon: 'fa-gas-pump',
            eta: '18 min avg ETA',
            title: '3–5 Gallon Emergency Fuel Delivery',
            desc: 'Ran dry miles from an exit? Our responder delivers regular unleaded, premium 91+, or ultra-low-sulfur diesel straight into your tank with spill-free funnels.',
            items: [
                'Sealed EPA containers with unleaded or diesel grade matched',
                'Enough range to reach the closest highway filling station',
                'Confirm diesel vs. gasoline clearly when requesting dispatch'
            ]
        }
    };

    const badgeEl = document.getElementById('svcMatchBadge');
    const etaEl = document.getElementById('svcMatchEta');
    const titleEl = document.getElementById('svcMatchTitle');
    const descEl = document.getElementById('svcMatchDesc');
    const listEl = document.getElementById('svcMatchChecklist');

    root.querySelectorAll('.svc-symptom-btn[data-symptom]').forEach(btn => {
        btn.addEventListener('click', () => {
            const data = scenarios[btn.dataset.symptom];
            if (!data) return;
            root.querySelectorAll('.svc-symptom-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (badgeEl) {
                badgeEl.replaceChildren();
                const icon = document.createElement('i');
                icon.className = 'fa-solid ' + data.icon;
                badgeEl.append(icon, document.createTextNode(' ' + data.badge));
            }
            if (etaEl) etaEl.textContent = data.eta;
            if (titleEl) titleEl.textContent = data.title;
            if (descEl) descEl.textContent = data.desc;
            if (listEl) {
                const rows = data.items.map(text => {
                    const li = document.createElement('li');
                    const icon = document.createElement('i');
                    icon.className = 'fa-solid fa-circle-check';
                    const span = document.createElement('span');
                    span.textContent = text;
                    li.append(icon, span);
                    return li;
                });
                listEl.replaceChildren(...rows);
            }
        });
    });
}

/* ---- INIT ---- */
document.addEventListener('DOMContentLoaded', () => {
    initDark();
    initRTL();

    const page = getCurrentPage();
    const authPages = ['login.html', 'signup.html'];
    const fullscreenPages = ['404.html', 'coming-soon.html'];
    const dashboardPages = ['dashboard.html'];

    if (authPages.includes(page)) {
        // Inject logo and social SVGs for auth pages
        const authCardLogo = document.getElementById('authCardLogo');
        if (authCardLogo) authCardLogo.innerHTML = BRAND_LOGO_HTML;
        const googleBtn = document.getElementById('googleBtn');
        if (googleBtn) googleBtn.innerHTML = GOOGLE_SVG + '<span>Google</span>';
        const appleBtn = document.getElementById('appleBtn');
        if (appleBtn) appleBtn.innerHTML = APPLE_SVG + '<span>Apple</span>';
        const facebookBtn = document.getElementById('facebookBtn');
        if (facebookBtn) facebookBtn.innerHTML = FACEBOOK_SVG + '<span>Facebook</span>';
    } else if (fullscreenPages.includes(page)) {
        // Inject logo for fullscreen pages
        const fsLogo = document.getElementById('fullscreenLogo');
        if (fsLogo) fsLogo.innerHTML = BRAND_LOGO_HTML;
    } else if (dashboardPages.includes(page)) {
        const dashLogo = document.getElementById('dashLogo');
        if (dashLogo) dashLogo.innerHTML = BRAND_LOGO_HTML;
    } else {
        renderNavbar();
        renderFooter();
        renderBackToTop();
        initScrollParallax();
    }

    initScrollAnimations();
    initFAQ();
    initPasswordToggle();
    animateCounters();
    initHeroSlider();
    initQuoteEstimator();
    initInteractiveTruckScenes();
    initCardSpotlights();
    initCoverageChecker();
    initAboutPillars();
    initServiceMatcher();

    if (page === 'coming-soon.html') initCountdown();
});
