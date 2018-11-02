import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '@llecoop';
import { AuthService } from '@llecoop/services';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import * as fromActivity from 'app/activity/store';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromActions from '../../actions';
import * as fromState from '../../states';

@Injectable()
export class AuthEffects {
  @Effect()
  getAuthentication$ = this.actions$.pipe(
    ofType(fromActions.GET_AUTHENTICATION),
    switchMap(() =>
      this.authService
        .isAuthenticated()
        .pipe(
          map((uid: string) => new fromActions.GetAuthenticationSuccess(uid)),
          catchError(error => of(new fromActions.GetAuthenticationFail()))
        )
    )
  );

  @Effect({ dispatch: false })
  getAuthenticationSuccess$ = this.actions$.pipe(
    ofType(fromActions.GET_AUTHENTICATION_SUCCESS),
    map((action: fromActions.GetAuthenticationSuccess) => action.payload),
    map((uid: string) => {
      // when auth get user data
      this.store.dispatch(new fromActions.GetProfile(uid));
      this.router.navigate([ '/' ]);
    }));

  @Effect()
  login$ = this.actions$.pipe(
    ofType(fromActions.AUTHENTICATE),
    map((action: fromActions.Authenticate) => action.payload),
    switchMap((credentials: Credentials) => {
      this.store.dispatch(new fromActivity.ShowLoading());
      return this.authService
        .login(credentials)
        .pipe(
          map((response: any) => new fromActions.AuthenticateSuccess()),
          catchError(error => of(new fromActions.AuthenticateFail(error)))
        );
    })
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(fromActions.AUTHENTICATE_SUCCESS),
    map(action => {
      this.store.dispatch(new fromActivity.HideLoading());
      this.store.dispatch(new fromActions.GetAuthentication());
    })
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(fromActions.LOGOUT),
    switchMap(() => {
      this.store.dispatch(new fromActivity.ShowLoading());
      return this.authService
        .logout()
        .pipe(
          map(() => new fromActions.LogoutSuccess()),
          catchError(error => of(new fromActions.LogoutFail(error)))
        );
    })
  );

  @Effect({ dispatch: false })
  logoutSuccess$ = this.actions$.pipe(
    ofType(fromActions.LOGOUT_SUCCESS),
    map(() => {
      this.router.navigate([ '/login' ]);
      this.store.dispatch(new fromActivity.HideLoading());
    })
  );

  @Effect()
  forgotPassword$ = this.actions$.pipe(
    ofType(fromActions.FORGOT),
    map((action: fromActions.Forgot) => action.payload),
    switchMap((email: string) => {
      return this.authService.resetPassword(email).pipe(
        map(() => new fromActions.ForgotSuccess()),
        catchError(error => of(new fromActions.ForgotFail(error)))
      );
    })
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<fromState.AuthState>,
    private router: Router
  ) {}
}
