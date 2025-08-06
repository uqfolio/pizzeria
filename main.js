let menu = document.querySelector('#menu-icon');
let navMenu = document.querySelector('.nav-menu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navMenu.classList.toggle('active'); 
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
     navMenu.classList.remove('active');
}