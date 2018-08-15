import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromRouter from '@ngrx/router-store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

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
  routeGo$ = this.actions$.pipe(
    ofType(fromRouter.ROUTER_NAVIGATION),
    withLatestFrom(
      this.store.pipe(select(fromSelectors.getErrorMessageVisible)),
      this.store.pipe(select(fromSelectors.getWarningMessageVisible))
    ),
    map(([ router, visibleError, visibleWarning ]) => {
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
  showErrorMessage$ = this.actions$.pipe(
    ofType(fromActions.SHOW_ERROR_MESSAGE, fromActions.SHOW_WARNING_MESSAGE),
    withLatestFrom(this.store.pipe(select(fromSelectors.getLoadingStateVisibility))),
    map(([ router, visible ]) => {
      if (visible) {
        this.store.dispatch(new fromActions.HideLoading());
      }
    })
  );
}
