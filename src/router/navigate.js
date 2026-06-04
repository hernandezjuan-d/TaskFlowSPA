import { routes } from "./routes.js";
import { isAuthenticated, getUserRole } from "../features/auth/index.js";

const privateRoutes = ["/", "/tasks", "/task-form", "/profile", "/admin"];
const adminRoutes = ["/admin"];
const authRoutes = ["/login", "/register"];

export async function navigate(path) {
  if (privateRoutes.includes(path) && !isAuthenticated()) {
    return navigateTo("/login");
  }

  if (adminRoutes.includes(path) && getUserRole() !== "ADMIN") {
    return navigateTo("/");
  }

  if (authRoutes.includes(path) && isAuthenticated()) {
    return navigateTo("/");
  }

  const route = routes[path] || routes["/404"];
  const module = await route();
  module.render(path);
}

export function navigateTo(path) {
  history.pushState(null, null, path);
  navigate(path);
}