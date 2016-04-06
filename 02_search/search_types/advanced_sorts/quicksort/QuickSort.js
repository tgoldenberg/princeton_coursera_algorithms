'use strict';

var fs = require('fs');

class Quick{
  constructor(arr) {
    console.log('ORIGINAL ARRAY', arr);
    this.arr = this.shuffle(arr);
    console.log('SHUFFLED ARRAY', this.arr);
  }
  shuffle(arr){
    let temp, idx;
    for (let i=0; i<arr.length; i++){
      temp = arr[i];
      idx = Math.floor(Math.random()*arr.length);
      arr[i] = arr[idx];
      arr[idx] = temp;
    }
    return arr;
  }
  sort(){
    this.quicksort(this.arr, 0, this.arr.length-1);
    return this.arr;
  }
  quicksort(arr, lo, hi){
    console.log('LO HI', lo, hi);
    if (hi <= lo) { return; }
    let j = this.partition(arr, lo, hi);
    console.log('J', j);
    this.quicksort(arr, lo, j-1);
    this.quicksort(arr, j+1, hi);
  }
  less(a, b) {
    return a < b;
  }
  exch(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  partition(arr, lo, hi){
    let i = lo, j = hi+1, v = arr[lo];
    while (true) { // scan right, scan left, check for scan complete
      while (this.less(arr[++i], v)) {
        if (i == hi) { break; }
      } 
      while (this.less(v, arr[--j])) {
        if (j == lo) { break; }
      }
      if (i >= j) { break; }
      this.exch(arr, i, j);
    }
    console.log('PARTITION', arr);
    this.exch(arr, lo, j);
    console.log('PARTITION 2', arr);
    return j; // with a[lo..j-1] <= a[j] <= a[j+1..hi]
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
  let quick = new Quick(arr);
  let d1 = new Date().valueOf();
  let sorted = quick.sort();
  let result = isSorted(sorted);
  console.log('SORTED ARRAY', sorted, result);
  let d2 = new Date().valueOf();
  let msg = `Sort returned ${result} for size ${N} in ${d2 - d1} milliseconds\n`;
  console.log(msg);
};

let size = 10;

while (size < 11){
  runSort(size);
  size *= 10;
}
