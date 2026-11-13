document.querySelectorAll("[data-nav-toggle]").forEach((button) => {
  const nav = document.getElementById(button.getAttribute("aria-controls"));
  if (!nav) return;

  const setOpen = (open) => {
    nav.classList.toggle("max-md:hidden", !open);
    button.setAttribute("aria-expanded", String(open));
    button.textContent = open ? "Fermer" : "Menu";
  };

  button.addEventListener("click", () => {
    setOpen(button.getAttribute("aria-expanded") !== "true");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
});
