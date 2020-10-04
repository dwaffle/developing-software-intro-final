import { expect } from 'chai'
import {getHouseMaterials} from '../src/calculator/index'
import {IHouse} from '../src/calculator/interfaces'

describe("Creates a house object as defined in IHouse", () => {
   it("should return an IHouse with the name Bill", () => {
       const result = getHouseMaterials("Bill")
       expect(result.name).to.equal("Bill");
   })
});