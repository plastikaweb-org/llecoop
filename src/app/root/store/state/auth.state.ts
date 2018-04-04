export interface AuthState {
  authenticated: boolean;
  error: any;
  loading: boolean;
}

export const initialAuthState: AuthState = {
  authenticated: false,
  error: null,
  loading: false
};
