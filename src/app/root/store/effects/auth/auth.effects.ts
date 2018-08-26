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
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<fromState.AuthState>,
    private router: Router
  ) {}

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

  /**
   *  when authentication is successful
   * @type {Observable<void>}
   */
  @Effect({ dispatch: false })
  getAuthenticationSuccess$ = this.actions$.pipe(
    ofType(fromActions.GET_AUTHENTICATION_SUCCESS),
    map((action: fromActions.GetAuthenticationSuccess) => action.payload),
    map((uid: string) => {
      // when auth get user data
      this.store.dispatch(new fromActions.GetProfile(uid));
      this.router.navigate([ '/' ]);
    }));

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
  errorsAuth$ = this.actions$.pipe(
    ofType(fromActions.AUTHENTICATE_FAIL),
    map(
      (ac: fromActions.AuthenticateFail) =>
        new fromActivity.ShowErrorMessage(ac.payload)
    )
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(fromActions.LOGOUT),
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
  logoutSuccess$ = this.actions$.pipe(
    ofType(fromActions.LOGOUT_SUCCESS),
    map(() => {
      this.router.navigate([ '/login' ]);
      this.store.dispatch(new fromActivity.HideLoading());
    })
  );
}
