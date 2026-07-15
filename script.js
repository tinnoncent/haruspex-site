/*
  HARUSPEX landing-page configuration
  -----------------------------------
  Replace each URL below with the exact Gumroad Share link for that tier.
  Gumroad can generate a direct link to each version/variant from the product editor.
  Add ?wanted=true to a normal product URL when you want to open checkout immediately.
*/
const GUMROAD_LINKS = {
  personal: "https://YOUR-GUMROAD-USERNAME.gumroad.com/l/haruspex",
  professional: "https://YOUR-GUMROAD-USERNAME.gumroad.com/l/haruspex",
  commercial: "https://YOUR-GUMROAD-USERNAME.gumroad.com/l/haruspex"
};

for (const link of document.querySelectorAll("[data-gumroad-tier]")) {
  const tier = link.dataset.gumroadTier;
  link.href = GUMROAD_LINKS[tier] || GUMROAD_LINKS.professional;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
}

const header = document.querySelector("[data-header]");
const setHeader = () => header?.classList.toggle("scrolled", window.scrollY > 12);
setHeader();
window.addEventListener("scroll", setHeader, { passive: true });

const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
navToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});
nav?.querySelectorAll("a").forEach((item) => item.addEventListener("click", () => {
  nav.classList.remove("open");
  navToggle?.setAttribute("aria-expanded", "false");
}));

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  }
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
