import React from 'react';
import { render, screen } from '@testing-library/react';
import { Child } from './props/Child';

test('renders Name and Age elements', () => {
  render(<Child color="red" onClick={() => {}}/>);
  
  const nameElement = screen.getByText(/red/i);
  expect(nameElement).toBeInTheDocument();
});
