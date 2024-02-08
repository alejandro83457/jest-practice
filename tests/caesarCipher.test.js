import caesarCipher from '../caesarCipher';

test('simple cipher with overflow', () => {
  expect(caesarCipher('some text!', 3)).toBe('vrph whaw!');
});

test('overflow cipher', () => {
  expect(caesarCipher('some text!', 28)).toBe('uqog vgzv!');
});

test('underflow cipher', () => {
  expect(caesarCipher('some text!', -28)).toBe('qmkc rcvr!');
});

test('overflow uppercase cipher', () => {
  expect(caesarCipher('Some Text!', 27)).toBe('Tpnf Ufyu!');
});

test('large overflow cipher', () => {
  expect(caesarCipher('a', 100)).toBe('w');
});

test('no shift', () => {
  expect(caesarCipher('alex', 0)).toBe('alex');
});

test('negative shift', () => {
  expect(caesarCipher('test', -1)).toBe('sdrs');
});

test('empty string', () => {
  expect(caesarCipher('', 3)).toBe('');
});

test('invalid first input', () => {
  expect(caesarCipher(45, 2)).toBe(null);
});

test('invalid second input', () => {
  expect(caesarCipher('alex', '2')).toBe(null);
});

test('lowercase overflow', () => {
  expect(caesarCipher('z', 1)).toBe('a');
});

test('lowercase underflow', () => {
  expect(caesarCipher('a', -1)).toBe('z');
});

test('uppercase overflow', () => {
  expect(caesarCipher('Z', 1)).toBe('A');
});

test('uppercase underflow', () => {
  expect(caesarCipher('A', -1)).toBe('Z');
});
