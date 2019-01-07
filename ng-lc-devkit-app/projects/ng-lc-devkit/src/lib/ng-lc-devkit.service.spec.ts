import { TestBed, inject } from '@angular/core/testing';

import { NgLcDevkitService } from './ng-lc-devkit.service';

describe('NgLcDevkitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgLcDevkitService]
    });
  });

  it('should be created', inject([NgLcDevkitService], (service: NgLcDevkitService) => {
    expect(service).toBeTruthy();
  }));
});
