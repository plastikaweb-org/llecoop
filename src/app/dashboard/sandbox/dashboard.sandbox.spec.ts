import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { CONFIG_TOKEN, THEMES_TOKEN } from 'config';
import * as fromActions from 'app/root/store/actions';
import * as fromRoot from 'app/root/store/reducers';
import { Theme } from '@llecoop';
import { DashboardSandbox } from './dashboard.sandbox';


describe('DashboardSandbox', () => {
  let sandbox: DashboardSandbox;
  let store: Store<fromRoot.RootState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({
        ...fromRoot.reducers
      }) ],
      providers: [ DashboardSandbox, { provide: CONFIG_TOKEN, useValue: null }, { provide: THEMES_TOKEN, useValue: null } ]
    });

    sandbox = TestBed.get(DashboardSandbox);
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should be created', () => {
    expect(sandbox).toBeTruthy();
  });

  it('should dispatch a logout action', () => {
    const action = new fromActions.Logout();
    sandbox.doLogout();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch a changeTheme action', () => {
    const action = new fromActions.ChangeTheme(Theme.Dark);
    sandbox.changeTheme(Theme.Dark);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
})
;
