import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="image_url" source="imageUrl" />
        <TextField label="price" source="price" />
        <TextField label="Discount_id" source="discountId" />
        <TextField label="quantity" source="quantity" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
      </SimpleShowLayout>
    </Show>
  );
};
