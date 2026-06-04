import { routes } from "./routes.js";
import { isAuthenticated, getUserRole } from "../features/auth/index.js";

const privateRoutes = ["/", "/tasks", "/task-form", "/profile", "/admin"];
const adminRoutes = ["/admin"];
const authRoutes = ["/login", "/register"];

export async function navigate(path) {
  const cleanPath = path.split("?")[0];

  if (privateRoutes.includes(cleanPath) && !isAuthenticated()) {
    return navigateTo("/login");
  }

  if (adminRoutes.includes(cleanPath) && getUserRole() !== "ADMIN") {
    return navigateTo("/");
  }

  if (authRoutes.includes(cleanPath) && isAuthenticated()) {
    return navigateTo("/");
  }

  const route = routes[cleanPath] || routes["/404"];
  const module = await route();
  module.render(cleanPath);
}

export function navigateTo(path) {
  history.pushState(null, null, path);
  navigate(path);
}