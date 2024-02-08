import analyzeArray from '../analyzeArray';

test('simple array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    avg: 4,
    min: 1,
    max: 8,
    len: 6,
  });
});

test('empty array', () => {
  expect(analyzeArray([])).toStrictEqual({
    avg: null,
    min: null,
    max: null,
    len: 0,
  });
});

test('one element array', () => {
  expect(analyzeArray([1])).toStrictEqual({
    avg: 1,
    min: 1,
    max: 1,
    len: 1,
  });
});

test('two element array', () => {
  expect(analyzeArray([1, 2])).toStrictEqual({
    avg: 1.5,
    min: 1,
    max: 2,
    len: 2,
  });
});
