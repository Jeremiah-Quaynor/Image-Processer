"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkThumbDir = exports.hasFileWithName = exports.app = void 0;
// import statments
var path = require('path');
var express = require('express');
var fs = require('fs');
var resizeImage_1 = require("./util/resizeImage");
var validateInput_1 = require("./util/validateInput");
// port for server
var port = 3000;
// creating express app
exports.app = express();
// checking if file is present in the full folder
var hasFileWithName = function (filename) {
    return new Promise(function (resolve, reject) {
        fs.readdir("".concat(__dirname, "/assets/full"), function (err, files) {
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
        var val = fs.accessSync("".concat(__dirname, "/assets/thumb/").concat(filename, "-").concat(width, "-").concat(height, ".jpg"), fs.constants.R_OK);
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
    // checking the inputs are valid
});
// hit endpoint 
// enter queries filename:string, width:string(1-10000), height:string(1-10000)
// if no value is entered => send error messaage.
// if one value is wrong => send error message.
// when endpoint is accessed with correct queries and values
// if the file exist, server the file.
// if the file does not exist create the thumb file and serve it.
// endpoint for resizing image
// app.get('/api/images', cache(5000), (req: any ,res: { send: (arg0: string) => void; sendFile: (arg0: string) => void; })=>{
//     // if the are no query strings send an error
//     if (Object.keys(req.query).length === 0){
//         console.log("No query added")
//         res.send("Please enter a filename and a size")
//         return 
//     }
//     // creating variables to store queries
//     let filename = req.query.filename
//     let width = parseInt(req.query.width)
//     let height = parseInt(req.query.height)
//     // checking if the request has already been processed
//     if(filename === processedData.filename && width === processedData.width && height === processedData.height) {
//         res.sendFile(__dirname + `/assets/thumb/${filename}-${width}-${height}.jpg`)    
//     }else{
//         // storing the query strings
//         processedData.filename = filename;
//         processedData.width = width;
//         processedData.height = height
//         // displaying generated thumb
//         resizeImage(filename, width, height)
//         setTimeout(() => {
//             res.sendFile(__dirname + `/assets/thumb/${filename}-${width}-${height}.jpg`)    
//         }, 2000);
//     }
// })
// starting server
exports.app.listen(port, function () {
    console.log("Sever started on http://localhost:".concat(port));
});
