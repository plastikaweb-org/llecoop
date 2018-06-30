import { Profile, ProfileMock } from '@llecoop';
import * as fromActions from '../../actions';
import * as fromState from '../../state';
import { reducer } from './profile.reducer';

describe('Profile Reducer', () => {
  describe('Undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;
      const newState = reducer(undefined, action);
      expect(newState).toBe(fromState.initialProfileState);
    });
  });

  describe('Profile Reducer Actions', () => {
    it('should handle the Get Profile action', () => {
      const newState = reducer(
        fromState.initialProfileState,
        new fromActions.GetProfile('____')
      );
      expect(newState.error).toBeNull();
    });
    it('should handle the Get Profile Fail action', () => {
      const payload = 'error';
      const newState = reducer(
        fromState.initialProfileState,
        new fromActions.GetProfileFail(payload)
      );
      expect(newState.error).toBe(payload);
    });
    it('should handle the Get Profile Success action', () => {
      const payload: Profile = ProfileMock;
      const newState = reducer(
        fromState.initialProfileState,
        new fromActions.GetProfileSuccess(payload)
      );
      expect(newState.profile).toBe(payload);
    });
  });
});
