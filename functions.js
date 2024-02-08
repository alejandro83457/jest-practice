export default function capitalize(word) {
  // check if word is only alphabet chars using regexp
  if (/^[A-Za-z]+$/.test(word) == false) return null;

  if (word.length == 0) return null;
  if (word.length == 1) return word.toUpperCase();

  return word.charAt(0).toUpperCase() + word.slice(1);
}
