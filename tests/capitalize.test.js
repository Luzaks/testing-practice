import capitalize from '../functions/capitalize';

test('Capitalize a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});