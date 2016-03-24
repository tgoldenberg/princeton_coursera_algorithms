'use strict';

var fs = require('fs');
var path = require('path');

class ResizingArrayStack{
  constructor(){
    this.N = 0;
    this.a = new Array();
  }
  isEmpty(){ return this.N == 0; }
  getSize(){ return this.N; }
  resize(max){
    let temp = new Array(max);
    for (let i=0; i<this.N; i++){
      temp[i] = this.a[i];
    }
    this.a = temp;
  }
  push(item){
    if (this.N == this.a.length) {
      this.resize(this.a.length*2);
    }
    this.a[this.N++] = item;
  }
  pop(){
    let item = this.a[this.N--];
    this.a[this.N] = undefined;
    if (this.N > 0 && this.N == this.a.length/4) {
      this.resize(this.a.length/2);
    }
    return item;
  }
  reverseArrayIterator(){
    let int = this.N;
    let hasNext = () => {
      return int > 0;
    };
    let next = () => {
      return this.a[this.N--];
    };
    let remove = () => {
      // fill in
    }
  }
};

let queue = new ResizingArrayStack();
queue.push(1);
queue.push('hello');
queue.push({message: 'world'});
console.log('QUEUE', queue);
queue.pop();
console.log('QUEUE', queue);
