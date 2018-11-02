import * as fromActions from './snack-bar.actions';

describe('Check SnackBar Actions', () => {
  it('should create a Show SnackBar action', () => {
    const payload = { message: 'hello' };
    const action = new fromActions.ShowSnackBar(payload);
    expect(action).toEqual({
      type: fromActions.SHOW_SNACKBAR,
      payload
    });
  });
  it('should create a Reset SnackBar action', () => {
    const action = new fromActions.ResetSnackBar();
    expect(action).toEqual({
      type: fromActions.RESET_SNACKBAR
    });
  });
});
