document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('active');
        menuIcon.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
});