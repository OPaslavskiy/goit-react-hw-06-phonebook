import React from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { FindContactsInput } from './FindContactsImput/FindContactsImput';

export const App = () => {
  return (
    <div>
      <AddContactForm />
      <FindContactsInput />
      <ContactsList />
    </div>
  );
};
