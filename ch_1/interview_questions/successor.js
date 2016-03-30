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
  remove(p){
    let int = this.first.int;
    let node = this.first;
    let prevNode = node;
    while (int != p){
      prevNode = node;
      node = node.next;
      int = node.int;
    }
  }
  successor(p){
    return p.next;    
  }
}

let s = new Successor(10);
console.log('INITIAL SUCCESSOR', s);
