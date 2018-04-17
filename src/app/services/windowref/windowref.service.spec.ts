import { TestBed, inject } from '@angular/core/testing';
import { WindowRefService } from './windowref.service';


describe('WindowRefService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ WindowRefService ]
    });
  });

  it('should be created', inject([ WindowRefService ], (service: WindowRefService) => {
    expect(service).toBeTruthy();
  }));
});
