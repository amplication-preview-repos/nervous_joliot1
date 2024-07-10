import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ShipmentWhereInput = {
  id?: StringFilter;
  trackingNumber?: StringNullableFilter;
  carrier?: StringNullableFilter;
  status?: "Option1";
  order?: OrderWhereUniqueInput;
};
