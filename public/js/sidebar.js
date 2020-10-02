document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".navbar").classList.toggle("navbar-open");

    document.querySelector(".mobile-logo").classList.toggle('mobile-logo--hide');

    //remove wiggle animation of hamburger
    document.querySelector(".hamburger").classList.remove('wiggle-x', 'appear');
});

if (window.innerWidth <= 767) {
    const dropdownTogglers = document.querySelectorAll(".dropdown-toggler");

    dropdownTogglers.forEach((dropdownToggler, index) => {

        dropdownToggler.addEventListener("click", () => {
            document.querySelector(`.dropdown-menu-ul-index-${index}`).classList.toggle("dropdown-menu-ul--hide");
        });
    });
}