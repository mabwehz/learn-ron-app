import { TestBed } from '@angular/core/testing';

import { RonWord } from './ron-word';

describe('RonWord', () => {
  let service: RonWord;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RonWord);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
