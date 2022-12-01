import React from "react";
import PropTypes from 'prop-types';
import css from "components/Filter/Filter.module.css";


export const Filter = ({ filter, onInputFilterChange }) => {
  return (
<label className={css.labelFilter}> Find contacts by name
    <input 
    className={css.inputFilter}
    type="text"
    name="filter"
    value={filter}
    onChange={onInputFilterChange} 
    />
</label>
  );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onInputFilterChange: PropTypes.func.isRequired,
}
