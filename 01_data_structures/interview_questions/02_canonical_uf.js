/* Union find with specific canonical element.
 *Add a method find() to the union-find data type so that
find(i) returns the largest element in the connected component containing i.
The operations, union(), connected(), and find() should all take logarithmic time or better.

For example, if one of the connected components is {1, 2, 6, 9} then the find() method should 
return 9 for each of the four elements in the connected components because 9 is larger than 1, 2, and 6. 

*/ 
'use strict';

class UF{
  constructor(N){
    this.a = new Array(N);
    for (let i=0; i<N; i++){
      this.a[i] = i;
    }
  }
  find(p){
    let largest = p;
    while (this.a[p] != p){
      if (this.a[p] > largest){
        largest = a[p];
      }
      this.a[p] = p;
    }
    return largest;
  }
  connected(p, q){
   return this.find(p) == this.find(q); 
  }
  union(p, q){
   if (! this.connected(this.a[p], this.a[q])){
     console.log('NOT CONNECTED', p, q);
     this.a[p] = q;
   } 
  }
  _size(){
    return this.a.length;
  }
}

let uf = new UF(10);
console.log('NEW UF', uf);
uf.union(1, 3);
uf.union(4, 6);
uf.union(7, 8);
uf.union(2, 5);
console.log('CONNECTED UF', uf);
