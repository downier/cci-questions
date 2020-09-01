let sudokuCheck = (boardStr) => {
  let boardArr = [];
  let boardAsStr = boardStr.split('\n');
  let colSum = 0;
  let solution = 'solved';
  boardAsStr.forEach(row => boardArr.push(row.split('')));
  let miniBoards = [];

  for (let jj = 0; jj <= 6; jj += 3) {
    for (let ii = 3; ii <= 9; ii += 3) {
      let miniBoardArr = [].concat(boardArr[jj].slice(ii - 3, ii), boardArr[jj + 1].slice(ii - 3, ii), boardArr[jj + 2].slice(ii - 3, ii));
      miniBoards.push(miniBoardArr);
      miniBoardArr = [];
    }
  }
  //check boards
  miniBoards.forEach(row => {
    let boardSum = 0;
    for (let i = 0; i < row.length; i++) {
      boardSum += parseInt(row[i]);
    }
    if (boardSum !== 45) {
      solution = 'invalid';
      return solution;
    }
    //reset boardSum after each row
    boardSum = 0;
  });
  //check row
  boardAsStr.forEach(row => {
    //gotta be easier way
    row = row.split('');
    let rowSum = 0;
    for (let i = 0; i < row.length; i++) {
      rowSum += parseInt(row[i]);
    }
    if (rowSum !== 45) {
      solution = 'invalid';
      return solution;
    }
    //reset rowsum after each row
    rowSum = 0;
  });

  //check column
  for (let col = 0; col < boardArr[0].length; col++) {
    for (let row = 0; row < boardArr.length; row++) {
      //while col is set check each row
      colSum += parseInt(boardArr[row][col]);
    }
    if (colSum !== 45) {
      solution = 'invalid';
      return solution;
    }
    //reset colsum after each col
    colSum = 0;
  }

  return solution;
};
//should be valid
let board2 = '735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429';
//should be valid
let board = '895631472\n327984516\n461257398\n942813765\n183765924\n756429183\n578142639\n214398657\n639578241';
console.log(sudokuCheck(board2));

// [ ['8', '9', '5', '6', '3', '1', '4', '7', '2'],
//   ['3', '2', '7', '9', '8', '4', '5', '1', '6'],
//   ['4', '6', '1', '2', '5', '7', '3', '9', '8'],
//   ['9', '4', '2', '8', '1', '3', '7', '6', '5'],
//   ['1', '8', '3', '7', '6', '5', '9', '2', '4'],
//   ['7', '5', '6', '4', '2', '9', '1', '8', '3'],
//   ['5', '7', '8', '1', '4', '2', '6', '3', '9'],
//   ['2', '1', '4', '3', '9', '8', '6', '5', '7'],
//   ['6', '3', '9', '5', '7', '8', '2', '4', '1']]