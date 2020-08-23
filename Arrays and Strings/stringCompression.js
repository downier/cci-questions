//Implement a method to perform basic string compression using the counts of repeated characters. 
//If it is not smaller than the original return original

function stringCompression(string){
  let count = 0;
  let char = '';
  let stringArr = string.split('');
  let compression = '';
  for(i = 0; i < stringArr.length; i++){
    if(stringArr[i] !== char){
      compression += stringArr[i]
      count = 0;
      char = stringArr[i]
    }
    if(stringArr[i] == char){
      count++;
    }
    if(stringArr[i] !== stringArr[i+1]){
      compression += count;
    }
  }
  return compression;
}

let test = 'aaabbbbaacccc'
console.log(stringCompression(test))