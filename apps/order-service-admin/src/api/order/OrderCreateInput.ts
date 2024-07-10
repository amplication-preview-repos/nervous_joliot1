import { PaymentCreateNestedManyWithoutOrdersInput } from "./PaymentCreateNestedManyWithoutOrdersInput";
import { ShipmentCreateNestedManyWithoutOrdersInput } from "./ShipmentCreateNestedManyWithoutOrdersInput";
import { OrderItemCreateNestedManyWithoutOrdersInput } from "./OrderItemCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  total?: number | null;
  status?: "Option1" | null;
  customerId?: string | null;
  payments?: PaymentCreateNestedManyWithoutOrdersInput;
  shipments?: ShipmentCreateNestedManyWithoutOrdersInput;
  orderItems?: OrderItemCreateNestedManyWithoutOrdersInput;
};
