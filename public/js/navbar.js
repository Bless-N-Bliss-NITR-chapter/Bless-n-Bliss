const dropdownTogglers = document.querySelectorAll(".dropdown-toggler");

dropdownTogglers.forEach((dropdownToggler, index) => {
        dropdownToggler.addEventListener("mouseover", () => {
                document.querySelector(`.dropdown-menu-ul-index-${index}`).classList.remove("dropdown-menu-ul--hide");
        });
        dropdownToggler.addEventListener("mouseout", () => {
                document.querySelector(`.dropdown-menu-ul-index-${index}`).classList.add("dropdown-menu-ul--hide");
        });

        dropdownToggler.addEventListener("click", () => {
                document.querySelector(`.dropdown-menu-ul-index-${index}`).classList.toggle("dropdown-menu-ul--hide");
        });
});