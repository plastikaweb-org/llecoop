import { createSelector } from '@ngrx/store';

import * as fromError from '../../reducers/error/error.reducer';
import * as fromFeature from '../../reducers/index';

export const getErrorState = createSelector(
  fromFeature.getActivityState,
  (state: fromFeature.ActivityState) => state.error
);
export const getErrorMessageVisible = createSelector(
  getErrorState,
  fromError.getErrorVisible
);
export const getErrorMessageDescription = createSelector(
  getErrorState,
  fromError.getErrorDescription
);
