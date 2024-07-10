import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { OrderTitle } from "../order/OrderTitle";

export const ShipmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="trackingNumber" source="trackingNumber" />
        <TextInput label="carrier" source="carrier" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="order.id" reference="Order" label="order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
