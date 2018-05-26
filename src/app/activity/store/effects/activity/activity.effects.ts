import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as fromRouter from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, withLatestFrom } from 'rxjs/operators';

import * as fromActions from '../../actions';
import { ActivityState } from '../../reducers';
import * as fromSelectors from '../../selectors';

@Injectable()
export class ActivityEffects {
  constructor(private actions$: Actions, private store: Store<ActivityState>) {}

  /**
   * on change route, if any alert message is visible, reset it
   * @type {Observable<any>}
   */
  @Effect({ dispatch: false })
  routeGo$ = this.actions$.ofType(fromRouter.ROUTER_NAVIGATION).pipe(
    withLatestFrom(
      this.store.select(fromSelectors.getErrorMessageVisible),
      this.store.select(fromSelectors.getWarningMessageVisible)
    ),
    tap(([ router, visibleError, visibleWarning ]) => {
      if (visibleError) {
        this.store.dispatch(new fromActions.ResetErrorMessage());
      }
      if (visibleWarning) {
        this.store.dispatch(new fromActions.ResetWarningMessage());
      }
    })
  );

  /**
   * prevent if alert is shown, the visibility of progress bar
   * bug when on first load, there is no api connection
   * @type {Observable<any[]>}
   */
  @Effect({ dispatch: false })
  showErrorMessage$ = this.actions$
    .ofType(fromActions.SHOW_ERROR_MESSAGE, fromActions.SHOW_WARNING_MESSAGE)
    .pipe(
      withLatestFrom(this.store.select(fromSelectors.getLoadingStateVisibility)),
      tap(([ router, visible ]) => {
        if (visible) {
          this.store.dispatch(new fromActions.HideLoading());
        }
      })
    );
}
