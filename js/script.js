// Import animations and Three.js configuration
import { init as initThree, animate } from './three-config.js';
import { 
    initHeroAnimations, 
    initAboutAnimations, 
    initProjectAnimations, 
    initContactAnimations 
} from './animations.js';

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

// Initialize Three.js background
initThree();
animate();

// Initialize all section animations
document.addEventListener('DOMContentLoaded', () => {
    initHeroAnimations();
    initAboutAnimations();
    initProjectAnimations();
    initContactAnimations();
});

// Mobile menu functionality
hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Close menu when clicking a link
navLinks?.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger?.contains(e.target) && !navMenu?.contains(e.target)) {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Theme handling
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    html.className = savedTheme;
}

themeToggle?.addEventListener('click', () => {
    const currentTheme = html.className;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.className = newTheme;
    localStorage.setItem('theme', newTheme);
});
