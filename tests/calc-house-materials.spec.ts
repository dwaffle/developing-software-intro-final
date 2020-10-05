import { expect } from 'chai'
import {calcHouseMaterials} from '../src/calculator/index'
import {IHouse} from '../src/calculator/interfaces'

describe("Creates a house object as defined in IHouse", () => {
    it("should return an IHouse with name: Bob", () => {
        const result:IHouse = calcHouseMaterials("Bob", 96, 96, false)
        expect(result.name).to.equal("Bob")
    });
    it("should return an IHouse with length = 96", () => {
        const result:IHouse = calcHouseMaterials("Bob", 96, 96, false)
        expect(result.house.length).to.equal(96);
    });
    it("should return an IHouse with width = 96", () => {
        const result:IHouse = calcHouseMaterials("Bob", 96, 96, false)
        expect(result.house.width).to.equal(96);
    });
    it("should return an IHouse with length 96", () => {
        const result:IHouse = calcHouseMaterials("Bob", 8, 8, true)
        expect(result.house.width).to.equal(96);
    })
});