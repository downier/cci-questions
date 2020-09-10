//Write an algorithm such that if an element in MxN matrix is 0, its entire row and column are set to 0.
function zeroMatrix(matrix) {
  let firstColHasZero = false;
  let firstRowHasZero = false;

  // Check if first col has zero
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  // Check if first row has zero
  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[0][j] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  // Use first row and col as flags, set matrix[i][0] and matrix[0][j] to 0 if matrix[i][j] is 0
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // Zero out cells based on flags in first row and col
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // Zero out first col
  if (firstColHasZero) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }

  // Zero out first row
  if (firstRowHasZero) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[0][j] = 0;
    }
  }
  return matrix;
}

let test = [
  [1,2,0],
  [4,5,6],
  [7,8,9],
];

console.log(zeroMatrix(test))
