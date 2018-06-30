import { Profile } from '@llecoop/models/profile';

export interface ProfileState {
  profile: Profile;
  error: null;
}

export const initialProfileState: ProfileState = {
  profile: null,
  error: null
};
