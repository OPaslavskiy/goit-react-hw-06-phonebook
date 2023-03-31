import React from 'react';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { object, string } from 'yup';
import { Form, Field, ErrorMessage } from 'formik';

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
  return (
    <div>
      <Formik
        initialValues={{ nameContact: '', number: '' }}
        onSubmit={(values, { resetForm }) => {
          //   addContact({
          //     ...values,
          //     id: nanoid(),
          //   });
          console.log('nanoid', nanoid());
          console.log('123', values);
          resetForm();
        }}
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
