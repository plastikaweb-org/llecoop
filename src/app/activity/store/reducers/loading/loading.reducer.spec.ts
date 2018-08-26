import * as fromActions from '../../actions/index';
import * as fromState from '../../state/index';
import { reducer } from './loading.reducer';

describe('Loading Reducer', () => {
  it('should return the default states', () => {
    const action = {} as any;
    const newState = reducer(undefined, action);
    expect(newState).toBe(fromState.initialLoadingState);
  });

  it('should handle the show loading action', () => {
    const newState = reducer(
      fromState.initialLoadingState,
      new fromActions.ShowLoading()
    );
    expect(newState.visible).toBeTruthy();
  });

  it('should handle the hide loading action', () => {
    const newState = reducer(
      fromState.initialLoadingState,
      new fromActions.HideLoading()
    );
    expect(newState.visible).toBeFalsy();
  });
});
