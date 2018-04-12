import * as fromActivity from '../../actions';
import { initialProgressBarState, ProgressBarState } from '../../state';

export function reducer(
  state = initialProgressBarState,
  action: fromActivity.ProgressBarActions
): ProgressBarState {
  switch (action.type) {
    case fromActivity.PROGRESSBAR_VISIBILITY: {
      const visible = action.payload;
      return { ...state, visible };
    }
  }
  return state;
}

export const getProgressBarVisible = (state: ProgressBarState) => state.visible;
