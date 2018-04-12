import * as fromActivity from '../../actions';
import { initialWarningState, WarningState } from '../../state';

export function reducer(
  state = initialWarningState,
  action: fromActivity.WarningActions
): WarningState {
  switch (action.type) {
    case fromActivity.SHOW_WARNING_MESSAGE: {
      const description = action.payload;
      const visible = true;
      return { ...state, visible, description };
    }
    case fromActivity.RESET_WARNING_MESSAGE: {
      const description = null;
      const visible = false;
      return { ...state, visible, description };
    }
  }
  return state;
}

export const getWarningVisible = (state: WarningState) => state.visible;
export const getWarningDescription = (state: WarningState) => state.description;
