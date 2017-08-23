'use strict';

var printBoard = function printBoard(board) {
    console.log(board.map(function (row) {
        return row.join(' | ');
    }).join('\n'));
};

var generateBoard = function generateBoard(numberOfRows, numberOfColumns) {
    var board = [];

    // for loop iterating through numberOfRows
    for (var rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {

        // Create an empty row array
        var row = [];

        // for loop iterating through numberOfColumns
        for (var columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {

            // Push the empty spaces onto the row array
            row.push(' ');
        }

        // Push the row onto the board array
        board.push(row);
    }

    // Return the board array
    return board;
};

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
    var board = [];

    // for loop iterating through numberOfRows
    for (var rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {

        // Create an empty row array
        var row = [];

        // for loop iterating through numberOfColumns
        for (var columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {

            // Push the null value onto the row array
            row.push(null);
        }

        // Push the row onto the board array
        board.push(row);
    }

    var numberOfPlacedBombs = 0;

    while (numberOfPlacedBombs < numberOfBombs) {
        // Need to fix the issue of bombs being placed on top of each other

        // Generate a random row index
        var randomRowIndex = Math.floor(Math.random() * numberOfRows);

        // Generate a random column index
        var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

        // Place the bomb at that row and columns
        board[randomRowIndex][randomColumnIndex] = ' B ';

        // Increment numberOfBombsPlaced
        numberOfPlacedBombs++;
    }

    // Return the board array
    return board;
};

var playerBoard = generateBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);