import * as fromActions from './error.actions';

describe('Check Error Actions', () => {
  it('should create a Show Error Message action', () => {
    const payload = 'error';
    const action = new fromActions.ShowErrorMessage(payload);
    expect({ ...action }).toEqual({
      type: fromActions.SHOW_ERROR_MESSAGE,
      payload
    });
  });
  it('should create a Reset Error Message action', () => {
    const action = new fromActions.ResetErrorMessage();
    expect({ ...action }).toEqual({
      type: fromActions.RESET_ERROR_MESSAGE
    });
  });
});
