// There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit(or zero edits) away.
// EX
// pale, ple -> true
// pale, bake -> false

function oneAway(x,y){
  if (x === y)return true;
  if (Math.abs(x.length - y.length) > 1)return false;
  let count = 0;
  for(i = 0; i < x.length; i++) {
    if(x.split('')[i] !== y.split('')[i]){
      count++;
    }
    if(count > 1)return false;
  }
  return true;
}
let test1 = 'pale'
let test2 = 'ple'
console.log(oneAway(test1,test2))