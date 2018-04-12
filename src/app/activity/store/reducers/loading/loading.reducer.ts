import * as fromActivity from '../../actions';
import { initialLoadingState, LoadingState } from '../../state';

export function reducer(
  state = initialLoadingState,
  action: fromActivity.LoadingActions
): LoadingState {
  switch (action.type) {
    case fromActivity.SHOW_LOADING: {
      const visible = true;
      return { ...state, visible };
    }
    case fromActivity.HIDE_LOADING: {
      const visible = false;
      return { ...state, visible };
    }
  }
  return state;
}

export const getLoadingStateVisible = (state: LoadingState) => state.visible;
