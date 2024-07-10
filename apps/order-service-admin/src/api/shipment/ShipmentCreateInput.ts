import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ShipmentCreateInput = {
  trackingNumber?: string | null;
  carrier?: string | null;
  status?: "Option1" | null;
  order?: OrderWhereUniqueInput | null;
};
