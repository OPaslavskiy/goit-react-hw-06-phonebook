import React from 'react';
import { FilterDiv, TitleForLabel, Input } from './FindContactsImput.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { deleteContact } from 'redux/contactSlice';
console.log('filterContact', deleteContact);
export const FindContactsInput = () => {
  const dispatch = useDispatch();

  return (
    <FilterDiv>
      <TitleForLabel>Find contacts by name...</TitleForLabel>
      <Input
        name="filter"
        type="text"
        onChange={event => dispatch(setFilter(event.currentTarget.value))}
      />
    </FilterDiv>
  );
};

// dispatch(filterContact(event.currentTarget.value))
