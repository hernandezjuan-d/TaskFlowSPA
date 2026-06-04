import { logout } from "../auth/authService.js";
import { navigateTo } from "../../router/index.js";

export async function render() {
  const response = await fetch("/src/features/dashboard/views/dashboard.html");
  const html = await response.text();
  document.getElementById("app").innerHTML = html;

  const session = JSON.parse(localStorage.getItem("session"));
  if (session) {
    document.getElementById("user-name").textContent = session.name;
  }

  document.getElementById("logout-btn").addEventListener("click", () => {
    logout();
    navigateTo("/login");
  });
}