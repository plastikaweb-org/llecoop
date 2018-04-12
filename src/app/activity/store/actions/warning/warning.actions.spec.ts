import * as fromActions from './warning.actions';

describe('Check Warning Actions', () => {
  it('should create a Show Warning Message action', () => {
    const payload = 'warning';
    const action = new fromActions.ShowWarningMessage(payload);
    expect({ ...action }).toEqual({
      type: fromActions.SHOW_WARNING_MESSAGE,
      payload
    });
  });
  it('should create a Reset Warning Message action', () => {
    const action = new fromActions.ResetWarningMessage();
    expect({ ...action }).toEqual({
      type: fromActions.RESET_WARNING_MESSAGE
    });
  });
});
