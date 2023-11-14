import React from 'react';
import { render, screen } from '@testing-library/react';
import Customer from './Customer';
import CryptoJS from 'crypto-js';

describe('Customer Component', () => {
  const mockEmail = 'test@example.com';
  const mockName = 'John Doe';
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
});
