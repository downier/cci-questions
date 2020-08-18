//Write a method to replace all spaces in a string with '%20' 
//input "Mr John Smith", 13
//output 'Mr%20John%20Smith'

function URLify(string, integer){
  let output = ''
  for (i = 0; i < integer; i++){
    if(string.split('')[i] === ' ') {
      output += '%20'
    } else {
      output += string.split('')[i];
    }
  }
  return output;
}

let test = 'Mr John Smith'

console.log(URLify(test, 13))