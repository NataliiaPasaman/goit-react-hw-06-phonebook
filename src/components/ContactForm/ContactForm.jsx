import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import css from 'components/ContactForm/ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    dispatch(addContact(form.elements.name.value, form.elements.number.value));
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