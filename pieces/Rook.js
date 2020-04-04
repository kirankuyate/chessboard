import { rowNumbers, rowLetters, columns } from "../constants.js";

export const getValidMovesForRook = (rowPosition, colPosition) => {
    const row = rowNumbers[rowPosition];
    const col = colPosition;
    let validMoves = [];

    for (let i of columns) {
        if (i == row) {
            for (let j = 1; j <= 8; j++) {
                if (j != col)
                validMoves.push(`${rowLetters[columns[i]]}${j}`);
            }
        } else {
            validMoves.push(`${rowLetters[i]}${col}`);
        }
    }

    return validMoves;
}
