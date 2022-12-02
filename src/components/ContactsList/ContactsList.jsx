import React from "react";
import css from "components/ContactsList/ContactsList.module.css";
import { ItemContactList } from "components/ItemContactList/ItemContactList";

export const ContactsList = () => {

  return (
    <ul className={css.contacts__list}>
      <ItemContactList />
    </ul>
  );
};
