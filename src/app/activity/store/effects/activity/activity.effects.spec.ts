import { TestBed } from '@angular/core/testing';
import { getActions, TestActions } from '@llecoop/mocks/effect-actions.mock';
import { Actions, EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import * as fromRoot from 'app/root/store';
import { cold, hot } from 'jasmine-marbles';
import { of } from 'rxjs';
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
    spyOn(store, 'dispatch').and.callThrough();
    spyOn(store, 'select').and.returnValue(of(true));
    metadata = getEffectsMetadata(effects);
  });

  describe('on route go', () => {
    it('should register routeGo$ that dispatches an action', () => {
      expect(metadata.routeGo$).toEqual({ dispatch: true });
    });

    xit('should dispatch the alert action instead the error action', () => {
      const action = new fromRoot.Go({ path: [ '/' ] });
      const completion = new fromActions.ResetAlert();
      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.routeGo$).toBeObservable(expected);
    });
  });

  describe('show error message', () => {
    it('hide loading indicator if message is present', () => {

      const action = new fromActions.ShowAlert(null);
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
