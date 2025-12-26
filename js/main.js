/**
 * Fernando Figueroa - Landing Page
 * Theme System + Animation System with Full Visual Experience
 */

// ============================================
// THEME CONFIGURATION
// ============================================
const themes = {
    'cyber-dark': {
        name: 'Cyber Dark',
        particle1: '#3b82f6',
        particle2: '#06b6d4',
        particleOpacity: 0.5,
        navBg: 'rgba(3, 7, 18, 0.85)'
    },
    'midnight-gold': {
        name: 'Midnight Gold',
        particle1: '#eab308',
        particle2: '#fbbf24',
        particleOpacity: 0.4,
        navBg: 'rgba(9, 9, 11, 0.85)'
    },
    'ocean-deep': {
        name: 'Ocean Deep',
        particle1: '#0ea5e9',
        particle2: '#38bdf8',
        particleOpacity: 0.5,
        navBg: 'rgba(12, 25, 41, 0.85)'
    },
    'matrix-green': {
        name: 'Matrix Green',
        particle1: '#10b981',
        particle2: '#34d399',
        particleOpacity: 0.5,
        navBg: 'rgba(2, 44, 34, 0.85)'
    },
    'clean-light': {
        name: 'Clean Light',
        particle1: '#2563eb',
        particle2: '#3b82f6',
        particleOpacity: 0.3,
        navBg: 'rgba(255, 255, 255, 0.9)'
    }
};

