import { screen, render, fireEvent } from '@testing-library/react';
import App, { changedColor, disabledColor, initialColor } from './App';
import { replaceCamelWithSpaces } from './App';
const changedColorText = replaceCamelWithSpaces(changedColor);

test('Button is enabled and checkbox is unchecked on initial conditions', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: `Change to ${changedColorText}`});
  expect(button).toHaveStyle({ backgroundColor: initialColor });
  expect(button).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Button is disabled after checkbox is checked',() => {
  render(<App />);
  const button = screen.getByRole('button', { name: `Change to ${changedColorText}`});
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
  const button = screen.getByRole('button', { name: `Change to ${changedColorText}`});
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: disabledColor });
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: initialColor });

  // click button to change color - disable button - button is grey - enable button - button is blue
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: changedColor });
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
   
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });

});