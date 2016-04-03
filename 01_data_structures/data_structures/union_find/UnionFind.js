'use strict';

const fs          = require('fs');
const fileName    = './uf_data_2.txt';

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
    let pID = this._find(p);
    let qID = this._find(q);
    if (pID == qID) { return; }
    for (let i=0; i<this.ids.length; i++){
      if (this.ids[i] == pID){
        this.ids[i] = qID;
        this.count--;
      }
    }
  }
};

console.log('ARGS', process.argv[2]);
let file    = fs.readFileSync(process.argv[2], 'utf8'),
    lines   = file.split('\n'),
    N       = lines.length-1,
    uf      = new UF(10),
    count   = uf._count();
console.log('UF', uf, count);

lines.forEach((line) => {
  if (! line) {return;}
  let parts = line.split(' '),
      p     = parseInt(parts[0]),
      q     = parseInt(parts[1]);
  uf._union(p, q);
});

console.log('UF', uf.ids.join(' '));

let size = 10;
/*
while (size < 10000000){
  
}
*/
/*
let uf = new UF(10);
let unions = '8-9 0-7 4-3 2-4 5-8 2-9';
unions.split(' ').forEach((pair) => {
  let nums = pair.split('-');
  uf._union(parseInt(nums[0]), parseInt(nums[1]));
});

console.log('EXPECT', '7 1 9 9 9 9 6 7 9 9');
console.log('FINAL', uf.ids.join(' '));
*/
