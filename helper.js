const { pieces, rows, columns } = require('./constants');

module.exports = {
    isValidInput : (inputString) => {
        const inputParts = inputString.split(" ");
        if (inputParts.length === 2) {
            const pieceName = inputString.split(" ")[0];
            const piecePosition = inputString.split(" ")[1];
            if (piecePosition.length === 2) {
                const rowPosition = piecePosition[0];
                const colPosition = piecePosition[1];
                if (pieces.includes(pieceName) && rows.includes(rowPosition) && columns.includes(parseInt(colPosition,10)))
                    return true;
            }
        }
        return false;
    },
};