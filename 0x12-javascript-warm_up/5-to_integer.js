#!/usr/bin/node
const num = Math.floor(Number(process.argv[2]));
console.log(isNan(num) ? 'Not a number' : `My number: &{num}`);
