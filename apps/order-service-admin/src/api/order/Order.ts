import { Payment } from "../payment/Payment";
import { Shipment } from "../shipment/Shipment";
import { OrderItem } from "../orderItem/OrderItem";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  total: number | null;
  status?: "Option1" | null;
  customerId: string | null;
  payments?: Array<Payment>;
  shipments?: Array<Shipment>;
  orderItems?: Array<OrderItem>;
};
