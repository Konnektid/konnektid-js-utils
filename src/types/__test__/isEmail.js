import { expect } from "chai";
import isEmail from "../isEmail";

describe("isEmail", () => {
    context("no @ in the string", () => {
        it("should return false", () => {
            expect(isEmail("test")).to.be.equal(false);
        });
    });
    context("string stops after @", () => {
        it("should return false", () => {
            expect(isEmail("test@")).to.be.equal(false);
        });
    });
    context("string starts after @", () => {
        it("should return false", () => {
            expect(isEmail("@test")).to.be.equal(false);
        });
    });
    context("string doesn't contain a dot", () => {
        it("should return false", () => {
            expect(isEmail("test@test")).to.be.equal(false);
        });
    });
    context("string doesn't contain anything after dot", () => {
        it("should return false", () => {
            expect(isEmail("test@test.")).to.be.equal(false);
        });
    });
    context("string is a correct email format", () => {
        it("should return true", () => {
            expect(isEmail("test@test.com")).to.be.equal(true);
        });
    });
});
