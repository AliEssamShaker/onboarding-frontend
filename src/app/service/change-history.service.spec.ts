import { TestBed } from '@angular/core/testing';

import { ChangeHistoryService } from './change-history.service';

describe('ChangeHistoryService', () => {
  let service: ChangeHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
