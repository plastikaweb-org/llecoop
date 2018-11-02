import * as fromActions from './progress-bar.actions';

describe('Check ProgressBar Actions', () => {
  it('should create a Progress Visibility action', () => {
    const payload = true;
    const action = new fromActions.ProgressbarVisibility(payload);
    expect(action).toEqual({
      type: fromActions.PROGRESSBAR_VISIBILITY,
      payload
    });
  });
});
