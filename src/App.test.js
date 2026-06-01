import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders Kaiser Member Service dashboard header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Kaiser Member Service/i);
  expect(headerElement).toBeInTheDocument();
});
