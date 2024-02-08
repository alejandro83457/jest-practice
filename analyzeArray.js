export default function analyzeArray(arr) {
  if (arr.length == 0) return { avg: null, min: null, max: null, len: 0 };
  let len = arr.length;
  let min = Infinity;
  let max = -Infinity;
  let total = 0;
  let avg;
  arr.forEach((el) => {
    if (el < min) min = el;
    if (el > max) max = el;
    total += el;
  });
  avg = total / len;
  return { avg, min, max, len };
}
