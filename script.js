document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('navLinks');

    toggle.addEventListener('click', function() {
        nav.classList.toggle('open');
    });

    // Close menu on link click (for mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
        });
    });
});
