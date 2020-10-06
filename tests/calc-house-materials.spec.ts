import { expect } from 'chai'
import {calcHouseMaterials} from '../src/calculator/index'
import {IHouse} from '../src/calculator/interfaces'

describe("Creates a house object as defined in IHouse", () => {
    it("should return an IHouse with name: Bob", () => {
        const result = calcHouseMaterials("Bob", 96, 96, false)
        expect(result.name).to.equal("Bob")
    });
    it("should return an IHouse with length = 96", () => {
        const result = calcHouseMaterials("Bob", 96, 96, false)
        expect(result.house.length).to.equal(96);
    });
    it("should return an IHouse with width = 96", () => {
        const result = calcHouseMaterials("Bob", 96, 96, false)
        expect(result.house.width).to.equal(96);
    });
    it("should return an IHouse with length 96", () => {
        const result = calcHouseMaterials("Bob", 8, 8, true)
        expect(result.house.length).to.equal(96);
    })
    it("should return an IHouse with width 96", () => {
        const result = calcHouseMaterials("Bob", 8, 8, true)
        expect(result.house.width).to.equal(96);
    })
    it("should allow a width of exactly 48", () => {
        const result = calcHouseMaterials("Bob", 48, 96, false)
        expect(result.house.width).to.equal(48)
    })
    it("should allow a width of exactly 720", () => {
        const result = calcHouseMaterials("Bob", 720, 96, false)
        expect(result.house.width).to.equal(720)
    })
    it("shoudl allow a length of exactly 48", () => {
        const result = calcHouseMaterials("Bob", 96, 48, false)
        expect(result.house.length).to.equal(48)
    })
    it("should allow a length of exactly 720", () => {
        const result = calcHouseMaterials("Bob", 96, 720, false)
        expect(result.house.length).to.equal(720)
    })
    it("should throw a RangeError for width being less than 48", () =>
    {
        expect(() => calcHouseMaterials("Bob",47,96,false)).to.throw(RangeError, "Houses cannot be smaller than 48 inches or greater than 720 inches.")
    })
    it("should throw a RangeError for width greater than 720", () => {
        expect(() => calcHouseMaterials("Bob", 721,96,false)).to.throw(RangeError, "Houses cannot be smaller than 48 inches or greater than 720 inches.")
    });
    it("should throw a RangeError for length less than 48", () => {
        expect(() => calcHouseMaterials("Bob", 96,47, false)).to.throw(RangeError, "Houses cannot be smaller than 48 inches or greater than 720 inches.")
    })
    it("should throw a RangeError for length greater than 720", () => {
        expect(() => calcHouseMaterials("Bob", 96, 721,false)).to.throw(RangeError, "Houses cannot be smaller than 48 inches or greater than 720 inches.")
    })
});