import { login } from "./authService.js";
import { navigateTo } from "../../router/index.js";

export function isAuthenticated() {
  return !!localStorage.getItem("session");
}

export function getUserRole() {
  const session = JSON.parse(localStorage.getItem("session") || "null");
  return session?.role || null;
}

export async function render(path) {
  if (path === "/register") {
    document.getElementById("app").innerHTML = `<p>Register - próximamente</p>`;
    return;
  }

  const response = await fetch("/src/features/auth/views/login.html");
  const html = await response.text();
  document.getElementById("app").innerHTML = html;

  document.getElementById("login-btn").addEventListener("click", async () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorBox = document.getElementById("auth-error");

    errorBox.classList.add("hidden");
    errorBox.textContent = "";

    if (!email || !password) {
      errorBox.textContent = "Por favor completa todos los campos.";
      errorBox.classList.remove("hidden");
      return;
    }

    try {
      await login(email, password);
      navigateTo("/");
    } catch (error) {
      errorBox.textContent = error.message;
      errorBox.classList.remove("hidden");
    }
  });
}