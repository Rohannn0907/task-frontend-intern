export function loginUser() {
  document.cookie = "token=fake-jwt-token; path=/"
}

export function logoutUser() {
  document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC"
}

export function isAuthenticated() {
  return document.cookie.includes("token=")
}
