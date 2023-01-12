import { screen, render, fireEvent } from '@testing-library/react';
import App from './App';

test('Button is enabled and checkbox is unchecked on initial conditions', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Button'});
  expect(button).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Button is disabled after checkbox is checked',() => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Button'});
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  expect(checkbox).toBeChecked();
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  expect(checkbox).not.toBeChecked();
});