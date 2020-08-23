//Given an image represented by a NxN matrix, where each pixel in the image is 4 bytes, 
//write a method to rotate the image by 90 degress. Can you do this in place?
// [                           [
//   [1,2,3],                    [7,4,1],
//   [4,5,6],       --->         [8,5,2],
//   [7,8,9],                    [9,6,3],
// ]                           ]

function rotateMatrix(matrix){
  let rotatedMatrix = [];
  // iterate over the columns --  column 0 to column 2
  for(i = 0; i < matrix.length; i++){
    // create innerArray to store items from a single column
    let arr = [];
    // iterate over the rows 
    for(j = 0; j < matrix.length; j++){
      // unshift the item into a the innerArray
      arr.unshift(matrix[j][i]);
    }
    // once the inner loop ends, push innerArray into results
    rotatedMatrix.push(arr);
  }
  return rotatedMatrix;
}

let test = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
];
console.log(rotateMatrix(test));

[ 
  [ 7, 4, 1 ], 
  [ 8, 5, 2 ], 
  [ 9, 6, 3 ] ]
