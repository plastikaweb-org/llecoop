import { AlertDescription } from '@llecoop';
import { Action } from '@ngrx/store';

export const SHOW_ALERT = '[Activity] Show alert message';
export const RESET_ALERT = '[Activity] Hide/Reset alert message';

export class ShowAlert implements Action {
  readonly type = SHOW_ALERT;

  constructor(public payload: AlertDescription) {}
}

export class ResetAlert implements Action {
  readonly type = RESET_ALERT;
}

export type AlertActions = ShowAlert | ResetAlert;
