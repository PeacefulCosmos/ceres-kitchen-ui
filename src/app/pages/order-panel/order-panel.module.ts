import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPanelComponent } from './order-panel.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OrderPanelComponent,
  },
];

@NgModule({
  declarations: [OrderPanelComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OrderPanelModule {}
