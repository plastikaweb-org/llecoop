import { Injectable } from '@angular/core';

import { Theme } from '@llecoop';
import { LocalstorageService } from '@llecoop/services';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as fromRootActions from '../../actions';

@Injectable()
export class UiEffects {

  @Effect()
  loadTheme$ = this.actions$.pipe(
    ofType(fromRootActions.LOAD_THEME),
    map(() => this.localstorage.getItem('mat-theme')),
    map((theme: Theme) => new fromRootActions.ChangeTheme(theme))
  );

  @Effect({ dispatch: false })
  changeTheme$ = this.actions$.pipe(
    ofType(fromRootActions.CHANGE_THEME),
    map((action: fromRootActions.ChangeTheme) => action.payload),
    map((theme: Theme) => this.localstorage.setItem('mat-theme', theme))
  );

  constructor(
    private actions$: Actions,
    private localstorage: LocalstorageService
  ) {}
}
