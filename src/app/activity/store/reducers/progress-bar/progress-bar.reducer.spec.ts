import * as fromActions from '../../actions/index';
import * as fromState from '../../state/index';
import { reducer } from './progress-bar.reducer';

describe('Progress Bar Reducer', () => {
  it('should return the default state', () => {
    const action = {} as any;
    const newState = reducer(undefined, action);
    expect(newState).toBe(fromState.initialProgressBarState);
  });

  it('should handle the visibility action when it is true', () => {
    const newState = reducer(
      fromState.initialProgressBarState,
      new fromActions.ProgressbarVisibility(true)
    );
    expect(newState.visible).toBeTruthy();
  });

  it('should handle the visibility action when it is false', () => {
    const newState = reducer(
      fromState.initialProgressBarState,
      new fromActions.ProgressbarVisibility(false)
    );
    expect(newState.visible).toBeFalsy();
  });
});
