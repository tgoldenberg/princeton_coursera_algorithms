/* Detect cycle in a linked list.
 * A singly-linked data structure is a data structure made up
 * of nodes where each node has a pointer to the next node 
 * (or a pointer to null). Suppose that you have a pointer to
 * the first node of a singly-linked list data structure:
 * - Determine whether a singly-linked data structure contains a cycle.
 *   You may use only two pointers into the list (and no other variables).
 *   The running time of your algorithm should be linear in the number of 
 *   nodes in the data structure.
 *
 * - If a singly-linked data structure contains a cycle, determine the first
 *   node that participates in the cycle, you may use only a constant number of 
 *   pointers into the list (and no other variables). The running time of your
 *   algorithm should be linear in the number of nodes in the data structure.
 *
 * You may not modify the structure of the linked list.
 */
'use strict';

class Node{
  constructor(item, next){
    this.value = item;
    this.next = next;
  }
};

class LinkedList{
  constructor(){ 
    this.first = null;
  }
  addNode(item){
    let oldfirst = this.first;
    this.first = new Node(item, oldfirst);
  }
  toString(){
    let next = this.first.next;
    while (!! next){
  }
};

let list = new LinkedList();
list.addNode(1);
list.addNode(5);
list.addNode(30);
list.addNode(2);
let first = list.first;
list.addNode(5);
list.first = first;
console.log('LIST', list);
