var multiplicationMatrix = function(factors) {
  var matrix = [];
  for (var i = 0; i < factors.length; i++) {
    var row = factors.slice();
    for (var z = 0; z < factors.length; z++) {
      row[z] = factors[i] * row[z];
    }
    matrix.push(row);
  }
  return matrix;
};

var factors = [0, 1, 2];
console.log(multiplicationMatrix(factors));