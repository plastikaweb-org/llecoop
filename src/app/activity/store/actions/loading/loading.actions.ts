import { Action } from '@ngrx/store';

export const SHOW_LOADING = '[Activity] Show Loading';
export const HIDE_LOADING = '[Activity] HIde Loading';

export class ShowLoading implements Action {
  readonly type = SHOW_LOADING;
}

export class HideLoading implements Action {
  readonly type = HIDE_LOADING;
}

export type LoadingActions = ShowLoading | HideLoading;
