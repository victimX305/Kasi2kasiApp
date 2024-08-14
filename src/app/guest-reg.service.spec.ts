import { TestBed } from '@angular/core/testing';

import { GuestRegService } from './guest-reg.service';

describe('GuestRegService', () => {
  let service: GuestRegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestRegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
