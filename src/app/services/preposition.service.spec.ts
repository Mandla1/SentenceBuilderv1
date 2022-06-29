import { TestBed } from '@angular/core/testing';

import { PrepositionService } from './preposition.service';

describe('PrepositionService', () => {
  let service: PrepositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrepositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
