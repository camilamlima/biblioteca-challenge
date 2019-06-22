import React from 'react';
import { 
    List, Create, Edit, Datagrid, SimpleForm,
    TextInput, SelectInput, ReferenceInput, NumberInput,
    TextField, DateField, EditButton, ReferenceField, NumberField } from 'react-admin';


export const ReviewList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            
            <ReferenceField source="user" reference="users">
                <TextField source="username" />
            </ReferenceField>
            <ReferenceField source="book" reference="books">
                <TextField source="title" />
            </ReferenceField>
            
            <NumberField source="conservation_state" />
            <NumberField source="rate" />
            <TextField source="comments" />
            
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            
            <EditButton />
        </Datagrid>
    </List>
);

export const ReviewEdit = props => (
    <Edit {...props}>
        <SimpleForm>

            <ReferenceInput source="user" reference="users">
                <SelectInput optionText="username" />
            </ReferenceInput>
            <ReferenceField source="book" reference="books">
                <SelectInput optionText="title" />
            </ReferenceField>

            <NumberInput source="conservation_state" />
            <NumberInput source="rate" />
            <TextInput source="comments" />
        </SimpleForm>
    </Edit>
);

export const ReviewCreate = props => (
    <Create {...props}>
        <SimpleForm>

            <ReferenceInput source="user" reference="users">
                <SelectInput optionText="username" />
            </ReferenceInput>
            <ReferenceField source="book" reference="books">
                <SelectInput optionText="title" />
            </ReferenceField>

            <NumberInput source="conservation_state" />
            <NumberInput source="rate" />
            <TextInput source="comments" />
        </SimpleForm>
    </Create>
);
