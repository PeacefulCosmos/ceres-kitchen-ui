import { ID } from '@datorama/akita';

export interface SentOrder {
  sentOrder_id?: string;
  name: string;
  price: number;
  description: string;
  available: boolean;
  type: string;
  image?: string;
  quantity: number;
  companyId: string;
  orderTime?: Date;
}

export interface SentOrders {
  _id?: string;
  seatIndex: string[];
  sentItems: SentOrder[];
  orderTime?: Date;
  sentOrder_id?: string;
  companyId: string;
  cookStatus: string;
}

export function createSentOrders(params: Partial<SentOrders>) {
  return {} as SentOrders;
}
