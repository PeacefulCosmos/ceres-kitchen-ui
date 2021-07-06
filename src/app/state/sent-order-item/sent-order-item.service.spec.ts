import { TestBed } from '@angular/core/testing';

import { SentOrderItemService } from './sent-order-item.service';

describe('SentOrderItemService', () => {
  let service: SentOrderItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SentOrderItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
