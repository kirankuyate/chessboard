import { rowNumbers, rowLetters } from "../constants.js";

export const getValidMovesForHorse = (rowPosition, colPosition) => {
    const row = rowNumbers[rowPosition];
    const col = colPosition;
    let validMoves = [];
        
    const rowStepsArray = [ 2, 2, -2, -2, 1, 1, -1, -1 ];
    const colStepsArray = [ -1, 1, 1, -1, 2, -2, 2, -2 ];

    for (let i = 0; i <= 7; i++) {
        let estimatedRowPosition = row + rowStepsArray[ i ];
        let estimatedColPosition = col + colStepsArray[ i ];

        if (
            ( estimatedRowPosition > 0 && estimatedRowPosition <= 8 ) &&
            ( estimatedColPosition > 0 && estimatedColPosition <= 8 )
        ) {
            validMoves.push(rowLetters[estimatedRowPosition] + estimatedColPosition)
        }
    }

    return validMoves;
}
