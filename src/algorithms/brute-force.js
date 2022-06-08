function bruteForce(matrix) {
  return sudokuSolver(matrix, 0, 0);
}

function sudokuSolver(matrix, r, c) {
  if (r > 8 || c > 8) {
    return false;
  }
  if (c === 8) {
    r += 1;
    c = 0;
  }

  let getFirstEmptyBox = getEmptyIndex(matrix);
  if (getFirstEmptyBox === undefined) {
    var newArray = matrix.map((arr) => arr.slice());
    return newArray;
  }
  let currRow = getFirstEmptyBox[0];
  let currCol = getFirstEmptyBox[1];

  let getNums = getPossibleNumber(matrix, currRow, currCol);

  for (let i = 0; i < getNums.length; i++) {
    matrix[currRow][currCol] = getNums[i];
    var newArray = matrix.map((arr) => arr.slice());
    let solved = sudokuSolver(newArray, r, c + 1);
    if (solved) {
      return solved;
    }
  }
}

function getEmptyIndex(matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        return [row, col];
      }
    }
  }
}

function getPossibleNumber(matrix, currRow, currCol) {
  let possibleSolutions = [];
  let rowSet = new Set();
  let colSet = new Set();
  let subMatrix = checkBox(matrix, currRow, currCol);
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[currRow][col] !== 0 && matrix[row][currCol] !== 0) {
        rowSet.add(matrix[currRow][col]);
        colSet.add(matrix[row][currCol]);
      }
    }
  }

  for (var i = 1; i <= 9; i++) {
    if (!rowSet.has(i) && !colSet.has(i) && !subMatrix.has(i)) {
      possibleSolutions.push(i);
    }
  }
  return possibleSolutions;
}

function checkBox(matrix, r, c) {
  let row, col;
  if (0 <= r && r <= 2) {
    row = [0, 2];
  } else if (3 <= r && r <= 5) {
    row = [3, 5];
  } else if (6 <= r && r <= 8) {
    row = [6, 8];
  }

  if (0 <= c && c <= 2) {
    col = [0, 2];
  } else if (3 <= c && c <= 5) {
    col = [3, 5];
  } else if (6 <= c && c <= 8) {
    col = [6, 8];
  }
  var subMatrix = new Set();
  for (var i = row[0]; i <= row[1]; i++) {
    for (var j = col[0]; j <= col[1]; j++) {
      if (matrix[i][j] !== 0) {
        subMatrix.add(matrix[i][j]);
      }
    }
  }
  return subMatrix;
}

export default bruteForce;

