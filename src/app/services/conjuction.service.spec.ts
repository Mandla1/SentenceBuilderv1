import { TestBed } from '@angular/core/testing';

import { ConjuctionService } from './conjuction.service';

describe('ConjuctionService', () => {
  let service: ConjuctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConjuctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
