export const token_key = 'access_token';

class AuthStore {
  private token: string | null =
    typeof window !== 'undefined' ? localStorage.getItem(token_key) : null;

  getToken() {
    return this.token;
  }

  setToken(token: string) {
    localStorage.setItem(token_key, token);
    this.token = token;
  }

  deleteToken() {
    localStorage.removeItem(token_key);
    this.token = null;
  }
}

export const authStore = new AuthStore();
