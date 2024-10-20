const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');
const button = document.querySelector('.button');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section');

window.addEventListener('scroll', () => {
    if (!navbar.classList.contains('active')) {
        (window.scrollY > 0) ? header.classList.add('scrolled')
            : header.classList.remove('scrolled');
    }
});

button.addEventListener('click', () => {
    if (!navbar.classList.contains('active')) {
        navbar.classList.add('active');
        if (!header.classList.contains('scrolled'))
            header.classList.add('scrolled');
    } else {
        navbar.classList.remove('active');
        if (window.scrollY == 0)
            header.classList.remove('scrolled');
    }
});

sections.forEach((section, index) => {
    if (index !== 0) {
        section.classList.add('hidden');
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const sectionId = link.getAttribute('href');

        sections.forEach(section => {
            section.classList.add('hidden');
        });

        const activeSection = document.querySelector(sectionId);
        activeSection.classList.remove('hidden');

        navbar.classList.remove('active');
        if (window.scrollY == 0)
            header.classList.remove('scrolled');
    });
});
