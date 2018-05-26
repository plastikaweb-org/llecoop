import { inject, TestBed } from '@angular/core/testing';
import { WindowRefService } from '../windowref/windowref.service';
import { LocalstorageService } from './localstorage.service';


describe('LocalstorageService', () => {
  let localstorageService: LocalstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ WindowRefService, LocalstorageService ]
    });

    localstorageService = TestBed.get(LocalstorageService);
  });

  it('should be created', inject([ LocalstorageService ], (service: LocalstorageService) => {
    expect(service).toBeTruthy();
  }));

  it('should set, get and remove an item', () => {
    localstorageService.setItem('test', 'value');
    expect(localstorageService.getItem('test')).toBe('value');
    localstorageService.removeItem('test');
    expect(localstorageService.getItem('test')).toBeNull();
  });
});
