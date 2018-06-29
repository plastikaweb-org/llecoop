import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import { LocalstorageService } from '../../../../services';
import { Theme } from '../../../../shared';
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
  loadTheme$ = this.actions$
    .ofType(fromActions.LOAD_THEME)
    .pipe(
      map(() => this.localstorage.getItem('mat-theme')),
      map((theme: Theme | undefined) => new fromActions.ChangeTheme(theme))
    );

  /**
   * store the theme style to load it next time from ls
   * @type {Observable<void>}
   */
  @Effect({ dispatch: false })
  changeTheme$ = this.actions$.ofType(fromActions.CHANGE_THEME).pipe(
    map((action: fromActions.ChangeTheme) => action.payload),
    map((theme: Theme) => {
      if (theme) {
        this.localstorage.setItem('mat-theme', theme);
      }
    })
  );
}
