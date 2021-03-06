import { TestBed } from '@angular/core/testing';

import { Theme } from '@llecoop';
import { select, Store, StoreModule } from '@ngrx/store';
import * as fromActions from '../../actions';
import * as fromReducers from '../../reducers';
import * as fromState from '../../states';
import * as fromSelectors from './ui.selectors';

describe('UI selectors', () => {
  let store: Store<fromReducers.RootState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ui: fromReducers.reducers.ui
        })
      ]
    });
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('ui selectors: ', () => {
    it('should return theme selected value', () => {
      let result;
      const payload = Theme.Dark;

      store.pipe(select(fromSelectors.getThemeSelected))
        .subscribe(value => (result = value));

      expect(result).toEqual(fromState.initialUiState.theme);

      store.dispatch(new fromActions.ChangeTheme(payload));
      expect(result).toEqual(payload);
    });
  });
});
