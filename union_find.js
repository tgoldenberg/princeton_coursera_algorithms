'use strict';

var fs          = require('fs');
var path        = require('path');
const fileName  = './uf_data.txt';

class UF{
  constructor(N){
    this.count = N;
    let arr = new Array();
    for (let i=0; i<N; i++){
      arr[i] = i;
    }
    this.ids = arr;
  }
  _count(){
    return this.count;
  }
  _connected(p, q){
    return this.find(p) == this.find(q);
  }
  _find(int) {
    // fill in
  }
  _union(p, q){
    // fill in
  }
};

let file    = fs.readFileSync(fileName, 'utf8');
let lines   = file.split('\n');
let N       = lines.length-1;
let uf      = new UF(N);
var count   = uf._count();
console.log('UF', uf, count);

lines.forEach((line) => {
  if (! line) {return;}
  let parts = line.split(' ');
  console.log('PARTS', parts);
});
