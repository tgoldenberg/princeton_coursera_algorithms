'use strict';

var fs = require('fs');

class MaxPQ{
  constructor(maxN) {
    this.N = 0;
    this.pq = new Array(maxN+1);
  }
  isEmpty(){
    return this.N == 0;
  }
  size(){
    return this.N;
  }
  insert(v){
    this.pq[++this.N] = v;
    this.swim(N);
  }
  delMax(){
    let max = pq[1];
    this.exch(1, this.N--);
    this.pq[this.N + 1] = null;
    this.sink(1);
    return max;
  }
  less(i, j){
    return i < j;
  }
  exch(i, j){
    let temp = this.pq[i];
    this.pq[i] = this.pq[j];
    this.pq[j] = temp;
  }
  swim(k) { 

  }
  sink(k) {

  }
};

