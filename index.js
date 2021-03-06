import readlineSync from 'readline-sync';
import { isValidInput, getPieceName, getRowPosition, getColPosition } from './helper.js';
import { pieces, rows, columns } from './constants.js';
import { getPossibleMoves } from './controller.js';

const readInput = () => {
    const input = readlineSync.question('\nPlease enter chess piece name and position (ex - King D5) ');   

    if (isValidInput(input)) {
        console.log("-----------------------------------------------------------------");
        const possibleMoves = getPossibleMoves(getPieceName(input), getRowPosition(input), getColPosition(input));
        console.log(`Possible moves for ${getPieceName(input)} from ${getRowPosition(input) + getColPosition(input)} > `, possibleMoves.join(", "));
        console.log("-----------------------------------------------------------------");
    } else {
        console.log('\nInvalid input...\n');
        console.log('Valid piece: ', pieces.join(", "));
        console.log('Valid row positions: ', rows.join(", "));
        console.log('Valid column positions: ', columns.join(", "));
        readInput();
    }
}
readInput();
