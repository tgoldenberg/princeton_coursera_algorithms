/* Egg drop.
 * Suppose that you have an N-story building (with floors 1 through N)
 * and plenty of eggs. An egg breaks if it is dropped from floor T of higher
 * and does not break otherwise. Your goal is to devise a strategy to determine
 * the value of T given the following limitations on the number of eggs and tosses:
 * - Version 0: 1 egg <= T tosses
 * - Version 1: ~1lgN eggs and ~1lgN tosses
 * - Version 2: ~lgT eggs and ~2lgT tosses
 * - Version 3: 2 eggs and ~2sqrtN tosses
 * - Version 4: 2 eggs and <= c sqrtT tosses for some fixed constant c
 */
'use strict';

let sampleFloors = [0, 0, 0, 1, 1, 1, 1, 1, 1];
class EggDrop{
  constructor(floors){
    this.floors = floors;
  }
  findFloor(){
    let search = new BinarySearch();
    let index = search.rank(1, this.floors);
    return index;
  }
};

class BinarySearch{
  constructor(){ }
  rank(key, arr){
    let lo = 0, hi = arr.length-1;
    while (lo <= hi){ // sample arr = [0, 0, 0, 1, 1, 1, 1, 1, 1];
      let mid = Math.floor(lo + (hi - lo)/2); // 3;
      console.log('MID', mid);
      if (arr[mid] == key && arr[mid-1] < key){ // arr[3] == 1
        return mid; // hi = 3, lo = 0; new mid = 1;
      } else if (arr[mid] < key){ // 2, 3 - mid 2;
        lo = mid + 1;
      } else {
        hi = mid; 
      }
    }
    return -1;
  }
};

let eggDrop = new EggDrop(sampleFloors);
console.log('EGG DROP', eggDrop);
console.log('FIND FLOOR', eggDrop.findFloor());
