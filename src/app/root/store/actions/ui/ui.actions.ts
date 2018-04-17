import { Action } from '@ngrx/store';
import { Theme } from '../../../../shared';

export const LOAD_THEME = '[Ui] Load UI Theme from LS';
export const CHANGE_THEME = '[Ui] Change UI Theme';

// Material theme
export class LoadTheme implements Action {
  readonly type = LOAD_THEME;
}

export class ChangeTheme implements Action {
  readonly type = CHANGE_THEME;

  constructor(public payload?: Theme) {}
}


export type UiActions =
  | LoadTheme
  | ChangeTheme;