// ============================================
// ANIMATION CONFIGURATIONS
// ============================================
const animations = {
    'neural-network': {
        name: 'Red Neuronal',
        description: 'Conexiones tipo IA',
        icon: '🧠',
        getConfig: (theme, isLight) => ({
            particles: {
                color: { value: [theme.particle1, theme.particle2] },
                links: {
                    color: theme.particle1,
                    distance: 150,
                    enable: true,
                    opacity: isLight ? 0.15 : 0.25,
                    width: 1,
                    triangles: { enable: true, opacity: isLight ? 0.02 : 0.04 }
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: { default: "bounce" },
                    random: true,
                    speed: 0.8,
                    straight: false
                },
                number: {
                    density: { enable: true, area: 800 },
                    value: isLight ? 50 : 70
                },
                opacity: {
                    value: { min: 0.2, max: theme.particleOpacity },
                    animation: { enable: true, speed: 1, minimumValue: 0.1 }
                },
                shape: { type: "circle" },
                size: {
                    value: { min: 1, max: 4 },
                    animation: { enable: true, speed: 2, minimumValue: 0.5 }
                }
            },
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "grab" },
                    onClick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    grab: { distance: 180, links: { opacity: 0.8, color: theme.particle2 } },
                    push: { quantity: 3 }
                }
            }
        })
    },
    'floating-bubbles': {
        name: 'Burbujas',
        description: 'Esferas flotantes',
        icon: '🫧',
        getConfig: (theme, isLight) => ({
            particles: {
                color: { value: [theme.particle1, theme.particle2, '#ffffff'] },
                links: { enable: false },
                move: {
                    direction: "top",
                    enable: true,
                    outModes: { default: "out", bottom: "out", top: "out" },
                    random: true,
                    speed: { min: 0.5, max: 2 },
                    straight: false
                },
                number: {
                    density: { enable: true, area: 600 },
                    value: isLight ? 30 : 50
                },
                opacity: {
                    value: { min: 0.1, max: isLight ? 0.4 : 0.6 },
                    animation: { enable: true, speed: 0.5, minimumValue: 0.1 }
                },
                shape: { type: "circle" },
                size: {
                    value: { min: 3, max: 15 },
                    animation: { enable: true, speed: 3, minimumValue: 2 }
                }
            },
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "bubble" },
                    onClick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    bubble: { distance: 200, size: 20, duration: 2, opacity: 0.8 },
                    push: { quantity: 4 }
                }
            }
        })
    },
    'starfield': {
        name: 'Estrellas',
        description: 'Campo estelar',
        icon: '✨',
        getConfig: (theme, isLight) => ({
            particles: {
                color: { value: [theme.particle1, theme.particle2, '#ffffff', '#fef08a'] },
                links: { enable: false },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: { default: "out" },
                    random: true,
                    speed: 0.5,
                    straight: false
                },
                number: {
                    density: { enable: true, area: 400 },
                    value: isLight ? 80 : 120
                },
                opacity: {
                    value: { min: 0.2, max: isLight ? 0.7 : 1 },
                    animation: {
                        enable: true,
                        speed: 2,
                        minimumValue: 0.1,
                        sync: false
                    }
                },
                shape: { type: "circle" },
                size: {
                    value: { min: 0.5, max: 3 },
                    animation: { enable: true, speed: 3, minimumValue: 0.3 }
                }
            },
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "repulse" },
                    onClick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    repulse: { distance: 100, duration: 0.4 },
                    push: { quantity: 5 }
                }
            }
        })
    },
    'matrix-rain': {
        name: 'Matrix',
        description: 'Lluvia de codigo',
        icon: '💻',
        getConfig: (theme, isLight) => ({
            particles: {
                color: { value: [theme.particle1, theme.particle2] },
                links: { enable: false },
                move: {
                    direction: "bottom",
                    enable: true,
                    outModes: { default: "out" },
                    random: false,
                    speed: { min: 3, max: 8 },
                    straight: true
                },
                number: {
                    density: { enable: true, area: 300 },
                    value: isLight ? 60 : 100
                },
                opacity: {
                    value: { min: 0.3, max: isLight ? 0.6 : 0.9 },
                    animation: { enable: true, speed: 3, minimumValue: 0.2 }
                },
                shape: { type: "circle" },
                size: {
                    value: { min: 1, max: 4 },
                    animation: { enable: true, speed: 5, minimumValue: 0.5 }
                }
            },
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "repulse" },
                    onClick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    repulse: { distance: 80, duration: 0.4 },
                    push: { quantity: 10 }
                }
            }
        })
    },
    'particles-wave': {
        name: 'Ondas',
        description: 'Movimiento ondulante',
        icon: '🌊',
        getConfig: (theme, isLight) => ({
            particles: {
                color: { value: [theme.particle1, theme.particle2] },
                links: {
                    color: theme.particle1,
                    distance: 100,
                    enable: true,
                    opacity: isLight ? 0.15 : 0.25,
                    width: 1
                },
                move: {
                    direction: "right",
                    enable: true,
                    outModes: { default: "out" },
                    random: true,
                    speed: 2,
                    straight: false
                },
                number: {
                    density: { enable: true, area: 600 },
                    value: isLight ? 50 : 80
                },
                opacity: {
                    value: { min: 0.3, max: theme.particleOpacity },
                    animation: { enable: true, speed: 1, minimumValue: 0.1 }
                },
                shape: { type: "circle" },
                size: {
                    value: { min: 2, max: 5 },
                    animation: { enable: true, speed: 2, minimumValue: 1 }
                }
            },
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "grab" },
                    onClick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    grab: { distance: 120, links: { opacity: 0.5 } },
                    push: { quantity: 4 }
                }
            }
        })
    },
    'snow': {
        name: 'Nieve',
        description: 'Particulas cayendo',
        icon: '❄️',
        getConfig: (theme, isLight) => ({
            particles: {
                color: { value: ['#ffffff', theme.particle1, theme.particle2] },
                links: { enable: false },
                move: {
                    direction: "bottom",
                    enable: true,
                    outModes: { default: "out" },
                    random: true,
                    speed: { min: 1, max: 3 },
                    straight: false
                },
                number: {
                    density: { enable: true, area: 400 },
                    value: isLight ? 60 : 100
                },
                opacity: {
                    value: { min: 0.4, max: isLight ? 0.7 : 1 },
                    animation: { enable: true, speed: 1, minimumValue: 0.2 }
                },
                shape: { type: "circle" },
                size: {
                    value: { min: 1, max: 5 },
                    animation: { enable: true, speed: 2, minimumValue: 0.5 }
                }
            },
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "repulse" },
                    onClick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    repulse: { distance: 100, duration: 0.4 },
                    push: { quantity: 6 }
                }
            }
        })
    }
};

let currentTheme = localStorage.getItem('ff-theme') || 'cyber-dark';
let currentAnimation = localStorage.getItem('ff-animation') || 'neural-network';
let particlesInstance = null;

