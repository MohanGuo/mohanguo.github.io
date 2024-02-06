document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    function hideAllSections() {
        sections.forEach(section => {
            section.classList.add('hidden');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            hideAllSections();
            const currentId = this.getAttribute('href').slice(1);
            const currentSection = document.getElementById(currentId);
            currentSection.classList.remove('hidden');
        });
    });

    // Optionally show the first section by default
    sections[0].classList.remove('hidden');
});
// document.addEventListener('DOMContentLoaded', function() {
//     // 获取导航链接和要显示的section
//     var contactLink = document.getElementById('contact-link');
//     var contactSection = document.getElementById('contact');

//     contactLink.addEventListener('click', function(e) {
//         e.preventDefault(); // 阻止链接默认的导航行为
//         // 切换contact section的可见状态
//         contactSection.classList.toggle('hidden');
//     });
// });
