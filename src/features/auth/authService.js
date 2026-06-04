const API_URL = "http://localhost:3001";

export async function login(email, password) {
  const response = await fetch(`${API_URL}/users?email=${email}`);
  const users = await response.json();

  const user = users.find((u) => u.password === password);

  if (!user) {
    throw new Error("Correo o contraseña incorrectos");
  }

  const session = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  localStorage.setItem("session", JSON.stringify(session));
  return session;
}

export function logout() {
  localStorage.removeItem("session");
}