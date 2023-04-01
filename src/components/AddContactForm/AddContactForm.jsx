import React from 'react';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { addContact } from 'redux/contactSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';

import {
  FormSection,
  Input,
  Btn,
  TitleForForm,
  ErrorM,
} from './AddContactForm.styled';

import Notiflix from 'notiflix';

const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const userSchema = object({
  nameContact: string().required().min(2).max(30),
  number: string().matches(
    phoneRegExp,
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
  ),
});

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  function handleSubmit(values, { resetForm }) {
    const isName = contacts.some(
      contact => contact.name.toLowerCase() === values.nameContact.toLowerCase()
    );

    if (isName) {
      Notiflix.Notify.info(`${values.nameContact} is already in contacts`);
      return;
    } else {
      dispatch(addContact(values));
      console.log(values);
      resetForm();
    }
  }

  return (
    <div>
      <h2
        style={{ justifyContent: 'center', display: 'flex', marginTop: '30px' }}
      >
        Create a contact
      </h2>
      <Formik
        initialValues={{ nameContact: '', number: '' }}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        <FormSection>
          <TitleForForm>Name</TitleForForm>
          <Input type="text" name="nameContact" required></Input>
          <ErrorM name="nameContact" component="div" />
          <TitleForForm>Phone</TitleForForm>
          <Input type="tel" name="number" required></Input>
          <ErrorM name="number" component="div" />
          <Btn type="submit">Add contact</Btn>
        </FormSection>
      </Formik>
    </div>
  );
};
