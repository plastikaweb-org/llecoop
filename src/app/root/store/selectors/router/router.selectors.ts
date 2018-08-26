import * as fromRouter from '@ngrx/router-store';

import { createSelector } from '@ngrx/store';
import * as fromFeature from '../../reducers';
import { RouterStateUrl } from '../../states';

export const gerRouterUrl = createSelector(
  fromFeature.getRouterFeatureState,
  (state: fromRouter.RouterReducerState<RouterStateUrl>) => state && state.state && state.state.url);
export const getRouterParams = createSelector(
  fromFeature.getRouterFeatureState,
  (state: fromRouter.RouterReducerState<RouterStateUrl>) => state && state.state && state.state.params);
export const getRouterQueryParams = createSelector(
  fromFeature.getRouterFeatureState,
  (state: fromRouter.RouterReducerState<RouterStateUrl>) => state && state.state && state.state.queryParams);
