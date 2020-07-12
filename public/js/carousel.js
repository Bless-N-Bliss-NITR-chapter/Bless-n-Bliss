const tracksContainers = document.querySelectorAll('.carousel-container');  //select all carousels present in the page

tracksContainers.forEach(trackContainer => {
    const tracks = trackContainer.querySelector(".tracks-ul");
    const slidesArray = Array.from(tracks.children);

    const tracksNavbar = trackContainer.querySelector('.tracks-navbar');
    const navDotsArray = Array.from(tracksNavbar.children);

    //add event listeners to navDots buttons
    for (let index = 0; index < navDotsArray.length; index++) {
        navDotsArray[index].addEventListener('click', (event) => {
            // remove active classes from active slide and dot
            const activeSlide = tracks.querySelector('.active-slide');
            const activeDot = tracksNavbar.querySelector('.active-dot');
            activeSlide.classList.remove('active-slide');
            activeDot.classList.remove('active-dot');

            // add active class to the current clicked sot and its corresponding slide
            slidesArray[index].classList.add('active-slide');
            navDotsArray[index].classList.add('active-dot');

        });
    }

    //automatically change slide
    function nextSlide() {

        const activeSlide = tracks.querySelector('.active-slide');
        const activeDot = tracksNavbar.querySelector('.active-dot');

        let nextSiblingSlide = null;
        let nextSiblingDot = null;
        if (activeSlide === slidesArray[slidesArray.length - 1]) {//if active slide is the last slide...
            nextSiblingSlide = slidesArray[0];
            nextSiblingDot = navDotsArray[0];
        }
        else {
            nextSiblingSlide = activeSlide.nextElementSibling;
            nextSiblingDot = activeDot.nextElementSibling;
        }
        activeSlide.classList.remove('active-slide');
        activeDot.classList.remove('active-dot');

        nextSiblingDot.classList.add('active-dot');
        nextSiblingSlide.classList.add('active-slide');

        setTimeout(nextSlide, 7000);
    }

    nextSlide();
})