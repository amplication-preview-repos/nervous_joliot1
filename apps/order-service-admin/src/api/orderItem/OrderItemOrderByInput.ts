import { SortOrder } from "../../util/SortOrder";

export type OrderItemOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  quantity?: SortOrder;
  price?: SortOrder;
  productId?: SortOrder;
  orderId?: SortOrder;
};
