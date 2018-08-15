import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import * as fromRoot from 'app/root/store/reducers';
import { ProfileSandbox } from './profile.sandbox';


describe('ProfileSandbox', () => {
  let sandbox: ProfileSandbox;
  let store: Store<fromRoot.RootState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({
        ...fromRoot.reducers
      }) ],
      providers: [ ProfileSandbox ]
    });

    sandbox = TestBed.get(ProfileSandbox);
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should be created', () => {
    expect(sandbox).toBeTruthy();
  });

})
;
