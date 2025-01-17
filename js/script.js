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

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Send email using mailto
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:azetaduke@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Clear form
    e.target.reset();
});
