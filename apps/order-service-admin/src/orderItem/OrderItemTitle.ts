import { OrderItem as TOrderItem } from "../api/orderItem/OrderItem";

export const ORDERITEM_TITLE_FIELD = "productId";

export const OrderItemTitle = (record: TOrderItem): string => {
  return record.productId?.toString() || String(record.id);
};
