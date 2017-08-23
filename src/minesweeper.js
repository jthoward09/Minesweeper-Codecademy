'use strict';

const printBoard = board => {
    console.log(board.map(row => row.join(' | ')).join('\n'))
};

const generateBoard = (numberOfRows, numberOfColumns) => {
    let board = [];

    // for loop iterating through numberOfRows
    for(let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {

        // Create an empty row array
        let row = [];

        // for loop iterating through numberOfColumns
        for(let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
            
            // Push the empty spaces onto the row array
            row.push(' ');
        }

        // Push the row onto the board array
        board.push(row);
    }

    // Return the board array
    return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    let board = [];
    
        // for loop iterating through numberOfRows
        for(let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
            
            // Create an empty row array
            let row = [];
    
            // for loop iterating through numberOfColumns
            for(let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
                
                // Push the null value onto the row array
                row.push(null);
            }
    
            // Push the row onto the board array
            board.push(row);
        }
    
        let numberOfPlacedBombs = 0;

        while(numberOfPlacedBombs < numberOfBombs) {
            // Need to fix the issue of bombs being placed on top of each other

            // Generate a random row index
            let randomRowIndex = Math.floor(Math.random() * numberOfRows);

            // Generate a random column index
            let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
            
            // Place the bomb at that row and columns
            board[randomRowIndex][randomColumnIndex] = ' B '

            // Increment numberOfBombsPlaced
            numberOfPlacedBombs++
        }

        // Return the board array
        return board;
};

let playerBoard = generateBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ')
printBoard(playerBoard); 

console.log('Bomb Board: ')
printBoard(bombBoard); 
