'use strict';

let ArrayGenerator = (sz, max) => {
  let arr = new Array(sz).fill(0).map(() => {
    return Math.floor(Math.random()*max);
  });
  return arr;
};

module.exports = ArrayGenerator;
