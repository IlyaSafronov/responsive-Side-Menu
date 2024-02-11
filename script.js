'use strict';
const header = document.getElementById('header');
const nav_toggler = document.getElementById('nav-toggler');
const nav = document.getElementById('nav');
const nav__links = document.querySelectorAll('.nav__item-link');
const sub_links = document.querySelectorAll('.sub_link');

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
    const sub_menu = this.nextElementSibling;
    if (sub_menu) {
      sub_menu.classList.toggle('d-none');
    }
  });
});

sub_links.forEach((link) => {
  link.addEventListener('click', () => {
    sub_links.forEach((l) => l.classList.remove('active-sub-link'));
    link.classList.toggle('active-sub-link');
  });
});