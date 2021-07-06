import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { environment } from '@env/environment';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SentOrderItemService {
  private socket: Socket;

  constructor(private http: HttpClient) {
    this.socket = io(`${environment.baseUrl}`);
  }

  getCurrentOrder() {}

  onNewSentOrder() {
    return new Observable((observer: Observer<any>) => {
      this.socket.on('order-to-kitchen', (sentOrders) => {
        console.log(sentOrders);
        observer.next(sentOrders);
      });
    });
  }
}
