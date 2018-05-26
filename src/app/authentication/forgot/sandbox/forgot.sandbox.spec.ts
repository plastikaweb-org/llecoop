import { inject, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { ForgotSandbox } from './forgot.sandbox';


describe('ForgotSandbox', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      providers: [ ForgotSandbox ]
    });
  });

  it('should be created', inject([ ForgotSandbox ], (service: ForgotSandbox) => {
    expect(service).toBeTruthy();
  }));
});
