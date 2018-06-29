import { APP_BASE_HREF } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store, StoreModule } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as fromActions from '../../actions';
import { reducers } from '../../index';
import * as fromReducers from '../../reducers';
import * as fromEffects from './activity.effects';

describe('Activity Effects', () => {
  const actions$: Observable<any> = of({});
  let effects: fromEffects.ActivityEffects;
  let metadata: EffectsMetadata<fromEffects.ActivityEffects>;
  let store: Store<fromReducers.ActivityState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers, {
          initialState: {
            snackBar: { visible: false },
            progressBar: { visible: false },
            error: { visible: false },
            warning: { visible: false },
            loading: { visible: false }
          }
        }),
        RouterModule.forRoot([])
      ],
      providers: [
        provideMockActions(() => actions$),
        fromEffects.ActivityEffects,
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    });
    store = TestBed.get(Store);
    effects = TestBed.get(fromEffects.ActivityEffects);
    metadata = getEffectsMetadata(effects);
    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('on route go', () => {
    it('should register routeGo$ that does not dispatch an action', () => {
      expect(metadata.routeGo$).toEqual({ dispatch: false });
    });

    xit('should dispatch the warning action instead the error action', () => {
      expect(store.dispatch.length).toEqual(1);
      console.log(store.dispatch.length);
      expect(store.dispatch).toEqual(new fromActions.ResetWarningMessage());
    });
  });

  describe('show error message', () => {
    it('should register showErrorMessage$ that does not dispatch an action', () => {
      expect(metadata.showErrorMessage$).toEqual({ dispatch: false });
    });
  });

});
