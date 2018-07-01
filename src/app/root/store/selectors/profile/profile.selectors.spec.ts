import { TestBed } from '@angular/core/testing';
import { ProfileMock } from '@llecoop/mocks';
import { Store, StoreModule } from '@ngrx/store';

import * as fromActions from '../../actions';
import * as fromReducers from '../../reducers';
import * as fromState from '../../state';
import * as fromSelectors from './profile.selectors';

describe('Profile selectors', () => {
  let store: Store<fromReducers.RootState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          profile: fromReducers.reducers.profile
        })
      ]
    });
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('profile selectors: ', () => {
    it('should return profile property value', () => {
      let result;

      store
        .select(fromSelectors.getProfile)
        .subscribe(value => (result = value));

      expect(result).toEqual(fromState.initialProfileState.profile);

      store.dispatch(new fromActions.GetProfileSuccess(ProfileMock));
      expect(result).toEqual(ProfileMock);

      store.dispatch(new fromActions.GetProfileFail('error'));
      expect(result).toBeNull();
    });
  });

  it('should return basic profile value', () => {
    let result;

    store
      .select(fromSelectors.getBasicProfile)
      .subscribe(value => (result = value));

    expect(result).toBeUndefined();

    store.dispatch(new fromActions.GetProfileSuccess(ProfileMock));
    expect(result).toEqual({
      name: ProfileMock.name,
      img: ProfileMock.img,
      fullName: `${ProfileMock.name} ${ProfileMock.secondName}`
    });

    store.dispatch(new fromActions.GetProfileFail('error'));
    expect(result).toBeUndefined();
  });

});
