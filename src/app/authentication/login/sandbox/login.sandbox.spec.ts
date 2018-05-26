import { inject, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { LoginSandbox } from './login.sandbox';


describe('LoginSandbox', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      providers: [ LoginSandbox ]
    });
  });

  it('should be created', inject([ LoginSandbox ], (service: LoginSandbox) => {
    expect(service).toBeTruthy();
  }));
});
