import { expect } from "chai";
import isGiven from "../isGiven";

describe("isGiven", () => {
    context("the value is undefined", () => {
        it("should return false", () => {
            expect(isGiven(undefined)).to.be.equal(false);
        });
    });
    context("the value is null", () => {
        it("should return false", () => {
            expect(isGiven(null)).to.be.equal(false);
        });
    });
    context("the value is empty string", () => {
        it("should return false", () => {
            expect(isGiven("")).to.be.equal(false);
        });
    });
    context("the value is a boolean", () => {
        it("should return true", () => {
            expect(isGiven(false)).to.be.equal(true);
        });
    });
    context("the value is an object", () => {
        it("should return true", () => {
            expect(isGiven({})).to.be.equal(true);
        });
    });
    context("the value is an array", () => {
        it("should return true", () => {
            expect(isGiven([])).to.be.equal(true);
        });
    });
    context("the value is a number", () => {
        it("should return true", () => {
            expect(isGiven(0)).to.be.equal(true);
        });
    });
});
