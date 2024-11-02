// Wait until the entire DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navbar = document.getElementById('navbar_list');

    // Loop through each section to create navigation items
sections.forEach(section => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#${section.id}">${section.getAttribute('data-nav')}</a>`;
        navbar.appendChild(li);
    });

    // Add click event listener to the navigation bar
    navbar.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Add scroll event listener to the window
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const navLink = navbar.querySelector(`a[href="#${section.id}"]`);
            if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                navLink.parentElement.classList.add('active');
            } else {
                navLink.parentElement.classList.remove('active');
            }
        });
    });
});
