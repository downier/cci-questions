function characterFrequency (string) {
  var charFreq = {};
  var resultsArr = [];
  //iterate over each char in string for freq count
  for(let char of string){
    if(!charFreq[char]){
      charFreq[char] = 1;
    } else {
      charFreq[char]++
    }
  }
  //push charFreq into resultsArr
  for(var key in charFreq){
    resultsArr.push([key, charFreq[key]])
  }
  //sort resultsArr by values
  resultsArr.sort((a,b) => {
    if(b[1] === a[1]) {
      if(a[0] < b[0]) {
        return -1;

      }
      if(a[0] > b[0]){
        return 1;
      }
    }
    return b[1] - a[1];
  });
  //return sorted resultsArr

  return resultsArr;
}

console.log(characterFrequency("supercalifragilisticexpialidocious"))
