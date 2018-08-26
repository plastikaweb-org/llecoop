import * as fromActions from '../../actions';
import * as fromState from '../../states';

export function reducer(state = fromState.initialAuthState,
                        action: fromActions.AuthActions): fromState.AuthState {
  switch (action.type) {
    case fromActions.GET_AUTHENTICATION_FAIL:
    case fromActions.AUTHENTICATE_FAIL:
    case fromActions.LOGOUT: {
      return { ...state, uid: null, authenticated: false };
    }
    case fromActions.GET_AUTHENTICATION_SUCCESS: {
      return { ...state, authenticated: true, uid: action.payload };
    }
  }
  return state;
}

export const getIsAuthenticatedState = (state: fromState.AuthState) =>
  state.authenticated;
