import React from 'react';
import { getContacts, getFilter } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { List, Item, Btn, Name } from './ContactsList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
console.log('deleteContact', deleteContact);

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <List>
      {filterContact.map(({ name, number, id }) => (
        <Item key={id}>
          <Name>{name}</Name>
          <p>{number}</p>
          <Btn
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </Btn>
        </Item>
      ))}
    </List>
  );
};
