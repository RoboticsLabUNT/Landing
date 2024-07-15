document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sideMenu = document.querySelector('.side-menu');
    const closeBtn = document.querySelector('.side-menu .close-btn');
    const dropdownToggle = document.querySelector('.side-menu .dropdown-toggle');

    menuToggle.addEventListener('click', function() {
        sideMenu.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        sideMenu.style.display = 'none';
    });

    // Toggle dropdown when clicking on .dropdown-toggle
    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault();
        const dropdownContent = this.nextElementSibling; // .dropdown-content
        const dropdown = this.parentElement; // .dropdown

        dropdown.classList.toggle('active');
        if (dropdown.classList.contains('active')) {
            dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
        } else {
            dropdownContent.style.maxHeight = '0';
        }
    });
});
