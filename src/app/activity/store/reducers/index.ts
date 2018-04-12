import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromState from '../state';
import * as fromError from './error/error.reducer';
import * as fromProgressBar from './progress-bar/progress-bar.reducer';
import * as fromSnackBar from './snack-bar/snack-bar.reducer';
import * as fromWarning from './warning/warning.reducer';
import * as fromLoading from './loading/loading.reducer';

export interface ActivityState {
  snackBar: fromState.SnackBarState;
  progressBar: fromState.ProgressBarState;
  error: fromState.ErrorState;
  warning: fromState.WarningState;
  loading: fromState.LoadingState;
}

export const reducers: ActionReducerMap<ActivityState> = {
  snackBar: fromSnackBar.reducer,
  progressBar: fromProgressBar.reducer,
  error: fromError.reducer,
  warning: fromWarning.reducer,
  loading: fromLoading.reducer
};

export const getActivityState = createFeatureSelector<ActivityState>(
  'activity'
);
