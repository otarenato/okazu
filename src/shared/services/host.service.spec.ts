import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { HostService } from './host.service';

describe('HostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HostService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([HostService], (service: HostService) => {
    expect(service).toBeTruthy();
  }));
});
