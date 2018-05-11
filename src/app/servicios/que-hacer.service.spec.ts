import { TestBed, inject } from '@angular/core/testing';

import { QueHacerService } from './que-hacer.service';

describe('QueHacerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueHacerService]
    });
  });

  it('should be created', inject([QueHacerService], (service: QueHacerService) => {
    expect(service).toBeTruthy();
  }));
});
