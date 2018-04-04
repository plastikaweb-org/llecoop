import { createSelector } from '@ngrx/store';
import * as fromFeature from '../../reducers';

import * as fromAuth from '../../reducers/auth/auth.reducer';

export const getAuthLoading = createSelector(
  fromFeature.getAuthState,
  fromAuth.getLoadingState
);

export const getIsAuthenticated = createSelector(
  fromFeature.getAuthState,
  fromAuth.getIsAuthenticatedState
);
