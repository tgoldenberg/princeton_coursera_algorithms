'use strict';

class SelectionSort{
  constructor() { }
  sort(arr){
    for(let i=0; i<arr.length; i++){
      let smallest = arr[i];
      for (let j=i+1; j<arr.length; j++){
        if (arr[j] < smallest){
          smallest = arr[j];
        }
      }
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }
};

let selection = new SelectionSort();


