const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section');

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
    });
});
