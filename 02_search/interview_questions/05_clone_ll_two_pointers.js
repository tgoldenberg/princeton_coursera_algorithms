/* Clone a linked structure with two pointers per node.
 * Suppose that you are given a reference to the first node of a 
 * linked structure where each node has two pointers: one pointer
 * to the next node in the sequence (as in a standard singly-linked list)
 * and one pointer to an arbitrary node.
 *
private class Node {
  private String item;
  private Node next;
  private Node random;
}

/* Design a linear-time algorithm to create a copy of the doubly-linked
 * structure. You may modify the original linked structure, but you must end up with
 * two copies of the original.
*/

'use strict';

class Node{
  constructor(item, next){
    this.value = item;
    this.next = next;
    this.pointer = null;
  }
};

class LinkedList{
  constructor() {
    this.first = null;
  }
  addNode(item){
    let oldfirst = this.first;
    this.first = new Node(item, oldfirst);
  }
  iterator(){
    let c = this.first;
    while (c.next != null){
      console.log(c.value);
      c = c.next;
    }
    console.log(c.value);
  }
};

function createList(){
  let list = new LinkedList();
  list.addNode('hello');
  list.addNode('world');
  list.addNode('hi');
  list.addNode('yo');
  list.addNode('random');
  list.iterator();
}

createList();
