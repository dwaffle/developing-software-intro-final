import {calcDrywall} from '../src/calculator/calcDrywall'
import {calcPlywood} from '../src/calculator/calcPlywood'
import {calcWallLumber} from '../src/calculator/calcWallLumber'

import {calcMaterials} from '../src/calculator/calcMaterials'
import { expect } from 'chai'

describe("Tests the materials calculator", () => {
    //Uses Gerald's example for known good numbers.
    it("should return 10 for drywall", () => {
        const result = calcMaterials(calcDrywall, calcPlywood, calcWallLumber, 103, 103)
        expect(result.materials.drywall["4x8"]).to.equal(10);
    })
    it("should return 9 for plywood", () => {
        const result = calcMaterials(calcDrywall, calcPlywood, calcWallLumber, 103, 103)
        expect(result.materials.plywood["4x8"]).to.equal(9);
    })
    it("should return 40 for 2x4s", () => {
        const result = calcMaterials(calcDrywall, calcPlywood, calcWallLumber, 103, 103)
        expect(result.materials.lumber["2x4"]).to.equal(40);
    })
    it("should return 4 for posts", () => {
        const result = calcMaterials(calcDrywall, calcPlywood, calcWallLumber, 103, 103)
        expect(result.materials.lumber["4x4"]).to.equal(4);
    })
    it("should return 5 for drywall", () => {
        const result = calcMaterials(calcDrywall, calcPlywood, calcWallLumber, 96, 49)
        expect(result.materials.drywall["4x8"]).to.equal(5);
    })
})