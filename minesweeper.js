document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!


// 4 by 4 by grid
var board = {
  cells: [
    {row :0,col :0, isMine : true, hidden : true  },
    {row :0,col :1, isMine : false, hidden : true  },
    {row :0,col :2, isMine : false, hidden : true },
    {row :0,col :3, isMine : false, hidden : true },
    {row :0,col :4, isMine : true, hidden : true },
    {row :1,col :0, isMine : false, hidden : true },
    {row :1,col :1, isMine : true, hidden : true },
    {row :1,col :2, isMine : false, hidden : true  },
    {row :1,col :3, isMine : true, hidden : true  },
    {row :1,col :4, isMine : false, hidden : true  },
    {row :2,col :0, isMine : false, hidden : true },
    {row :2,col :1, isMine : false, hidden : true },
    {row :2,col :2, isMine : true, hidden : true  },
    {row :2,col :3, isMine : false, hidden : true  },
    {row :2,col :4, isMine : false, hidden : true  },
    {row :3,col :0, isMine : false, hidden : true  },
    {row :3,col :1, isMine : true, hidden : true  },
    {row :3,col :2, isMine : false, hidden : true  },
    {row :3,col :3, isMine : true, hidden : true },
    {row :3,col :4, isMine : false, hidden : true },
    {row :4,col :0, isMine : true, hidden : true  },
    {row :4,col :1, isMine : false, hidden : true  },
    {row :4,col :2, isMine : false, hidden : true  },
    {row :4,col :3, isMine : false, hidden : true },
    {row :4,col :4, isMine : true, hidden : true },
  ]
}





function startGame () {
  // Don't remove this function call: it makes the game work!

  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);

      //check for win when  left clicked
    document.addEventListener ('click', checkForWin)
    //check for win when  left clicked
    document.addEventListener ('contextmenu', checkForWin)

  }

  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (var i = 0; i < board.cells.length; i++) {

//Check if cell is a Mine and is Marked if so return - if not go to next part of function

    if (!board.cells[i].isMine == true && board.cells[i].isMarked == true) {return}
    // check if the cell is hidden and is not marked
    else if (board.cells[i].hidden == true && !board.cells[i].isMarked == true) {return}
    }
    // display winning message
lib.displayMessage('Winner Winner Chicken Dinner')
  }

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
  //ib.displayMessage('Winner Winner Chicken Dinner ')


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.


function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;

  // go through and check if surrounding mines are mines and if so add the together

  for (let a = 0; a < surrounding.length; a++) {
    if (surrounding[a].isMine == true) {
      count++
    }
  } return count
}
