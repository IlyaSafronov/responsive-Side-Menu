'use strict';
const header = document.getElementById('header');
const nav_toggler = document.getElementById('nav-toggler');
const nav = document.getElementById('nav');

nav_toggler.addEventListener('click', function() {
  this.classList.toggle('fa-times');
  nav.classList.toggle('collapse');

})