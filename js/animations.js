// GSAP Animations configuration
import gsap from 'https://cdn.skypack.dev/gsap';
import ScrollTrigger from 'https://cdn.skypack.dev/gsap/ScrollTrigger';
import TextPlugin from 'https://cdn.skypack.dev/gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Hero section animations
export function initHeroAnimations() {
    const tl = gsap.timeline();

    tl.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    })
    .from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-cta', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.5');

    // Typing effect for roles
    const roles = ['Flutter Developer', 'Frontend Developer'];
    const typingText = document.querySelector('.typing-text');
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let pauseDuration = 1000;

    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = pauseDuration;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

// About section animations
export function initAboutAnimations() {
    gsap.from('.about-content', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.skill-item', {
        scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        scale: 0.5,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)'
    });
}

// Timeline animations
export function initTimelineAnimations() {
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        const direction = index % 2 === 0 ? -30 : 30;
        
        gsap.from(item.querySelector('.timeline-content'), {
            x: direction,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        gsap.from(item.querySelector('.timeline-dot'), {
            scale: 0,
            opacity: 0,
            duration: 0.4,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// Projects section animations
export function initProjectAnimations() {
    gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: index * 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// Contact section animations
export function initContactAnimations() {
    gsap.from('.contact-content', {
        scrollTrigger: {
            trigger: '.contact-section',
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.social-link', {
        scrollTrigger: {
            trigger: '.social-links',
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)'
    });
}
