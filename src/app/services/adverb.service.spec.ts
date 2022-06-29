import { TestBed } from '@angular/core/testing';

import { AdverbService } from './adverb.service';

describe('AdverbService', () => {
  let service: AdverbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdverbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
