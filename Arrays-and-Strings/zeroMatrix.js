//Write an algorithm such that if an element in MxN matrix is 0, its entire row and column are set to 0.
function zeroMatrix(matrix){
  let newMatrix = [];
  let locations = [];
  for(i = 0; i < matrix.length; i++){
    let row = []; 
    let zeroCount = 0;
    for(j = 0; j < matrix.length; j++){
      row.push(matrix[i][j]);
      if(matrix[i][j] == 0){
        zeroCount++;
        locations.push([i,j]);
      }
    }
    if(zeroCount == 0){
      newMatrix.push(row)
    } else {
      let zeros = [];
      zeros.length = matrix.length;
      newMatrix.push(zeros.fill(0))
    }
  }


  return newMatrix;
}

let test = [
  [1,2,0],
  [4,5,6],
  [7,8,9],
];

console.log(zeroMatrix(test))