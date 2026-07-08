// Prototype-only auth. No backend yet — a hardcoded credential check with a
// localStorage session flag, swappable later for real authentication.
const SESSION_KEY = 'genprima-session';
const VALID_CREDENTIALS = [
  { username: 'admin', password: 'genprima2026' },
  { username: 'demo', password: 'demo' },
];

export function login(username, password) {
  const match = VALID_CREDENTIALS.some(
    (c) => c.username === username.trim() && c.password === password
  );
  if (match) {
    localStorage.setItem(SESSION_KEY, JSON.stringify({ username: username.trim() }));
  }
  return match;
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}

export function getSession() {
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function isAuthenticated() {
  return getSession() !== null;
}
