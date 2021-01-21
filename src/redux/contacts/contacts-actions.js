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

export default { addContact };
