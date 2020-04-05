import chai from 'chai';
const { expect } = chai;
import { getPossibleMoves } from '../controller.js';

describe("Controller", () => {
    it("Should have getPossibleMoves function which returns array of possible moves if pieceName is correct", () => {
        const moves = getPossibleMoves("King", "D", 5);
        expect(moves.length > 0).to.be.true;
    });

    it("Should have getPossibleMoves function which returns null of possible moves if pieceName is incorrect", () => {
        const moves = getPossibleMoves("ABC", "D", 5);
        expect(moves).to.equal(null);
    });
})