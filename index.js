const readlineSync = require('readline-sync');
const { isValidInput } = require('./helper');
const { pieces, rows, columns } = require('./constants');

const readInput = () => {
    const input = readlineSync.question('\nPlease enter chess piece name and position (ex - King D5) ');   

    if (isValidInput(input)) {
        console.log("Valid input:", input);
        // TODO - process input to find possible moves
    } else {
        console.log('\nInvalid input...\n');
        console.log('Valid piece: ', pieces.join(", "));
        console.log('Valid row positions: ', rows.join(", "));
        console.log('Valid column positions: ', columns.join(", "));

        readInput();
    }
}
readInput();