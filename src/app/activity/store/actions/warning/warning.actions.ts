import { Action } from '@ngrx/store';

export const SHOW_WARNING_MESSAGE = '[Root] Show warning message';
export const RESET_WARNING_MESSAGE = '[Root] Hide/Reset warning message';

export class ShowWarningMessage implements Action {
  readonly type = SHOW_WARNING_MESSAGE;

  constructor(public payload: any) {}
}

export class ResetWarningMessage implements Action {
  readonly type = RESET_WARNING_MESSAGE;
}

export type WarningActions = ShowWarningMessage | ResetWarningMessage;
