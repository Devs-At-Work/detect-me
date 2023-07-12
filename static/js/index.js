const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-link')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});


window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var navbarLink = document.querySelector('.navbar-link');
  
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
      navbarLink.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
      navbarLink.classList.remove('scrolled');
    }
  });