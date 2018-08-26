import * as fromActions from '../../actions';
import * as fromState from '../../state';
import { reducer } from './warning.reducer';

describe('Warning Reducer', () => {
  it('should return the default states', () => {
    const action = {} as any;
    const newState = reducer(undefined, action);
    expect(newState).toBe(fromState.initialWarningState);
  });

  it('should handle the show Warning Message action', () => {
    const description = {
      message: 'This is a warning!',
      annexMessage: 'Please, review your account'
    };
    const newState = reducer(
      fromState.initialWarningState,
      new fromActions.ShowWarningMessage(description)
    );
    expect(newState.visible).toBeTruthy();
    expect(newState.description).toEqual(description);
  });

  it('should handle the reset Warning Message action', () => {
    const newState = reducer(
      fromState.initialErrorState,
      new fromActions.ResetWarningMessage()
    );
    expect(newState.visible).toBeFalsy();
    expect(newState.description).toBeNull();
  });
});
