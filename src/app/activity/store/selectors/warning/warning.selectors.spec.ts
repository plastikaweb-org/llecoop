import { TestBed } from '@angular/core/testing';
import { combineReducers, select, Store, StoreModule } from '@ngrx/store';

import * as fromActions from '../../actions/index';
import * as fromReducers from '../../reducers/index';
import * as fromState from '../../state/index';
import * as fromSelectors from './warning.selectors';

describe('Warning selectors', () => {
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

  describe('Warning selector for visibility: ', () => {
    it('should return visible property value', () => {
      let result;

      store.pipe(select(fromSelectors.getWarningMessageVisible))
        .subscribe(value => (result = value));

      expect(result).toEqual(fromState.initialWarningState.visible);

      store.dispatch(new fromActions.ShowWarningMessage({}));
      expect(result).toBeTruthy();

      store.dispatch(new fromActions.ResetWarningMessage());
      expect(result).toBeFalsy();
    });
  });

  describe('Warning selector for description: ', () => {
    it('should return description property value', () => {
      let result;
      const description = {
        message: 'This is a warning!',
        annexMessage: 'Please, review your account'
      };

      store.pipe(select(fromSelectors.getWarningMessageDescription))
        .subscribe(value => (result = value));

      expect(result).toEqual(fromState.initialWarningState.description);

      store.dispatch(new fromActions.ShowWarningMessage(description));
      expect(result).toEqual(description);

      store.dispatch(new fromActions.ResetWarningMessage());
      expect(result).toBeNull();
    });
  });
});
