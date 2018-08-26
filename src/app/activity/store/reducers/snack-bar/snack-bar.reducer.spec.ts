import * as fromActions from '../../actions';
import * as fromState from '../../state';
import { reducer } from './snack-bar.reducer';

describe('SnackBar Reducer', () => {
  it('should return the default states', () => {
    const action = {} as any;
    const newState = reducer(undefined, action);
    expect(newState).toBe(fromState.initialSnackBarState);
  });

  it('should handle the show SnackBar action', () => {
    const configuration = {
      message: 'ALERT!',
      action: 'do something',
      duration: 1000
    };
    const newState = reducer(
      fromState.initialSnackBarState,
      new fromActions.ShowSnackBar(configuration)
    );
    expect(newState.visible).toBeTruthy();
    expect(newState.configuration).toEqual(configuration);
  });

  it('should handle the reset SnackBar action', () => {
    const newState = reducer(
      fromState.initialSnackBarState,
      new fromActions.ResetSnackBar()
    );
    expect(newState.visible).toBeFalsy();
    expect(newState.configuration).toBeNull();
  });
});
