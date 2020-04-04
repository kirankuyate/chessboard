import { rowNumbers, rowLetters } from '../Constants.js'

export const getValidMovesForKing = (rowPosition, colPosition) => {
    const row = rowNumbers[rowPosition];
    const col = colPosition;
    let validMoves = [];

    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (row - i != 0)
                if (col - j > 0 && col - j <= 8)
                    if (!( ( row - i ) == row && ( col - j ) == col )) {
                        validMoves.push(
                            rowLetters[row - i] + ( col - j )
                        );
                    }
        }
    }

    return validMoves;
}
