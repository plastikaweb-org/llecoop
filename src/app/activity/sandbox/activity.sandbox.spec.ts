import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { WarningTypes } from '../../shared/models';
import * as fromActions from '../store/actions';
import * as fromActivity from '../store/reducers';
import { ActivitySandbox } from './activity.sandbox';

describe('ActivitySandbox', () => {
  let sandbox: ActivitySandbox;
  let store: Store<fromActivity.ActivityState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({
        ...fromActivity.reducers
      }) ],
      providers: [ ActivitySandbox ]
    });

    sandbox = TestBed.get(ActivitySandbox);
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should be created', () => {
    expect(sandbox).toBeTruthy();
  });

  it('should dispatch a reset snack bar action', () => {
    const action = new fromActions.ResetSnackBar();
    sandbox.resetSnackBar();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch a Reset Error Message action', () => {
    const action = new fromActions.ResetErrorMessage();
    sandbox.resetAlertMessage(WarningTypes.Error);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch a Reset Warning Message action', () => {
    const action = new fromActions.ResetWarningMessage();
    sandbox.resetAlertMessage(WarningTypes.Warning);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
})
;
