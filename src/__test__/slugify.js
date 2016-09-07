import { expect } from "chai";
import slugify from "../slugify";

describe("slugify", () => {
    it("should trim the string", () => {
        const testString = " a-test  ";
        const expected = "a-test";
        expect(slugify(testString)).to.equal(expected);
    });
    it("should lower case the string", () => {
        const testString = " A-test  ";
        const expected = "a-test";
        expect(slugify(testString)).to.equal(expected);
    });
    it("should lower case the string", () => {
        const testString = " A-test  ";
        const expected = "a-test";
        expect(slugify(testString)).to.equal(expected);
    });
    it("should replace accent chars", () => {
        const testString = " A-âèéëê-test  ";
        const expected = "a-aeeee-test";
        expect(slugify(testString)).to.equal(expected);
    });
    it("should remove not invalid characters", () => {
        const testString = " A-$*__test  ";
        const expected = "a-test";
        expect(slugify(testString)).to.equal(expected);
    });
    it("should collapse spaces with dash", () => {
        const testString = " A   test  ";
        const expected = "a-test";
        expect(slugify(testString)).to.equal(expected);
    });
    it("should collapse consecutive dashes", () => {
        const testString = " A---test  ";
        const expected = "a-test";
        expect(slugify(testString)).to.equal(expected);
    });
    it("should remove trailing dashes", () => {
        const testString = "-A---test--";
        const expected = "a-test";
        expect(slugify(testString)).to.equal(expected);
    });
});
