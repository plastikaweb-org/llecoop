import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';

import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { LocalstorageService, WindowRefService } from '../../../../services';
import { Theme, LocalStorageMock } from '../../../../shared';
import * as fromActions from '../../actions';
import { reducers } from '../../reducers';
import * as fromEffects from './ui.effects';

export class ThemeMock extends LocalStorageMock {
  ls: any = { 'mat-theme': 'theme-dark' };
}

describe('Auth Effects', () => {
  let actions: Observable<any> = of({});
  let effects: fromEffects.UiEffects;
  let metadata: EffectsMetadata<fromEffects.UiEffects>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          auth: reducers.auth
        })
      ],
      providers: [
        provideMockActions(() => actions),
        { provide: LocalstorageService, useClass: ThemeMock },
        WindowRefService,
        fromEffects.UiEffects
      ]
    });
    effects = TestBed.get(fromEffects.UiEffects);
    metadata = getEffectsMetadata(effects);
  });

  describe('load theme from ls', () => {
    it('should load theme present on ls', () => {
      const payload = Theme.Dark;
      const action = new fromActions.LoadTheme();
      const completion = new fromActions.ChangeTheme(payload);
      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.loadTheme$).toBeObservable(expected);
    });

    it('should register loadTheme$ that dispatches an action', () => {
      expect(metadata.loadTheme$).toEqual({ dispatch: true });
    });
  });

  describe('change theme', () => {
    it('should register loadTheme$ that dispatches no action', () => {
      expect(metadata.changeTheme$).toEqual({ dispatch: false });
    });
  });
});
