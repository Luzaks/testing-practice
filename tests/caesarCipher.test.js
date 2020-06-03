import caesar from '../functions/caesarCipher';

test('single input convertion', () => {
  expect(caesar('hello')).toBe('khoor');
});

test('multiple words convertion', () => {
  expect(caesar('hello world')).toBe('khoor zruog');
});

test('including punctuation conversion', () => {
  expect(caesar('hello, world')).toBe('khoor, zruog');
});