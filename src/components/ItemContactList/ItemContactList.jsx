import React from "react";
import PropTypes from 'prop-types';
import css from "components/ItemContactList/ItemContactList.module.css";

export const ItemContactList = ({ contacts, deleteContact }) => {
  
  const addContactItem = contacts => {
    return contacts.map(({ id, name, number }) => {
      return (
        <li className={css.contacts__item} key={id}>
          {name}:
          <span className={css.contacts__number}> {number}</span>
          <button
            type="button"
            className={css.btnDelete}
            onClick={() => deleteContact(id)}
            >
            Delete
          </button>
        </li>
      );
    });
  };

  return <>{contacts.length > 0 && addContactItem(contacts)}</>;
};

ItemContactList.propTypes = {
    contacts: PropTypes.array,
    deleteContact: PropTypes.func,
}

