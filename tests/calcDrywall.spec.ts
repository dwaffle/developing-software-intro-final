import { expect } from 'chai'
import {calcDrywall} from '../src/calculator/calcDrywall'

describe("Tests the calcDrywall function", () => {
    it("should return 1", () => {
        const result = calcDrywall(8,8)
        expect(result).to.equal(1);
    })
    it("should return 8", () => {
        const result = calcDrywall(96,96);
        expect(result).to.equal(9);
    })
    it("should return 10", () => {
        const result = calcDrywall(103, 103)
        expect(result).to.equal(10)
    })
})