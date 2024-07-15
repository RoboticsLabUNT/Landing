document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sideMenu = document.querySelector('.side-menu');
    const closeBtn = document.querySelector('.side-menu .close-btn');

    menuToggle.addEventListener('click', function() {
        sideMenu.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        sideMenu.style.display = 'none';
    });
});
