import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromState from '../state';
import * as fromAlert from './alert/alert.reducer';
import * as fromLoading from './loading/loading.reducer';
import * as fromProgressBar from './progress-bar/progress-bar.reducer';
import * as fromSnackBar from './snack-bar/snack-bar.reducer';

export interface ActivityState {
  snackBar: fromState.SnackBarState;
  progressBar: fromState.ProgressBarState;
  alert: fromState.AlertState;
  loading: fromState.LoadingState;
}

export const reducers: ActionReducerMap<ActivityState> = {
  snackBar: fromSnackBar.reducer,
  progressBar: fromProgressBar.reducer,
  alert: fromAlert.reducer,
  loading: fromLoading.reducer
};

export const getActivityState = createFeatureSelector<ActivityState>(
  'activity'
);
