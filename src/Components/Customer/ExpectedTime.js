import React from 'react';
import styled from 'styled-components';
import moment from 'moment-timezone';

const StyledTime = styled.div`
  font-size: 16px;
  color: darkslategrey;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const StyleLabel = styled.div`
  font-size: 14px;
`;

const StyleTimeValue = styled.div`
  font-size: 16px;
`;

const ProfileTimeExpected = ({ expectedTime }) => {
  const formattedDate = moment(expectedTime).tz('Europe/London').format('h:mm A DD/MM/YY');
  return (
    <StyledTime>
      <StyleLabel>Expected time</StyleLabel>
      <StyleTimeValue>{formattedDate}</StyleTimeValue>
    </StyledTime>
  );
};

export default ProfileTimeExpected;
