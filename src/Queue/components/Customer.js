import React from 'react';
import CustomerCard from './CustomerCard';
import ProfilePicture from './ProfilePicture';
import Name from './Name';
import Content from './Content';
import ExpectedTime from './ExpectedTime';

const Customer = ({ email, name, expectedTime }) => {
  return (
    <CustomerCard>
      <ProfilePicture email={email} />
      <Content>
        <Name name={name} />
        <ExpectedTime expectedTime={expectedTime} />
      </Content>
    </CustomerCard>
  );
};

export default Customer;
