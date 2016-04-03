'use strict';

var fs = require('fs');

class WeightedUnionFindUF{
  constructor(N){
    this.id = new Array(N).fill(0).map((v,i) => i);
    this.sz = new Array(N).fill(1);
    this.count = N;
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
    console.log('PARAMS', p, q);
    let i = this.find(p);
    let j = this.find(q);
    if (i == j) { return; }
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

let file  = fs.readFileSync(process.argv[2], 'utf8'),
    lines = file.split('\n'),
    N     = lines.length-1,
    uf    = new WeightedUnionFindUF(10),
    count = uf._count();
console.log('UF', uf, count);

lines.forEach((line) => {
  if (! line) {return;}
  let parts = line.split(' '),
      p = parseInt(parts[0]),
      q = parseInt(parts[1]);
  uf.union(p, q);
});

console.log('UF', uf.id.join(' '));
