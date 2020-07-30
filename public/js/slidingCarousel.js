function developCarousel() {
    const slidingCarousels = document.querySelectorAll('.sliding-carousel');  //select all carousels present in the page
    slidingCarousels.forEach(slidingCarousel => {
        const slidesContainer = slidingCarousel.querySelector(".slides-container");
        const slidesArray = Array.from(slidesContainer.children);

        const rtButton = slidingCarousel.querySelector('.rt-button');
        const ltButton = slidingCarousel.querySelector('.lt-button');

        //styling slides: arranging slide one after another horizontally
        const slideWidth = slidesArray[0].clientWidth;
        slidesArray.forEach((slide, index) => {
            let left = slideWidth * index;
            slide.style.left = `${left}px`;
        });

        //add eventListeners to slide buttons
        rtButton.addEventListener('click', (event) => {
            let activeSlide = slidesContainer.querySelector('.active-slide');
            if (activeSlide === slidesArray[0]) {
                activeSlide.classList.remove('active-slide');
                slidesArray[slidesArray.length - 1].classList.add('active-slide');

            } else {
                activeSlide.classList.remove('active-slide');
                activeSlide.previousElementSibling.classList.add('active-slide');
            }
            const nextSlide = slidesContainer.querySelector('.active-slide');

            //move the slidesContainer equal to "left" property value of nextSlide
            slidesContainer.style.transform = `translateX(-${nextSlide.style.left})`
        });

        ltButton.addEventListener('click', (event) => {
            let activeSlide = slidesContainer.querySelector('.active-slide');
            if (activeSlide === slidesArray[slidesArray.length - 1]) {
                activeSlide.classList.remove('active-slide');
                slidesArray[0].classList.add('active-slide');
            } else {
                activeSlide.classList.remove('active-slide');
                activeSlide.nextElementSibling.classList.add('active-slide');
            }
            const nextSlide = slidesContainer.querySelector('.active-slide');

            //move the slidesContainer equal to "left" property value of nextSlide
            slidesContainer.style.transform = `translateX(-${nextSlide.style.left})`
        });
    });
}

developCarousel();

window.onresize = developCarousel;  //again re-develop the carousel on screen resize