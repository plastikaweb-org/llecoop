import { Action } from '@ngrx/store';
import { Credentials } from '../../../../shared';

export const GET_AUTHENTICATION = '[Auth] Get Authentication';
export const GET_AUTHENTICATION_FAIL = '[Auth] Get Authentication Fail';
export const GET_AUTHENTICATION_SUCCESS = '[Auth] Get Authentication Success';

// check authentication
export class GetAuthentication implements Action {
  readonly type = GET_AUTHENTICATION;
}

export class GetAuthenticationFail implements Action {
  readonly type = GET_AUTHENTICATION_FAIL;
}

export class GetAuthenticationSuccess implements Action {
  readonly type = GET_AUTHENTICATION_SUCCESS;
}

// login
export const AUTHENTICATE = '[Auth] Login';
export const AUTHENTICATE_FAIL = '[Auth] Login Fail';
export const AUTHENTICATE_SUCCESS = '[Auth] Login success';

export class Authenticate implements Action {
  readonly type = AUTHENTICATE;

  constructor(public payload: Credentials) {}
}

export class AuthenticateFail implements Action {
  readonly type = AUTHENTICATE_FAIL;

  constructor(public payload: any) {}
}

export class AuthenticateSuccess implements Action {
  readonly type = AUTHENTICATE_SUCCESS;
}

// logout
export const LOGOUT = '[Authentication] Logout';

export class Logout implements Action {
  readonly type = LOGOUT;
}

export type AuthActions =
  | GetAuthentication
  | GetAuthenticationFail
  | GetAuthenticationSuccess
  | Authenticate
  | AuthenticateFail
  | AuthenticateSuccess
  | Logout;
