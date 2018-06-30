import { inject, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { HasInitDataGuard } from './has-init-data.guard';

describe('HasInitDataGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      providers: [ HasInitDataGuard ]
    });
  });

  it('should ...', inject([ HasInitDataGuard ], (guard: HasInitDataGuard) => {
    expect(guard).toBeTruthy();
  }));
});
