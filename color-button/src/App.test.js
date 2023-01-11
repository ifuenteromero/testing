import { render, screen } from '@testing-library/react';
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

});
