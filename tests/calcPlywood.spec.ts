import { expect } from 'chai'
import {calcPlywood} from '../src/calculator/calcPlywood'

describe("Tests the calcPlywood command", () => {
    //Test against Gerald's numbers
    it("should return 9", () => {
        const result = calcPlywood(103, 103)
        expect(result).to.equal(9);
    })
    //Test a house with walls exactly one sheet big
    it("should return 4", () => {
        const result = calcPlywood(48, 48)
        expect(result).to.equal(4);
    }) 
    //Test a non-square house
    it("should return 6", () => {
        const result = calcPlywood(48, 96)
        expect(result).to.equal(6);
    })
    //Test a non-square house slightly bigger than the previous
    it("should return 7", () => {
    const result = calcPlywood(49, 96)
    expect(result).to.equal(7);
    });
});