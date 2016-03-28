'use strict';

var fs = require('fs');
var path = require('path');
var fileName = '../union_find/uf_data.txt';

class WeightedUnionFindUF{
  constructor(N){
    this.id = new Array(N);
    this.sz = new Array(N).fill(1);
    this.count = N;
    for (let i=0; i<N; i++){
      // this.sz[i] = i;
      this.id[i] = i;
    }
  }
  _count(){
    return this.count;
  }
  connected(p, q){
    return this.find(p) == this.find(q);
  }
  find(p){
    while(p != this.id[p]){
      p = this.id[p];
    }
    return p;
  }
  union(p, q){
    let i = this.find(p);
    let j = this.find(q);
    if (i == j){
      return;
    }
    if (this.sz[i] < this.sz[j]){
      this.id[i] = j;
      this.sz[j] += this.sz[i];
    } else {
      this.id[j] = i;
      this.sz[i] += this.sz[j];
    }
    this.count--;
  }
};

let file  = fs.readFileSync(fileName, 'utf8'),
    lines = file.split('\n'),
    N     = lines.length-1,
    uf    = new WeightedUnionFindUF(N),
    count = uf._count();
console.log('UF', uf, count);

lines.forEach((line) => {
  if (! line) {return;}
  let parts = line.split(' '),
      p = parts[0],
      q = parts[1];
  if (uf.connected(p, 1)) {
    return;
  }
  uf.union(p, q);
});

console.log(uf._count() + ' components', uf);
