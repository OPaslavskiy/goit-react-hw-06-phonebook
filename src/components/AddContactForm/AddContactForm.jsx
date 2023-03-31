import React from 'react';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { addContact } from 'redux/contactSlice';
import { useDispatch } from 'react-redux';

import {
  FormSection,
  Input,
  Btn,
  TitleForForm,
  ErrorM,
} from './AddContactForm.styled';

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
  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
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
  );
};
