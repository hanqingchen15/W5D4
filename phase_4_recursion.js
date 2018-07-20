function range(start, end) {
  if (start === end) {
    return [];
  }

  let recurRange = range(start, end - 1);
  recurRange.push(end-1);
  return recurRange;
}

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  let firstNum = arr[0];
  return firstNum + sumRec(arr.slice(1, arr.length) );
}

console.log(`sumRec([1, 3, 5]) = ${sumRec([1, 3, 5])}`);
