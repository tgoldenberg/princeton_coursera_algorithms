/* Union-by-size
 * Develop a union-find implementation that uses the same basic strategy as weighted quick-union but 
 * keeps track of tree height and always links the shorter tree to the taller one. 
 * Prove a lg N upper bound on the height of the trees for N sites with your algorithm 
 *
 * */

'use strict';

class Node{
  constructor(N, weight){
    this.N = N;
    this.weight = weight;
  }
}

class WeightedUF{
  constructor(N){
    this.size = N;
    this.treeDepth = 0;
    this.a = new Array(N);
    for (let i=0; i<N; i++){
      this.a[i] = new Node(i, 1);
    }
  }
  union(p, q){
    if (! this.connected(this.a[p], this.a[q])){
      p = this.a[p];
      q = this.a[q];
      let depth = this.treeDepth;
      if (p.weight > q) {
       p.weight += q.weight;
       q.N = p.N; 
       if (p.weight > this.treeDepth){
         this.treeDepth = p.weight;
       }
      } else {
        q.weight += p.weight;
        p.N = q.N;
        if (q.weight > this.treeDepth){
          this.treeDepth = q.weight;
        }
      }
    }
  }
  connected(p, q){
    return this.find(p) == this.find(q);
  }
  find(p){
    while (p.N != this.a[p.N].N){
      p = this.a[p.N];
    }
    return p;
  }
}

let weighted = new WeightedUF(10);
console.log('WEIGHTED INIT', weighted);
weighted.union(1, 2);
weighted.union(4, 5);
console.log('WEIGHTED', weighted);
weighted.union(8, 9);
weighted.union(3, 6);
console.log('WEIGHTED', weighted);


