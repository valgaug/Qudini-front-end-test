import React from 'react';
import CryptoJS from 'crypto-js';
import CustomerCard from './CustomerCard';
import ProfilePicture from './ProfilePicture';
import Name from './Name';
import Content from './Content';

const Customer = ({ email, name }) => {
  console.log(email);

  const gravatarHash = CryptoJS.MD5(email?.trim().toLowerCase()).toString();
  const gravatarUrl = `https://www.gravatar.com/avatar/${gravatarHash}`;

  return (
    <CustomerCard>
      <ProfilePicture
        src={gravatarUrl}
        alt="Customer's Profile"
        onError={(e) => {
          e.target.src = '/default-profile.png';
        }}
      />
      <Content>
        <Name>{name}</Name>
      </Content>
    </CustomerCard>
  );
};

export default Customer;
