export const routes = {
  "/": () => import("../features/dashboard/index.js"),
  "/login": () => import("../features/auth/index.js"),
  "/register": () => import("../features/auth/index.js"),
  "/tasks": () => import("../features/tasks/index.js"),
  "/task-form": () => import("../features/tasks/index.js"),
  "/profile": () => import("../features/profile/index.js"),
  "/admin": () => import("../features/admin/index.js"),
  "/404": () => import("../shared/components/notFound.js"),
};