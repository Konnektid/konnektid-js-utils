import { expect } from "chai";
import * as draftjs from "../index";

describe("draftjs", () => {
    it("should expose parseRaw", () => {
        expect(draftjs).to.respondTo("parseRaw");
    });
    it("should expose parseContentState", () => {
        expect(draftjs).to.respondTo("parseContentState");
    });
    it("should expose isEmpty", () => {
        expect(draftjs).to.respondTo("isEmpty");
    });
});
