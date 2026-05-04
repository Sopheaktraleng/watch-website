document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!toggle || !mobileMenu) {
    return;
  }

  toggle.addEventListener("click", function () {
    const isOpen = mobileMenu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
});
