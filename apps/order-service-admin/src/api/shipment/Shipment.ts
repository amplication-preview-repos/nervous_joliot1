import { Order } from "../order/Order";

export type Shipment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  trackingNumber: string | null;
  carrier: string | null;
  status?: "Option1" | null;
  order?: Order | null;
};
