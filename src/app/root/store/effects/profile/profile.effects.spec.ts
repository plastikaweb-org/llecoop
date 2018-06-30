import { TestBed } from '@angular/core/testing';
import { Profile, ProfileMock } from '@llecoop';
import { EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { firebaseConf } from 'config/firebase.config';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import * as fromActions from '../../actions';
import * as fromReducers from '../../reducers';

import * as fromEffects from './profile.effects';
import { ProfileEffects } from './profile.effects';

describe('Profile Effects', () => {
  let actions: Observable<any>;
  let effects: fromEffects.ProfileEffects;
  let metadata: EffectsMetadata<fromEffects.ProfileEffects>;

  const AngularFirestoreStub = {
    doc: (path: string) => {
      return {
        valueChanges: () => {
          return of({});
        }
      };
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(firebaseConf),
        StoreModule.forRoot({
          profile: fromReducers.reducers.profile
        })
      ],
      providers: [
        { provide: AngularFirestore, useValue: AngularFirestoreStub },
        fromEffects.ProfileEffects,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(ProfileEffects);
    metadata = getEffectsMetadata(effects);
  });

  describe('get profile', () => {
    xit('should return a profile', () => {
      const payload: Profile = ProfileMock;
      const action = new fromActions.GetProfile('____');
      const completion = new fromActions.GetProfileSuccess(payload);
      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.getProfile$).toBeObservable(expected);
    });

    it('should register getProfile$ that dispatches an action', () => {
      expect(metadata.getProfile$).toEqual({ dispatch: true });
    });
  });
});
