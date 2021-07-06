import { Component, OnInit } from '@angular/core';
import { SentOrderItemService } from '@app/state/sent-order-item/sent-order-item.service';

@Component({
  selector: 'app-order-panel',
  templateUrl: './order-panel.component.html',
  styleUrls: ['./order-panel.component.scss'],
})
export class OrderPanelComponent implements OnInit {
  orders: Array<any> = [];

  constructor(private sentOrderServ: SentOrderItemService) {}

  ngOnInit(): void {
    this.sentOrderServ.onNewSentOrder().subscribe((sentOrders) => {
      this.orders.push(sentOrders);
    });
  }
}
