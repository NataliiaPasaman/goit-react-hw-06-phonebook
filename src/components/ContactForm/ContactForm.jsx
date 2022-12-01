import { useState } from 'react';
import PropTypes from 'prop-types';
import css from 'components/ContactForm/ContactForm.module.css';

export const ContactForm = ({ hadleSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onSubmitForm = evt => {
    evt.preventDefault();
    hadleSubmit(name, number);
    clearForm();
  };

  const clearForm = () => {
   setName('');
   setNumber('');
  };


    return (
      <form className={css.formPhone} onSubmit={onSubmitForm}>
        <label className={css.labelPhone}>
          Name
          <input
            className={css.inputPhone}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onInputChange}
          />
        </label>
        <label className={css.labelPhone}>
          Number
          <input
            className={css.inputPhone}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onInputChange}
          />
        </label>
        <button className={css.btnPhone} type="submit">
          Add contact
        </button>
      </form>
    );

}

ContactForm.propTypes = {
  hadleSubmit: PropTypes.func.isRequired,
};
