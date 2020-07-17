//onscroll for #navbar
const navbar = document.querySelector('#navbar');

let previousScrollPosition = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPosition = window.pageYOffset;

    if(currentScrollPosition > 101){    //101px
        navbar.classList.add('navbar-after');
    }
    else{
        navbar.classList.remove('navbar-after');
    }
    previousScrollPosition= currentScrollPosition;
}