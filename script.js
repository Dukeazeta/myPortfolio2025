// Import animations and Three.js configuration
import { init as initThree, animate } from './js/three-config.js';
import { 
    initHeroAnimations, 
    initAboutAnimations, 
    initProjectAnimations, 
    initContactAnimations 
} from './js/animations.js';

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navContainer = document.querySelector('.nav-container');
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;
const body = document.body;

// Project data
const projects = [
    {
        title: "Project 1",
        description: "Description of project 1",
        image: "path/to/image1.jpg",
        tags: ["Flutter", "Firebase"],
        links: {
            github: "#",
            live: "#"
        }
    },
    // Add more projects here
];

// Initialize Three.js background
initThree();
animate();

// Initialize all section animations
document.addEventListener('DOMContentLoaded', () => {
    initHeroAnimations();
    initAboutAnimations();
    initProjectAnimations();
    initContactAnimations();
    loadProjects();
});

// Load projects dynamically
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Create project card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.links.github}" class="project-link" target="_blank">
                    <i class="ti ti-brand-github"></i>
                </a>
                <a href="${project.links.live}" class="project-link" target="_blank">
                    <i class="ti ti-external-link"></i>
                </a>
            </div>
        </div>
    `;
    return card;
}

// Theme handling
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    html.className = savedTheme;
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        html.classList.add('light');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.remove('light');
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
});

// Mobile menu handling
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
    
    if (!navMenu.classList.contains('active')) {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
        });
    }
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
    }
});

// Handle contact form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Add your form submission logic here
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Message sent successfully!');
    contactForm.reset();
});

// Smooth scroll behavior
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
