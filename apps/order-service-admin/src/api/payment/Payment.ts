import { Order } from "../order/Order";

export type Payment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  method?: "Option1" | null;
  status?: "Option1" | null;
  order?: Order | null;
};
