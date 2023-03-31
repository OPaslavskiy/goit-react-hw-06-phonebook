import React from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { GlobalStyle } from '../GlobalStyle';
import { FindContactsInput } from './FindContactsImput/FindContactsImput';
import { Layout } from '../Layout';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <AddContactForm />
      <FindContactsInput />
      <ContactsList />
    </Layout>
  );
};
