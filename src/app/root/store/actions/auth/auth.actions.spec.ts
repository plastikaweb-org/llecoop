import { Credentials } from '@llecoop';
import * as fromActions from './auth.actions';

describe('Check Authentication Actions', () => {
  it('should create a Get Authentication action', () => {
    const action = new fromActions.GetAuthentication();
    expect(action).toEqual({
      type: fromActions.GET_AUTHENTICATION
    });
  });
  it('should create a Get Authentication Fail action', () => {
    const action = new fromActions.GetAuthenticationFail();
    expect(action).toEqual({
      type: fromActions.GET_AUTHENTICATION_FAIL
    });
  });
  it('should create a Get Authentication Success action', () => {
    const payload = '________';
    const action = new fromActions.GetAuthenticationSuccess(payload);
    expect(action).toEqual({
      type: fromActions.GET_AUTHENTICATION_SUCCESS,
      payload
    });
  });
});

describe('Login Actions', () => {
  it('should create an Authenticate action', () => {
    const payload = <Credentials>{ email: 'test@test.com', password: '' };
    const action = new fromActions.Authenticate(payload);
    expect(action).toEqual({
      type: fromActions.AUTHENTICATE,
      payload
    });
  });
  it('should create an Authenticate Fail action', () => {
    const payload = 'error';
    const action = new fromActions.AuthenticateFail(payload);
    expect(action).toEqual({
      type: fromActions.AUTHENTICATE_FAIL,
      payload
    });
  });
  it('should create an Authenticate Success action', () => {
    const action = new fromActions.AuthenticateSuccess();
    expect(action).toEqual({
      type: fromActions.AUTHENTICATE_SUCCESS
    });
  });

  describe('Logout Actions', () => {
    it('should create a Logout action', () => {
      const action = new fromActions.Logout();
      expect(action).toEqual({
        type: fromActions.LOGOUT
      });
    });
    it('should create a Logout Success action', () => {
      const action = new fromActions.LogoutSuccess();
      expect(action).toEqual({ type: fromActions.LOGOUT_SUCCESS });
    });
  });
});
