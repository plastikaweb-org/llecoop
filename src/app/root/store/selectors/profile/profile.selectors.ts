import { Profile } from '@llecoop/models/profile';
import { createSelector } from '@ngrx/store';

import * as fromFeature from '../../reducers';
import * as fromProfile from '../../reducers/profile/profile.reducer';

export const getProfile = createSelector(
  fromFeature.getProfileState,
  fromProfile.getProfileProfileState
);

export const getBasicProfile = createSelector(
  getProfile,
  (profile: Profile) => {
    if (profile) {
      const { name, secondName, img } = profile;
      return { name, fullName: `${name} ${secondName}`, img };
    }
  }
);
