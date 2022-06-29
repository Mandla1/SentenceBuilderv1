import { TestBed } from '@angular/core/testing';

import { AdjectiveService } from './adjective.service';

describe('AdjectiveService', () => {
  let service: AdjectiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdjectiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
