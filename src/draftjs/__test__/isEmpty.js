import { expect } from "chai";
import isEmpty from "../isEmpty";

describe("isEmpty", () => {
    context("the value contains no blocks", () => {
        it("should return true", () => {
            const value = JSON.stringify({
                entityMap:{},
                blocks:[{
                    key:"c3ceu",
                    text: "",
                    type:"unstyled",
                    depth:0,
                    inlineStyleRanges:[],
                    entityRanges:[]
                }]
            });
            expect(isEmpty(value)).to.be.equal(true);
        });
    });
    context("the value contains empty blocks", () => {
        it("should return true", () => {
            const value = JSON.stringify({
                entityMap:{},
                blocks:[{
                    key:"c3ceu",
                    text: "",
                    type:"unstyled",
                    depth:0,
                    inlineStyleRanges:[],
                    entityRanges:[]
                }, {
                    key:"c3ce2",
                    text: "",
                    type:"unstyled",
                    depth:0,
                    inlineStyleRanges:[],
                    entityRanges:[]
                }]
            });
            expect(isEmpty(value)).to.be.equal(true);
        });
    });
    context("the value contains only blocks with spaces and return", () => {
        it("should return true", () => {
            const value = JSON.stringify({
                entityMap:{},
                blocks:[{
                    key:"c3ceu",
                    text: "   \n",
                    type:"unstyled",
                    depth:0,
                    inlineStyleRanges:[],
                    entityRanges:[]
                }, {
                    key:"c3ce2",
                    text: "\n",
                    type:"unstyled",
                    depth:0,
                    inlineStyleRanges:[],
                    entityRanges:[]
                }]
            });
            expect(isEmpty(value)).to.be.equal(true);
        });
    });
    context("the value contains characters", () => {
        it("should return false", () => {
            const value = JSON.stringify({
                entityMap:{},
                blocks:[{
                    key:"c3ceu",
                    text: "test \n",
                    type:"unstyled",
                    depth:0,
                    inlineStyleRanges:[],
                    entityRanges:[]
                }, {
                    key:"c3ce2",
                    text: "test test\n",
                    type:"unstyled",
                    depth:0,
                    inlineStyleRanges:[],
                    entityRanges:[]
                }]
            });
            expect(isEmpty(value)).to.be.equal(false);
        });
    });
});
