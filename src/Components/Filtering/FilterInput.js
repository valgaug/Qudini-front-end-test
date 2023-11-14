import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilterQuery } from '../../Redux/reducer';

const FilterInput = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setFilterQuery(e.target.value));
  };

  return <input type='text' placeholder='Filter customers by name...' onChange={handleInputChange} />;
};

export default FilterInput;
