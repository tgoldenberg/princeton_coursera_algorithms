'use strict';

var fs = require('fs');
var path = require('path');
var runPercolator = require('./Percolation.js');

class PercolationStats{
  constructor(N, T) { 
    this.N = N;
    this.T = T;
    this.counts = [];
    this.speed = [];
  }
  run(){
    for (let i=0; i<this.T; i++){
      let d1 = new Date().valueOf();
      let c  = runPercolator(this.N);
      let d2 = new Date().valueOf();
      this.counts.push(c);
      this.speed.push(d2 - d1);
    } 
    console.log(this.mean());
  }
  mean(){
    if (! this.speed.length) { return; }
    return this.speed.reduce((p,n) => p+n) / this.speed.length; 
  }
  stddev(){
  }
  confidenceLo(){

  }
  confidenceHi(){

  }
};

let arrSize = parseInt(process.argv[2]);
let iter    = parseInt(process.argv[3]);
let stats = new PercolationStats(arrSize, iter);
stats.run();
