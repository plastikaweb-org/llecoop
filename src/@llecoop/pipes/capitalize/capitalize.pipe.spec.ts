import { inject, TestBed } from '@angular/core/testing';

import { CapitalizePipe } from './capitalize.pipe';

describe('Capitalize Pipe', () => {
  let pipe: CapitalizePipe;
  let text;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [CapitalizePipe]
  }));

  beforeEach(inject([CapitalizePipe], p => {
    pipe = p;
    text = 'the test';
  }));

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return a capitalized text', () => {
    expect(pipe.transform(text))
      .toEqual('The test');
  });

  it('should return an error if no text is provided as argument', () => {
    expect(() => pipe.transform(undefined)).toThrow();
  });

});
