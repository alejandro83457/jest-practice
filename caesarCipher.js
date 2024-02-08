function caesarCipher(word, shift) {
  // checks
  if (typeof word !== 'string') return null;
  if (typeof shift !== 'number') return null;
  if (word.length == 0) return '';
  if (shift == 0) return word;

  // convert to arr
  // use reduce to create new arr
  // convert to str and return
  return word
    .split('')
    .reduce((acc, curr) => {
      if (isLetter(curr)) acc.push(shiftLetter(curr, shift));
      else acc.push(curr);
      return acc;
    }, [])
    .join('');
}

// checks if a character is a letter if regexp
function isLetter(ch) {
  return /^[A-Za-z]+$/.test(ch);
}

// returns a shifted letter
function shiftLetter(ch, shift) {
  let code = ch.codePointAt();
  shift = shift % 26; // anchors to only vals <= 26
  let shiftedCode = code + shift;

  // for lowercase letters
  if (code >= 97 && code <= 122) {
    if (shiftedCode > 122) shiftedCode = shiftedCode - 122 + 96;
    if (shiftedCode < 97) shiftedCode = shiftedCode - 97 + 123;
  }

  // for uppercase letters
  if (code >= 65 && code <= 90) {
    if (shiftedCode > 90) shiftedCode = shiftedCode - 90 + 64;
    if (shiftedCode < 65) shiftedCode = shiftedCode - 65 + 91;
  }

  return String.fromCodePoint(shiftedCode);
}

export default caesarCipher;
