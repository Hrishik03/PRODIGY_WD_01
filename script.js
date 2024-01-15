window.onscroll = function() {
    var navbar = document.querySelector('.nav');
    if (window.scrollY > 10) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
};
