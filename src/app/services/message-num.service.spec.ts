import { TestBed } from '@angular/core/testing';

import { MessageNumService } from './message-num.service';

describe('MessageNumService', () => {
  let service: MessageNumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageNumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
