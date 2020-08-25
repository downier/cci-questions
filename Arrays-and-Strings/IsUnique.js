// implement an algorithm to determine if a string has all unique characters. what if you cannot use additonal data structures?

function isUnique(string){
  if(string.length > 128) return false;
  var array = string.split('').sort();
  for(i = 0; i < string.length; i++){
    if(array[i] === array[i+1])return false;
  }
  return true;
}

var test = 'qwertuoi'
var testfail = 'qwertuoiqwertuoi'
console.log(isUnique(testfail))
