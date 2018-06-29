import { TestBed, inject } from '@angular/core/testing';

import { ArmoryService } from './armory.service';

describe('ArmoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArmoryService]
    });
  });

  it('should be created', inject([ArmoryService], (service: ArmoryService) => {
    expect(service).toBeTruthy();
  }));
});
