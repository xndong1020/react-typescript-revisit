import React from 'react';
import { screen, render } from '@testing-library/react';
import Parent from './props/Parent';

test('renders Name and Age elements', () => {
  render(<Parent />);
  
  const nameElement = screen.getByText(/Hi there/i);
  expect(nameElement).toBeInTheDocument();
});
