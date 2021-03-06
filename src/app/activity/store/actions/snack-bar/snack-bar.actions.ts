import { Action } from '@ngrx/store';

export const SHOW_SNACKBAR = '[Activity] Show Snackbar';
export const RESET_SNACKBAR = '[Activity] Hide/Reset Snackbar';

export class ShowSnackBar implements Action {
  readonly type = SHOW_SNACKBAR;

  constructor(public payload: any) {}
}

export class ResetSnackBar implements Action {
  readonly type = RESET_SNACKBAR;
}

export type SnackBarActions = ShowSnackBar | ResetSnackBar;
