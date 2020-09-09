let translateRomanNumeral = romanNumeral => {
  let store = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let arr = romanNumeral.split('');
  let results = 0;
  // let temp = store[arr[0]];

  if (arr.length === 1) {
    return store[romanNumeral];
  }

  if (!store[arr[0]]) {
    return "null";
  }

  while (arr.length) {
    let temp = arr.shift()
    let copy = arr.slice(0, 1);
    console.log(copy)
    if (temp >= store[copy[0]]) {
      results += store[temp];
    }
    if (temp < store[copy[0]]){
      results -= store[temp];
    }
    
  }
  console.log(arr);

  return results;
};

console.log(translateRomanNumeral('MCMX'));

  // for (let i = 0; i < arr.length; i++) {
  //   if (temp < store[arr[i]] || temp < store[arr[i +1]]) {
  //     results -= store[arr[i]];
  //   }
  //   if (temp >= store[arr[i]]) {
  //     results += store[arr[i]];
  //   }
  //   temp = store[arr[i + 1]];
  // }