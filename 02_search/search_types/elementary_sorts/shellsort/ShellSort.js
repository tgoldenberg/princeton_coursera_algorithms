'use strict';

var fs = require('fs');

class Shell{
  constructor() { }
  exch(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  isSorted(arr){
    for (let i=1; i<arr.length; i++){
      if (arr[i] < arr[i-1]) { return false; }
    }
    return true;
  }
  less(i, j){
    return i < j;
  }
  sort(arr) { 
    let h = 1;
    let N = arr.length;
    while (h < Math.floor(N/3)) {
      h = (3*h) + 1;
    }
    while (h >= 1){ // h-sort the array
      for (let i=h; i<N; i++)
      { // Insert a[i] among a[i-h], a[i-2*h]...
        for (let j=i; j>=h && this.less(arr[j], arr[j-h]); j-=h)
        { this.exch(arr, j, j-h); }
      }
      h = Math.floor(h/3);
    }
    return arr;
  }
};

let shell = new Shell();
let filename = process.argv[2];

function runSort(N){
  let arr = new Array(N).fill(0).map(() => Math.floor(Math.random()*N));
  let d1 = new Date().valueOf();
  let sorted = shell.sort(arr);
  let d2 = new Date().valueOf();
  let result = shell.isSorted(sorted);
  let msg = `${N} elements returned ${result} in ${d2 - d1} milliseconds\n`;
  fs.appendFile(filename, msg);
  console.log(msg);
};

/*
let size = 10;
fs.writeFile(filename, 'RESULTS FOR SHELLSORT\n');
while (size < 10000000){
  runSort(size);
  size *= 10;
}
*/
module.exports = Shell;
