import { expect } from "chai";
import isString from "../isString";

describe.only("isEmail", () => {
    context("the value is undefined", () => {
        it("should return false", () => {
            expect(isString(undefined)).to.be.equal(false);
        });
    });
    context("the value is null", () => {
        it("should return false", () => {
            expect(isString(null)).to.be.equal(false);
        });
    });
    context("the value is an object", () => {
        it("should return false", () => {
            expect(isString({})).to.be.equal(false);
        });
    });
    context("the value is an array", () => {
        it("should return false", () => {
            expect(isString([])).to.be.equal(false);
        });
    });
    context("the value is a boolean", () => {
        it("should return false", () => {
            expect(isString(false)).to.be.equal(false);
        });
    });
    context("the value is a number", () => {
        it("should return false", () => {
            expect(isString(3)).to.be.equal(false);
        });
    });
    context("the value is a string", () => {
        it("should return true", () => {
            expect(isString("")).to.be.equal(true);
        });
    });
});
