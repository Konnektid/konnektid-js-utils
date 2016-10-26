import { expect } from "chai";
import isSlug from "../isSlug";

describe("isSlug", () => {
    context("the value is undefined", () => {
        it("should return false", () => {
            expect(isSlug(undefined)).to.be.equal(false);
        });
    });
    context("the value is null", () => {
        it("should return false", () => {
            expect(isSlug(null)).to.be.equal(false);
        });
    });
    context("the value is empty string", () => {
        it("should return false", () => {
            expect(isSlug("")).to.be.equal(false);
        });
    });
    context("the value is a boolean", () => {
        it("should return false", () => {
            expect(isSlug(false)).to.be.equal(false);
        });
    });
    context("the value is an object", () => {
        it("should return false", () => {
            expect(isSlug({})).to.be.equal(false);
        });
    });
    context("the value is an array", () => {
        it("should return false", () => {
            expect(isSlug([])).to.be.equal(false);
        });
    });
    context("the value is a number", () => {
        it("should return false", () => {
            expect(isSlug(0)).to.be.equal(false);
        });
    });
    context("the value starts with an hyphen", () => {
        it("should return false", () => {
            expect(isSlug("-test")).to.be.equal(false);
        });
    });
    context("the value contains spaces", () => {
        it("should return false", () => {
            expect(isSlug("test test")).to.be.equal(false);
        });
    });
    context("the value contains not allowed chars", () => {
        it("should return false", () => {
            expect(isSlug("test_test")).to.be.equal(false);
            expect(isSlug("test&test")).to.be.equal(false);
        });
    });
    context("the value is correct", () => {
        it("should return false", () => {
            expect(isSlug("test-test")).to.be.equal(true);
            expect(isSlug("test-TEST")).to.be.equal(true);
            expect(isSlug("test-123")).to.be.equal(true);
        });
    });
});
