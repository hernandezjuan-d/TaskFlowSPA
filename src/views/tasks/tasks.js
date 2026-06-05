export function renderTasks() {
    return `<main class="mx-auto max-w-6xl px-6 py-10">
  <section class="flex flex-col gap-4 rounded-[2rem] bg-blue-600 px-8 py-10 text-white md:flex-row md:items-end md:justify-between">
    <div>
      <p class="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">CRUD de tareas</p>
      <h1 class="mt-3 text-4xl font-black tracking-tight">Mis tareas</h1>
      <p class="mt-4 max-w-2xl text-blue-50">Vista principal para listar, editar y eliminar tus tareas.</p>
    </div>
    <a class="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-bold text-blue-700 hover:bg-blue-50" href="/task-form" data-link>
      Crear tarea
    </a>
  </section>

  <section id="tasks-list" class="mt-8 grid gap-4">
    <p class="text-slate-500">Cargando tareas...</p>
  </section>
</main>`
}