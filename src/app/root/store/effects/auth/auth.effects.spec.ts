import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AuthService } from '@llecoop/services';
import { EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { AngularFireModule } from 'angularfire2';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConf } from 'config/firebase.config';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import * as fromActions from '../../actions';
import * as fromReducers from '../../reducers';
import * as fromEffects from './auth.effects';

describe('Auth Effects', () => {
  let actions: Observable<any>;
  let effects: fromEffects.AuthEffects;
  let metadata: EffectsMetadata<fromEffects.AuthEffects>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AngularFireModule.initializeApp(firebaseConf),
        AngularFireAuthModule,
        StoreModule.forRoot({
          auth: fromReducers.reducers.auth
        }),
        RouterModule.forRoot([])
      ],
      providers: [
        provideMockActions(() => actions),
        AuthService,
        { provide: APP_BASE_HREF, useValue: '/' },
        fromEffects.AuthEffects
      ]
    });
    effects = TestBed.get(fromEffects.AuthEffects);
    metadata = getEffectsMetadata(effects);
  });

  describe('get authentication', () => {
    xit('should return authentication states', () => {
      const action = new fromActions.GetAuthentication();
      const completion = new fromActions.GetAuthenticationSuccess('____');
      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.getAuthentication$).toBeObservable(expected);
    });

    it('should register getAuthentication$ that dispatches an action', () => {
      expect(metadata.getAuthentication$).toEqual({ dispatch: true });
    });
  });

  describe('get authentication success', () => {
    it('should register getAuthenticationSuccess$ that does not dispatch an action', () => {
      expect(metadata.getAuthenticationSuccess$).toEqual({
        dispatch: false
      });
    });
  });

  describe('login', () => {
    xit('should return a login success', () => {
      const action = new fromActions.Authenticate({
        email: 'test@test.com',
        password: '12345678'
      });
      const completion = new fromActions.AuthenticateSuccess();
      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.login$).toBeObservable(expected);
    });

    it('should register login$ that dispatches an action', () => {
      expect(metadata.login$).toEqual({ dispatch: true });
    });
  });

  describe('login success', () => {
    it('should register loginSuccess$ that does not dispatch an action', () => {
      expect(metadata.loginSuccess$).toEqual({ dispatch: false });
    });
  });

  describe('logout', () => {
    xit('should return a logout success', () => {
      const action = new fromActions.Logout();
      const completion = new fromActions.LogoutSuccess();
      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.logout$).toBeObservable(expected);

      it('should register logout$ that dispatches an action', () => {
        expect(metadata.logout$).toEqual({ dispatch: true });
      });
    });
  });

  describe('logout success', () => {
    it('should register logoutSuccess$ that does not dispatch an action', () => {
      expect(metadata.logoutSuccess$).toEqual({ dispatch: false });
    });
  });

  // describe('on route go', () => {
  //   it('should register routeGo$ that does not dispatch an action', () => {
  //     expect(metadata.routeGo$).toEqual({ dispatch: false });
  //   });
  // });

});
