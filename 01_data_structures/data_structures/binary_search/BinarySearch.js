'use strict';

var fs = require('fs');
var path = require('path');

class BinarySearch{
  constructor(){}
  rank(key, a){
    let lo = 0, hi = a.length-1;
    while (lo <= hi){
      let mid = lo + Math.floor((hi - lo) / 2);
      if (key == a[mid]) {
        return mid;
      } else if (key < a[mid]) {
        hi = mid - 1;
      } else if (key > a[mid]) {
        lo = mid + 1;
      } 
    }
    return -1;
  }
};


let search = new BinarySearch();
var MergeSort = require('./MergeSort.js');
let merge = new MergeSort();
function generateArray(N){
  let arr = new Array(N).fill(0).map((v,i) => Math.floor(Math.random()*N));
  return merge.mergeSort(arr);
};

fs.writeFile('results.txt', 'BINARY SEARCH RESULTS\n', function(){});
function testSearch(N){
  let d1 = new Date().valueOf();
  let arr = generateArray(N);
  let query = Math.floor(Math.random()*N);
  let res = search.rank(arr[query], arr);
  let d2 = new Date().valueOf();
  let text = `Query for ${arr[query]} returned ${res} for array size ${arr.length} in ${d2 - d1} milliseconds\n`;
  fs.appendFile('results.txt', text, function(){});
  console.log(text);
};

let size = 10;
while (size < 10000001){
  testSearch(size);
  size *= 10;
}
