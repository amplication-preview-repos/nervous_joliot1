import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderItemCreateInput = {
  quantity?: number | null;
  price?: number | null;
  productId?: string | null;
  order?: OrderWhereUniqueInput | null;
};
