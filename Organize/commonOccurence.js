var commonCharacters = function(string1, string2){
  var string1Arr = string1.split('');
  var string2Arr = string2.split('');
  var resultArr = [];
  for(var i = 0; i < string1Arr.length; i++){
    for(var o = 0; o < string2Arr.length; o++){
      if(string1Arr[i] === string2Arr[o]){
        if(!resultArr.includes(string1Arr[i]) && string1Arr[i] !== ' ') {
          resultArr.push(string1Arr[i]);
        }
      }
    }
  }
  return resultArr.join('');
};

console.log(commonCharacters("What is love?", "Baby don't hurt me"));
