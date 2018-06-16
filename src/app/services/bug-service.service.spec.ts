import { TestBed, inject } from '@angular/core/testing';

import { BugServiceService } from './bug-service.service';

describe('BugServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BugServiceService]
    });
  });

  it('should be created', inject([BugServiceService], (service: BugServiceService) => {
    expect(service).toBeTruthy();
  }));
});
