import { SortOrder } from "../../util/SortOrder";

export type ShipmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  trackingNumber?: SortOrder;
  carrier?: SortOrder;
  status?: SortOrder;
  orderId?: SortOrder;
};
