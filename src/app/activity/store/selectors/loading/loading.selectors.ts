import { createSelector } from '@ngrx/store';

import * as fromFeature from '../../reducers/index';
import * as fromLoading from '../../reducers/loading/loading.reducer';

export const getLoadingState = createSelector(
  fromFeature.getActivityState,
  (state: fromFeature.ActivityState) => state.loading
);
export const getLoadingStateVisibility = createSelector(
  getLoadingState,
  fromLoading.getLoadingStateVisible
);
