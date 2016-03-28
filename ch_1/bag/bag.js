'use strict';

var fs = require('fs');
var path = require('path');

class Node{
  constructor(item, next){
    this.item = item;
    this.next = next;
  }
};

class Iterator{
  constructor(first){
    this.current = first;
  }
  hasNext(){
    return this.current != null;
  }
  remove(){}
  next(){
    let item = this.current.item;
    this.current = this.current.next;
    return item;
  }
};

class Bag{
  constructor(){
    this.first = null;
  }
  add(item){
    let oldfirst = this.first;
    this.first = new Node(item, oldfirst);
  }
  iterator(){
    return new Iterator(this.first);
  }
};

let bag = new Bag();
console.log('BAG', bag);
bag.add(1);
console.log('BAG', bag);
bag.add(2);
console.log('BAG', bag);
let iterator = bag.iterator();
console.log('ITERATOR', iterator);
console.log(iterator.current);
iterator.next();
console.log(iterator.current);
iterator.next();
console.log(iterator.current);
