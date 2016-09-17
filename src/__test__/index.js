import { expect } from "chai";
import * as utils from "../index";

describe("utils", () => {
    it("should export property types", () => {
        expect(utils).to.have.property("types");
    });
    it("should export isString", () => {
        expect(utils).to.respondTo("isString");
    });
    it("should export isGiven", () => {
        expect(utils).to.respondTo("isGiven");
    });
    it("should export isEmail", () => {
        expect(utils).to.respondTo("isEmail");
    });
    it("should export slugify", () => {
        expect(utils).to.respondTo("slugify");
    });
});