// ============================================
// THEME FUNCTIONS
// ============================================
function setTheme(themeName) {
    if (!themes[themeName]) return;

    currentTheme = themeName;
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('ff-theme', themeName);

    // Update navigation background
    const nav = document.querySelector('nav');
    if (nav) {
        nav.style.background = themes[themeName].navBg;
    }

    // Update active state in theme buttons
    document.querySelectorAll('.theme-option').forEach(btn => {
        const btnTheme = btn.getAttribute('data-theme-id');
        if (btnTheme === themeName) {
            btn.style.borderColor = 'var(--accent-primary)';
            btn.style.boxShadow = '0 0 20px var(--accent-glow)';
        } else {
            btn.style.borderColor = 'transparent';
            btn.style.boxShadow = 'none';
        }
    });

    // Reload particles with new colors
    loadParticles(themeName, currentAnimation);

    // Close panel
    closeThemePanel();
}

// ============================================
// ANIMATION FUNCTIONS
// ============================================
function setAnimation(animationName) {
    if (!animations[animationName]) return;

    currentAnimation = animationName;
    localStorage.setItem('ff-animation', animationName);

    // Update active state in animation buttons
    document.querySelectorAll('.animation-option').forEach(btn => {
        const btnAnim = btn.getAttribute('data-animation-id');
        if (btnAnim === animationName) {
            btn.style.borderColor = 'var(--accent-primary)';
            btn.style.boxShadow = '0 0 20px var(--accent-glow)';
        } else {
            btn.style.borderColor = 'transparent';
            btn.style.boxShadow = 'none';
        }
    });

    // Reload particles with new animation
    loadParticles(currentTheme, animationName);

    // Close panel
    closeAnimationPanel();
}

// ============================================
// THEME PANEL CONTROLS
// ============================================
function openThemePanel() {
    const panel = document.getElementById('theme-panel');
    const toggle = document.getElementById('theme-toggle');
    closeAnimationPanel();

    if (panel) {
        panel.style.opacity = '1';
        panel.style.pointerEvents = 'auto';
        panel.style.transform = 'translateX(0)';
    }
    if (toggle) {
        toggle.style.opacity = '0';
        toggle.style.pointerEvents = 'none';
    }
}

function closeThemePanel() {
    const panel = document.getElementById('theme-panel');
    const toggle = document.getElementById('theme-toggle');

    if (panel) {
        panel.style.opacity = '0';
        panel.style.pointerEvents = 'none';
        panel.style.transform = 'translateX(-16px)';
    }
    if (toggle) {
        toggle.style.opacity = '1';
        toggle.style.pointerEvents = 'auto';
    }
}

// ============================================
// ANIMATION PANEL CONTROLS
// ============================================
function openAnimationPanel() {
    const panel = document.getElementById('animation-panel');
    const toggle = document.getElementById('animation-toggle');
    closeThemePanel();

    if (panel) {
        panel.style.opacity = '1';
        panel.style.pointerEvents = 'auto';
        panel.style.transform = 'translateX(0)';
    }
    if (toggle) {
        toggle.style.opacity = '0';
        toggle.style.pointerEvents = 'none';
    }
}

function closeAnimationPanel() {
    const panel = document.getElementById('animation-panel');
    const toggle = document.getElementById('animation-toggle');

    if (panel) {
        panel.style.opacity = '0';
        panel.style.pointerEvents = 'none';
        panel.style.transform = 'translateX(-16px)';
    }
    if (toggle) {
        toggle.style.opacity = '1';
        toggle.style.pointerEvents = 'auto';
    }
}

// Initialize controls
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeCloseBtn = document.getElementById('close-theme-panel');
    const animToggleBtn = document.getElementById('animation-toggle');
    const animCloseBtn = document.getElementById('close-animation-panel');

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', openThemePanel);
    }
    if (themeCloseBtn) {
        themeCloseBtn.addEventListener('click', closeThemePanel);
    }
    if (animToggleBtn) {
        animToggleBtn.addEventListener('click', openAnimationPanel);
    }
    if (animCloseBtn) {
        animCloseBtn.addEventListener('click', closeAnimationPanel);
    }

    // Apply saved theme and animation
    setTheme(currentTheme);

    // Update animation button active state
    document.querySelectorAll('.animation-option').forEach(btn => {
        const btnAnim = btn.getAttribute('data-animation-id');
        if (btnAnim === currentAnimation) {
            btn.style.borderColor = 'var(--accent-primary)';
            btn.style.boxShadow = '0 0 20px var(--accent-glow)';
        }
    });
});

