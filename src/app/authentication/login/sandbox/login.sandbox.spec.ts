import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import * as fromActions from '../../../root/store/actions';
import * as fromRoot from '../../../root/store/reducers';
import { Credentials } from '../../../shared/models';
import { LoginSandbox } from './login.sandbox';

describe('LoginSandbox', () => {
  let sandbox: LoginSandbox;
  let store: Store<fromRoot.RootState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({
        ...fromRoot.reducers
      }) ],
      providers: [ LoginSandbox ]
    });

    sandbox = TestBed.get(LoginSandbox);
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should be created', () => {
    expect(sandbox).toBeTruthy();
  });

  it('should dispatch a login action', () => {
    const credentials: Credentials = { email: 'test@test.com', password: '_________' };
    const action = new fromActions.Authenticate(credentials);
    sandbox.login(credentials);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
