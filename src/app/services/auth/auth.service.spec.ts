import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2/auth';
import { of } from 'rxjs';

import { AuthService } from './auth.service';

class AngularFireAuthMock {
  isAuth = { name: 'my name' };
  authState = of(this.isAuth);
  auth = {
    signInAndRetrieveDataWithEmailAndPassword: (email, password) => {
      return new Promise(function (resolve) {
        resolve('signed in');
      });
    },
    signOut: () => {
      return new Promise(function (resolve) {
        resolve('logged out');
      });
    },
    sendPasswordResetEmail: (email) => {
      return new Promise(function (resolve) {
        resolve('reset email sent');
      });
    },
    verifyPasswordResetCode: (code) => {
      return new Promise(function (resolve) {
        resolve('reset code ok');
      });
    },
    confirmPasswordReset: (code, password) => {
      return new Promise(function (resolve) {
        resolve('code and password received');
      });
    }
  };
};


describe('AuthService', () => {
  let service;
  let af;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ AuthService, { provide: AngularFireAuth, useClass: AngularFireAuthMock } ]
    });
    service = TestBed.get(AuthService);
    af = TestBed.get(AngularFireAuth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have isAuthenticated method', () => {
    expect(service.isAuthenticated).toBeTruthy();
  });

  it('should have login method', () => {
    expect(service.login).toBeTruthy();
  });

  it('should have logout method', () => {
    expect(service.logout).toBeTruthy();
  });

  it('should have verifyOnReset method', () => {
    expect(service.verifyOnReset).toBeTruthy();
  });

  it('should have confirmPasswordReset method', () => {
    expect(service.confirmPasswordReset).toBeTruthy();
  });

  it('should return authState', fakeAsync(() => {
    const state$ = service.isAuthenticated();
    let response;

    state$.subscribe((res) => {
      response = res;
    });

    tick();

    expect(response).toEqual({ name: 'my name' });
  }));

  xit('should return throw an error when authState is null', fakeAsync(() => {
    af.isAuth = null;

    tick();

    const state$ = service.isAuthenticated();
    let response;

    state$.subscribe((res) => {
      response = res;
    }, (err) => console.log('ERR', err));

    tick();

    expect(service.isAuthenticated).toThrow();
  }));

  it('should return login response', fakeAsync(() => {
    const state$ = service.login({ email: 'test@test.com', password: '-----------' });
    let response;

    state$.subscribe((res) => {
      response = res;
    });

    tick();

    expect(response).toBe('signed in');
  }));

  it('should return logout response', fakeAsync(() => {
    const state$ = service.logout();
    let response;

    state$.subscribe((res) => {
      response = res;
    });

    tick();

    expect(response).toBe('logged out');
  }));

  it('should return resetPassword response', fakeAsync(() => {
    const state$ = service.resetPassword('test@test.com');
    let response;

    state$.subscribe((res) => {
      response = res;
    });

    tick();

    expect(response).toBe('reset email sent');
  }));

  it('should return verifyOnReset response', fakeAsync(() => {
    const state$ = service.verifyOnReset('xxxxxxxxxxxxxxxxx');
    let response;

    state$.subscribe((res) => {
      response = res;
    });

    tick();

    expect(response).toBe('reset code ok');
  }));

  it('should return confirmPasswordReset response', fakeAsync(() => {
    const state$ = service.confirmPasswordReset('xxxxxxxxxxxxxxxxx', '---------');
    let response;

    state$.subscribe((res) => {
      response = res;
    });

    tick();

    expect(response).toBe('code and password received');
  }));
});
