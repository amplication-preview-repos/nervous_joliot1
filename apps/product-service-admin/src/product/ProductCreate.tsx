import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="image_url" source="imageUrl" />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="Discount_id" source="discountId" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
      </SimpleForm>
    </Create>
  );
};
