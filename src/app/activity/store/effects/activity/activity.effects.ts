import { Injectable } from '@angular/core';
import { AlertTypes } from '@llecoop';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromRouter from '@ngrx/router-store';
import * as fromRootActions from 'app/root/store/actions';
import { map } from 'rxjs/operators';

import * as fromActions from '../../actions';
import { showErrorActions, showErrorTypes } from './show-alert';

@Injectable()
export class ActivityEffects {
  @Effect()
  routeGo$ = this.actions$.pipe(
    ofType(fromRouter.ROUTER_NAVIGATION),
    map(() => new fromActions.ResetAlert())
  );

  @Effect()
  showErrorMessage$ = this.actions$.pipe(
    ofType(fromActions.SHOW_ALERT),
    map(() => new fromActions.HideLoading())
  );

  @Effect()
  showAlert$ = this.actions$.pipe(
    ofType<showErrorTypes>(...showErrorActions),
    map(action => {
      const message = action.payload;
      let annexMessage = '';
      const type = AlertTypes.Error;
      switch (action.type) {
        case fromRootActions.AUTHENTICATE_FAIL:
          annexMessage = 'Revisa les teves dades';
          break;
        case fromRootActions.LOGOUT_FAIL:
          annexMessage = 'Torna a provar-ho';
          break;
        case fromRootActions.GET_PROFILE_FAIL:
          annexMessage = 'Error recuperant les teves dades';
          break;
        case fromRootActions.FORGOT_FAIL:
          annexMessage = 'Error intentant regenerar una nova clau';
          break;
      }
      return new fromActions.ShowAlert({
        content: { message, annexMessage },
        type
      });
    })
  );

  constructor(private actions$: Actions) {}
}
