export const AUTH_TOKEN_KEY = "auth-token";
export const AUTH_TOKEN_KEY_DVE = "auth-token-dve";

export async function getAuthToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

export async function setAuthToken(token: any) {
  return localStorage.setItem(AUTH_TOKEN_KEY, token);
}

export async function deleteAuthToken() {
  return localStorage.removeItem(AUTH_TOKEN_KEY);
}

export async function getAuthTokenDVE() {
  return localStorage.getItem(AUTH_TOKEN_KEY_DVE);
}

export async function setAuthTokenDVE(token: any) {
  return localStorage.setItem(AUTH_TOKEN_KEY_DVE, token);
}

export async function deleteAuthTokenDVE() {
  return localStorage.removeItem(AUTH_TOKEN_KEY_DVE);
}
