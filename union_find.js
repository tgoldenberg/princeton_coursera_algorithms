'use strict';

const fs          = require('fs');
const path        = require('path');
const fileName    = './uf_data.txt';

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
    return this._find(p) == this._find(q);
  }
  _find(int) {
    let currentIdx = int,
        result = int,
        found = false;
    while (! found) {
      if (this.ids[currentIdx] == currentIdx) {
        result = currentIdx
        found = true;
      } else {
        currentIdx = this.ids[currentIdx];
        result = this.ids[currentIdx];
      }
    }
    return result;
  }
  _union(p, q){
    this.ids[p] = this._find(q);
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
      p = parts[0],
      q = parts[1];
  if (uf._connected(p, 1)) {
    return;
  }
  uf._union(p, q);
});

console.log(uf._count() + ' components', uf);
