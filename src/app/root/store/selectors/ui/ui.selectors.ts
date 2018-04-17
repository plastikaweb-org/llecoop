import { createSelector } from '@ngrx/store';
import * as fromFeature from '../../reducers';

import * as fromUi from '../../reducers/ui/ui.reducer';

export const getThemeSelected = createSelector(
  fromFeature.getUiState,
  fromUi.getTheme
);
