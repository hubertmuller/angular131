import { TestBed } from '@angular/core/testing';

import { LogikaService } from './logika.service';

describe('LogikaService', () => {
  let service: LogikaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogikaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
