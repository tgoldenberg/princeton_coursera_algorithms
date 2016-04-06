'use strict';

var fs = require('fs');

class Quick3Way{
  constructor(arr) { 
    this.arr = this.shuffle(arr);
    // console.log('SHUFFLED ARRAY', this.arr);
  }
  shuffle(arr){
    let idx, temp;
    for (let i=0; i<arr.length; i++){
      idx = Math.floor(Math.random()*arr.length);
      temp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = temp;
    }
    return arr;
  }
  exch(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  sort(){
    this.quicksort(this.arr, 0, this.arr.length-1);
    return this.arr; 
  }
  quicksort(arr, lo, hi){
    if (hi <= lo) { return; }
    let lt = lo, i = lo+1, gt = hi, v = arr[lo];
    while (i <= gt) {
      if (arr[i] < v)      { this.exch(arr, lt++, i++); }
      else if (arr[i] > v) { this.exch(arr, i, gt--); }
      else                 { i++; }
    }
    this.quicksort(arr, lo, lt-1);
    this.quicksort(arr, gt+1, hi);
  }
};

function isSorted(arr){
  for(let i=1; i<arr.length; i++){
    if (arr[i] < arr[i-1]) { return false; }
  }
  return true;
};

function runSort(N){
  let arr = new Array(N).fill(0).map(() => Math.floor(Math.random()*N));
  // console.log('ORIGINAL ARRAY', arr);
  let d1 = new Date().valueOf();
  let quick = new Quick3Way(arr);
  let sorted = quick.sort();
  let result = isSorted(sorted);
  // console.log('SORTED ARRAY', sorted, result);
  let d2 = new Date().valueOf();
  let msg = `Sort return ${result} for size ${N} in ${d2 - d1} milliseconds\n`;
  console.log(msg);
};

let size = 10; 
while (size < 10000000000){
  runSort(size);
  size *= 10;
}
