import { APP_BASE_HREF } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { combineReducers, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import * as fromReducers from '../../reducers/index';
import * as fromEffects from './activity.effects';

describe('Activity Effects', () => {
  const actions: Observable<any> = of({});
  let effects: fromEffects.ActivityEffects;
  let metadata: EffectsMetadata<fromEffects.ActivityEffects>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          'activity': combineReducers(fromReducers.reducers)
        }),
        RouterModule.forRoot([])
      ],
      providers: [
        provideMockActions(() => actions),
        fromEffects.ActivityEffects,
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    });
    effects = TestBed.get(fromEffects.ActivityEffects);
    metadata = getEffectsMetadata(effects);
  });

  describe('on route go', () => {
    it('should register routeGo$ that does not dispatch an action', () => {
      expect(metadata.routeGo$).toEqual({ dispatch: false });
    });
  });

  describe('show error message', () => {
    it('should register showErrorMessage$ that does not dispatch an action', () => {
      expect(metadata.showErrorMessage$).toEqual({ dispatch: false });
    });
  });

});
