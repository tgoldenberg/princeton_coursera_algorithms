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
console.log(search.rank(1, [2, 3, 4]));
console.log(search.rank(5, [2, 3, 4, 5]));
console.log(search.rank(1, [1, 2, 3]));
