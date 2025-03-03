/**
 * Auth credentials used for login
 */
export interface AuthCredentials {
  username: string;
  password: string;
}

/**
 * Authentication token returned after successful login
 */
export interface AuthToken {
  access_token: string;
  refresh_token?: string;
  expires_in: number;
  token_type?: string;
}

/**
 * Auth state representing the current authentication status
 */
export interface AuthState {
  isAuthenticated: boolean;
  user: {
    id?: string;
    name?: string;
    role?: string;
  } | null;
  token: string | null;
}
