import arrayAnalysis from '../functions/arrayAnalysis';

const object = arrayAnalysis([1, 8, 3, 4, 2, 6]);
const emptyObject = arrayAnalysis([]);

test('type of the returned value of arrayAnalysis.', () => {
  expect(typeof object).toBe('object');
});

test('returned value for arrayAnalysis function', () => {
  expect(object).toStrictEqual({
    average: 4, min: 1, max: 8, length: 6,
  });
});

test('match object returned', () => {
  expect(object).toMatchObject({
    average: 4, min: 1, max: 8, length: 6,
  });
});

test('returned values for empty array', () => {
  expect(emptyObject).toMatchObject({
    average: 0, min: 0, max: 0, length: 0,
  });
});