document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    function hideAllSections() {
        sections.forEach(section => {
            section.classList.add('hidden');
            section.classList.add('section-style');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            hideAllSections();
            const currentId = this.getAttribute('href').slice(1);
            const currentSection = document.getElementById(currentId);
            currentSection.classList.remove('hidden');
            currentSection.classList.remove('section-style');
        });
    });

    // Optionally show the first section by default
    sections[0].classList.remove('hidden');
    sections[0].classList.remove('section-style');
});
