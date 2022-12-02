import React from "react";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts } from "redux/selector";
import css from "components/ItemContactList/ItemContactList.module.css";

export const ItemContactList = () => {
  const contacts = useSelector(getContacts);

  const addContactItem = contacts.map(({ id, name, number }) => {
    return (
      <li className={css.contacts__item} key={id}>
        {name}:
        <span className={css.contacts__number}> {number}</span>
        <button
          type="button"
          className={css.btnDelete}
          // onClick={() => deleteContact(id)}
          >
          Delete
        </button>
      </li>
    );
  });

return (contacts.length > 0 && addContactItem);
};

// ItemContactList.propTypes = {
//     contacts: PropTypes.array,
//     deleteContact: PropTypes.func,
// }

