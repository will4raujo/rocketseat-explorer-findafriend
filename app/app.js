const burgerMenu = document.querySelector('#burguer-menu');
const menu = document.querySelector('#menu');


burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('openMenu');
})