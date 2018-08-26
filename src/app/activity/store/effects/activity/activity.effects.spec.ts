import { TestBed } from '@angular/core/testing';
import { getActions, TestActions } from '@llecoop/mocks/effect-actions.mock';
import { Actions, EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { cold, hot } from 'jasmine-marbles';
import * as fromActions from '../../actions';
import * as fromReducers from '../../reducers';
import * as fromEffects from './activity.effects';

describe('Activity Effects', () => {
  let actions$: TestActions;
  let effects: fromEffects.ActivityEffects;
  let metadata: EffectsMetadata<fromEffects.ActivityEffects>;
  let store: Store<fromReducers.ActivityState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromReducers.reducers
        })
      ],
      providers: [
        { provide: Actions, useFactory: getActions },
        fromEffects.ActivityEffects
      ]
    });
    actions$ = TestBed.get(Actions);
    effects = TestBed.get(fromEffects.ActivityEffects);
    store = TestBed.get(Store);
    metadata = getEffectsMetadata(effects);
  });

  describe('on route go', () => {
    it('should register routeGo$ that dispatches an action', () => {
      expect(metadata.routeGo$).toEqual({ dispatch: true });
    });

    it('should dispatch the warning action instead the error action', () => {
      // expect(store.dispatch.length).toEqual(1);
      // console.log(store.dispatch.length);
    });
  });

  describe('show error message', () => {
    it('hide loading indicator if message is present', () => {

      const action = new fromActions.ShowErrorMessage('error');
      const completion = new fromActions.HideLoading();
      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.showErrorMessage$).toBeObservable(expected);
    });

    it('should register showErrorMessage$ that dispatches an action', () => {
      expect(metadata.showErrorMessage$).toEqual({ dispatch: true });
    });
  });

});
