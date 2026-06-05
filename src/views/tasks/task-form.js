export function renderTasksForm() {
    return `<main class="mx-auto max-w-5xl px-6 py-10">
  <section class="rounded-[2rem] border border-blue-100 bg-white p-8 shadow-xl shadow-blue-50">
    <p class="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Formulario</p>
    <h1 id="form-title" class="mt-3 text-4xl font-black tracking-tight text-slate-900">Crear tarea</h1>
    <p class="mt-4 max-w-2xl text-slate-600">Registra una tarea nueva o actualiza una existente.</p>

    <div id="form-error" class="mt-4 hidden rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600 border border-red-100"></div>

    <div class="mt-8 grid gap-5">
      <div>
        <label class="mb-2 block text-sm font-medium text-slate-700" for="title">Título</label>
        <input id="title" type="text" placeholder="Ej. Preparar proyecto final" class="w-full rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none" />
      </div>

      <div>
        <label class="mb-2 block text-sm font-medium text-slate-700" for="description">Descripción</label>
        <textarea id="description" rows="5" placeholder="Describe la tarea..." class="w-full rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none"></textarea>
      </div>

      <div class="grid gap-5 md:grid-cols-2">
        <div>
          <label class="mb-2 block text-sm font-medium text-slate-700" for="status">Estado</label>
          <select id="status" class="w-full rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-slate-900 focus:border-blue-400 focus:outline-none">
            <option value="Pendiente">Pendiente</option>
            <option value="En progreso">En progreso</option>
            <option value="Completada">Completada</option>
          </select>
        </div>
        <div>
          <label class="mb-2 block text-sm font-medium text-slate-700" for="date">Fecha límite</label>
          <input id="date" type="date" class="w-full rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-slate-900 focus:border-blue-400 focus:outline-none" />
        </div>
      </div>

      <div class="flex flex-col gap-3 pt-2 sm:flex-row">
        <button id="save-btn" class="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-500">Guardar tarea</button>
        <a class="inline-flex items-center justify-center rounded-2xl border border-blue-200 bg-white px-5 py-3 text-sm font-bold text-blue-700 hover:bg-blue-50" href="/tasks" data-link>Cancelar</a>
      </div>
    </div>
  </section>
</main>`
}