// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Theme toggle functionality
    const themeToggle = document.createElement('button');
    themeToggle.textContent = '🌓';
    themeToggle.classList.add('theme-toggle');
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    });

    // Check for saved user preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Form validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Simple validation
            this.querySelectorAll('input, textarea').forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });

            if (isValid) {
                alert('Form submitted successfully!');
                this.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Skill animation on scroll
    const skillCards = document.querySelectorAll('.skill-card');
    const animateSkills = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        skillCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.classList.add('show');
            } else {
                card.classList.remove('show');
            }
        });
    };

    window.addEventListener('scroll', animateSkills);

    // Dynamic year for copyright
    const currentYear = new Date().getFullYear();
    document.querySelector('footer p').textContent = `© ${currentYear} My Portfolio | Designed with ❤ ATUL KUMAR GUPTA ❤ |`;

    // Project filter functionality
    const projectCategories = ['All', 'Web', 'Mobile', 'Design'];
    const projectFilter = document.createElement('div');
    projectFilter.classList.add('project-filter');
    projectCategories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.addEventListener('click', () => filterProjects(category));
        projectFilter.appendChild(button);
    });
    document.querySelector('#projects .container').insertBefore(projectFilter, document.querySelector('.projects-grid'));

    function filterProjects(category) {
        const projects = document.querySelectorAll('.project');
        projects.forEach(project => {
            if (category === 'All' || project.dataset.category === category) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }

    // Typing effect for the header
    const typingEffect = (element, text, speed = 100) => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    };

});

