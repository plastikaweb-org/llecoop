import * as fromActions from '../../actions';
import * as fromState from '../../state';
import { reducer } from './error.reducer';

const description = {
  message: 'Page not found',
  annexMessage: 'Please, review the address',
  code: '404',
  status: 'Not found'
};

describe('Error Reducer', () => {
  it('should return the default state', () => {
    const action = {} as any;
    const newState = reducer(undefined, action);
    expect(newState).toBe(fromState.initialErrorState);
  });

  it('should handle the show Error Message action', () => {
    const newState = reducer(
      fromState.initialErrorState,
      new fromActions.ShowErrorMessage(description)
    );
    expect(newState.visible).toBeTruthy();
    expect(newState.description).toEqual(description);
  });

  it('should handle the reset Error Message action', () => {
    const newState = reducer(
      fromState.initialErrorState,
      new fromActions.ResetErrorMessage()
    );
    expect(newState.visible).toBeFalsy();
    expect(newState.description).toBeNull();
  });
});
