let rotateMatrix = function (matrix) {
  var n = matrix.length;
  var result = [];
  for (var i = 0; i < n; i++) {
    var row = [];
    for (var z = n - 1; z >= 0; z--) {
      row.push(matrix[z][i]);
    }
    result.push(row)
  }
  return result;
}

testMatrix = [
  [1, 2],
  [3, 4]
]
test3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(rotateMatrix(testMatrix))
console.log(rotateMatrix(test3))