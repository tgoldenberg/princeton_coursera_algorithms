'use strict';

var fs = require('fs');
var path = require('path');

class Node{
  constructor(item, next){
    this.item = item;
    this.next = next;
  }
};

class Stack{
  constructor(){
    this.size = 0;
    this.first = 0;
  }
  push(item){
    let oldFirst = this.first;
    this.first = new Node(item, oldFirst);
    this.size++;
  }
  pop(){
    let item = this.first.item;
    this.first = this.first.next;
    this.size--;
    return item;
  }
  isEmpty(){
    return this.first == 0;
  }
};

let stack = new Stack();
stack.push(1);
console.log('STACK', stack);
console.log(stack.isEmpty());
console.log(stack.pop());
console.log('STACK', stack);
console.log(stack.isEmpty());
