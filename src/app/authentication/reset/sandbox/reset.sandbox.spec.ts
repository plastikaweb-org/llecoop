import { inject, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { ResetSandbox } from './reset.sandbox';


describe('ResetSandbox', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      providers: [ ResetSandbox ]
    });
  });

  it('should be created', inject([ ResetSandbox ], (service: ResetSandbox) => {
    expect(service).toBeTruthy();
  }));
});
