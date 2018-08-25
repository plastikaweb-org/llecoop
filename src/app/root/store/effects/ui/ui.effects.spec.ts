import { TestBed } from '@angular/core/testing';
import { Theme } from '@llecoop';
import { LocalStorageMock } from '@llecoop/mocks';
import { getActions, TestActions } from '@llecoop/mocks/effect-actions.mock';
import { LocalstorageService, WindowRefService } from '@llecoop/services';
import { Actions, EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';

import { cold, hot } from 'jasmine-marbles';
import * as fromActions from '../../actions';
import * as fromReducers from '../../reducers';
import * as fromEffects from './ui.effects';

export class ThemeMock extends LocalStorageMock {
  ls: any = { 'mat-theme': 'theme-dark' };
}

describe('Auth Effects', () => {
  let actions$: TestActions;
  let effects: fromEffects.UiEffects;
  let metadata: EffectsMetadata<fromEffects.UiEffects>;
  let localstorageService: LocalstorageService;
  let store: Store<fromReducers.RootState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ui: fromReducers.reducers.ui
        })
      ],
      providers: [
        { provide: Actions, useFactory: getActions },
        { provide: LocalstorageService, useClass: ThemeMock },
        WindowRefService,
        fromEffects.UiEffects
      ]
    });
    actions$ = TestBed.get(Actions);
    effects = TestBed.get(fromEffects.UiEffects);
    localstorageService = TestBed.get(LocalstorageService);
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    metadata = getEffectsMetadata(effects);
  });

  describe('load theme from ls', () => {
    it('should load theme present on ls', () => {
      const payload = Theme.Dark;
      const action = new fromActions.LoadTheme();
      const completion = new fromActions.ChangeTheme(payload);
      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.loadTheme$).toBeObservable(expected);
    });

    it('should register loadTheme$ that dispatches an action', () => {
      expect(metadata.loadTheme$).toEqual({ dispatch: true });
    });
  });

  describe('change theme', () => {
    it('should change theme', () => {
      const payload = Theme.Dark;
      store.dispatch(new fromActions.ChangeTheme(payload));
      expect(localstorageService.getItem('mat-theme')).toEqual((payload));
    });

    it('should register loadTheme$ that dispatches no action', () => {
      expect(metadata.changeTheme$).toEqual({ dispatch: false });
    });
  });
});
