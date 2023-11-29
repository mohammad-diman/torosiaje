
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNv = header.offsetTop;
    
    if (window.pageYOffset > fixedNv) {
        header.classList.add('navbar-fixed');
        header.classList.remove('bg-green-800');
        header.classList.remove('lg:bg-transparent');
    } else {
        header.classList.add('bg-green-800');
        header.classList.add('lg:bg-transparent');
        header.classList.add('text-white');
        header.classList.remove('navbar-fixed');
    }
}