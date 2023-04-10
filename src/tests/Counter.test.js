import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';
beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText(/Counter/i)).toBeInTheDocument(); //counter message "counter"
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByTestId('count')).toHaveTextContent(/0/i); //count value of 0
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click( screen.getByText("+")); //plus-button
  expect(screen.getByText(/1/i)).toBeInTheDocument(); //value of counter
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText("-")); //sub-button
  expect(screen.getByText(/-1/i)).toBeInTheDocument(); //value of counter
});