// ============================================
// PARTICLES CONFIGURATION
// ============================================
async function loadParticles(themeName = currentTheme, animationName = currentAnimation) {
    const theme = themes[themeName] || themes['cyber-dark'];
    const animation = animations[animationName] || animations['neural-network'];
    const isLight = themeName === 'clean-light';

    if (typeof tsParticles === 'undefined') {
        console.warn('tsParticles not loaded, retrying in 500ms...');
        setTimeout(() => loadParticles(themeName, animationName), 500);
        return;
    }

    // Clear existing particles
    try {
        await tsParticles.destroy("tsparticles");
    } catch (e) {
        // Ignore if doesn't exist
    }

    const animConfig = animation.getConfig(theme, isLight);

    try {
        particlesInstance = await tsParticles.load("tsparticles", {
            fullScreen: { enable: false, zIndex: -1 },
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            detectRetina: true,
            ...animConfig
        });
        console.log('Particles loaded:', animationName);
    } catch (e) {
        console.error('Error loading particles:', e);
    }
}

// Load on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, checking tsParticles...');
    console.log('tsParticles available:', typeof tsParticles !== 'undefined');

    // Wait for tsParticles to be ready
    setTimeout(() => {
        console.log('Attempting to load particles...');
        loadParticles(currentTheme, currentAnimation);
    }, 500);
});

// Also try on window load as fallback
window.addEventListener('load', () => {
    console.log('Window loaded, tsParticles:', typeof tsParticles !== 'undefined');
    if (typeof tsParticles !== 'undefined' && !particlesInstance) {
        console.log('Loading particles on window load...');
        loadParticles(currentTheme, currentAnimation);
    }
});

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            const navHeight = document.querySelector('nav')?.offsetHeight || 0;
            window.scrollTo({
                top: target.offsetTop - navHeight - 20,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar?.classList.add('shadow-lg');
    } else {
        navbar?.classList.remove('shadow-lg');
    }
});

// ============================================
// SCROLL ANIMATIONS
// ============================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ============================================
// MOBILE MENU
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav > div');
    const contactBtn = nav?.querySelector('a[href*="wa.me"]');
    if (!nav || !contactBtn) return;

    // Hamburger button
    const menuBtn = document.createElement('button');
    menuBtn.className = 'md:hidden p-2 rounded-lg transition-colors';
    menuBtn.innerHTML = `<svg class="w-6 h-6 text-theme-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>`;

    // Mobile menu
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'fixed inset-0 z-50 hidden';
    mobileMenu.style.background = 'var(--bg-primary)';
    mobileMenu.innerHTML = `
        <div class="flex flex-col items-center justify-center h-full space-y-8">
            <a href="#servicios" class="text-2xl text-theme-primary hover:text-accent">Servicios</a>
            <a href="#resultados" class="text-2xl text-theme-primary hover:text-accent">Resultados</a>
            <a href="#casos" class="text-2xl text-theme-primary hover:text-accent">Casos de Éxito</a>
            <a href="#sobre-mi" class="text-2xl text-theme-primary hover:text-accent">Sobre Mí</a>
            <a href="https://wa.me/51939922418" target="_blank" class="btn-primary px-6 py-3 rounded-lg">Contactar</a>
        </div>
        <button class="absolute top-4 right-4 p-2" aria-label="Cerrar">
            <svg class="w-8 h-8 text-theme-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
    `;

    document.body.appendChild(mobileMenu);
    contactBtn.parentNode.insertBefore(menuBtn, contactBtn);

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    mobileMenu.querySelector('button').addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = '';
        });
    });
});

// ============================================
// KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', (e) => {
    // Ignore if typing in input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === 't' || e.key === 'T') {
        const panel = document.getElementById('theme-panel');
        if (panel?.style.opacity === '1') {
            closeThemePanel();
        } else {
            openThemePanel();
        }
    }
    if (e.key === 'a' || e.key === 'A') {
        const panel = document.getElementById('animation-panel');
        if (panel?.style.opacity === '1') {
            closeAnimationPanel();
        } else {
            openAnimationPanel();
        }
    }
    if (e.key === 'Escape') {
        closeThemePanel();
        closeAnimationPanel();
    }
});

// ============================================
// CONSOLE
// ============================================
console.log('%c¡Hola! ¿Buscas automatizar procesos?', 'color: #3b82f6; font-size: 16px; font-weight: bold;');
console.log('%cWhatsApp: +51 939 922 418', 'color: #06b6d4; font-size: 14px;');
console.log('%cPresiona "T" para temas, "A" para animaciones', 'color: #94a3b8; font-size: 12px;');
