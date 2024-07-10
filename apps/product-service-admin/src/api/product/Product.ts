export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  imageUrl: string | null;
  price: number | null;
  discountId: number | null;
  quantity: number | null;
  name: string | null;
  description: string | null;
};
