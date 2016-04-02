/*  Queue with two stacks.
//  Implement a queue with two stacks so that each queue 
//  operators takes a constant amortized number of stack operations.
*/

'use strict';

class Node{
  constructor(value, next){
    this.value = value;
    this.next  = next;
  }
};

class Stack{ // LIFO
  constructor() {
    this.first  = null;
    this.sz     = 0;
  }
  push(item) {
    let oldFirst  = this.first;
    this.first    = new Node(item, oldFirst);
    this.sz++;
    return this;
  }
  pop() {
    if (! this.first || ! this.first.next){
      this.first  = null;
      this.sz     = 0;
    } else {
      let oldFirst  = this.first;
      this.first    = this.first.next;
      this.sz--;
      return oldFirst;
    }
  }
  size(){
    return this.sz;
  }
};

class TwoStackQueue{ // FIFO
  constructor(){
    this.first = new Stack();
    this.last = new Stack;
    this.next = 'first';
  }
  enqueue(item){
    if (this.next == 'first'){
      this.first.push(item);
    } else {
      this.last.push(item);
    }
    this.next = this.next == 'first' ? 'last' : 'first';
  }
  dequeue(){
    if (this.next == 'first'){
      this.last.pop();
    } else {
      this.first.pop();
    }
    this.next = this.next == 'first' ? 'last' : 'first';
  }
  size(){
    return this.first.size() + this.last.size();
  }
};

let twoStack = new TwoStackQueue();
console.log('TWO STACK QUEUE', twoStack);
console.log('QUEUE SIZE', twoStack.size());
twoStack.enqueue('Hello');
twoStack.enqueue('World');
console.log('QUEUE', twoStack);
