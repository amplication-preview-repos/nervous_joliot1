import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  method?: "Option1";
  status?: "Option1";
  order?: OrderWhereUniqueInput;
};
