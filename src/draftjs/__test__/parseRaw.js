import { expect } from "chai";
import parseRaw from "../parseRaw";

describe("parseRaw", () => {
    context("argument is not a string", () => {
        it("should return it as it is", () => {
            const value = 34;
            expect(parseRaw(value)).to.be.equal(value);
        });
    });
    context("argument is a string not parsable as JSON", () => {
        it("should return it as it is", () => {
            const value = "foo";
            expect(parseRaw(value)).to.be.equal("foo");
        });
    });
    context("argument is a string parsable as JSON", () => {
        it("should return the parsed object", () => {
            const value = "{\"entityMap\":{},\"blocks\":[{\"key\":\"c3ceu\",\"text\":\"test 001\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[]}]}";
            expect(parseRaw(value)).to.be.a("object");
        });
    });
});
