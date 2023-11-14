import React from 'react';
import styled from 'styled-components';
import moment from 'moment-timezone';

const StyledTime = styled.h1`
  font-size: 16px;
  color: darkslategrey;
`;

const ProfileTimeExpected = ({ expectedTime }) => {
  const formattedDate = moment(expectedTime).tz('Europe/London').format('MMMM DD, YYYY, h:mm A');
  return <StyledTime>{formattedDate}</StyledTime>;
};

export default ProfileTimeExpected;
