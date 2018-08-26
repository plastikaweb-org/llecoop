export interface AuthState {
  authenticated: boolean;
  uid: string;
  error: any;
}

export const initialAuthState: AuthState = {
  authenticated: null,
  uid: null,
  error: null
};
