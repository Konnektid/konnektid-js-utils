import { expect } from "chai";
import isPhoneNumber from "../isPhoneNumber";

describe("isPhoneNumber", () => {
    context("the value is undefined", () => {
        it("should return false", () => {
            expect(isPhoneNumber(undefined)).to.be.equal(false);
        });
    });
    context("the value is null", () => {
        it("should return false", () => {
            expect(isPhoneNumber(null)).to.be.equal(false);
        });
    });
    context("the value is empty string", () => {
        it("should return false", () => {
            expect(isPhoneNumber("")).to.be.equal(false);
        });
    });
    context("the value is a boolean", () => {
        it("should return false", () => {
            expect(isPhoneNumber(false)).to.be.equal(false);
        });
    });
    context("the value is an object", () => {
        it("should return false", () => {
            expect(isPhoneNumber({})).to.be.equal(false);
        });
    });
    context("the value is an array", () => {
        it("should return false", () => {
            expect(isPhoneNumber([])).to.be.equal(false);
        });
    });
    context("the value is a number", () => {
        it("should return false", () => {
            expect(isPhoneNumber(0)).to.be.equal(false);
        });
    });
    context("the value starts with a plus", () => {
        it("should return false", () => {
            expect(isPhoneNumber("+131")).to.be.equal(false);
        });
    });
    context("the value contains spaces", () => {
        it("should return false", () => {
            expect(isPhoneNumber("13 123")).to.be.equal(false);
        });
    });
    context("the value contains letters", () => {
        it("should return false", () => {
            expect(isPhoneNumber("asd")).to.be.equal(false);
        });
    });
    context("the value is less than 8 numbers", () => {
        it("should return false", () => {
            expect(isPhoneNumber("123")).to.be.equal(false);
            expect(isPhoneNumber("1234567")).to.be.equal(false);
            expect(isPhoneNumber("+1234567")).to.be.equal(false);
        });
    });
    context("the value contains not allowed chars", () => {
        it("should return false", () => {
            expect(isPhoneNumber("123_123")).to.be.equal(false);
            expect(isPhoneNumber("test%123")).to.be.equal(false);
        });
    });
    context("the value is correct", () => {
        it("should return true", () => {
            expect(isPhoneNumber("+12345678")).to.be.equal(true);
            expect(isPhoneNumber("12341234")).to.be.equal(true);
            expect(isPhoneNumber("12345678912256")).to.be.equal(true);
        });
    });
});
