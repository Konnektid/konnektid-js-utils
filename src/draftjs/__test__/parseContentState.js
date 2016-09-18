import { expect } from "chai";
import { ContentState } from "draft-js";
import parseContentState from "../parseContentState";

describe("parseContentState", () => {
    context("the value is not a draftjs raw string", () => {
        it("should return the content state object", () => {
            const value = "foo";
            const contentState = parseContentState(value);
            expect(contentState).to.be.instanceOf(ContentState);
        });
    });
    context("the value is a draftjs raw string", () => {
        it("should return the content state object", () => {
            const value = "{\"entityMap\":{},\"blocks\":[{\"key\":\"c3ceu\",\"text\":\"test 001\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[]}]}";
            const contentState = parseContentState(value);
            expect(contentState).to.be.instanceOf(ContentState);
        });
    });
});
