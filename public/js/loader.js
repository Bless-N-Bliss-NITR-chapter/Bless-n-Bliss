if (window.innerWidth < 767) {
    setTimeout(() => {  document.querySelector('.preloader').classList.add('preloader-close'); }, 6000);
}
else {
    window.addEventListener('load', (event) => {
        document.querySelector('.preloader').classList.add('preloader-close');
    });
}