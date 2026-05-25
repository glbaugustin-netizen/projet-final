/* Burger menu toggle */
(function () {
  const burger = document.getElementById('burgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  if (!burger || !mobileNav) return;

  burger.addEventListener('click', function () {
    const isOpen = mobileNav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));

    const spans = burger.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  /* Close on outside click */
  document.addEventListener('click', function (e) {
    if (!burger.contains(e.target) && !mobileNav.contains(e.target)) {
      mobileNav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      const spans = burger.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });
})();
