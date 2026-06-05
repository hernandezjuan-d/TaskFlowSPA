export function renderLogin() {
return `<section class="flex min-h-screen items-center justify-center bg-gradient-to-b from-sky-50 via-white to-blue-100 px-6">
  <div class="w-full max-w-md rounded-[2rem] border border-blue-100 bg-white p-10 shadow-xl shadow-blue-100/70">
    
    <div class="mb-8 text-center">
      <h1 class="text-3xl font-black tracking-tight text-slate-900">TaskFlow</h1>
      <p class="mt-2 text-sm text-slate-500">Inicia sesión para continuar</p>
    </div>

    <div id="auth-error" class="mb-4 hidden rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600 border border-red-100"></div>

    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <label class="text-sm font-semibold text-slate-700" for="email">Correo electrónico</label>
        <input
          id="email"
          type="email"
          placeholder="correo@ejemplo.com"
          class="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div class="flex flex-col gap-1">
        <label class="text-sm font-semibold text-slate-700" for="password">Contraseña</label>
        <input
          id="password"
          type="password"
          placeholder="••••••••"
          class="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <button
        id="login-btn"
        class="mt-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-500"
      >
        Iniciar sesión
      </button>
    </div>

    <p class="mt-6 text-center text-sm text-slate-500">
      ¿No tienes cuenta?
      <a href="/register" data-link class="font-semibold text-blue-600 hover:underline">Regístrate</a>
    </p>

  </div>
</section>`;
}