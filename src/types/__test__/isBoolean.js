import { expect } from "chai";
import isBoolean from "../isBoolean";

describe("isBoolean", () => {
    context("the value is undefined", () => {
        it("should return false", () => {
            expect(isBoolean(undefined)).to.be.equal(false);
        });
    });
    context("the value is null", () => {
        it("should return false", () => {
            expect(isBoolean(null)).to.be.equal(false);
        });
    });
    context("the value is an object", () => {
        it("should return false", () => {
            expect(isBoolean({})).to.be.equal(false);
        });
    });
    context("the value is an array", () => {
        it("should return false", () => {
            expect(isBoolean([])).to.be.equal(false);
        });
    });
    context("the value is a number", () => {
        it("should return false", () => {
            expect(isBoolean(3)).to.be.equal(false);
        });
    });
    context("the value is a string", () => {
        it("should return false", () => {
            expect(isBoolean("")).to.be.equal(false);
        });
    });
    context("the value is a boolean", () => {
        it("should return true", () => {
            expect(isBoolean(false)).to.be.equal(true);
            expect(isBoolean(true)).to.be.equal(true);
        });
    });
});
