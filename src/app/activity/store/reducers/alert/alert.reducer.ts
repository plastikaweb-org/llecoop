import * as fromActions from '../../actions';
import * as fromState from '../../state';

export function reducer(
  state = fromState.initialAlertState,
  action: fromActions.AlertActions
): fromState.AlertState {
  switch (action.type) {
    case fromActions.SHOW_ALERT: {
      return { ...state, visible: true, description: action.payload };
    }
    case fromActions.RESET_ALERT: {
      return { ...state, visible: false, description: null };
    }
  }
  return state;
}

export const getAlertVisible = (state: fromState.AlertState) => state.visible;
export const getAlertDescription = (state: fromState.AlertState) => state.description;
