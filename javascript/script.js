
// MENU
const mainMenu = document.getElementById("mainMenu");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const items = document.querySelectorAll("nav .mainMenu li a");
const header = document.querySelector("header");
const logo = document.getElementById("logo");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

items.forEach(item => {
    item.addEventListener("click", function() {
        close();
    });
});

function show() {
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
    document.body.style.overflow = "hidden";
}

function close() {
    mainMenu.style.top = "-110%";
    document.body.style.overflow = "auto";
}

// ACCORDION 
const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body');
        body.classList.toggle('active');
    });
});

// SKELETON LOADER 
const cards = document.querySelectorAll('.card');

const images = [
    './images/article-1.jpg',
    './images/article-2.jpg',
    './images/article-3.jpg',
    './images/article-4.jpg',
    './images/img2.jpg',
    './images/img1.jpg'
]

window.onload = () => {
    cards.forEach((card, index) => {
        const imgElement = card.querySelector('img');
        imgElement.src = images[index];

        imgElement.onload = () => {
            card.classList.remove('loading');
        }
    });
}