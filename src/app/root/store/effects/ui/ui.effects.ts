import { Injectable } from '@angular/core';

import { Theme } from '@llecoop';
import { LocalstorageService } from '@llecoop/services';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as fromActions from '../../actions';

@Injectable()
export class UiEffects {

  @Effect()
  loadTheme$ = this.actions$.pipe(
    ofType(fromActions.LOAD_THEME),
    map(() => this.localstorage.getItem('mat-theme')),
    map((theme: Theme) => new fromActions.ChangeTheme(theme))
  );
  @Effect({ dispatch: false })
  changeTheme$ = this.actions$.pipe(
    ofType(fromActions.CHANGE_THEME),
    map((action: fromActions.ChangeTheme) => action.payload),
    map((theme: Theme) => this.localstorage.setItem('mat-theme', theme))
  );

  constructor(
    private actions$: Actions,
    private localstorage: LocalstorageService
  ) {}
}
