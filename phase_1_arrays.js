Array.prototype.uniq = function() {
  let uniqArr = [];

  for (let x = 0; x < this.length; x++) {
    if (uniqArr.indexOf(this[x]) === -1) {
      uniqArr.push(this[x]);
    }

  }
  return uniqArr;
}

console.log([1, 1, 2, 2, 3, 3, 4, 4, 5, 5].uniq());

Array.prototype.twoSum = function() {
  let pos = [];

  for (let x = 0; x < this.length - 1; x++) {
    for (let y = (x + 1); y < this.length; y++) {
      if (this[x] + this[y] === 0) {
        pos.push([x, y]);
      }


    }
  }
  return pos;
}

console.log([-1, 0, 2, -2, 1].twoSum());


Array.prototype.transpose = function() {
  let transposedArray = Array.from(
    {length: this[0].length},
    () => Array.from({length: this.length})
  );
  // let transposedArray = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (let x = 0; x < this.length; x++) {
    for (let y = 0; y < this[x].length; y++) {
      console.log("here ", x, y);
      transposedArray[y][x] = this[x][y];
    }
  }
  return transposedArray;
}


Array.prototype.transpose2 = function() {
  let transposedArray = [];
  let transposedRow = [];
  for (let x = 0; x < this.length; x ++) {
    for (let y = 0; y < this[x].length; y ++) {
      transposedRow.push(this[y][x]);
    }
    transposedArray.push(transposedRow);
    transposedRow = [];
  }
  return transposedArray;
}
console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose());
console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose2());
