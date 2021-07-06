import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { SentOrder, SentOrders } from './sent-orders.model';

export interface SentOrdersState extends EntityState<SentOrders> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'sent-orders',
  idKey: '_id',
})
export class SentOrdersStore extends EntityStore<SentOrdersState> {
  constructor() {
    super();
  }
}
