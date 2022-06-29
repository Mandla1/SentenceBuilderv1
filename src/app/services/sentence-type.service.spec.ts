import { TestBed } from '@angular/core/testing';

import { SentenceTypeService } from './sentence-type.service';

describe('SentenceTypeService', () => {
  let service: SentenceTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SentenceTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
