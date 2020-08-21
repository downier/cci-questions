// There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit(or zero edits) away.
// EX
// pale, ple -> true
// pale, bake -> false

function oneAway(x,y){
  //length check
  if (Math.abs(x.length - y.length) > 1)return false;

  //sort strings by length with s2 being longer
  let s1 = x.length < y.length ? x : y;
  let s2 = x.length < y.length ? y : x;
  let count1 = 0;
  let count2 = 0;
  let edits = false;

  while(count2 < s2.length && count1 < s1.length){
    if(s1.charAt(count1) != s2.charAt(count2)){
      //check if first edit made
      if(edits)return false;
      edits = true;

      //if we replace move short counter
      if(s1.length == s2.length){
        count1++;
      }

    } else {
      //update short counter on match
      count1++;
    }
    //longer counter always update
    count2++;
  }
  return true;
}
let test1 = 'bale'
let test2 = 'ple'
console.log(oneAway(test1,test2))