import { TestBed } from '@angular/core/testing';

import { IoaDataService } from './ioa-data.service';

describe('IoaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IoaDataService = TestBed.get(IoaDataService);
    expect(service).toBeTruthy();
  });
});
