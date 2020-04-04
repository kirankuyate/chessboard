import { getValidMovesForKing } from "./pieces/King.js";

export const getPossibleMoves = (pieceName, rowPosition, colPosition) => {
    let result = null;
    switch (pieceName) {
        case "King":
            result = getValidMovesForKing(rowPosition, colPosition);
            break;
        default:
            break;
    }
    return result;
}

