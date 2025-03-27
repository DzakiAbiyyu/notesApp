// const hamburgerMenu = document.querySelector('#hamburger-menu');
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}


// document.querySelector('#hamburger-menu').addEventListener('click', function() {
//     // event.preventDefault(); // Mencegah reload halaman
//     navbarNav.classList.toggle('active');
// });