import { inject, TestBed } from '@angular/core/testing';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AngularFireAuthModule ],
      providers: [ AuthService ]
    });
  });

  xit('should be created', inject([ AuthService ], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
