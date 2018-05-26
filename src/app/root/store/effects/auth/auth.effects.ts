import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as fromActivity from '../../../../activity/store';
import { AuthService } from '../../../../services';
import { Credentials } from '../../../../shared';
import * as fromActions from '../../actions';
import * as fromState from '../../state';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<fromState.AuthState>,
    private router: Router
  ) {}

  @Effect()
  getAuthentication$ = this.actions$
    .ofType(fromActions.GET_AUTHENTICATION)
    .pipe(
      switchMap(() =>
        this.authService
          .isAuthenticated()
          .pipe(
            map((response: any) => new fromActions.GetAuthenticationSuccess()),
            catchError(error => of(new fromActions.GetAuthenticationFail()))
          )
      )
    );

  /**
   *  when authentication is successful
   * @type {Observable<void>}
   */
  @Effect({ dispatch: false })
  getAuthenticationSuccess$ = this.actions$
    .ofType(fromActions.GET_AUTHENTICATION_SUCCESS)
    .pipe(map(() => this.router.navigate([ '/' ])));

  /**
   *  when authentication is fail
   * @type {Observable<void>}
   */
  // @Effect({ dispatch: false })
  // getAuthenticationFail$ = this.actions$
  //   .ofType(fromActions.GET_AUTHENTICATION_FAIL)
  //   .pipe(
  //     map(() => this.router.navigate(['/login']))
  //   );

  /**
   * force on any route change to check for authentitcation
   * if it is not, redirect to login page
   * with is-auth guard would be sufficient
   * but in this way it is faster
   * (prevents to seeing for sec the home page)
   * @type {Observable<void>}
   */
    // @Effect({ dispatch: false })
    // routeGo$ = this.actions$.ofType(fromRouter.ROUTER_NAVIGATION).pipe(
    //   withLatestFrom(this.store.select(fromSelectors.getIsAuthenticated)),
    //   first(),
    //   map(([router, authenticated]) => {
    //     if (!authenticated) {
    //       this.router.navigate(['/login']);
    //     }
    //   })
    // );

  @Effect()
  login$ = this.actions$.ofType(fromActions.AUTHENTICATE).pipe(
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
  loginSuccess$ = this.actions$.ofType(fromActions.AUTHENTICATE_SUCCESS).pipe(
    map(action => {
      this.store.dispatch(new fromActivity.HideLoading());
      this.store.dispatch(new fromActions.GetAuthentication());
    })
  );

  @Effect()
  errorsAuth$ = this.actions$
    .ofType(fromActions.AUTHENTICATE_FAIL)
    .pipe(
      map(
        (ac: fromActions.AuthenticateFail) =>
          new fromActivity.ShowErrorMessage(ac.payload)
      )
    );

  @Effect()
  logout$ = this.actions$.ofType(fromActions.LOGOUT).pipe(
    switchMap(() => {
      this.store.dispatch(new fromActivity.ShowLoading());
      return this.authService
        .logout()
        .pipe(
          map((response: any) => new fromActions.LogoutSuccess()),
          catchError(error => of(new fromActions.LogoutFail(error)))
        );
    })
  );

  /**
   *  when authentication is fail
   * @type {Observable<void>}
   */
  @Effect({ dispatch: false })
  logoutSuccess$ = this.actions$.ofType(fromActions.LOGOUT_SUCCESS).pipe(
    map(() => {
      this.router.navigate([ '/login' ]);
      this.store.dispatch(new fromActivity.HideLoading());
    })
  );
}
