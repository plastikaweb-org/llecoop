export interface AuthState {
  authenticated: boolean;
  error: any;
}

export const initialAuthState: AuthState = {
  authenticated: null,
  error: null
};
