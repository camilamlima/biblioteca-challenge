import React from 'react';
import { 
    List, Create, Edit, Datagrid, SimpleForm,
    TextInput, TextField, DateField, EditButton } from 'react-admin';

export const BookCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);

export const BookList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="description" />
            <DateField source="updatedAt" />
            <DateField source="createdAt" />
            
            <EditButton />
        </Datagrid>
    </List>
);

export const BookEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
)
