import { expect } from "chai";
import isGeoPoint from "../isGeoPoint";

describe("isGeoPoint", () => {
    context("not an object", () => {
        it("should return false", () => {
            expect(isGeoPoint("test")).to.be.equal(false);
        });
    });
    context("doesn't have lat property", () => {
        it("should return false", () => {
            expect(isGeoPoint({ lng: 3 })).to.be.equal(false);
        });
    });
    context("doesn't have lng property", () => {
        it("should return false", () => {
            expect(isGeoPoint({ lat: 3 })).to.be.equal(false);
        });
    });
    context("the latitude is not in valid range", () => {
        it("should return false", () => {
            expect(isGeoPoint({ lat: 91, lng: 0 })).to.be.equal(false);
            expect(isGeoPoint({ lat: -91, lng: 0 })).to.be.equal(false);
        });
    });
    context("the longitude is not in valid range", () => {
        it("should return false", () => {
            expect(isGeoPoint({ lat: 0, lng: 181 })).to.be.equal(false);
            expect(isGeoPoint({ lat: 0, lng: -181 })).to.be.equal(false);
        });
    });
    context("latitude and longituted are in range", () => {
        it("should return true", () => {
            expect(isGeoPoint({ lat: 0, lng: 0 })).to.be.equal(true);
            expect(isGeoPoint({ lat: 0, lng: -180 })).to.be.equal(true);
            expect(isGeoPoint({ lat: 0, lng: 180 })).to.be.equal(true);
            expect(isGeoPoint({ lat: -90, lng: 0 })).to.be.equal(true);
            expect(isGeoPoint({ lat: 90, lng: 0 })).to.be.equal(true);
        });
    });
});
