import { expect } from 'chai'
import {getHouseMaterials} from '../src/calculator/index'

describe("Loads a house object from a file as defined in IHouse", () => {
   it("should throw an Error due to no house named fjoiewa;", () => {
       expect(() => {getHouseMaterials("htgiaphhidfoigoajpgjerpiogfjvrepna")}).to.throw(Error, "There is no house by that name.");
   })
   it("should successfully load a house with the Testy McTesterson name.", () => {
       const result = getHouseMaterials("Testy McTesterson");
       expect(result.name).to.equal("Testy McTesterson");
   })
});