"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkThumbDir = exports.hasFileWithName = exports.app = void 0;
// import statments
var express_1 = __importDefault(require("express"));
var fs_1 = __importDefault(require("fs"));
var resizeImage_1 = require("./util/resizeImage");
var validateInput_1 = require("./util/validateInput");
// port for server
var port = 3000;
// creating express app
exports.app = (0, express_1.default)();
// checking if file is present in the full folder
var hasFileWithName = function (filename) {
    return new Promise(function (resolve, reject) {
        fs_1.default.readdir("".concat(__dirname, "/assets/full"), function (err, files) {
            if (err) {
                reject(err);
            }
            resolve(files.includes("".concat(filename, ".jpg")));
        });
    });
};
exports.hasFileWithName = hasFileWithName;
var checkThumbDir = function (filename, width, height) {
    try {
        fs_1.default.accessSync("".concat(__dirname, "/assets/thumb/").concat(filename, "-").concat(width, "-").concat(height, ".jpg"), fs_1.default.constants.R_OK);
        return true;
    }
    catch (err) {
        return false;
    }
};
exports.checkThumbDir = checkThumbDir;
// landing page endpoint
exports.app.get("/", function (req, res) {
    res.send('Welcome to Image Processing Home route');
});
// image proccessor API endpoint
exports.app.get("/api/images", function (req, res) {
    // checking whether /src/assets/full has the file
    (0, exports.hasFileWithName)(req.query.filename)
        .then(function (result) {
        // if filename and inputs are correct
        if ((0, validateInput_1.validateInput)(req) && result) {
            var state = (0, exports.checkThumbDir)(req.query.filename, Number(req.query.width), Number(req.query.height));
            // checking if the file exist already
            if (state) {
                // if yes, serve the image
                res.sendFile("".concat(__dirname, "/assets/thumb/").concat(req.query.filename, "-").concat(Number(req.query.width), "-").concat(Number(req.query.height), ".jpg"));
            }
            else {
                // else generate a new image
                (0, resizeImage_1.resizeImage)(req.query.filename, Number(req.query.width), Number(req.query.height));
                setTimeout(function () {
                    res.sendFile("".concat(__dirname, "/assets/thumb/").concat(req.query.filename, "-").concat(Number(req.query.width), "-").concat(Number(req.query.height), ".jpg"));
                }, 2000);
            }
        }
        else {
            res.send("Enter filename, width and height");
        }
    })
        .catch(function (err) { return console.log(err); });
});
// starting server
exports.app.listen(port, function () {
    console.log("Sever started on http://localhost:".concat(port));
});
