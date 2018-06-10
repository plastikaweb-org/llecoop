import { inject, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { CONFIG_TOKEN, THEMES_TOKEN } from '../../../config';
import * as fromActions from '../../root/store/actions';
import * as fromRoot from '../../root/store/reducers';
import { Theme } from '../../shared';
import { DashboardSandbox } from './dashboard.sandbox';


describe('DashboardSandbox', () => {
  let store: Store<fromRoot.RootState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({
        ...fromRoot.reducers
      }) ],
      providers: [ DashboardSandbox, { provide: CONFIG_TOKEN, useValue: null }, { provide: THEMES_TOKEN, useValue: null } ]
    });

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should be created', inject([ DashboardSandbox ], (service: DashboardSandbox) => {
    expect(service).toBeTruthy();
  }));

  it('should dispatch a logout action', inject([ DashboardSandbox ], (service: DashboardSandbox) => {
    const action = new fromActions.Logout();
    service.doLogout();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  }));

  it('should dispatch a changeTheme action', inject([ DashboardSandbox ], (service: DashboardSandbox) => {
    const action = new fromActions.ChangeTheme(Theme.Dark);
    service.changeTheme(Theme.Dark);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  }));
})
;
