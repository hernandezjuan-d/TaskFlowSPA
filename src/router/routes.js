import { renderNotFound } from "../shared/components/notFound";
import { renderAdmin } from "../views/admin/admin";
import { renderLogin } from "../views/auth/login";
import { renderProfile } from "../views/auth/profile";
import { renderRegister } from "../views/auth/register";
import { renderHome } from "../views/home";
import { renderTasksForm } from "../views/tasks/task-form";
import { renderTasks } from "../views/tasks/tasks";

export const routes = {
  "/": {
    renderView: renderHome,
    initSetup: setupHome,
    requireAuth: false,
    redirectIfAuth: true,
    allowedRoles: ["admin", "user"] 
  },
  "/login": {
    renderView: renderLogin,
    initSetup: setupLogin,
    requireAuth: false,
    redirectIfAuth: true,
    allowedRoles: ["admin", "user"]
  },
  "/register": {
    renderView: renderRegister,
    initSetup: setupRegister,
    requireAuth: false,
    redirectIfAuth: true,
    allowedRoles: ["admin", "user"]
  },
  "/tasks": {
    renderView: renderTasks,
    initSetup: setupTasks,
    requireAuth: true,
    redirectIfAuth: false,
    allowedRoles: ["admin", "user"]
  },
  "/task-form": {
    renderView: renderTasksForm,
    initSetup: setupTasksForm,
    requireAuth: true,
    redirectIfAuth: false,
    allowedRoles: ["admin", "user"]
  },
  "/profile": {
    renderView: renderProfile,
    initSetup: setupProfile,
    requireAuth: true,
    redirectIfAuth: false,
    allowedRoles: ["admin", "user"]
  },
  "/admin": {
    renderView: renderAdmin,
    initSetup: setupAdmin,
    requireAuth: true,
    allowedRoles: ["admin"]
  },
  "/404": {
    renderView: renderNotFound,
    initSetup: setupNotFound,
    requireAuth: false,
    allowedRoles: ["admin", "user"]
}
};