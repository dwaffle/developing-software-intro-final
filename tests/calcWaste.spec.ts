import { expect } from 'chai'
import {calcWaste} from '../src/calculator/calcWaste'

describe("Tests the waste calculator.", () => {
    it("Should return 1", () => {
        const result = calcWaste(5);
        expect(result).to.equal(1);
    })
    it("should return 4", () => {
        const result = calcWaste(34);
        expect(result).to.equal(4);
    })
    it("should return 5", () => {
        const result = calcWaste(44)
        expect(result).to.equal(5);
    })
    it("should return 4", () => {
        const result = calcWaste(40);
        expect(result).to.equal(4)
    })
})