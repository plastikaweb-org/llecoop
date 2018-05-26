import { inject, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { ActivitySandbox } from './activity.sandbox';


describe('ActivitySandbox', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      providers: [ ActivitySandbox ]
    });
  });

  it('should be created', inject([ ActivitySandbox ], (service: ActivitySandbox) => {
    expect(service).toBeTruthy();
  }));
});
