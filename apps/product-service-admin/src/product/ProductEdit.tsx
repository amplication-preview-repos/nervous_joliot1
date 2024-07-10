import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="image_url" source="imageUrl" />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="Discount_id" source="discountId" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
      </SimpleForm>
    </Edit>
  );
};
