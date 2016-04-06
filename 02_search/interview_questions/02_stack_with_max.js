/* Stack with max.
 * Create a data structure that efficiently supports the stack
 * operations (push and pop) and also a return-the-maximum operation.
 * Assume the elements are real numbers so that you can compare them.
 */

'use strict';

class Node{
  constructor(value, next, key){
    this.value = value;
    this.next = next;
    this.key = key;
  }
};

class Stack{
  constructor(){
    this.first = null;
    this.sz = 0;
  }
  push(item){
    let oldfirst = this.first;
    this.first = new Node(item, oldfirst);
    this.sz++;
  }
  pop(){
    if (! this.first){
      return;
    } else {
      let oldfirst = this.first;
      this.first = this.first.next;
      this.sz++;
      return oldfirst;
    }
  }
};

class MaxStack extends Stack{
  constructor(props){
    super(props);
  }
  max(){
    let first = this.first;
    let max = this.first.value;
    let maxNode = this.first;
    while (first.next != null){
      first = first.next;
      console.log('FIRST VALUE', first.value, max);
      if (first.value > max){
        max = first.value;
        maxNode = first;
      }
    }
    console.log('MAX', max);
    return maxNode;
  }
  push(item){
    let oldfirst = this.first;
    let idx = !! oldfirst ? oldfirst.key + 1 : 0;
    this.first = new Node(item, oldfirst, idx); 
  }
};

let stack = new MaxStack();
console.log('INITIAL STACK', stack);
stack.push(1);
stack.push(100);
stack.push(10);
stack.push(50);

console.log('POP', stack.pop());
console.log('STACK', stack);
console.log('MAX', stack.max());
