import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  imageUrl?: SortOrder;
  price?: SortOrder;
  discountId?: SortOrder;
  quantity?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
};
