import { expect } from 'chai'
import {calcDrywall} from '../src/calculator/calcDrywall'

describe("Tests the calcDrywall function", () => {
    it("should return 1", () => {
        const result = calcDrywall(8,8)
        expect(result).to.equal(1);
    })
    it("should return 2", () => {
        const result = calcDrywall(96,96);
        expect(result).to.equal(2);
    })
    it("should return 3", () => {
        const result = calcDrywall(97, 97)
        expect(result).to.equal(3);
    })
})