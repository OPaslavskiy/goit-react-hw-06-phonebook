import React from 'react';
import { FilterDiv, TitleForLabel, Input } from './FindContactsImput.styled';

export const FindContactsInput = () => {
  return (
    <FilterDiv>
      <TitleForLabel>Find contacts by name...</TitleForLabel>
      <Input type="text" onChange={() => console.log('123')} />
    </FilterDiv>
  );
};
