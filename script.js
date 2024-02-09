'use strict';
const header = document.getElementById('header');
const nav_toggler = document.getElementById('nav-toggler');
const nav = document.getElementById('nav');
const nav__links = document.querySelectorAll('.nav__item-link');

nav_toggler.addEventListener('click', function() {
  this.classList.toggle('fa-times');
  nav.classList.toggle('collapse');
  header.classList.toggle('collapse-header');
});

nav__links.forEach((link) => {
  link.addEventListener('click', function() {
    nav__links.forEach((l) => {
      if (l.classList.contains('active')) {
        l.classList.remove('active');
      }
    })
    this.classList.toggle('active');
  });
});