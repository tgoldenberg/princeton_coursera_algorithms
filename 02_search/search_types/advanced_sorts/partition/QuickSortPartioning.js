'use strict';

function Partition(arr, lo, hi){
  let temp;
  let i = lo, j = hi+1, v = arr[lo];
  while (true) 
  { // Scan right, scan left, check for complete scan
    while (arr[++i] < v) {
      if ( i == hi ) { break; }
    }
    while (v < arr[--j]) {
      if ( j == lo ) { break; }
    }
    if ( i >= j ) { break; }
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  temp = arr[lo];
  arr[lo] = arr[j];
  arr[j] = temp;
  return j;
};

module.exports = Partition;
