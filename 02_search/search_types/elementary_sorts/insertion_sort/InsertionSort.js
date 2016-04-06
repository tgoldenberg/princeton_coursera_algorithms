'use strict';

var fs = require('fs');

class Insertion{
  constructor() { }
  less(i, j){
    return i < j;
  }
  exch(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  sort(arr){
    for (let i=1; i<arr.length; i++)
    { // insert a[i] among all a[i-1]...
      for (let j=i; j>0 && this.less(arr[j], arr[j-1]); j--)
      { this.exch(arr, j, j-1); }
    }
    return arr;
  }
};

let insertion = new Insertion();

function isSorted(arr){
  for (let i=1; i<arr.length; i++){
    if (arr[i] < arr[i-1]) { return false; }
  }
  return true;
};

let filename = process.argv[2];
console.log('FILENAME', filename);

function runSort(N){
  let d1 = new Date().valueOf();
  let arr = new Array(N).fill(0).map(() => Math.floor(Math.random()*N));
  let sorted = insertion.sort(arr);
  let d2 = new Date().valueOf();
  let result = isSorted(sorted);
  let msg = `For ${N} elements returned ${result} in ${d2 - d1} milliseconds\n`;
  fs.appendFile(filename, msg);
  console.log(msg);
};

/*
fs.writeFile(filename, 'RESULTS FOR INSERTION SORT');
let size = 10;
while (size < 1000000){
  runSort(size);
  size *= 10;
}
*/
module.exports = Insertion;
