import { combineReducers } from 'redux';
import types from './contacts-types';

const parseContacts = JSON.parse(localStorage.getItem('contacts'));
const initialContacts = parseContacts ? parseContacts : [];

const contacts = (state = initialContacts, { type, payload }) => {
  switch (type) {
    case types.ADD:
      const newContacts = [...state, payload];
      localStorage.setItem('contacts', JSON.stringify(newContacts));
      return newContacts;

    case types.DELETE:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FLTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({ contacts, filter });
