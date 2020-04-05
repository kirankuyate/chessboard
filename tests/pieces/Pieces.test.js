import chai from 'chai';
const { expect } = chai;
import { getValidMovesForBishop } from '../../pieces/Bishop.js';
import { getValidMovesForQueen } from '../../pieces/Queen.js';
import { getValidMovesForHorse } from '../../pieces/Horse.js';
import { getValidMovesForKing } from '../../pieces/King.js';
import { getValidMovesForPawn } from '../../pieces/Pawn.js';
import { getValidMovesForRook } from '../../pieces/Rook.js';

describe("Pieces", () => {
    describe("Bishop", () => {
        it('Should have getValidMovesForBishop function which returns ["A3", "C3", "D4", "E5", "F6", "G7", "H8", "C1", "A1"] for Bishop B2 position', () => {
            const validMoves = getValidMovesForBishop("B", 2);
            expect(validMoves).to.have.all.members(["A3", "C3", "D4", "E5", "F6", "G7", "H8", "C1", "A1"]);
        });
    })

    describe("Horse", () => {
        it('Should have getValidMovesForHorse function which returns ["D1", "D3", "C4", "A4"] for Bishop B2 position', () => {
            const validMoves = getValidMovesForHorse("B", 2);
            expect(validMoves).to.have.all.members(["D1", "D3", "C4", "A4"]);
        });
    })

    describe("King", () => {
        it('Should have getValidMovesForKing function which returns ["C3","C2","C1","B3","B1","A3","A2","A1"] for Bishop B2 position', () => {
            const validMoves = getValidMovesForKing("B", 2);
            expect(validMoves).to.have.all.members(["C3","C2","C1","B3","B1","A3","A2","A1"]);
        });
    })

    describe("Pawn", () => {
        it('Should have getValidMovesForPawn function which returns ["B3","B1"] for Bishop B2 position', () => {
            const validMoves = getValidMovesForPawn("B", 2);
            expect(validMoves).to.have.all.members(["B3","B1"]);
        });
    })

    describe("Queen", () => {
        it('Should have getValidMovesForQueen function which returns ["A2","C1","C3","C4","C5","C6","C7","C8","C2","D2","E2","F2","G2","H2","A3","D4","E5","F6","G7","H8","A1"] for Bishop B2 position', () => {
            const validMoves = getValidMovesForQueen("B", 2);
            expect(validMoves).to.have.all.members(["A2","C1","C3","C4","C5","C6","C7","C8","C2","D2","E2","F2","G2","H2","A3","D4","E5","F6","G7","H8","A1"]);
        });
    })

    describe("Rook", () => {
        it('Should have getValidMovesForRook function which returns ["A2","C1","C3","C4","C5","C6","C7","C8","C2","D2","E2","F2","G2","H2"] for Bishop B2 position', () => {
            const validMoves = getValidMovesForRook("B", 2);
            expect(validMoves).to.have.all.members(["A2","C1","C3","C4","C5","C6","C7","C8","C2","D2","E2","F2","G2","H2"]);
        });
    })
})