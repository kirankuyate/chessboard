import { rowNumbers, rowLetters } from "../constants.js";

export const getValidMovesForBishop = (rowPosition, colPosition) => {
    const row = rowNumbers[rowPosition];
    const col = colPosition;
    let validMoves = [];

    for (let i = 1; i <= row; i++) {
        if (row - i > 0) {
            validMoves.push(rowLetters[row - i] + ( col + i ));
        }
    }

    for (let i = 1; i <= ( 8 - col ); i++) {
        if (( row + i ) <= 8) {
            validMoves.push(rowLetters[row + i] + ( col + i ));
        }
    }

    for (let i = 1; i <= ( 8 - row ); i++) {
        if (( col - i ) > 0) {
            validMoves.push(rowLetters[row + i] + ( col - i ));
        }
    }

    for (let i = row; i >= 0; i--) {
        if (col - i > 0 && col - i != col) {
            validMoves.push(rowLetters[row - i] + ( col - i ));
        }
    }

    return validMoves;
}
