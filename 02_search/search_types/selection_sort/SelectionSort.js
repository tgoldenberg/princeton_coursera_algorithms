'use strict';

var fs = require('fs');

class SelectionSort{
  constructor() { }
  exch(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  sort(arr){
    for(let i=0; i<arr.length; i++){
      let smallest = arr[i];
      let smallestIdx = i;
      for (let j=i+1; j<arr.length; j++){
        if (arr[j] < smallest){
          smallest = arr[j];
          smallestIdx = j;
        }
      }
      this.exch(arr, i , smallestIdx);
    }
    return arr;
  }
};

let selection = new SelectionSort();

function runSort(N){
  let arr = new Array(N).fill(0).map(() => Math.floor(Math.random()*N));
  return selection.sort(arr);
};

function isSorted(arr){
  for (let i=1; i<arr.length; i++){
    if (arr[i] < arr[i-1]) { return false; } 
  }
  return true;
};

let size = 10;
let filename = process.argv[2];
fs.writeFile(filename, 'RESULTS OF SELECTION SORT');
while (size < 1000000){
  let d1 = new Date().valueOf();
  let sorted = runSort(size);
  let d2 = new Date().valueOf();
  let sortFinished = isSorted(sorted);
  let msg = `Sort of ${size} elements returned ${sortFinished} in ${d2 - d1} milliseconds\n`;
  console.log(msg); 
  fs.appendFile(filename, msg);
  size *= 10;
}

