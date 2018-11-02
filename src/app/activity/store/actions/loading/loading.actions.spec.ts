import * as fromActions from './loading.actions';

describe('Check Loading Actions', () => {
  it('should create a Show Loading action', () => {
    const action = new fromActions.ShowLoading();
    expect(action).toEqual({
      type: fromActions.SHOW_LOADING
    });
  });
  it('should create a Hide Loading action', () => {
    const action = new fromActions.HideLoading();
    expect(action).toEqual({
      type: fromActions.HIDE_LOADING
    });
  });
});
