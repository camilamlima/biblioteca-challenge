import React from 'react';
import { 
    Admin, Resource, 
    ListGuesser,EditGuesser
} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import {authProvider, config } from '../helpers';
import {User, Book} from '../components/Admin'

const dataProvider = simpleRestProvider(config.apiUrl);


export const AdminPage = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" list={User.UserList} edit={User.UserEdit} create={User.UserCreate} />
    <Resource name="books" list={Book.BookList} edit={Book.BookEdit} create={Book.BookCreate} />
    
    <Resource name="reviews" list={ListGuesser} edit={EditGuesser}/>
    
  </Admin>
);
