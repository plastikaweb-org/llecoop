import { TestBed } from '@angular/core/testing';
import { combineReducers, Store, StoreModule } from '@ngrx/store';

import * as fromActions from '../../actions/index';
import * as fromReducers from '../../reducers/index';
import * as fromState from '../../state/index';
import * as fromSelectors from './loading.selectors';

describe('Loading selectors', () => {
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

  describe('Loading selector for visibility: ', () => {
    it('should return visible property value', () => {
      let result;

      store
        .select(fromSelectors.getLoadingStateVisibility)
        .subscribe(value => (result = value));

      expect(result).toEqual(fromState.initialLoadingState.visible);

      store.dispatch(new fromActions.ShowLoading());
      expect(result).toBeTruthy();

      store.dispatch(new fromActions.HideLoading());
      expect(result).toBeFalsy();
    });
  });

});
