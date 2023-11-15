import React from 'react';
import { render, screen } from '@testing-library/react';
import Customer from './Customer';
import CryptoJS from 'crypto-js';
import moment from 'moment-timezone';

describe('Customer Component', () => {
  const mockEmail = 'test@example.com';
  const mockName = 'John Doe';
  const mockExpectedTime = new Date().toISOString();
  const formattedDate = moment(mockExpectedTime).tz('Europe/London').format('h:mm A DD/MM/YY');
  const gravatarHash = CryptoJS.MD5(mockEmail.trim().toLowerCase()).toString();
  const gravatarUrl = `https://www.gravatar.com/avatar/${gravatarHash}`;

  it('forms the correct Gravatar URL from the email', () => {
    expect(gravatarHash).toBe(CryptoJS.MD5(mockEmail.trim().toLowerCase()).toString());
  });

  it('renders the image with the correct Gravatar URL', () => {
    render(<Customer email={mockEmail} name={mockName} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', gravatarUrl);
  });

  it('displays the correct customer name', () => {
    render(<Customer email={mockEmail} name={mockName} />);
    expect(screen.getByText(mockName)).toBeInTheDocument();
  });

  it('displays the correct customer expected time', () => {
    render(<Customer email={mockEmail} name={mockName} expectedTime={mockExpectedTime} />);
    expect(screen.getByText(formattedDate)).toBeInTheDocument();
  });
});
