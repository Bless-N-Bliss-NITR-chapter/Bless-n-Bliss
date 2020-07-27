const pullerButtons = document.querySelectorAll('.puller-btn');

pullerButtons.forEach((pullerButton, index) => {
    pullerButton.addEventListener('click', (event)=>{
        document.querySelector(`.drop-list-${index}`).classList.toggle('close');
    })
});

