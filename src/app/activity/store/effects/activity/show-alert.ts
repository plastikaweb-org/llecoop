import * as fromActions from 'app/root/store/actions';

export type showErrorTypes =
  | fromActions.AuthenticateFail
  | fromActions.LogoutFail
  | fromActions.GetProfileFail
  | fromActions.ForgotFail;
export const showErrorActions = [
  fromActions.AUTHENTICATE_FAIL,
  fromActions.LOGOUT_FAIL,
  fromActions.GET_PROFILE_FAIL,
  fromActions.FORGOT_FAIL
];
