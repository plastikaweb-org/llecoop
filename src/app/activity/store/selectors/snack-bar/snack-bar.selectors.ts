import { createSelector } from '@ngrx/store';
import * as fromFeature from '../../reducers/index';
import * as fromSnackBar from '../../reducers/snack-bar/snack-bar.reducer';

export const getSnackBarState = createSelector(
  fromFeature.getActivityState,
  (state: fromFeature.ActivityState) => state.snackBar
);
export const getSnackBarVisible = createSelector(
  getSnackBarState,
  fromSnackBar.getSnackBarVisible
);

export const getSnackBarConfiguration = createSelector(
  getSnackBarState,
  fromSnackBar.getSnackBarConfiguration
);
