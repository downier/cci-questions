// Given two strings, write a method to decide if one is a permutation of the other.
function checkPermutation(x, y) {
  if (x.length !== y.length)return false
  for(i = 0; i < x.length; i++){
    if(x.split('').sort()[i] !== y.split('').sort()[i]) return false
  }
  return true;
};

let string1 = 'hello';
let string2 = 'loleh';
let string3 = 'loleho';

console.log(checkPermutation(string1, string2))
console.log(checkPermutation(string1, string3))