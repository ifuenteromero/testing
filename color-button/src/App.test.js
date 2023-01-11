import { render, screen, fireEvent } from '@testing-library/react';
// import { logRoles } from '@testing-library/dom';
import App from './App';

test('button has correct initial color', () => {
//  const { container } = render(<App />);
//  logRoles(container);
  render(<App />);
  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red'});
});

// Este test no hace falta porque ya se testea en el primero
// test('button has correct initial text', () => {

// });

test('button turns blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  fireEvent.click(colorButton);

  // expect the backgroundColor to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue'});

  // expect the buton text to be 'Change to red'
  expect(colorButton).toHaveTextContent('Change to red');

});

test('button has correct initial color, and updates when click', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  expect(colorButton).toHaveTextContent('Change to red');
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
  expect(colorButton).toHaveTextContent('Change to blue');
});

test('initial conditions', () => {
  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});
