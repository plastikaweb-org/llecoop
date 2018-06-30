import * as fromActions from '../../actions';
import * as fromState from '../../state';

export function reducer(state = fromState.initialProfileState,
                        action: fromActions.ProfileActions): fromState.ProfileState {
  switch (action.type) {
    case fromActions.GET_PROFILE:
      return { ...state, error: null };
    case fromActions.GET_PROFILE_FAIL:
      return { ...state, error: action.payload };
    case fromActions.GET_PROFILE_SUCCESS:
      return { ...state, profile: action.payload };
  }
  return state;
}

export const getProfileProfileState = (state: fromState.ProfileState) => state.profile;
