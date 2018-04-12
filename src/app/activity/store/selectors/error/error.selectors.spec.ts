import { TestBed } from '@angular/core/testing';
import { combineReducers, Store, StoreModule } from '@ngrx/store';

import * as fromActions from '../../actions/index';
import * as fromReducers from '../../reducers/index';
import * as fromState from '../../state/index';
import * as fromSelectors from './error.selectors';

describe('Error selectors', () => {
  let store: Store<fromReducers.ActivityState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          'activity': combineReducers(fromReducers.reducers)
        })
      ]
    });
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('Error selector for visibility: ', () => {
    it('should return visible property value', () => {
      let result;

      store
        .select(fromSelectors.getErrorMessageVisible)
        .subscribe(value => (result = value));

      expect(result).toEqual(fromState.initialErrorState.visible);

      store.dispatch(new fromActions.ShowErrorMessage({}));
      expect(result).toBeTruthy();

      store.dispatch(new fromActions.ResetErrorMessage());
      expect(result).toBeFalsy();
    });
  });

  describe('Error selector for description: ', () => {
    it('should return description property value', () => {
      let result;
      const description = {
        message: 'Page not found',
        annexMessage: 'Please, review the address',
        code: '404',
        status: 'Not found'
      };

      store
        .select(fromSelectors.getErrorMessageDescription)
        .subscribe(value => (result = value));

      expect(result).toEqual(fromState.initialErrorState.description);

      store.dispatch(new fromActions.ShowErrorMessage(description));
      expect(result).toEqual(description);

      store.dispatch(new fromActions.ResetErrorMessage());
      expect(result).toBeNull();
    });
  });
});
