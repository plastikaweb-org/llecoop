import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { LocalstorageService } from '../../../../services';
import { Theme } from '../../../../shared';
import * as fromActions from '../../actions';
import * as fromState from '../../state';

@Injectable()
export class UiEffects {
  constructor(private actions$: Actions,
              private localstorage: LocalstorageService,
              private store: Store<fromState.UiState>) {}

  /**
   * load the theme style from ls if present
   * @type {Observable<void>}
   */
  @Effect({ dispatch: false })
  loadTheme$ = this.actions$
    .ofType(fromActions.LOAD_THEME)
    .pipe(
      map(() => this.localstorage.getItem('mat-theme')),
      map((theme: Theme | undefined) => {
        if (theme) {
          this.store.dispatch(new fromActions.ChangeTheme(theme));
        }
      })
    );

  /**
   * store the theme style to load it next time from ls
   * @type {Observable<void>}
   */
  @Effect({ dispatch: false })
  changeTheme$ = this.actions$
    .ofType(fromActions.CHANGE_THEME)
    .pipe(
      map((action: fromActions.ChangeTheme) => action.payload),
      map((theme: Theme) => this.localstorage.setItem('mat-theme', theme))
    );
}
