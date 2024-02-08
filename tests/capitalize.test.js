import capitalize from '../capitalize';

test('Simple capitalization', () => {
  expect(capitalize('alex')).toBe('Alex');
});

test('Single letter capitalization', () => {
  expect(capitalize('a')).toBe('A');
});

test('Empty string', () => {
  expect(capitalize('')).toBe(null);
});

test('Invalid string test 1', () => {
  expect(capitalize('alex$')).toBe(null);
});

test('Invalid string test 2', () => {
  expect(capitalize('al3x')).toBe(null);
});
