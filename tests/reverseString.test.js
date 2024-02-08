import reverseString from '../reverseString';

test('Simple string reverse', () => {
  expect(reverseString('some string')).toBe('gnirts emos');
});

test('Empty string', () => {
  expect(reverseString('')).toBe('');
});

test('Invalid input 1', () => {
  expect(reverseString(54)).toBe(null);
});

test('Invalid input 2', () => {
  expect(reverseString(null)).toBe(null);
});

test('Invalid input 3', () => {
  expect(reverseString([])).toBe(null);
});

test('Invalid input 4', () => {
  expect(reverseString({})).toBe(null);
});
