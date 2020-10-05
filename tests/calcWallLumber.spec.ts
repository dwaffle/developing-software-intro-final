import { expect } from 'chai';
import {calcWallLumber} from '../src/calculator/calcWallLumber'

describe("Tests that calcWallLumber returns the correct number of plates, studs, and posts", () =>
{
    it("should return 0 for plates", () => {
        const result = calcWallLumber(0);
        expect(result.plates).to.equal(0);
    }),

    it("Should return 1 for studs", () => {
        const result = calcWallLumber(0);
        expect(result.studs).to.equal(1); //Absolute minimum a wall would need is one stud.
    }),

    it("Should return 3 for plates", () => {
        const result = calcWallLumber(96);
        expect(result.plates).to.equal(3);
    });

    it("should return 4 for posts", () => {
        const result = calcWallLumber(96);
        expect(result.posts).to.equal(4);
    })
    
    it("Should return 7 for studs", () => {
        const result = calcWallLumber(96)
        expect(result.studs).to.equal(7);
    })
    it("Should return 6 for studs", () => {
        const result = calcWallLumber(95) //Non multiple of 16
        expect(result.studs).to.equal(6);
    })

    it("Should return 5 for studs", () => {
        const result = calcWallLumber(64)
        expect(result.studs).to.equal(5);
    })
});