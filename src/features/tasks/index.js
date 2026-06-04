import { logout } from "../auth/authService.js";
import { navigateTo } from "../../router/index.js";

const API_URL = "http://localhost:3001";

export async function render(path) {
  const session = JSON.parse(localStorage.getItem("session"));

  if (path === "/task-form") {
    await renderForm(session);
  } else {
    await renderList(session);
  }
}

async function renderList(session) {
  const response = await fetch("/src/features/tasks/views/tasks.html");
  const html = await response.text();
  document.getElementById("app").innerHTML = html;

  document.getElementById("logout-btn").addEventListener("click", () => {
    logout();
    navigateTo("/login");
  });

  await loadTasks(session);
}

async function renderForm(session) {
  const response = await fetch("/src/features/tasks/views/task-form.html");
  const html = await response.text();
  document.getElementById("app").innerHTML = html;

  document.getElementById("logout-btn").addEventListener("click", () => {
    logout();
    navigateTo("/login");
  });

  const params = new URLSearchParams(window.location.search);
  const taskId = params.get("id");

  if (taskId) {
    document.getElementById("form-title").textContent = "Editar tarea";
    const res = await fetch(`${API_URL}/tasks/${taskId}`);
    const task = await res.json();
    document.getElementById("title").value = task.title;
    document.getElementById("description").value = task.description;
    document.getElementById("status").value = task.status;
    document.getElementById("date").value = task.date;
  }

  document.getElementById("save-btn").addEventListener("click", async () => {
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const status = document.getElementById("status").value;
    const date = document.getElementById("date").value;
    const errorBox = document.getElementById("form-error");

    errorBox.classList.add("hidden");

    if (!title || !description || !date) {
      errorBox.textContent = "Por favor completa todos los campos.";
      errorBox.classList.remove("hidden");
      return;
    }

    const task = { title, description, status, date, userId: session.id };

    if (taskId) {
      await fetch(`${API_URL}/tasks/${taskId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });
    } else {
      await fetch(`${API_URL}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });
    }

    navigateTo("/tasks");
  });
}

async function loadTasks(session) {
  const tasksList = document.getElementById("tasks-list");

  try {
    const response = await fetch(`${API_URL}/tasks?userId=${session.id}`);
    const tasks = await response.json();

    if (tasks.length === 0) {
      tasksList.innerHTML = `<p class="text-slate-500">No tienes tareas todavía. ¡Crea una!</p>`;
      return;
    }

    tasksList.innerHTML = tasks.map((task) => `
      <article class="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-50">
        <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">${task.status}</p>
            <h2 class="mt-2 text-2xl font-bold text-slate-900">${task.title}</h2>
            <p class="mt-3 max-w-2xl text-slate-600">${task.description}</p>
          </div>
          <div class="flex gap-3">
            <a class="rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50" href="/task-form?id=${task.id}" data-link>Editar</a>
            <button class="rounded-full border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 delete-btn" data-id="${task.id}">Eliminar</button>
          </div>
        </div>
      </article>
    `).join("");

    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const id = btn.getAttribute("data-id");
        await fetch(`${API_URL}/tasks/${id}`, { method: "DELETE" });
        await loadTasks(session);
      });
    });

  } catch (error) {
    tasksList.innerHTML = `<p class="text-red-500">Error al cargar las tareas.</p>`;
  }
}