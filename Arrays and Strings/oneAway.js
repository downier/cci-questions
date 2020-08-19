// There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit(or zero edits) away.
// EX
// page, ple -> true
// pale, bake -> false

function oneAway(x,y){
  if (x === y)return true;
  if (Math.abs(x.length - y.length) > 1)return false;
  return true;
}
let test1 = 'hello'
let test2 = 'hell'
console.log(oneAway(test1,test2))