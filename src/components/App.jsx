import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {

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
      {/* <Filter 
      // onInputFilterChange={onInputFilterChange} 
      // filter={filter} 
      /> */}
      <ContactsList />
    </div>
  );
};
