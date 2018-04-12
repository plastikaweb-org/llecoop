import { Action } from '@ngrx/store';

export const PROGRESSBAR_VISIBILITY = '[Root] Visibilitiy of Progressbar';

export class ProgressbarVisibility implements Action {
  readonly type = PROGRESSBAR_VISIBILITY;

  constructor(public payload: boolean) {}
}

export type ProgressBarActions = ProgressbarVisibility;
