import { expect } from 'chai'
import {calcDrywall} from '../src/calculator/calcDrywall'

describe("Tests the calcDrywall function", () => {
    //Test a house slightly bigger than one sheet of plywood.
    it("should return 5", () => {
        const result = calcDrywall(96,49);
        expect(result).to.equal(5);
    })
    //Test a non-square house.
    it("should return 9", () => {
        const result = calcDrywall(48, 193)
        expect(result).to.equal(9);
    })
    //Test a house with square walls.
    it("should return 9", () => {
        const result = calcDrywall(96,96);
        expect(result).to.equal(9);
    })
    //Test against Gerald's numbers
    it("should return 10", () => {
        const result = calcDrywall(103, 103)
        expect(result).to.equal(10)
    })
})