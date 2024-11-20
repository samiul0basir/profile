function navBar() {
    const nav_toggle_icon = document.getElementsByClassName('nav-toggle-icon')[0];

    nav_toggle_icon.addEventListener('click', () => {
        const nav_icons = document.getElementsByClassName('nav-links-res')[0]; // Assuming it's a single element
        console.log(nav_icons);

        if (nav_icons.style.display === 'flex') {
            nav_icons.style.display = 'none';
        } else {
            nav_icons.style.display = 'flex';
        }
    });
}

navBar();

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

