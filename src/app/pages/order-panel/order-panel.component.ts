import { Component, OnInit } from '@angular/core';
import { SentOrders, SentOrdersQuery } from '@app/state/sent-orders';
import { SentOrdersService } from '@app/state/sent-orders/sent-orders.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-panel',
  templateUrl: './order-panel.component.html',
  styleUrls: ['./order-panel.component.scss'],
})
export class OrderPanelComponent implements OnInit {
  $orders: SentOrders[];

  constructor(
    private sentOrderServ: SentOrdersService,
    private sentOrdersQuery: SentOrdersQuery
  ) {}

  async ngOnInit() {
    await this.sentOrderServ.getCurrentOrders();
    this.sentOrdersQuery.getSentOrders$.subscribe(
      (currentSentOrders: SentOrders[]) => {
        this.$orders = currentSentOrders;
      }
    );
    this.sentOrderServ.onNewSentOrder().subscribe((sentOrder: SentOrders) => {
      this.$orders.push(sentOrder);
    });
    this.sentOrderServ
      .responseAfterDeleteOrder()
      .subscribe((sentOrders: SentOrders[]) => {
        this.$orders = sentOrders;
      });
  }

  async onComplete(completeOrder: SentOrders) {
    await this.sentOrderServ.onCompleteSentOrder(completeOrder);
  }
}
