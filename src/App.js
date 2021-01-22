import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

import './App.css';

function App() {
  // const parseContacts = JSON.parse(localStorage.getItem('contacts'));
  // const initialContacts = parseContacts ? parseContacts : [];

  // const [contacts, setContacts] = useState(initialContacts);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const handleChange = e => {
  //   setFilter(e.target.value);
  // };

  // const addContact = (name, number) => {
  //   const contact = {
  //     id: uuid(),
  //     name: name,
  //     number: number,
  //   };

  //   setContacts([contact, ...contacts]);
  // };

  // const deleteContact = e => {
  //   setContacts(contacts.filter(contact => contact.id !== e.target.id));
  // };

  return (
    <div className="container">
      <h2>Phonebook</h2>
      <ContactForm />

      {/* <h2>Contacts</h2>
      {Boolean(contacts.length) && (
        <div className="contacts">
          <Filter value={filter} onChange={handleChange} />

          <ContactList
            contacts={contacts}
            filter={filter}
            deleteContact={deleteContact}
          />
        </div>
      )} */}
    </div>
  );
}

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: "",
//   };

//   componentDidMount() {
//     const contacts = JSON.parse(localStorage.getItem("contacts"));

//     if (contacts) {
//       this.setState({ contacts: contacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const prevContacts = prevState.contacts;
//     const nextContacts = this.state.contacts;

//     if (prevContacts !== nextContacts) {
//       localStorage.setItem("contacts", JSON.stringify(nextContacts));
//     }
//   }

//   handleChange = (e) => {
//     this.setState({ filter: e.target.value });
//   };

//   addContact = (name, number) => {
//     const contact = {
//       id: uuid(),
//       name: name,
//       number: number,
//     };

//     this.setState(({ contacts }) => ({
//       contacts: [contact, ...contacts],
//     }));
//   };

//   deleteContact = (e) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter(
//         (contact) => contact.id !== e.target.id
//       ),
//     }));
//   };

//   render() {
//     // localStorage.setItem("contacts", JSON.stringify(this.state.contacts));

//     return (
//       <div className="container">
//         <h2>Phonebook</h2>
//         <ContactForm
//           addContact={this.addContact}
//           contacts={this.state.contacts}
//         />

//         <h2>Contacts</h2>
//         {Boolean(this.state.contacts.length) && (
//           <div className="contacts">
//             <Filter value={this.state.filter} onChange={this.handleChange} />

//             <ContactList
//               contacts={this.state.contacts}
//               filter={this.state.filter}
//               deleteContact={this.deleteContact}
//             />
//           </div>
//         )}
//       </div>
//     );
//   }
// }

export default App;
