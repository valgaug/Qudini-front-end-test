import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilterQuery } from '../../Redux/reducer';
import styled from 'styled-components';

const StyledInput = styled.div`
  margin-bottom: 0.4em;
  padding-left: 0.4em;
`;

const FilterInput = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setFilterQuery(e.target.value));
  };

  return (
    <StyledInput>
      <input type='text' placeholder='Search' onChange={handleInputChange} />
    </StyledInput>
  );
};

export default FilterInput;
