import { Roles } from '@llecoop';
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
      return <Partial<Profile>>{ name, fullName: `${name} ${secondName}`, img };
    }
  }
);

export const getEditableProfile = createSelector(
  getProfile,
  (profile: Profile) => {
    if (profile) {
      const { name, secondName, city, phone, address, email, cp, active } = profile;
      return <Partial<Profile>>{ name, secondName, city, phone, address, email, cp, active };
    }
  }
);

export const getHeaderCardProfile = createSelector(
  getProfile,
  (profile: Profile) => {
    if (profile) {
      const { name, secondName, img, active, role } = profile;
      return <Partial<Profile>>{ title: `${name} ${secondName}`, img, subTitle: Roles[ role ] };
    }
  }
);
