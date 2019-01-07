import { TestBed, inject } from '@angular/core/testing';

import { DialogAlertService } from './dialog-alert.service';

describe('DialogAlertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogAlertService]
    });
  });

  it('should be created', inject([DialogAlertService], (service: DialogAlertService) => {
    expect(service).toBeTruthy();
  }));
});
