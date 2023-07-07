export const AUTH_TOKEN_KEY = "auth-token";

export async function getAuthToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY);
  
}

export async function setAuthToken(token: any) {
  return localStorage.setItem(AUTH_TOKEN_KEY, token);
}

export async function deleteAuthToken() {
  return localStorage.removeItem(AUTH_TOKEN_KEY);
}
