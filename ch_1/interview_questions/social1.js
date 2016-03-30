'use strict';

const _ = require('underscore');
/*
1.
Social network connectivity.
Given a social network containing N members and a log file containing M timestamps
at which times pairs of members formed friendships, design an algorithm to determine
the earliest time at which all members are connected (i.e., every member is a friend of a
friend of a friend ... of a friend).

Assume that the log file is sorted by timestamp and that friendship is an
equivalence relation. The running time of your algorithm should be MlogN or
better and use extra space proportional to N.

*/
let today = new Date().valueOf();
let members = ['Tom', 'Liz', 'Ella'];
let timestamps = [
  {
    time: new Date(today - 24*7*60*60*1000).valueOf(),
    members: ['Tom', 'Liz']
  },
  {
    time: new Date(today - 24*40*60*60*1000).valueOf(),
    members: ['Liz', 'Ella']
  },
];

class Member{
  constructor(name, next){
    this.name = name;
    this.next = next;
  }
  assignName(name){
    this.name = name;
  }
  assignNext(next){
    this.next = next;
  }
}
class Network{
  constructor(){
    this.members = [];
  }
  union(p, q){
    if (! this.connected(p, q)){
      if (! p.next){
        p.next = q;
      } else if (! q.next){
        q.next = p;
      } else {
        p.next = q.next;
      }
    }
  }
  find(p){
    if (! p.next) {
      return p;
    }
    console.log('P', p);
    while (p.next && p.next.name != p.name){
      p = p.next;
    }
    return p;
  }
  connected(p, q){
    return this.find(p) == this.find(q);
  }
  findMember(name){
    return _.find(this.members, (m) => m.name == name);
  }
  allConnected(){
    let roots = this.members.map((m) => {
      return this.find(m);
    });
    if (_.uniq(roots).length == 1) { return true; }
    else                           { return false;}
  }
}

let network = new Network();
members.forEach((member) => {
  let m = new Member(member, null);
  network.members.push(m)
});

console.log('NETWORK', network);
timestamps.forEach((timestamp) => {
  let members = timestamp.members;
  let member1 = network.findMember(members[0])
  let member2 = network.findMember(members[1])
  network.union(member1, member2);
  console.log('UNION', network, member1, member2);
  if (network.allConnected()){
    console.log('TIMESTAMP', timestamp);
  }
})
