/* Minimal JS: hamburger menu toggle only */
(function () {
  'use strict';

  var hamburger = document.getElementById('hamburger');
  var navMenu   = document.getElementById('nav-menu');

  if (!hamburger || !navMenu) { return; }

  hamburger.addEventListener('click', function () {
    var expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('is-open', !expanded);
  });

  /* Close menu when a link is followed (for same-page anchors on mobile) */
  navMenu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      hamburger.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('is-open');
    }
  });
}());
