import { getValidMovesForKing } from "./pieces/King.js";
import { getValidMovesForBishop } from "./pieces/Bishop.js";
import { getValidMovesForHorse } from "./pieces/Horse.js";
import { getValidMovesForRook } from "./pieces/Rook.js";
import { getValidMovesForPawn } from "./pieces/Pawn.js";
import { getValidMovesForQueen } from "./pieces/Queen.js";

export const getPossibleMoves = (pieceName, rowPosition, colPosition) => {
    let result = null;
    switch (pieceName) {
        case "King":
            result = getValidMovesForKing(rowPosition, colPosition);
            break;
        case "Queen":
            result = getValidMovesForQueen(rowPosition, colPosition);
            break;
        case "Bishop":
            result = getValidMovesForBishop(rowPosition, colPosition);
            break;
        case "Horse":
            result = getValidMovesForHorse(rowPosition, colPosition);
            break;
        case "Rook":
            result = getValidMovesForRook(rowPosition, colPosition);
            break;
        case "Pawn":
            result = getValidMovesForPawn(rowPosition, colPosition);
            break;
        default:
            break;
    }
    return result;
}

