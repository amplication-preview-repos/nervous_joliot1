import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { ShipmentListRelationFilter } from "../shipment/ShipmentListRelationFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  total?: FloatNullableFilter;
  status?: "Option1";
  customerId?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  shipments?: ShipmentListRelationFilter;
  orderItems?: OrderItemListRelationFilter;
};
