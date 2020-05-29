import calculator from '../functions/calculator';

test('Add two numbers', () => {
  expect(calculator().add(1, 2)).toBe(3);
});
test('Subtract two numbers', () => {
  expect(calculator().subtract(1, 2)).toBe(-1);
});
test('Divide two numbers', () => {
  expect(calculator().divide(1, 2)).toBe(0.5);
});
test('Multiply two numbers', () => {
  expect(calculator().multiply(1, 2)).toBe(2);
});