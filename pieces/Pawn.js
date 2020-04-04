import { rowNumbers, rowLetters } from "../constants.js";

export const getValidMovesForPawn = (rowPosition, colPosition) => {
    const row = rowNumbers[rowPosition];
    const col = colPosition;
    let validMoves = [];

    if (col != 1 && col != 8) {
        validMoves.push(rowLetters[row] + ( col + 1 ));
        validMoves.push(rowLetters[row] + ( col - 1 ));
    }

    return validMoves;
}
