'use strict';

var fs = require('fs');
var Shell = require('../shellsort/ShellSort');
var Insertion = require('../insertion_sort/InsertionSort');
var Selection = require('../selection_sort/SelectionSort');

class SortCompare{
  constructor(N, T) { 
    this.N = N;
    this.T = T;
  }
  timeAlg(N, T, type){
    let alg; 
    let count = 0;
    switch(type){
      case 'SHELL':
        alg = new Shell();
      case 'INSERTION':
        alg = new Insertion();
      case 'SELECTION':
        alg = new Selection();
    }
    for (let i=0; i<this.T; i++){
      let arr = new Array(this.N).fill(0).map(() => Math.floor(Math.random()*N));
      let d1 = new Date().valueOf();
      let sorted = alg.sort(arr);
      let d2 = new Date().valueOf();
      count += (d2 - d1);
    }

    return count;
  }
  compare(alg1, alg2){
    let time1 = this.timeAlg(this.N, this.T, alg1);
    let time2 = this.timeAlg(this.N, this.T, alg2);
    if (time2 > time1){
      return {
        winner: alg1,
        time: time2 / time1
      };
    } else {
      return {
        winner: alg2, 
        time: time1 / time2
      };
    }
  }
};

let a1 = process.argv[2];
let a2 = process.argv[3];
let N = process.argv[4];
let T = process.argv[5];
let compare = new SortCompare(N, T);
let data = compare.compare(a1, a2);
let msg = `${data.winner} is ${data.time} faster`;
console.log(msg);
