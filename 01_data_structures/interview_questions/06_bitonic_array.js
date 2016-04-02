/* Search in a bitonic array
 * An array is bitonic if it is comprised of an increasing sequence of integers followed immediately
 * by a decreasing sequence of integers.
 * Write a program that, given a bitonic array of N distinct integer values, 
 * determines whether a given integer is in the array. 
 * 
 * * Standard version - Use ~ 3lgN compares in the worst case 
 * * Signing bonus - USe ~2lgN compares in the worst case ( and prove that no algorithm
 * can guarantee to perform fewer than ~2lgN compares in the worst case)
 */

'use strict';

class BinarySearch{
  constructor(){ }
  rank(key, arr){
    // console.log('RANK', key, arr);
    let lo = 0, hi = arr.length-1;
    while (lo <= hi){
      let mid = Math.floor(lo + (hi - lo)/2);
      // console.log('NEW MID', lo, hi, mid);
      if (key > arr[mid]){
        lo = mid + 1;
      } else if (key < arr[mid]){
        hi = mid - 1;
      } else {
        return mid;
      }
    }
    return -1;
  }
};

class AlternateBinarySearch{
  constructor(){ }
  findMax(arr){
    // example array = [10, 40, 80, 70]; hi=3, lo=0, mid=0 + (3-0)/2 = 1, mid-1 = 0;
    // 1st step => lo = 3
    console.log('FIND MAX', arr);
    let lo = 0, hi = arr.length-1;
    let mid = Math.floor(lo + (hi - lo)/2); // 1
    console.log('INITIAL MID', mid);
    while (lo <= hi){
      mid = Math.floor(lo + (hi - lo)/2);
      console.log('MID', mid);
      if (arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]){
       return mid;
      } else if (arr[mid] > arr[mid-1] && arr[mid] < arr[mid+1]){ // number is in first half - make mid new low
        lo = mid;
      } else if (arr[mid] < arr[mid-1] && arr[mid] > arr[mid+1]){ // number is in second half - make mid new high
        hi = mid;
      } 
    }
  }
};

let arr = [0, 2, 5, 7, 100, 80, 50, 20, 4, 1];

class Bitonic{
  constructor(arr){
    this.a = arr;
    /*
    for(let i=1; i<arr.length; i++){ // N-1 worst case complexity
      if (arr[i] < arr[i-1]){
        this.mid = i - 1;
        break;
      }
    }
   */
  let ab = new AlternateBinarySearch();
  this.mid = ab.findMax(arr);
  }
  contains(value){
    let b = new BinarySearch();
    // both combined make log N worst case complexity
    let search1 = b.rank(value, this.a.slice(0, this.mid)); 
    let search2 = b.rank(value, this.a.slice(this.mid).reverse());
    if (search1 == -1 && search2 == -1){
      return false;
    } else {
      return true;
    }
  }
};

let bitonic = new Bitonic(arr);
console.log('INITIAL BITONIC', bitonic);
console.log('HAS 1?', bitonic.contains(1));
console.log('HAS 10?', bitonic.contains(10));
console.log('HAS 7?', bitonic.contains(7));
let abs = new AlternateBinarySearch();
console.log(abs.findMax([1, 35, 80, 70]));
