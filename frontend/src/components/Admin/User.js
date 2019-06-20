import React from 'react';
import { 
    List, Create, Edit, Datagrid, SimpleForm,
    TextInput, TextField, BooleanField, DateField, EditButton, BooleanInput } from 'react-admin';

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="username" type="password" />
            <TextInput source="password" />
            <BooleanInput source="is_admin" />
        </SimpleForm>
    </Create>
);

export const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="username" />
            <BooleanField source="is_admin" />
            <DateField source="updatedAt" />
            <DateField source="createdAt" />
            
            <EditButton />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="password" type="password" />
            <BooleanInput source="is_admin" />
        </SimpleForm>
    </Edit>
)
