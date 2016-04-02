'use strict';

var fs              = require('fs');
var path            = require('path');
var ArrayGenerator  = require('./ArrayGenerator.js');

console.log('ARRAY GENERATOR', ArrayGenerator(10, 100));
class MergeSort{
  constructor(){ }
  mergeSort(arr){
    this.a = arr;
    let lo = 0, hi = this.a.length-1;
    this._sort(this.a, lo, hi);
    return this.a;
  }
  _sort(arr, lo, hi){
    if (lo >= hi){ return; }
    let mid = Math.floor(lo + (hi - lo)/2);
    this._sort(arr, lo, mid);
    this._sort(arr, mid+1, hi);
    this._merge(arr, lo, mid, hi);
  }
  _merge(arr, lo, mid, hi){
    /* first duplicate array */
    let dup = new Array(hi - lo + 1);
    let dupIdx = 0;
    let loIdx = lo;
    let hiIdx = mid + 1;
    while (loIdx <= mid && hiIdx <= hi){
      if (arr[loIdx] < arr[hiIdx]){
        dup[dupIdx] = arr[loIdx];
        loIdx++;
        dupIdx++;
      } else {
        dup[dupIdx] = arr[hiIdx];
        hiIdx++;
        dupIdx++;
      }
    }
    if (loIdx == mid + 1){
      while (hiIdx <= hi){
        dup[dupIdx] = arr[hiIdx];
        dupIdx++;
        hiIdx++;
      }
    } else {
      while (loIdx <= mid){
        dup[dupIdx] = arr[loIdx];
        dupIdx++;
        loIdx++;
      }
    }
    dupIdx = 0;
    while (dupIdx < dup.length){
      arr[lo + dupIdx] = dup[dupIdx];
      dupIdx++;
    }
  }
};

let mergeSort = new MergeSort();
let size = 100;
while (size < 100000000){ // JS fails at 10mil
  let arr = ArrayGenerator(size, 1000);
  let start = new Date();
  let sorted = mergeSort.mergeSort(arr);
  let end = new Date();
  let speed = end.valueOf() - start.valueOf();
  console.log(`With size ${size}, the algorithm finished in ${speed} milliseconds`);
  console.log('SORTED ARRAY', sorted.slice(0, 5));
  size *= 10;
}

/* PERFORMANCE 
 * size         || milliseconds
 * 100          || 0
 * 1000         || 1
 * 10000        || 3
 * 100000       || 22
 * 1,000,000    || 204
 * 10,000,000   || 3204
 * 100,000,000  || memory error
 */


