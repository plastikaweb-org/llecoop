import * as fromUi from '../../actions';
import * as fromState from '../../state';

export function reducer(state = fromState.initialUiState,
                        action: fromUi.UiActions): fromState.UiState {
  switch (action.type) {
    case fromUi.CHANGE_THEME: {
      return { ...state, theme: action.payload };
    }
  }
  return state;
}

export const getTheme = (state: fromState.UiState) =>
  state.theme;
