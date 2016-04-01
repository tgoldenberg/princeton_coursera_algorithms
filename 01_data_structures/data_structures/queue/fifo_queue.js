'use strict';

var fs = require('fs');
var path = require('path');

class Node{
  constructor(item, next){
    this.item = item;
    this.next = next;
  }
};
class Queue{
  constructor(){
    this.N = 0;
    this.first = null;
    this.last = null;
  }
  isEmpty(){ return this.N == 0; }
  getSize(){ return this.N; }
  enqueue(item){
    let oldLast = this.last;
    this.last = new Node(item, null);
    if (this.isEmpty()){
      this.first = this.last;
    } else {
      oldLast.next = this.last;
    }
    this.N++;
  }
  dequeue(){
    let item = this.first.item;
    this.first = this.first.next;
    this.N--;
    if (this.isEmpty()){
      this.last = null;
    }
    return item;
  }
};

let queue = new Queue();
console.log('QUEUE', queue);
queue.enqueue(1);
console.log('QUEUE', queue);
queue.enqueue(2);
console.log('QUEUE', queue);
console.log(queue.dequeue());
console.log('QUEUE', queue);
