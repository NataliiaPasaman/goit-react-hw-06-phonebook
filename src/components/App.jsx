import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { useState, useEffect } from 'react';

const CONTACTS = 'contacts_List';

export const App = () => {
  const savedContacts = () => {
    return JSON.parse(localStorage.getItem(CONTACTS)) || [];
  }

  const [contacts, setContacts] = useState(savedContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const hadleSubmit = (name, number) => {
    const contact = {
      id: nanoid(12),
      name,
      number,
    };

    const isfindContact = contacts.find(
      oneContact => oneContact.name === contact.name
    );
    if (isfindContact) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    setContacts(prevState => [contact, ...prevState]);
  };

  const onInputFilterChange = e => setFilter(e.target.value);

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filterContacts = getFilterContacts();

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

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
      <ContactForm hadleSubmit={hadleSubmit} />
      <h2>Contacts</h2>
      <Filter onInputFilterChange={onInputFilterChange} filter={filter} />
      <ContactsList
        FilterContact={filterContacts}
        deleteContact={deleteContact}
        contacts={contacts}
      />
    </div>
  );
};
