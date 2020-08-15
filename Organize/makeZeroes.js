let setZeroes = (matrix) => {
  if(matrix==null || matrix.length==0){
    return;
  }
  let rows = [];
  let cols = [];

  let setRow = (row) => {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[row][i] = 0;
      
    }
  }

  let setCol = (col) => {
    for (let o = 0; o < matrix.length; o++) {
      matrix[o][col] = 0;
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] == 0) {
        rows.push(row);
        cols.push(col);
      }
    }
  }
  rows.forEach((row) => {setRow(row)});
  cols.forEach((col) => {setCol(col)});
};