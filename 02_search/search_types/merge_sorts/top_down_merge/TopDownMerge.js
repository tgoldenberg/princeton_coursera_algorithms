'use strict';

var fs = require('fs');

class MergeBU{
  constructor() { }
  sort(arr) {
    let res = this.mergeBuSort(arr, 0, arr.length-1);
    return res;
  }
  mergeBuSort(arr, lo, hi){
    if ( hi <= lo ) { return; }
    let mid = lo + Math.floor((hi - lo)/2);
    this.mergeBuSort(arr, lo, mid);
    this.mergeBuSort(arr, mid+1, hi);
    this.merge(arr, lo, mid, hi);
    return arr;
  }
  exch(arr, i, j) { 
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  less(i, j) {
    return i < j;
  }
  merge(arr, lo, mid, hi) {
    let aux = new Array(hi - lo + 1);
    let auxID = 0;
    let i = lo, j = mid + 1;
    while (i <= mid && j <= hi) {
      if (arr[i] < arr[j]) {
        aux[auxID++] = arr[i++];
      } else {
        aux[auxID++] = arr[j++];
      }
    }
    if (i == mid + 1){
      while (j <= hi) { aux[auxID++] = arr[j++]; }
    } else {
      while (i <= mid) {aux[auxID++] = arr[i++]; }
    }
    for (let d=0; d<aux.length; d++){
      arr[lo + d] = aux[d];
    }
  }
};

let sort = new MergeBU(); 

function isSorted(arr) { 
  for (let i=1; i<arr.length; i++){
    if (arr[i] < arr[i-1]) { return false; }
  }
  return true;
};

function runSort(N){
  let arr = new Array(N).fill(0).map(() => Math.floor(Math.random()*N));
  let d1 = new Date().valueOf();
  let sorted = sort.sort(arr);
  let result = isSorted(sorted);
  let d2 = new Date().valueOf();
  let msg = `MergeBU resulted in ${result} for size ${N} in ${d2 - d1} milliseconds\n`;
  console.log(msg);
}

let size = 10;
while (size < 1000000000){
  runSort(size);
  size *= 10;
}
