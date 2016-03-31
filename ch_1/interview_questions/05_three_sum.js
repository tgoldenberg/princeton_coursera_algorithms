/* 3-SUM in quadratic time
 * Design an algorithm for the 3-SUM problem that takes time proportional to N2 in the worst case.
 * You may assume that you can sort the N integers in time proportional to N2 or better.
 * */
'use strict';

// const _ = require('underscore';

let arr = [0, -40, -20, -20, -5, -10, 30, 20, 15, 25];
// determine which three numbers add up to zero
/* SLOW WAY */ 

let threeSumSlow = (arr) => {
  let result = [];
  for (let i=0; i<arr.length; i++){
    for (let j=1; j<arr.length; j++){
      for (let k=2; k<arr.length; k++){
        if (arr[i] + arr[j] + arr[k] == 0){
          result.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }
  return result;
};

class BinarySearch{
  constructor(){}
  rank(key, arr, whitelist){
    let lo = 0, hi = arr.length-1;
    while (lo <= hi){
      let mid = Math.floor(lo + (hi - lo)/2);
      if (key < arr[mid]){
        hi = mid - 1;
      } else if (key > arr[mid]){
        lo = mid + 1;
      } else if (whitelist[0] == mid || whitelist[1] == mid){
        if (arr[mid+1] == key){
          return mid+1;
        } else if (arr[mid-1] == key){
          return mid-1;
        } else {
          return -1;
        }
      } else {
        return mid;
      } 
    }
    return -1;
  }
};

let threeSumQuadratic = (arr) => {
  let result = [];
  for (let i=0; i<arr.length; i++){
    for (let j=1; j<arr.length; j++){
      let sum = arr[i] + arr[j];
      let expected = -sum;
      let b = new BinarySearch();
      let rank = b.rank(expected, arr, [i, j]); 
      if (rank != -1){
        result.push([arr[i], arr[j], arr[rank]]);
      }
    }
  }
  return result;
}

let res = threeSumSlow(arr);
let quadratic = threeSumQuadratic(arr);
console.log('THREE SUM', res);
console.log('THREE SUM QUADRATIC', quadratic);
