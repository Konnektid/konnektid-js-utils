import { expect } from "chai";
import * as types from "../index";

describe("types", () => {
    it("should export isEmail", () => {
        expect(types).to.respondTo("isEmail");
    });
    it("should export isGiven", () => {
        expect(types).to.respondTo("isGiven");
    });
    it("should export isString", () => {
        expect(types).to.respondTo("isString");
    });
    it("should export isSlug", () => {
        expect(types).to.respondTo("isSlug");
    });
    it("should export isBoolean", () => {
        expect(types).to.respondTo("isBoolean");
    });
    it("should export isPrice", () => {
        expect(types).to.respondTo("isPrice");
    });
});
