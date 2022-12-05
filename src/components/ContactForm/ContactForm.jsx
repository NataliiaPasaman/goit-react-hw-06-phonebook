import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from "redux/selector";
import { nanoid } from 'nanoid';
import css from 'components/ContactForm/ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const isfindContact = contacts.find(contact => contact.name === name);

    if(isfindContact) {
      form.reset();
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({
      name,
      number: form.elements.number.value,
      id: nanoid(),
    }));
    form.reset();
  };

    return (
      <form className={css.formPhone} onSubmit={handleSubmit}>
        <label className={css.labelPhone}>
          Name
          <input
            className={css.inputPhone}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.labelPhone}>
          Number
          <input
            className={css.inputPhone}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.btnPhone} type="submit">
          Add contact
        </button>
      </form>
    );
}