import { TestBed } from '@angular/core/testing';

import { ChatCountService } from './chat-count.service';

describe('ChatCountService', () => {
  let service: ChatCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
