/**
 * This is an example of test file.
 *
 * You can `__test__` folders everywhere in the src fodler and the tests will be run
 * from the command `npm run test`.
 */
import { expect } from "chai";
import * as utils from "../index";

describe("utils", () => {
    it("should export property types", () => {
        expect(utils).to.have.property("types");
    });
});
