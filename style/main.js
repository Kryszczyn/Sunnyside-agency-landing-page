const hamburgerMenuIcon = document.querySelector('.hamburger-menu__icon'),
        hamburgerMenu = document.querySelector('.mobile-menu__container'),
        desktopNavbar = document.querySelector('.links__container');


hamburgerMenuIcon.addEventListener('click', () => {
    console.log('eee')
    hamburgerMenu.classList.toggle('mobile-menu__container--active');
})