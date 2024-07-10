import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  price?: FloatNullableFilter;
  discountId?: IntNullableFilter;
  quantity?: IntNullableFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
};
