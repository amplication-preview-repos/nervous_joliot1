import { PaymentUpdateManyWithoutOrdersInput } from "./PaymentUpdateManyWithoutOrdersInput";
import { ShipmentUpdateManyWithoutOrdersInput } from "./ShipmentUpdateManyWithoutOrdersInput";
import { OrderItemUpdateManyWithoutOrdersInput } from "./OrderItemUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  total?: number | null;
  status?: "Option1" | null;
  customerId?: string | null;
  payments?: PaymentUpdateManyWithoutOrdersInput;
  shipments?: ShipmentUpdateManyWithoutOrdersInput;
  orderItems?: OrderItemUpdateManyWithoutOrdersInput;
};
