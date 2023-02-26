import { TestBed } from '@angular/core/testing';

import { JobJsonService } from './job-json.service';

describe('JobJsonService', () => {
  let service: JobJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
