import { TestBed, async, inject } from '@angular/core/testing';

import { HasInitDataGuard } from './has-init-data.guard';

describe('HasInitDataGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HasInitDataGuard]
    });
  });

  it('should ...', inject([HasInitDataGuard], (guard: HasInitDataGuard) => {
    expect(guard).toBeTruthy();
  }));
});
