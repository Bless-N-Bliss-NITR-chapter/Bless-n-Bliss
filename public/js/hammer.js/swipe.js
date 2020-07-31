const slidingCarousels = document.querySelectorAll('.sliding-carousel');  //select all carousels present in the page
slidingCarousels.forEach(slidingCarousel => {
    const slidesContainer = slidingCarousel.querySelector(".slides-container");
    const slidesArray = Array.from(slidesContainer.children);

    const rtButton = slidingCarousel.querySelector('.rt-button');
    const ltButton = slidingCarousel.querySelector('.lt-button');
    //>>HAMMER.JS implementation
    // create a simple hammer instance for each slide
    slidesArray.forEach(slide => {
        var hammerInstance = new Hammer(slide);

        hammerInstance.on("panleft", event => {
            rtButton.click();
        });
        hammerInstance.on("panright", event => {
            ltButton.click();
        });
    });
});