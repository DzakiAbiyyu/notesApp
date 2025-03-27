// document.querySelector('#hamburger-menu').addEventListener('click', function() {
    // document.querySelector('.navbar-nav').classList.toggle('active');
// });

const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
   navbarNav.classList.toggle('active'); 
}