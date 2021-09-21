import { TestBed } from '@angular/core/testing';

import { EncodeDecodeService } from './encode-decode.service';

describe('EncodeDecodeService', () => {
  let service: EncodeDecodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncodeDecodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
