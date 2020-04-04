import { getValidMovesForRook } from "./Rook.js";
import { getValidMovesForBishop } from "./Bishop.js";

export const getValidMovesForQueen = (rowPosition, colPosition) => {
    const rookMoves = getValidMovesForRook(rowPosition, colPosition);
    const bishopMoves = getValidMovesForBishop(rowPosition, colPosition);

    return [...new Set([...rookMoves, ...bishopMoves])]; // union
}
