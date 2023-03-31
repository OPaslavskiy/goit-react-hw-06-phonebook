import React from 'react';
import { List, Item, Btn, Name } from './ContactsList.styled';
export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {/* {contacts.map(({ name, number, id }) => ( */}
      <Item>
        <Name>123</Name>
        {/* <p>{number}</p> */}
        <Btn
          type="button"
          onClick={() => {
            console.log(`delete`);
          }}
        >
          Delete
        </Btn>
      </Item>
      {/* ))} */}
    </List>
  );
};
