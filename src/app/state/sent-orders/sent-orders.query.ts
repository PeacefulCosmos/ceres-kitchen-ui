import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SentOrdersStore, SentOrdersState } from './sent-orders.store';

@Injectable({ providedIn: 'root' })
export class SentOrdersQuery extends QueryEntity<SentOrdersState> {
  constructor(protected store: SentOrdersStore) {
    super(store);
  }

  getSentOrders$ = this.selectAll();
}
