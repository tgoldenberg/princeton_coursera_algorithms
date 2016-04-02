'use strict';

const fs          = require('fs');
const fileName    = './uf_data.txt';

class UF{
  constructor(N){
    this.count = N;
    this.ids = new Array(N).fill(0).map((v, i) => i);
  }
  _count(){
    return this.count;
  }
  _connected(p, q){
    return this._find(p) == this._find(q);
  }
  _find(p) {
    while (p != this.ids[p]) {
      p = this.ids[p];
    }
    return p;
  }
  _union(p, q){
    this.ids[p] = q;
  }
};

let file    = fs.readFileSync(fileName, 'utf8'),
    lines   = file.split('\n'),
    N       = lines.length-1,
    uf      = new UF(N),
    count   = uf._count();
console.log('UF', uf, count);

lines.forEach((line) => {
  if (! line) {return;}
  let parts = line.split(' '),
      p     = parts[0],
      q     = parts[1];
  uf._union(p, q);
});

console.log(uf._count() + ' components', uf);
console.log('UF', uf);
