import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="image_url" source="imageUrl" />
        <TextField label="price" source="price" />
        <TextField label="Discount_id" source="discountId" />
        <TextField label="quantity" source="quantity" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
      </Datagrid>
    </List>
  );
};
