import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
];

const contactSlice = createSlice({
  // Ім'я слайсу
  name: 'contact',
  // Початковий стан редюсера слайсу
  initialState: initialContacts,
  // Об'єкт редюсерів
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(values) {
        return {
          payload: {
            name: values.nameContact,
            number: values.number,
            id: nanoid(),
          },
        };
      },
    },
  },
});

// Генератори екшенів
export const { addContact } = contactSlice.actions;
// Редюсер слайсу
export const contactReducer = contactSlice.reducer;
