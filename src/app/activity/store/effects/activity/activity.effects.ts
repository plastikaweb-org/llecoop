import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromRouter from '@ngrx/router-store';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

import * as fromActions from '../../actions';
import { ActivityState } from '../../reducers';
import * as fromSelectors from '../../selectors';

@Injectable()
export class ActivityEffects {
  @Effect()
  routeGo$ = this.actions$.pipe(
    ofType(fromRouter.ROUTER_NAVIGATION),
    withLatestFrom(
      this.store.pipe(select(fromSelectors.getErrorMessageVisible)),
      this.store.pipe(select(fromSelectors.getWarningMessageVisible))
    ),
    map(([ router, visibleError, visibleWarning ]) => {
      if (visibleError) {
        return new fromActions.ResetErrorMessage();
      }
      if (visibleWarning) {
        return new fromActions.ResetWarningMessage();
      }
      return of({});
    })
  );
  @Effect()
  showErrorMessage$ = this.actions$.pipe(
    ofType(fromActions.SHOW_ERROR_MESSAGE, fromActions.SHOW_WARNING_MESSAGE),
    map(() => new fromActions.HideLoading())
  );

  constructor(private actions$: Actions, private store: Store<ActivityState>) {}
}
