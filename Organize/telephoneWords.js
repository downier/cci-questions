let telephoneWords = (digitString, results = []) => {
  let stringArr = digitString.split('');
  let choices = ['0', '1', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']
  let permutations = (word, number) => {
    if (!number.length) {
      return results.push(word);
    }
    choices[number[0]].split('').forEach(letter => {
      permutations(word + letter, number.slice(1));
    }); 
  };
  permutations('', stringArr);
  return results;
};

console.log(telephoneWords('1123'));
