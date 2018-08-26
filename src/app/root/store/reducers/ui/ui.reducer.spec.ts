import * as fromActions from '../../actions';
import * as fromState from '../../states';
import { reducer } from './ui.reducer';
import { Theme } from '@llecoop';

describe('UI Reducer', () => {
  describe('Undefined Action', () => {
    it('should return the default states', () => {
      const action = {} as any;
      const newState = reducer(undefined, action);
      expect(newState).toBe(fromState.initialUiState);
    });
  });

  describe('Change Theme', () => {
    it('should handle the Change Theme action', () => {
      const payload = Theme.Dark;
      const newState = reducer(
        fromState.initialUiState,
        new fromActions.ChangeTheme(payload)
      );
      expect(newState.theme).toEqual(payload);
    });
  });
});
