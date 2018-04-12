import * as fromActivity from '../../actions';
import { ErrorState, initialErrorState } from '../../state';

export function reducer(
  state = initialErrorState,
  action: fromActivity.ErrorActions
): ErrorState {
  switch (action.type) {
    case fromActivity.SHOW_ERROR_MESSAGE: {
      const description = action.payload;
      const visible = true;
      return { ...state, visible, description };
    }
    case fromActivity.RESET_ERROR_MESSAGE: {
      const description = null;
      const visible = false;
      return { ...state, visible, description };
    }
  }
  return state;
}

export const getErrorVisible = (state: ErrorState) => state.visible;
export const getErrorDescription = (state: ErrorState) => state.description;
