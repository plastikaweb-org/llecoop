import { createSelector } from '@ngrx/store';
import * as fromFeature from '../../reducers/index';
import { getActivityState } from '../../reducers/index';

import * as fromWarning from '../../reducers/warning/warning.reducer';

export const getWarningState = createSelector(
  getActivityState,
  (state: fromFeature.ActivityState) => state.warning
);

export const getWarningMessageVisible = createSelector(
  getWarningState,
  fromWarning.getWarningVisible
);
export const getWarningMessageDescription = createSelector(
  getWarningState,
  fromWarning.getWarningDescription
);

// export const getAlertMessageVisible = createSelector(
//   getErrorMessageVisible,
//   getWarningMessageVisible,
//   (error, warning) => error || warning
// );
