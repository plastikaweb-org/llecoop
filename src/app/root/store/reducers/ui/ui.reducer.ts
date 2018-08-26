import * as fromUi from '../../actions';
import * as fromState from '../../states';

export function reducer(state = fromState.initialUiState,
                        action: fromUi.UiActions): fromState.UiState {
  switch (action.type) {
    case fromUi.CHANGE_THEME: {
      return { ...state, theme: action.payload || state.theme };
    }
  }
  return state;
}

export const getTheme = (state: fromState.UiState) =>
  state.theme;
