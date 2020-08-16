// Note: Do not use any built -in library function such as sqrt.

//   Example 1:

// Input: 16
// Returns: True
// Example 2:

// Input: 14
// Returns: False
/**
 * @param {number} num
 * @return {boolean}
 */

let isPerfectSquare = (num) => {
  for (let i = 0; i <= num; i++) {
    if (i * i === num) {
      return true;
    } else if (i * i > num) {
      return false;
    }
  }
};

let isPerfectSquare = num => {
  let count = 1;
  while(count * count <= num) {
    if(count * count === num) return true;
    count++
  }
  return false;
}