import { TestBed, inject } from '@angular/core/testing';

import { NytserviceService } from './nytservice.service';

describe('NytserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NytserviceService]
    });
  });

  it('should be created', inject([NytserviceService], (service: NytserviceService) => {
    expect(service).toBeTruthy();
  }));
});
