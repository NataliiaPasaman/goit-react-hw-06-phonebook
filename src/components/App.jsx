import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

// import { useState, useEffect } from 'react';

/** Створи  оновлення фільтра
 * 
// Використай бібліотеку Redux Persist для збереження масиву контактів
//  у локальному сховищі */

// const CONTACTS = 'contacts_List';

export const App = () => {
  // const savedContacts = () => {
  //   return JSON.parse(localStorage.getItem(CONTACTS)) || [];
  // }

  // const [contacts, setContacts] = useState(savedContacts);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem(CONTACTS, JSON.stringify(contacts));
  // }, [contacts]);


  // const onInputFilterChange = e => setFilter(e.target.value);

  // const getFilterContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };
  // const filterContacts = getFilterContacts();

  return (
    <div
      style={{
        height: '100vh',
        padding: '40px',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter 
      // onInputFilterChange={onInputFilterChange} 
      // filter={filter} 
      />
      <ContactsList />
    </div>
  );
};
