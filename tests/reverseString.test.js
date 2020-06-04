import reverseString from '../functions/reverseString';

test('Returns a reversed string', () => {
  expect(reverseString('hello')).toBe('olleh');
});