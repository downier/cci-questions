// Given a string, write a function to check if it is a permutation of a palindrome

function palindromePermutaton(string){
  let array = string.split('');
  let count = {};
  for(i = 0; i < array.length; i++){
    array[i] in count ? count[array[i]] += 1 : count[array[i]] = 1;
  }
  let odd = 0;
  for (const [key, value] of Object.entries(count)) {
    if (value === 1)odd++
  }
  if (odd > 1)return false;
  return true
}

let test = 'octo ca t'

console.log(palindromePermutaton(test))