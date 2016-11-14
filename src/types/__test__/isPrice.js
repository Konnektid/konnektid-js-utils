import { expect } from "chai";
import isPrice from "../isPrice";

describe("isPrice", () => {
    context("not a number", () => {
        it("should return false", () => {
            expect(isPrice("test")).to.be.equal(false);
        });
    });
    context("negative number", () => {
        it("should return false", () => {
            expect(isPrice(-10)).to.be.equal(false);
        });
    });
    context("positive number", () => {
        it("should return true", () => {
            expect(isPrice(10.34)).to.be.equal(true);
        });
    });
});
