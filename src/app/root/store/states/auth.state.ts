export interface AuthState {
  authenticated: boolean;
  uid: string;
  recoverPassSent: boolean;
  error: any;
}

export const initialAuthState: AuthState = {
  authenticated: null,
  uid: null,
  recoverPassSent: false,
  error: null
};
