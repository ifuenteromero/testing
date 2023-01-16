import { screen, render, fireEvent } from '@testing-library/react';
import App from './App';

test('Button is enabled and checkbox is unchecked on initial conditions', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue'});
  expect(button).toHaveStyle({ backgroundColor: 'red' });
  expect(button).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Button is disabled after checkbox is checked',() => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue'});
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  expect(checkbox).toBeChecked();
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  expect(checkbox).not.toBeChecked();
});

test('code quiz 2', () => {
  render(<App />);
  // disable button → button is gray → enable button → button is red
  const button = screen.getByRole('button', { name: 'Change to blue'});
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'grey' });
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'red' });

  // click button to change color - disable button - button is grey - enable button - button is blue
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: 'blue' });
});