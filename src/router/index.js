import { navigateTo, navigate } from "./navigate.js";

export { navigateTo }; // <- agrega esta línea

export function initRouter() {
  window.addEventListener("popstate", () => navigate(location.pathname));

  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-link]");
    if (link) {
      e.preventDefault();
      navigateTo(link.getAttribute("href"));
    }
  });

  navigate(location.pathname);
}