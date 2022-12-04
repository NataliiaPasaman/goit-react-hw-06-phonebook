import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "redux/filterSlice";
import css from "components/Filter/Filter.module.css";


export const Filter = () => {
  const dispatch = useDispatch();

  const onInputFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
<label className={css.labelFilter}> Find contacts by name
    <input 
    className={css.inputFilter}
    type="text"
    name="filter"
    onChange={onInputFilterChange} 
    />
</label>
  );
};