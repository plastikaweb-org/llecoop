import * as fromActivity from '../../actions';
import { initialSnackBarState, SnackBarConfiguration, SnackBarState } from '../../state';

export function reducer(
  state = initialSnackBarState,
  action: fromActivity.SnackBarActions
): SnackBarState {
  switch (action.type) {
    case fromActivity.SHOW_SNACKBAR: {
      const configuration: SnackBarConfiguration = action.payload;
      const visible = true;
      return { ...state, configuration, visible };
    }
    case fromActivity.RESET_SNACKBAR: {
      const configuration = null;
      const visible = false;
      return { ...state, configuration, visible };
    }
  }
  return state;
}

export const getSnackBarVisible = (state: SnackBarState) => state.visible;
export const getSnackBarConfiguration = (state: SnackBarState) =>
  state.configuration;
