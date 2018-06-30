import * as fromActions from '../../actions';
import * as fromState from '../../state';
import { reducer } from './auth.reducer';

describe('Auth Reducer', () => {
  describe('Undefined Action', () => {
    it('should return the default state', () => {
      const action = {} as any;
      const newState = reducer(undefined, action);
      expect(newState).toBe(fromState.initialAuthState);
    });
  });

  describe('Current Login Reducer Actions', () => {
    it('should handle the Login action', () => {
      const newState = reducer(
        fromState.initialAuthState,
        new fromActions.Authenticate({
          email: 'test@test.com',
          password: '12345678'
        })
      );
      expect(newState.authenticated).toBeFalsy();
    });
    it('should handle the Login Fail action', () => {
      const newState = reducer(
        fromState.initialAuthState,
        new fromActions.AuthenticateFail('error')
      );
      expect(newState.authenticated).toBeFalsy();
    });
  });

  describe('Current Check Auth Reducer Actions', () => {
    it('should handle the Check Auth Success action', () => {
      const newState = reducer(
        fromState.initialAuthState,
        new fromActions.GetAuthenticationSuccess('')
      );
      expect(newState.authenticated).toBeTruthy();
    });
    it('should handle the Check Auth Fail action', () => {
      const newState = reducer(
        fromState.initialAuthState,
        new fromActions.GetAuthenticationFail()
      );
      expect(newState.authenticated).toBeFalsy();
    });
  });

  describe('Current Logout Reducer Actions', () => {
    it('should handle the Logout action', () => {
      const newState = reducer(
        fromState.initialAuthState,
        new fromActions.Logout()
      );
      expect(newState.authenticated).toBeFalsy();
    });
    it('should handle the Logout Success action', () => {
      const newState = reducer(
        fromState.initialAuthState,
        new fromActions.LogoutSuccess()
      );
      expect(newState.authenticated).toBeFalsy();
    });
  });

});
