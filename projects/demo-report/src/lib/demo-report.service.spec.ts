import { TestBed } from '@angular/core/testing';

import { DemoReportService } from './demo-report.service';

describe('DemoReportService', () => {
  let service: DemoReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
