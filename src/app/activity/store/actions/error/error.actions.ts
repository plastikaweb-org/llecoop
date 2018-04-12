import { Action } from '@ngrx/store';

export const SHOW_ERROR_MESSAGE = '[Activity] Show error message';
export const RESET_ERROR_MESSAGE = '[Activity] Hide/Reset error message';

export class ShowErrorMessage implements Action {
  readonly type = SHOW_ERROR_MESSAGE;

  constructor(public payload: any) {}
}

export class ResetErrorMessage implements Action {
  readonly type = RESET_ERROR_MESSAGE;
}

export type ErrorActions = ShowErrorMessage | ResetErrorMessage;
