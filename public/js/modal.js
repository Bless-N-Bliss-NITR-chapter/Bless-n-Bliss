const modalOpenerImages = document.querySelectorAll('.modal-opener');
const modalImage = document.querySelector('.modal-image');
modalOpenerImages.forEach((modalOpener)=>{
    modalOpener.addEventListener('click', (event)=>{
        modalImage.src = modalOpener.src;
        document.querySelector('.modal-background').classList.remove('hide');
    });
})

const modalCloseButton = document.querySelector(".fa-window-close-button");
modalCloseButton.addEventListener('click', (event)=>{
    document.querySelector('.modal-background').classList.add('hide');
});