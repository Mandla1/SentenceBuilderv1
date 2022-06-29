import { TestBed } from '@angular/core/testing';

import { DeterminerService } from './determiner.service';

describe('DeterminerService', () => {
  let service: DeterminerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeterminerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
