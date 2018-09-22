import { AlertDescription, AlertTypes } from '@llecoop';
import * as fromActions from '../../actions';
import * as fromState from '../../state';
import { reducer } from './alert.reducer';

describe('Warning Reducer', () => {
  it('should return the default states', () => {
    const action = {} as any;
    const newState = reducer(undefined, action);
    expect(newState).toBe(fromState.initialAlertState);
  });

  it('should handle the show Warning Message action', () => {
    const description: AlertDescription = {
      content: {
        annexMessage: 'Please, review your account',
        message: 'This is a alert!'
      },
      type: AlertTypes.Info
    };
    const newState = reducer(
      fromState.initialAlertState,
      new fromActions.ShowAlert(description)
    );
    expect(newState.visible).toBeTruthy();
    expect(newState.description).toEqual(description);
  });

  it('should handle the reset Warning Message action', () => {
    const newState = reducer(
      fromState.initialAlertState,
      new fromActions.ResetAlert()
    );
    expect(newState.visible).toBeFalsy();
    expect(newState.description).toBeNull();
  });
});
