import React from 'react';
import { getContacts, getFilter } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { List, Item, Btn, Name } from './ContactsList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <h2 style={{ justifyContent: 'center', display: 'flex' }}>
        Сontact list
      </h2>
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
    </div>
  );
};
