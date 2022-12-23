"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInput = void 0;
var validateInput = function (req, res) {
    // checking inputs
    // check if all three query strings are available
    if (Object.keys(req.query).length < 1) {
        console.log('enter filename, width and height');
        // res.send("Please enter filename, width and height")
        return false;
    }
    // checking if the query strings for width and height are numbers
    else if (Number(req.query.width) < 1 || Number(req.query.height) < 1) {
        console.log('width or height value cannot be converted to integer');
        // res.send("width or height value cannot be converted to integer")
        return false;
    }
    // checking if the query strings for width and height are numbers
    else if (!(Number(req.query.width)) && !(Number(req.query.height))) {
        console.log('width or height value cannot be converted to integer');
        // res.send("width or height value cannot be converted to integer")
        return false;
    }
    // if query strings are numbers then process the image
    else if (Number(req.query.width) && Number(req.query.height)) {
        console.log('Resizing your image');
        // res.send("Resizing your image")
        return true;
    }
};
exports.validateInput = validateInput;
