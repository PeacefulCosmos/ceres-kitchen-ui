import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SentOrdersStore } from './sent-orders.store';
import { io, Socket } from 'socket.io-client';
import { environment } from '@env/environment';
import { Observable, Observer } from 'rxjs';
import { SentOrders } from './sent-orders.model';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';

@Injectable({ providedIn: 'root' })
export class SentOrdersService {
  private userData: any;
  private roomName: 'panel';
  private socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  constructor(
    private sentOrdersStore: SentOrdersStore,
    private http: HttpClient
  ) {
    this.socket = io(`${environment.baseUrl}`);
    this.socket.emit('join');
  }

  getCurrentOrders() {
    const url: string = `${environment.api}/sent-orders/getCurrentOrders`;
    this.sentOrdersStore.setLoading(true);
    this.http
      .post(url, { companyId: environment.testCompanyId })
      .subscribe((currentOrders: SentOrders[]) => {
        this.sentOrdersStore.add(currentOrders);
      });
    this.sentOrdersStore.setLoading(false);
  }

  onNewSentOrder() {
    return new Observable((observer: Observer<any>) => {
      this.socket.on('order-to-kitchen', (sentOrder) => {
        observer.next(sentOrder);
      });
    });
  }

  onCompleteSentOrder(completeOrder) {
    this.socket.emit('complete-order', completeOrder);
  }

  responseAfterDeleteOrder() {
    return new Observable((observer: Observer<any>) => {
      this.socket.on('after-delete', (sentOrders) => {
        observer.next(sentOrders);
      });
    });
  }
}
