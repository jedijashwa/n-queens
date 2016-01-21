/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting

// create all possible combinations of n queens on a board of nxn
var findRooksBoards = function (n){
  var queens = [];
  for (var i = 0; i < n; i++) {
    queens.push({'row': i});
  }
  var boards = [];
  
  var moveQueens = function (queen) {
    if (queen.row === 0) {
      return (queen.col < queens.length);
    } else {
      return (queen.col !== queens[queen.row - 1].col);
    }
  }
  
  var getAllBoards = function(queen, col, currentBoard){
    currentBoard = currentBoard || new Board({'n': queens.length});
    // if id = 0; col; 
    // store new location to queen
    // if column doesn't exist, move to next row and column 0;
    if (col >= queens.length) {
      queen.col = 0;
    } else {
      // otherwise save row and column that were passed in
      queen.col = col;
    }

    while (moveQueens(queen)){
      currentBoard.togglePiece(queen.row, queen.col);
      if (!currentBoard.hasAnyRooksConflicts()) {
        if (queen.row === queens.length-1){
          // var save = new Board({'n': queens.length});
          // for (i = 0; i < queens.length; i++) {
          //   save.togglePiece(queens[i].row, queens[i].col)
          // }
          boards.push(JSON.parse(JSON.stringify(currentBoard)));
        } else {
          getAllBoards(queens[queen.row + 1], queen.col + 1, currentBoard);
        }
      }
      currentBoard.togglePiece(queen.row, queen.col);
      queen.col++;
      if (queen.col >= queens.length && queen.row !== 0) {
        queen.col = 0;
      } 
    }     
 };


  var startTime = Date.now();
  getAllBoards(queens[0], 0);
  console.log('elapsed time: ' + (Date.now() - startTime) * 1/1000 + ' seconds');
  return boards;

};

// create all possible combinations of n queens on a board of nxn
var findQueensBoards = function (n){
  var queens = [];
  for (var i = 0; i < n; i++) {
    queens.push({'row': i});
  }
  var boards = [];
  
  var moveQueens = function (queen) {
    if (queen.row === 0) {
      return (queen.col < queens.length);
    } else {
      return (queen.col !== queens[queen.row - 1].col);
    }
  }
  
  var getAllBoards = function(queen, col, currentBoard){
    currentBoard = currentBoard || new Board({'n': queens.length});
    // if id = 0; col; 
    // store new location to queen
    // if column doesn't exist, move to next row and column 0;
    if (col >= queens.length) {
      queen.col = 0;
    } else {
      // otherwise save row and column that were passed in
      queen.col = col;
    }

    while (moveQueens(queen)){
      currentBoard.togglePiece(queen.row, queen.col);
      if (!currentBoard.hasAnyQueensConflicts()) {
        if (queen.row === queens.length-1){
          // var save = new Board({'n': queens.length});
          // for (i = 0; i < queens.length; i++) {
          //   save.togglePiece(queens[i].row, queens[i].col)
          // }
          boards.push(JSON.parse(JSON.stringify(currentBoard)));
        } else {
          getAllBoards(queens[queen.row + 1], queen.col + 1, currentBoard);
        }
      }
      currentBoard.togglePiece(queen.row, queen.col);
      queen.col++;
      if (queen.col >= queens.length && queen.row !== 0) {
        queen.col = 0;
      } 
    }     
 };


  var startTime = Date.now();
  getAllBoards(queens[0], 0);
  console.log('elapsed time: ' + (Date.now() - startTime) * 1/1000 + ' seconds');
  return boards;

};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var solution = [];
  var solutionBoard = findRooksBoards(n)[0]; // solution will be an array of arrays that we pass to new Board
  for (var i = 0; i < n; i++){
    solution.push(solutionBoard[i]);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = findRooksBoards(n).length;

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

console.log(findQueensBoards(3));

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = [];
  if(n === 0){
    return solution;
  }
  
  var solutionBoards = findQueensBoards(n);
  if (solutionBoards.length > 0){
    var solutionBoard = solutionBoards[0]; // solution will be an array of arrays that we pass to new Board
    for (var i = 0; i < n; i++){
      solution.push(solutionBoard[i]);
    }
  } else {
    for (var i = 0; i < n; i++){
      solution.push([]);
      for (var j = 0; j < n; j++){
        solution[i].push(0);
      }
    }
  } 


  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if (n === 0){
    return 1;
  }
  var solutionCount = findQueensBoards(n).length;

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
