let btnAbrirMenu = document.getElementById('btn-menu');
let menuMobile = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu')
let btnfechar = document.getElementById('btn-fechar')

btnAbrirMenu.addEventListener('click', () => {
    menuMobile.classList.add('abrir-menu');
});

menuMobile.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
});

overlay.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
});

btnfechar.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
});