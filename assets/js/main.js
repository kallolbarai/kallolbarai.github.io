(function () {
  // Theme toggle (persisted)
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  if (stored) root.setAttribute("data-theme", stored);

  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }

  // Mobile nav
  const navBtn = document.querySelector(".nav__toggle");
  const navMenu = document.getElementById("navMenu");
  if (navBtn && navMenu) {
    navBtn.addEventListener("click", () => {
      const open = navMenu.classList.toggle("is-open");
      navBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Gallery modal
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("imgModalImg");
  if (modal && modalImg) {
    document.querySelectorAll("[data-modal-img]").forEach(img => {
      img.addEventListener("click", () => {
        modalImg.src = img.getAttribute("data-modal-img");
        modal.setAttribute("aria-hidden", "false");
      });
    });
    modal.addEventListener("click", () => modal.setAttribute("aria-hidden", "true"));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") modal.setAttribute("aria-hidden", "true");
    });
  }

  // Publications filtering (type + search)
  const searchInput = document.getElementById("pubSearch");
  const typeSelect = document.getElementById("pubType");
  const pubCards = Array.from(document.querySelectorAll("[data-pub]"));

  function applyPubFilter() {
    const q = (searchInput?.value || "").toLowerCase().trim();
    const t = (typeSelect?.value || "All");
    pubCards.forEach(card => {
      const text = card.getAttribute("data-pub-text") || "";
      const type = card.getAttribute("data-pub-type") || "";
      const okText = !q || text.includes(q);
      const okType = (t === "All") || (type === t);
      card.style.display = (okText && okType) ? "" : "none";
    });
  }

  if (searchInput) searchInput.addEventListener("input", applyPubFilter);
  if (typeSelect) typeSelect.addEventListener("change", applyPubFilter);
})();
