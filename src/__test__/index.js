import { expect } from "chai";
import * as utils from "../index";

describe("utils", () => {
    it("should export property types", () => {
        expect(utils).to.have.property("types");
    });
    it("should export slugify", () => {
        expect(utils).to.respondTo("slugify");
    });
});
