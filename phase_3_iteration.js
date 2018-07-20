Array.prototype.bubbleSort = function() {
  let sorted = false;
  let arr = this;
  while (sorted === false) {
    sorted = true;
    for (x = 0; x < (arr.length - 1); x++) {
      let y = x + 1;
      if (arr[x] > arr[y]) {
        let left = arr[y];
        let right = arr[x];
        arr[x] = left;
        arr[y] = right;
        sorted = false;
      }
    }
  }
  return arr
}


console.log([5, 3, 4, 2, 1].bubbleSort());

String.prototype.substrings = function() {
  let subStrings = [];
  for (x = 0; x < this.length + 1; x++) {
    for (y = x + 1; y < this.length + 1; y++) {
      subStrings.push(this.slice(x, y));
    }
  }
  return subStrings;
}

console.log("abc".substrings());

// let str = "abc";
// console.log(str.length);
// console.log(str.slice(1,2));
