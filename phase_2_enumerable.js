const NUMS = [1, 2, 3, 4, 5];



Array.prototype.myEach = function (f) {
  for (i = 0; i < this.length; i ++) {
    f(this[i]);
  }
};

NUMS.myEach((num) => {
  console.log(`square of ${num} is ${num * num}`);
});

Array.prototype.myMap = function(f) {
  let arr = []
  this.myEach(el => arr.push(f(el)));
  return arr
};

console.log(NUMS.myMap( num => num * num ));

Array.prototype.myReduce = function(f, initValue) {
  // var idx = 0;
  // if (!initValue) {
  //   initValue = this[0];
  //   idx ++;
  // }
  //
  // for (x = idx; x < this.length; x++ ) {
  //   initValue +=
  // }
  let array = this;
  if (!initValue) {
    initValue = array[0];
    array = array.slice(1);
  }

  array.myEach(el => initValue = f(initValue, el));

  return initValue;
}

console.log(NUMS.myReduce( (total, item) => total + item ));
