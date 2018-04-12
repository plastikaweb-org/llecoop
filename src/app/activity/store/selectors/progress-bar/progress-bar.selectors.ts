import { createSelector } from '@ngrx/store';

import * as fromFeature from '../../reducers/index';
import * as fromProgressBar from '../../reducers/progress-bar/progress-bar.reducer';

export const getProgressBarState = createSelector(
  fromFeature.getActivityState,
  (state: fromFeature.ActivityState) => state.progressBar
);
export const getProgressBarVisible = createSelector(
  getProgressBarState,
  fromProgressBar.getProgressBarVisible
);
