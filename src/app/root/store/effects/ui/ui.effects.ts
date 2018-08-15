import { Injectable } from '@angular/core';

import { Theme } from '@llecoop';
import { LocalstorageService } from '@llecoop/services';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as fromActions from '../../actions';

@Injectable()
export class UiEffects {
  constructor(
    private actions$: Actions,
    private localstorage: LocalstorageService
  ) {}

  /**
   * load the theme style from ls if present
   * @type {Observable<void>}
   */
  @Effect()
  loadTheme$ = this.actions$.pipe(
    ofType(fromActions.LOAD_THEME),
    map(() => this.localstorage.getItem('mat-theme')),
    map((theme: Theme | undefined) => new fromActions.ChangeTheme(theme))
  );

  /**
   * store the theme style to load it next time from ls
   * @type {Observable<void>}
   */
  @Effect({ dispatch: false })
  changeTheme$ = this.actions$.pipe(
    ofType(fromActions.CHANGE_THEME),
    map((action: fromActions.ChangeTheme) => action.payload),
    map((theme: Theme) => {
      if (theme) {
        this.localstorage.setItem('mat-theme', theme);
      }
    })
  );
}
