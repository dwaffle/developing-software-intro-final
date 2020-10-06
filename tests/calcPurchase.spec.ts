import { expect } from 'chai'
import { IPurchase, IWaste, IMaterials} from '../src/calculator/interfaces'
import { calcPurchase} from '../src/calculator/calcPurchase'
import { calcHouseMaterials } from '../src/calculator'
const requiredItems:IMaterials = {
    materials:{
        lumber:{
            "2x4": 40,
            "4x4": 4
        },
        plywood:{
            "4x8": 9
        },
        drywall:{
            "4x8": 10
        }
    }
}
const waste:IWaste = {
    waste: {
        lumber:{
            "2x4": 4,
            "4x4": 1
        },
        plywood:{
            "4x8": 1
        },
        drywall: {
            "4x8": 1
        }
    }
}

describe("Tests the calcPurchase function", () => {
    it("should return a IPurchase totaling 44 pieces of lumber", () => {
        const result = calcPurchase(requiredItems, waste);
        expect(result.purchase.lumber["2x4"]).to.equal(44);
        })
    it("should return an IPurchase totaling 5 4x4s", () => {
        const result = calcPurchase(requiredItems, waste);
        expect(result.purchase.lumber["4x4"]).to.equal(5);
    })
    it("should return an IPurchase totaling 10 pieces of plywood", () => {
        const result = calcPurchase(requiredItems, waste);
        expect(result.purchase.plywood["4x8"]).to.equal(10);
    })
    it("should return an IPurchase totaling 11 pieces of drywall", () => {
        const result = calcPurchase(requiredItems, waste);
        expect(result.purchase.drywall["4x8"]).to.equal(11);
    })
})