const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
/*
let navOpen = false;

navToggle.addEventListener('click', () => {
    if(!navOpen) {
        navToggle.classList.add('nav-open');
        navOpen = true;
    } else {
        navToggle.classList.remove('nav-open');
        navOpen = false;
    }
});
*/

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
