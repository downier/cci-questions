let spiralTraversal = (matrix) => {
  let results = [];
  let topRow = 0;
  let leftCol = 0;
  let rightCol = matrix[0].length - 1;
  let bottomRow = matrix.length - 1;
  let combinedArr = [];
  matrix.forEach(row => row.forEach(char => combinedArr.push(char)));
  //don't set before actually filling combinedArr otherwise debug for hours
  let target = combinedArr.length;

  //while results.length <= combinedArr.length
  while (topRow <= bottomRow && leftCol <= rightCol) {
    //iterate right over designated row
    for (let i = leftCol; i <= rightCol; i++) {
      if (results.length < target) {
        results.push(matrix[topRow][i]);
      }
    }
    topRow++;

    for (let o = topRow; o <= bottomRow; o++) {
      if (results.length < target) {
        results.push(matrix[o][rightCol]);
      }
    }
    rightCol--;

    for (let p = rightCol; p >= leftCol; p--) {
      if (results.length < target) {
        results.push(matrix[bottomRow][p]);
      }
    }
    bottomRow--;

    for (let j = bottomRow; j >= topRow; j--) {
      if (results.length < target) {
        results.push(matrix[j][leftCol]);
      }
    }
    leftCol++;
  }
  return results;
};