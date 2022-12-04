import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "redux/selector";
import { setFilter } from "redux/filterSlice";
import css from "components/Filter/Filter.module.css";


export const Filter = () => {
  const filter = useSelector(getFilter);

  console.log('State', useSelector(state => state));
  console.log('filter', filter);

  const dispatch = useDispatch();

  const onInputFilterChange = (e) => {
    console.log(e.target.value);
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