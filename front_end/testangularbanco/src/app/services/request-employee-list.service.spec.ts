import { TestBed } from '@angular/core/testing';

import { RequestEmployeeListService } from './request-employee-list.service';

describe('RequestEmployeeListService', () => {
  let service: RequestEmployeeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestEmployeeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
