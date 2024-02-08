import calculator from '../calculator';

test('addition', () => {
  expect(calculator.add(3, 4)).toBe(7);
});

test('subtraction', () => {
  expect(calculator.subtract(3, 4)).toBe(-1);
});

test('multiplication', () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});

test('division', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('divide by 0', () => {
  expect(calculator.divide(4, 0)).toBe(null);
});
