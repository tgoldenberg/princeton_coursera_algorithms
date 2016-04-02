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
function randomDate(){
  let rand = Math.floor(Math.random()*10);
  let today = new Date().valueOf();
  let randDate = new Date(today - rand*24*60*60*1000);
  return randDate;
};

let members = ['Tom', 'Liz', 'Ella', 'Jerry', 'Elena', 'Jess', 'MaryKay', 'Sam'];
let timestamps = [
  {
    time: randomDate(),
    members: ['Tom', 'Liz']
  },
  {
    time: randomDate(),
    members: ['Liz', 'Ella']
  },
  {
    time: randomDate(),
    members: ['Ella', 'Sam']
  },
  {
    time: randomDate(),
    members: ['Jess', 'MaryKay']
  },
  {
    time: randomDate(),
    members: ['Elena', 'Jerry']
  },
  {
    time: randomDate(),
    members: ['Liz', 'Ella']
  },
  {
    time: randomDate(),
    members: ['Elena', 'MaryKay']
  },
  {
    time: randomDate(),
    members: ['MaryKay', 'Sam']
  }
];

class Member{
  constructor(name, next){
    this.name = name;
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

console.log('INITIAL NETWORK', network);
timestamps.forEach((timestamp, idx) => { // complexity M for for loop
  console.log('TIMESTAMP # ', idx);
  let members = timestamp.members;
  let member1 = network.findMember(members[0]) // complexity 1 to find root of member
  let member2 = network.findMember(members[1]) // complexity 1 to find root of member
  network.union(member1, member2); // complexity 1 to join roots
  console.log('UNION', member1.name, member2.name);
  if (network.allConnected()){ // complexity n-1... 1 - log N
    console.log('ALL CONNECTED', timestamp);
  }
})
