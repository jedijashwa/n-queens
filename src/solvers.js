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
var makeAllBoards = function (n){
  var queens = [];
  for (var i = 0; i < n; i++) {
    queens.push({'id': i});
  }
  var boards = [];
  
  var getAllBoards = function(queen, row, col){
    // if id = 0; col; 
    // store new location to queen
    // if column doesn't exist, move to next row and column 0;
    if (col === queens.length) {
      queen.col = 0;
      queen.row = row + 1;
    } else {
      // otherwise save row and column that were passed in
      queen.row = row;
      queen.col = col;
    }

    while (queen.row < n - 1 || queen.col <= queen.id){
      if (queen.col === queens.length) {
        queen.col = 0;
        queen.row++;
      } 
      
      if (queen.id === queens.length-1){
        var save = new Board({'n': queens.length});
        for (i = 0; i < queens.length; i++) {
          save.togglePiece(queens[i].row, queens[i].col)
        }
        boards.push(save);
      } else {
        getAllBoards(queens[queen.id + 1], queen.row, queen.col + 1);
      }
      queen.col++;
    }     
 };
  
  var startTime = Date.now();
  getAllBoards(queens[0], 0, 0);
  console.log('elapsed time: ' + (Date.now() - startTime) * 1/1000 + ' seconds');
  return boards;

};

console.log(makeAllBoards(6));
// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var solution = undefined; // solution will be an array of arrays that we pass to new Board
  

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
