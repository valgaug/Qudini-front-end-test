import React from 'react';
import styled from 'styled-components';

const StyledName = styled.div`
  font-size: 16px;
  color: darkslategrey;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.6em;
`;

const StyleLabel = styled.div`
  font-size: 14px;
`;

const StyleNameValue = styled.div`
  font-size: 16px;
`;

const ProfileName = ({ name }) => {
  return (
    <StyledName>
      <StyleLabel>Name</StyleLabel>
      <StyleNameValue>{name}</StyleNameValue>
    </StyledName>
  );
};

export default ProfileName;
