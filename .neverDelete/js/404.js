//js for navbar
if (window.innerWidth > 767) {
    const dropdownTogglers = document.querySelectorAll(".dropdown-toggler");

    dropdownTogglers.forEach((dropdownToggler, index) => {
            dropdownToggler.addEventListener("mouseover", () => {
                    document.querySelector(`.dropdown-menu-ul-index-${index}`).classList.remove("dropdown-menu-ul--hide");
            });
            dropdownToggler.addEventListener("mouseout", () => {
                    document.querySelector(`.dropdown-menu-ul-index-${index}`).classList.add("dropdown-menu-ul--hide");
            });

    });
}
//js for sidebar
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".navbar").classList.toggle("navbar-open");

    document.querySelector(".mobile-logo").classList.toggle('mobile-logo--hide');
});

if (window.innerWidth <= 767) {
    const dropdownTogglers = document.querySelectorAll(".dropdown-toggler");

    dropdownTogglers.forEach((dropdownToggler, index) => {

        dropdownToggler.addEventListener("click", () => {
            document.querySelector(`.dropdown-menu-ul-index-${index}`).classList.toggle("dropdown-menu-ul--hide");
        });
    });
}
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