import { TestBed } from '@angular/core/testing';
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import * as fromReducers from '../../reducers/index';

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
      // let result;

    });
  });

  describe('Warning selector for description: ', () => {
    it('should return description property value', () => {
      // let result;
      const description = {
        message: 'This is a alert!',
        annexMessage: 'Please, review your account'
      };

    });
  });
});
