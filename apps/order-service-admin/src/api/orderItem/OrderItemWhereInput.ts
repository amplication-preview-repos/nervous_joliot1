import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderItemWhereInput = {
  id?: StringFilter;
  quantity?: IntNullableFilter;
  price?: FloatNullableFilter;
  productId?: StringNullableFilter;
  order?: OrderWhereUniqueInput;
};
