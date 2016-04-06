'use strict';

var fs = require('fs');

class In{
  constructor(n) { 
    this.n = n;
  }
  isEmpty(){
    return false;
  }
};

class IndexMinPQ{
  constructor() { }
  delMin() { }
  insert() { }
  minKey() { }
};

class MultiWay{
  constructor() { 
    this.streams = [];
    this.N = arguments.length;
    for (let i=0; i<this.N; i++){
      this.streams[i] = new In(arguments[i]); 
    }
    this.merge(this.streams);
  }
  merge(streams){
    let N = streams.length;
    let pq = new IndexMinPQ();
    for (let i=0; i<N; i++){
      if (! streams[i].isEmpty()){
        pq.insert(i, streams[i].readString());
      }
    }
    while (! pq.isEmpty())
    {
      console.log(pq.minKey());
      let i = pq.delMin();
      if ( ! streams[i].isEmpty()) { 
        pq.insert(i, streams[i].readString());
      }
    }
  }
};

let multiway = new MultiWay(0, 1);

console.log('MULTIWAY', multiway);
