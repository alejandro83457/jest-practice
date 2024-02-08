export default function reverseString(word) {
  if (typeof word !== 'string') return null;
  if (word.length == 0) return word;
  // convert to arr
  // reverse using reduce
  // convert to str using join
  return word
    .split('')
    .reduce((prev, curr) => {
      prev.unshift(curr);
      return prev;
    }, [])
    .join('');
}
