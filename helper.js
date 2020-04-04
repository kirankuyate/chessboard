import { pieces, rows, columns } from './constants.js';

export const getPieceName = (inputString) => inputString.split(" ")[0]; 

export const getRowPosition = (inputString) => inputString.split(" ")[1][0];

export const getColPosition = (inputString) => inputString.split(" ")[1][1];

export const isValidInput = (inputString) => {
    const inputParts = inputString.split(" ");
    if (inputParts.length === 2) {
        const pieceName = inputParts[0];
        const piecePosition = inputParts[1];
        if (piecePosition.length === 2) {
            const rowPosition = piecePosition[0];
            const colPosition = piecePosition[1];
            if (pieces.includes(pieceName) && rows.includes(rowPosition) && columns.includes(parseInt(colPosition, 10)))
                return true;
        }
    }
    return false;
};
