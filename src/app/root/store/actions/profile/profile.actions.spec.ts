import { Profile } from '@llecoop';
import { ProfileMock } from '@llecoop/mocks';
import * as fromActions from './profile.actions';

describe('Check Profile Actions', () => {
  it('should create a Get Profile action', () => {
    const payload = '________';
    const action = new fromActions.GetProfile(payload);
    expect({ ...action }).toEqual({
      type: fromActions.GET_PROFILE,
      payload
    });
  });
  it('should create a Get Profile Fail action', () => {
    const payload = 'error';
    const action = new fromActions.GetProfileFail(payload);
    expect({ ...action }).toEqual({
      type: fromActions.GET_PROFILE_FAIL,
      payload
    });
  });
  it('should create a Get Profile Success action', () => {
    const payload: Profile = ProfileMock;
    const action = new fromActions.GetProfileSuccess(payload);
    expect({
      ...action
    }).toEqual({
      type: fromActions.GET_PROFILE_SUCCESS,
      payload
    });
  });
});
