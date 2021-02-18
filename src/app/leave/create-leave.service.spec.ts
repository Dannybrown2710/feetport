import { TestBed } from '@angular/core/testing';

import { CreateLeaveService } from './create-leave.service';

describe('CreateLeaveService', () => {
  let service: CreateLeaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateLeaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
