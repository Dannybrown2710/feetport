import { TestBed } from '@angular/core/testing';

import { FetchLeavesService } from './fetch-leaves.service';

describe('FetchLeavesService', () => {
  let service: FetchLeavesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchLeavesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
