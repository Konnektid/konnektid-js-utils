import { expect } from "chai";
import * as types from "../index";

describe("types", () => {
    it("should export isEmail", () => {
        expect(types).to.respondTo("isEmail");
    });
});
