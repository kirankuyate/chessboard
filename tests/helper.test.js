import chai from 'chai';
const { expect } = chai;
import { isValidInput, getPieceName, getRowPosition, getColPosition } from '../helper.js';

describe("Helper", () => {
    it("Should have isValidInput function which returns true when user input is valid", () => {
        const valid = isValidInput("King D5");
        expect(valid).to.be.true;
    });

    it("Should have isValidInput function which returns false when user input is invalid", () => {
        const valid = isValidInput("ABCD5");
        expect(valid).to.be.false;
    });

    it("Should have getPieceName function which returns pieceName provided user input", () => {
        const pieceName = getPieceName("King D5");
        expect(pieceName).to.be.equal("King");
    });

    it("Should have getRowPosition function which returns rowPosition provided user input", () => {
        const rowPosition = getRowPosition("King D5");
        expect(rowPosition).to.be.equal("D");
    });

    it("Should have getColPosition function which returns colPosition provided user input", () => {
        const colPosition = getColPosition("King D5");
        expect(colPosition).to.be.equal(5);
    });
})