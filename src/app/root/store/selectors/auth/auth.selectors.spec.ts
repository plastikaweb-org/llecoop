import { TestBed } from '@angular/core/testing';
import { select, Store, StoreModule } from '@ngrx/store';

import * as fromActions from '../../actions';
import * as fromReducers from '../../reducers';
import * as fromState from '../../states';
import * as fromSelectors from './auth.selectors';

describe('Auth selectors', () => {
  let store: Store<fromReducers.RootState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          auth: fromReducers.reducers.auth
        })
      ]
    });
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('authenticated selectors: ', () => {
    it('should return authenticated property value', () => {
      let result;

      store.pipe(select(fromSelectors.getIsAuthenticated))
        .subscribe(value => (result = value));

      expect(result).toEqual(fromState.initialAuthState.authenticated);

      store.dispatch(new fromActions.GetAuthenticationSuccess('____'));
      expect(result).toBeTruthy();

      store.dispatch(new fromActions.GetAuthenticationFail());
      expect(result).toBeFalsy();
    });
  });
});
