const button = document.querySelector('.btn-nav');

const navbar = document.querySelector('nav');
const sections = document.querySelectorAll('main section');

// Appear navbar menu after click button
button.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Dynamic transition between sections
navbar.addEventListener('click', (event) => {
    const link = event.target.closest('a');

    if (link && link.getAttribute('href')) {
        event.preventDefault();

        const targetSectionId = link.getAttribute('href').slice(1);

        sections.forEach(section => {
            section.classList.toggle('active', section.id === targetSectionId);
        });
        
        navbar.classList.toggle('active');
    }
});
