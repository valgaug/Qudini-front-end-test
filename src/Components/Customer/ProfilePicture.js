import React from 'react';
import styled from 'styled-components';
import CryptoJS from 'crypto-js';

const StyledImage = styled.img`
  height: 290px;
  width: 290px;
  background-color: grey;
  border-top-left-radius: 0.2em;
  border-top-right-radius: 0.2em;
  object-fit: cover;
`;

const ProfilePicture = ({ email }) => {
  const gravatarHash = email ? CryptoJS.MD5(email.trim().toLowerCase()).toString() : '';
  const gravatarUrl = `https://www.gravatar.com/avatar/${gravatarHash}`;

  return (
    <StyledImage
      src={gravatarUrl || '/default-profile.png'}
      alt="Customer's Profile"
      onError={(e) => {
        e.target.src = '/default-profile.png';
      }}
    />
  );
};

export default ProfilePicture;
