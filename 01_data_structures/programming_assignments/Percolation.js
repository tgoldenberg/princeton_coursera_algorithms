'use strict';

const DIRECTIONS = [
  {label: 'WEST',  value: [-1, 0]},
  {label: 'EAST',  value: [1, 0]},
  {label: 'NORTH', value: [0, 1]},
  {label: 'SOUTH', value: [0, -1]}
];

class Percolation{
  constructor(N){
    this.N = N || 0;
    this.grid = new Array(N)
                    .fill(0)
                    .map((v, i) => new Array(N)
                    .fill(0)
                    .map((v, j) => ({blocked: true, root: [i, j]})));
  }
  randomIndex(){
    let rand1 = Math.floor(Math.random()*this.N);
    let rand2 = Math.floor(Math.random()*this.N);
    return [rand1, rand2];
  }
  find(p){
    let y = p[0], x = p[1], root = this.grid[y][x].root;
    while (root.join('-') != [y, x].join('-')){
      root = this.grid[y][x].root;
      x = root[1];
      y = root[0];
    }
    return root;
  }
  union(p, q){
    console.log('UNION', p, q);
    let pID = this.find(p);
    let qID = this.find(q);
    for(let y=0; y<this.N; y++){
      for(let x=0; x<this.N; x++){
        let t = this.grid[y][x];
        if (! t.blocked && t.root.join('-') == pID.join('-')){
          this.grid[y][x].root = qID;
        }
      }
    }
  } 
  open(){
    let indices = this.randomIndex();
    let i = indices[0];
    let j = indices[1];
    this.grid[i][j].blocked = false;
    DIRECTIONS.forEach((d) => {
      let x = d.value[1], y = d.value[0];
      if (x < 0 || y < 0)             { return; } 
      if (x >= this.N || y >= this.N) { return; }
      if (! this.grid[y][x].blocked) {
        this.union([i,j], d.value);
      }
    });
  }
  isFull(i, j){
    return this.grid[i][j].blocked;
  }
  isOpen(i, j){
    return ! this.grid[i][j].blocked;
  }
  isConnected(){
    let res = false;
    for (let x=0; x<this.N; x++){
      console.log('TOP', this.find([0,x]));
      console.log('BOTTOM', this.find([this.N-1, x]));
      if (this.find([0, x])[0] == this.N-1){
        res = true;
      }
      if (this.find([this.N-1, x])[0] == 0){
        res = true;
      }
    }
    console.log('IS CONNECTED', res);
    return res;
  }
  showGrid(){
    this.grid.forEach((g, i) => {
      g.forEach((t, j) => {
        console.log([i, j].join('-'), t.root.join('-'));
      });
    });
  }
  showConnections(){
    this.grid.forEach((g, y) => {
      g.forEach((t, x) => {
        if (t.root.join('-') == [y, x].join('-')){
          console.log('REAL INDEX', [i, j]);
          console.log('ROOT INDEX', t.root);
        }
      });
    });
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

let percolator = new Percolation(3);
percolator.render();
let count = 0;
let connected = false;
for (let i=0; i<10; i++){
  percolator.open();
  connected = percolator.isConnected();
  console.log('CONNECTED', connected);
  percolator.render();
  percolator.showGrid();
  count++;
}
console.log('\n');
percolator.render();
console.log('COUNT', count);
