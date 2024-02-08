function caesarCipher(word, shift) {
  // checks
  if (typeof word !== 'string') return null;
  if (typeof shift !== 'number') return null;
  if (word.length == 0) return '';
  if (shift == 0) return word;

  let shiftedArr = [];
  // convert to arr and iterate
  word.split('').forEach((ch) => {
    // check if ch is a letter
    // call shiftLetter and push to shiftedArr if ch is letter
    if (isLetter(ch)) shiftedArr.push(shiftLetter(ch, shift));
    else shiftedArr.push(ch);
  });
  // convert back to string
  return shiftedArr.join('');
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
