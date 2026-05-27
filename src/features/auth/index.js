import { navigateTo } from "../../router/index.js";

export function isAuthenticated() {
  return !!localStorage.getItem("session");
}

export function getUserRole() {
  const session = JSON.parse(localStorage.getItem("session") || "null");
  return session?.role || null;
}

export function render(path) {
  const app = document.getElementById("app");

  if (path === "/register") {
    app.innerHTML = `<p>Register - próximamente</p>`;
  } else {
    app.innerHTML = `<p>Login - próximamente</p>`;
  }
}