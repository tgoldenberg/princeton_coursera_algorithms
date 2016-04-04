'use strict';

const DIRECTIONS = [
  {label: 'SOUTH', value: [0, -1]},
  {label: 'WEST',  value: [-1, 0]},
  {label: 'EAST',  value: [1, 0]},
  {label: 'NORTH', value: [0, 1]},
];

class Percolation{
  constructor(N){
    this.N = N || 0;
    this.grid = new Array(N)
                    .fill(0)
                    .map((v, i) => new Array(N)
                    .fill(0)
                    .map((v, j) => ({
                      blocked : true,
                      root    : [i, j]
                    })));
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
    let pID = this.find(p);
    let qID = this.find(q);
    let lowest = pID[0] < qID[0] ? pID : qID;
    for(let y=0; y<this.N; y++){
      for(let x=0; x<this.N; x++){
        let t = this.grid[y][x];
        if (! t.blocked && t.root.join('-') == pID.join('-')){
          this.grid[y][x].root = lowest;
        }
      }
    }
  } 
  open(){
    let indices = this.randomIndex();
    let i = indices[0];
    let j = indices[1];
    while (! this.grid[i][j].blocked) {
      indices = this.randomIndex();
      i = indices[0];
      j = indices[1];
    }
    this.grid[i][j].blocked = false;
  }
  isFull(i, j){
    let ID = this.find([i, j]);
    if (ID[0] == 0) { return true; }
    else            { return false; }
  }
  isOpen(i, j){
    return ! this.grid[i][j].blocked;
  }
  connect(){
    for(let y=0; y<this.N; y++){
      for(let x=0; x<this.N; x++){
        DIRECTIONS.forEach((d) => {
          let dx = d.value[1], dy = d.value[0];
          if (dx < 0 || dy < 0)      { return; }
          else if (dx >= this.N || dy >= this.N) { return; }
          else if (! this.grid[dy][dx].blocked){
            this.union([y, x], d.value);
          }
        });
      }
    }
  }
  isConnected(){
    this.connect();
    for(let i=0; i<this.N; i++){
      if (this.isFull(this.N-1, i)) { return true; }
    }   
    return false;
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


function runPercolator(N){
  let percolator = new Percolation(N);
  let count = 0;
  let connected = false;
  while (! connected) {
    percolator.open();
    connected = percolator.isConnected();
    count++;
  }
  return count;
};

/*
let size = 10;
while (size < 1000000000) {
  let d1 = new Date().valueOf();
  let c = runPercolator(size);
  let d2 = new Date().valueOf();
  console.log(`With size ${size}, algorithm completed in ${c} milliseconds`);
  size*=10;
}
*/
/*
  With size 10, algorithm completed in 11 milliseconds
  With size 100, algorithm completed in 797 milliseconds*
*/

module.exports = runPercolator;
