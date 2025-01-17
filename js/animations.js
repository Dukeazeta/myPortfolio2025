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

    // Typing animation
    function initTypingAnimation() {
        const typedTextSpan = document.querySelector(".typed-text");
        const texts = ["Flutter Developer", "Frontend Developer"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingDelay = 100;
        let erasingDelay = 50;
        let newTextDelay = 2000;

        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typedTextSpan.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingDelay = erasingDelay;
            } else {
                typedTextSpan.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingDelay = 100;
            }

            if (!isDeleting && charIndex === currentText.length) {
                typingDelay = newTextDelay;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingDelay = 500;
            }

            setTimeout(type, typingDelay);
        }

        type();
    }

    initTypingAnimation();
}

// About section animations
export function initAboutAnimations() {
    gsap.from('.about-content', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.skill-item', {
        scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse'
        },
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)'
    });
}

// Timeline animations
export function initTimelineAnimations() {
    const timelineItems = gsap.utils.toArray('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        const direction = index % 2 === 0 ? -30 : 30;
        
        gsap.from(item.querySelector('.timeline-content'), {
            x: direction,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                end: 'top 60%',
                toggleActions: 'play none none reverse'
            }
        });

        gsap.from(item.querySelector('.timeline-dot'), {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            delay: 0.4,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                end: 'top 60%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// Projects section animations
export function initProjectAnimations() {
    const projectCards = gsap.utils.toArray('.project-card');
    projectCards.forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 60%',
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
            end: 'bottom center',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.social-link', {
        scrollTrigger: {
            trigger: '.social-links',
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse'
        },
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)'
    });
}
