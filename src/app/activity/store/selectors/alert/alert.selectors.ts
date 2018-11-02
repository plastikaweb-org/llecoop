import { createSelector } from '@ngrx/store';
import * as fromFeature from '../../reducers/index';
import { getActivityState } from '../../reducers';

import * as fromAlert from '../../reducers/alert/alert.reducer';

export const getAlertState = createSelector(
  getActivityState,
  (state: fromFeature.ActivityState) => state.alert
);

export const getAlertVisibility = createSelector(
  getAlertState,
  fromAlert.getAlertVisible
);
export const getAlertDescription = createSelector(
  getAlertState,
  fromAlert.getAlertDescription
);
