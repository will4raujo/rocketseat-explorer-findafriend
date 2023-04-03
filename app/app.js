const burgerMenu = document.querySelector('#burguer-menu');
const menu = document.querySelector('#menu');
const imageBurguerMenu = document.querySelector("#image-burguer");

const imageCancelMenu = document.createElement('img');
imageCancelMenu.src = "images/Vector.svg";
imageCancelMenu.id = "imageCancelMenu";

burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('openMenu');
    
    if (burgerMenu.contains(imageBurguerMenu)) {
        burgerMenu.removeChild(imageBurguerMenu);
        burgerMenu.appendChild(imageCancelMenu);
    } else {
        burgerMenu.removeChild(imageCancelMenu);
        burgerMenu.appendChild(imageBurguerMenu);
    }
})