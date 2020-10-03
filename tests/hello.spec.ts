import { expect } from 'chai';
import {sayHi} from '../src/index';

describe("Hello function", () => {
    it("Should return Hello", () => {
        const result = sayHi();
        expect(result).to.equal("Hello");
    })
})