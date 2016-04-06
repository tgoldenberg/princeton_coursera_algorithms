'use strict';

var fs = require('fs');

class TopM{
  constructor() { }
};


let filename = process.argv[3];
let numLines = process.argv[2];
let file = fs.readFileSync(fileName, 'utf8');
let lines = file.split('\n');
for(let i=0; i<lines.length; i++){
 // insert Transaction into pq and delMin()
}
