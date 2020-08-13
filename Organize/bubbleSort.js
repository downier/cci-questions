let positionSwap = (arr, i, o) => {
  let temp = arr[i];
  arr[i] = arr[o];
  arr[o] = temp;
};

let bubbleSort = (array) => {
  let isSorted = false;
  while(!isSorted){

  }
  for(let i = 0; i < array.length; i++){
    
  }
};

var input = [18, 30, 25, 28, 24, 19, 31, 20, 35, 24, 36, 26, 30, 29, 40, 36];
console.log(bubbleSort(input));

let bubbleSort = (array) => {
  let bool = true;
  let swap;
  while (bool) {
      swap = false;
      array.forEach((item, index) => {
          let adjacent = array[index + 1];
          if (item > array[index + 1]) {
              array[index + 1] = item;
              array[index] = adjacent;
              swap = true;
          }
      })
      if (!swap)
          bool = false;
  }
  return array;
}

// let bubbleSort = (array) => {
//   let count = array.length;
//   let sorted = [];
//   //iterate through array, 
//   let store = {};
//   for (let i in array) {
//     if (store[array[i]]) {
//       store[array[i] + 1] = array[i];
//     }
//     store[array[i]] = array[i];
//   }
//   for (let o in store) {
//     if (store[o] < 0) {
//       sorted.unshift(store[o]);
//     } else {
//       sorted.push(store[o]);
//     }
//   }
//   return sorted;
// };