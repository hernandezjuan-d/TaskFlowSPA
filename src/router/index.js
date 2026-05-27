import { isAuthenticated, getUserRole } from "../features/auth/index.js";

const routes = {
  "/": () => import("../features/dashboard/index.js"),
  "/login": () => import("../features/auth/index.js"),
  "/register": () => import("../features/auth/index.js"),
  "/tasks": () => import("../features/tasks/index.js"),
  "/task-form": () => import("../features/tasks/index.js"),
  "/profile": () => import("../features/profile/index.js"),
  "/admin": () => import("../features/admin/index.js"),
  "/404": () => import("../shared/components/notFound.js"),
};

const privateRoutes = ["/", "/tasks", "/task-form", "/profile", "/admin"];
const adminRoutes = ["/admin"];
const authRoutes = ["/login", "/register"];

async function navigate(path) {
  const route = routes[path] || routes["/404"];

  if (privateRoutes.includes(path) && !isAuthenticated()) {
    return navigateTo("/login");
  }

  if (adminRoutes.includes(path) && getUserRole() !== "ADMIN") {
    return navigateTo("/");
  }

  if (authRoutes.includes(path) && isAuthenticated()) {
    return navigateTo("/");
  }

  const module = await route();
  module.render(path);
}

export function navigateTo(path) {
  history.pushState(null, null, path);
  navigate(path);
}

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