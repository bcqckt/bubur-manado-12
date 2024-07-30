// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// hamburger menu on-click
document.querySelector('#hamburger-menu').onclick = (e) => {
    e.preventDefault();
    navbarNav.classList.toggle('active');
};

//close sidenavbar
const hamburger = document.querySelector ('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});