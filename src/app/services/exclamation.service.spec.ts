import { TestBed } from '@angular/core/testing';

import { ExclamationService } from './exclamation.service';

describe('ExclamationService', () => {
  let service: ExclamationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExclamationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
