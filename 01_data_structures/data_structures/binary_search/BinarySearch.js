'use strict';

class BinarySearch{
  constructor(){}
  rank(key, a){
    let lo = 0, hi = a.length-1;
    while (lo <= hi){
      let mid = Math.floor(lo + (hi - lo) / 2);
      if (key < a[mid]) {
        hi = mid - 1;
      } else if (key > a[mid]) {
        lo = mid + 1;
      } else {
        return mid;
      }
    }
    return -1;
  }
};


let search = new BinarySearch();

function generateArray(N){
  return new Array(N).fill(0).map((v,i) => Math.floor(Math.random()*N)).sort();
};

function testSearch(N){
  let d1 = new Date().valueOf();
  let arr = generateArray(N);
  console.log('ARR', arr);
  let query = Math.floor(Math.random()*N);
  let res = search.rank(query, arr);
  let d2 = new Date().valueOf();
  console.log(`Query for ${query} returned ${res} for array size ${arr.length} in ${d2 - d1} milliseconds`);
  console.log(`Expected answer: ${query}, Actual: ${arr[res]}`);
  d2 = null, d1 = null, query = null, res = null, arr = null;
};

let size = 10;
while (size < 11){
  testSearch(size);
  size *= 10;
}
