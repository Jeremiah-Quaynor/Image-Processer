"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validateInput_1 = require("../../util/validateInput");
// testing validate input method
describe("Testing validInput function", function () {
    var req1 = {
        query: {
            width: "90",
            height: "100"
        }
    };
    var res = '';
    // testing when giving standard inputs
    it('should be true', function () {
        console.log(req1);
        expect((0, validateInput_1.validateInput)(req1)).toBeTrue();
    });
    // testing if iputs are string
    var req2 = {
        query: {
            width: "adshjsjd",
            height: "100"
        }
    };
    it('should be false', function () {
        console.log(req2);
        expect((0, validateInput_1.validateInput)(req2)).toBeFalsy();
    });
    // testing if one value is negative
    var req3 = {
        query: {
            width: "-1",
            height: "2000"
        }
    };
    it('should be false', function () {
        console.log(req3);
        expect((0, validateInput_1.validateInput)(req3)).toBeFalsy();
    });
    // testing if both inputs are wrong
    var req4 = {
        query: {
            width: "-1",
            height: "adkdsak"
        }
    };
    it('should be false', function () {
        console.log(req4);
        expect((0, validateInput_1.validateInput)(req4)).toBeFalsy();
    });
});
