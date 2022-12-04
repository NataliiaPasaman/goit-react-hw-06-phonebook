import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from "redux/selector";
import { getFilter } from "redux/selector";
import { getFilterContacts } from 'helpers/filteredContacts';
import { deleteContact } from "redux/contactsSlice";
import css from "components/ItemContactList/ItemContactList.module.css";

export const ItemContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = getFilterContacts(contacts, filter);
  const addContactItem = filteredContacts.map(({ id, name, number }) => {
    return (
      <li className={css.contacts__item} key={id}>
        <div className={css.contacts__box}>
          <h3 className={css.contacts__title}>{name}: </h3>
          <span className={css.contacts__number}> {number}</span>
        </div>

        <button
          type="button"
          className={css.btnDelete}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </li>
    );
  });

return (contacts.length > 0 && addContactItem);
};


