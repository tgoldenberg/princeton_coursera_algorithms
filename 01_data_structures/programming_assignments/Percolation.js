'use strict';

class UF{
  constructor(N){
    this.N = N;
    this.a = new Array(N).fill(0).map((v, i) => i);
  }
  connected(p, q){
    return this.find(p) == this.find(q);
  }
  find(p){
    while (p != this.a[p]){
      p = this.a[p];
    }
    return p;
  }
  union(p, q){
    if (connected(p, q)) { return; }
    let pID = this.find(p);
    let qID = this.find(q);
    this.a.forEach((v, i) => {
      if (v == pID){
        this.grid[i] = qID;
      }
    });
  }
};

class Percolation{
  constructor(N){
    this.N = N || 0;
    this.grid = new Array(N)
                    .fill(0)
                    .map((v, i) => new Array(N)
                    .fill(0)
                    .map((v) => ({blocked: true, root: null})));
  }
  randomIndex(){
    let rand1 = Math.floor(Math.random()*this.N);
    let rand2 = Math.floor(Math.random()*this.N);
    return [rand1, rand2];
  }
  open(){
    let i = this.randomIndex();
    this.grid[i[0]][i[1]].blocked = false;
  }
  isFull(i, j){
    return this.grid[i][j].blocked;
  }
  isOpen(i, j){
    return ! this.grid[i][j].blocked;
  }
  render(){
    this.grid.forEach((g) => {
      let sentence = g.map((line) => {
        if (line.blocked) {
          return 'B ';
        } else {
          return 'O ';
        }
      });
      console.log(sentence.join(''));
    });
  }
};

let percolator = new Percolation(5);
percolator.render();
for (let i=0; i<100; i++){
  percolator.open();
}
console.log('\n');
percolator.render();
