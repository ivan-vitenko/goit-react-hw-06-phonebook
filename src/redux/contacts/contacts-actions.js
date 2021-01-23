import types from './contacts-types';
import { v4 as uuid } from 'uuid';

const addContact = (name, number) => ({
  type: types.ADD,

  payload: {
    id: uuid(),
    name: name,
    number: number,
  },
});

const deleteContact = e => ({
  type: types.DELETE,
  payload: e.target.id,
});

const changeFilter = e => ({
  type: types.CHANGE_FLTER,
  payload: e.target.value,
});

export default { addContact, deleteContact, changeFilter };
