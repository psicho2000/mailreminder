import {TestBed} from '@angular/core/testing';

import {reminderService} from './reminder.service';

describe('reminderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: reminderService = TestBed.get(reminderService);
    expect(service).toBeTruthy();
  });
});
