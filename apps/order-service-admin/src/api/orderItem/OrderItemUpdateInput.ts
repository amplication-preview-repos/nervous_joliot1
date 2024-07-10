import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderItemUpdateInput = {
  quantity?: number | null;
  price?: number | null;
  productId?: string | null;
  order?: OrderWhereUniqueInput | null;
};
