'use strict';

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

module.exports = MergeSort;
