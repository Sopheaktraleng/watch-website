document.addEventListener("DOMContentLoaded", function () {

  /* ── Mobile menu toggle ── */
  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (toggle && mobileMenu) {
    toggle.addEventListener("click", function () {
      const isOpen = mobileMenu.classList.toggle("is-open");
      toggle.classList.toggle("open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close on link click
    mobileMenu.querySelectorAll(".mobile-link").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("is-open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ── Sticky nav scroll effect ── */
  const header = document.getElementById("site-header");
  function onScroll() {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ── Scroll reveal (IntersectionObserver) ── */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback — just show everything
    reveals.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ── Stagger reveal children inside arrivals rail ── */
  document.querySelectorAll(".arrival-card.reveal").forEach(function (card, i) {
    card.style.transitionDelay = (i * 0.08) + "s";
  });

  /* ── Draggable arrivals rail ── */
  const rail = document.querySelector(".arrivals-rail");
  if (rail) {
    let isDragging = false, startX = 0, scrollLeft = 0;

    rail.addEventListener("mousedown", function (e) {
      isDragging = true;
      startX = e.pageX - rail.offsetLeft;
      scrollLeft = rail.scrollLeft;
      rail.style.userSelect = "none";
    });
    rail.addEventListener("mouseleave", function () { isDragging = false; });
    rail.addEventListener("mouseup", function () {
      isDragging = false;
      rail.style.userSelect = "";
    });
    rail.addEventListener("mousemove", function (e) {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - rail.offsetLeft;
      const walk = (x - startX) * 1.4;
      rail.scrollLeft = scrollLeft - walk;
    });
  }

  /* ── Newsletter form ── */
  const form = document.querySelector(".newsletter-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const input = form.querySelector(".newsletter-input");
      const val = input ? input.value.trim() : "";
      if (!val || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        input.style.borderColor = "#ff4444";
        setTimeout(function () { input.style.borderColor = ""; }, 2000);
        return;
      }
      const btn = form.querySelector(".newsletter-button");
      btn.textContent = "Subscribed ✓";
      btn.style.background = "#2c8c4a";
      btn.style.color = "#fff";
      input.value = "";
      setTimeout(function () {
        btn.textContent = "Subscribe";
        btn.style.background = "";
        btn.style.color = "";
      }, 4000);
    });
  }

});
