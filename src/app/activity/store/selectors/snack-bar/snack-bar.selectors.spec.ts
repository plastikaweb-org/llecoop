import { TestBed } from '@angular/core/testing';
import { combineReducers, select, Store, StoreModule } from '@ngrx/store';

import * as fromActions from '../../actions';
import * as fromReducers from '../../reducers';
import * as fromState from '../../state';
import * as fromSelectors from './snack-bar.selectors';

describe('SnackBar selectors', () => {
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

  describe('SnackBar selector for visibility: ', () => {
    it('should return visible property value', () => {
      let result;

      store.pipe(select(fromSelectors.getSnackBarVisible))
        .subscribe(value => (result = value));

      expect(result).toEqual(fromState.initialSnackBarState.visible);

      store.dispatch(new fromActions.ShowSnackBar({}));
      expect(result).toBeTruthy();

      store.dispatch(new fromActions.ResetSnackBar());
      expect(result).toBeFalsy();
    });
  });

  describe('SnackBar selector for configuration: ', () => {
    it('should return configuration property value', () => {
      const conf = { message: 'ALERT!', action: 'do something', duration: 1000 };
      let result;

      store.pipe(select(fromSelectors.getSnackBarConfiguration))
        .subscribe(value => (result = value));

      expect(result).toEqual(fromState.initialSnackBarState.configuration);

      store.dispatch(new fromActions.ShowSnackBar(conf));
      expect(result).toEqual(conf);

      store.dispatch(new fromActions.ResetSnackBar());
      expect(result).toBeNull();
    });
  });

});
