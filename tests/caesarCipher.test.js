import caesar from '../functions/caesarCipher';

test('single input convertion', () => {
  expect(caesar('hello', 2)).toBe('jgnnq');
});

test('multiple words convertion', () => {
  expect(caesar('hello world', 2)).toBe('jgnnq yqtnf');
});

test('including punctuation conversion', () => {
  expect(caesar('hello, world', 2)).toBe('jgnnq, yqtnf');
});