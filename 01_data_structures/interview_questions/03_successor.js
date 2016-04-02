/* Successor with delete
 * Given a set of N integers S = {0, 1, ..., N-1} and a sequence of requests of the following form:
 * - remove x from S
 * - Find the successor of x: the smallest y in S such that y >= x.
 * Design a data type so that all operations (except construction) should take logarithmic time or better.
 *
*/

'use strict';

class Node{
  constructor(int, next){
    this.int = int;
    this.next = next;
  }
};

class Successor{
  constructor(N){
    this.size = N;
    for(let i=0; i<N; i++){
      if (i == 0 ){
        this.last = new Node(i, null);
        this.first = this.last;
      } else {
        this.last.next = new Node(i, null);
        this.last = this.last.next;     
      }
    }
  }
  find(p){
    let int = this.first.int;
    let node = this.first;
    while (node.int != p){
      if (! node) { break; }
      node = node.next;
    }
    return node;
  }
  remove(p){
    let int = this.first.int;
    let node = this.first;
    let prevNode = node;
    while (int != p){
      prevNode = node;
      node = node.next;
      int = node.int;
    }
    this.size--;
    prevNode.next = node.next;
    return node;
  }
  successor(p){
    return p.next;    
  }
}

let successor = new Successor(10);
console.log('INITIAL SUCCESSOR', successor);
console.log(successor.remove(1));
console.log('SUCCESSOR REMOVED', successor);
let node = successor.find(2);
console.log('SUCCESSOR', node.int, successor.successor(node));

