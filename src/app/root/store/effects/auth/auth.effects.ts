import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';


import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../../../../services';
import { Credentials } from '../../../../shared/models';
import * as fromActions from '../../actions';
import * as fromState from '../../state';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions,
              private authService: AuthService,
              private store: Store<fromState.AuthState>,
              private router: Router) {}

  @Effect()
  getAuthentication$ = this.actions$
    .ofType(fromActions.GET_AUTHENTICATION)
    .pipe(
      switchMap(() => this.authService.isAuthenticated()
        .pipe(
          map((response: any) => new fromActions.GetAuthenticationSuccess()),
          catchError(error => of(new fromActions.GetAuthenticationFail()))
        )
      ));

  /**
   * begin timeout for idle when authentication is successful
   * @type {Observable<void>}
   */
  // @Effect({ dispatch: false })
  // getAuthenticationSuccess$ = this.actions$
  //   .ofType(fromActions.GET_AUTHENTICATION_SUCCESS)
  //   .pipe(map(() => {
  //     this.store.dispatch(new fromActions.IdleReset());
  //     this.store.dispatch(new fromActions.GetUserBasicInfo());
  //   }));


  /**
   * force on any route change to check for valid token
   * if it is not valid, redirect to login page
   * @type {Observable<void>}
   */
    // @Effect({ dispatch: false })
    // routeGo$ = this.actions$.ofType(fromRouter.ROUTER_NAVIGATION).pipe(
    //   withLatestFrom(this.store.select(fromSelectors.getIsAuthenticated)),
    //   first(),
    //   map(([ router, authenticated ]) => {
    //     if (!authenticated) {
    //       this.router.navigate([ '/auth' ]);
    //     }
    //   })
    // );

  @Effect()
  login$ = this.actions$.ofType(fromActions.AUTHENTICATE).pipe(
    map((action: fromActions.Authenticate) => action.payload),
    switchMap((credentials: Credentials) =>
      this.authService.login(credentials).pipe(
        map((response: any) => new fromActions.AuthenticateSuccess()),
        catchError(error => of(new fromActions.AuthenticateFail(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.ofType(fromActions.AUTHENTICATE_SUCCESS).pipe(
    map(() => {
      this.store.dispatch(new fromActions.GetAuthentication());
      this.router.navigate([ '/' ]);
    })
  );

  @Effect()
  errorsAuth$ = this.actions$
    .ofType(fromActions.AUTHENTICATE_FAIL)
    .pipe(
      map(
        (ac: fromActions.AuthenticateFail) => {
          this.router.navigate([ '/auth' ]);
          // new fromActivity.ShowErrorMessage(ac.payload)
        }
      )
    );

  @Effect()
  logout$ = this.actions$.ofType(fromActions.LOGOUT).pipe(
    map(() => {
        this.store.dispatch(new fromActions.GetAuthentication());
      }
    )
  );

}
