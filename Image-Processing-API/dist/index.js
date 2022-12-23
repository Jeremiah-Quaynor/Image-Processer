"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// import statments
var path = require('path');
var express = require('express');
var fs = require('fs');
var validateInput_1 = require("./util/validateInput");
// port for server
var port = 3000;
// temporal storage variable
var queriedFiles = [];
// creating express app
exports.app = express();
// landing page endpoint
exports.app.get("/", function (req, res) {
    res.send('Welcome to Image Processing');
});
// image proccessor API endpoint
exports.app.get("/api/images", function (req, res) {
    (0, validateInput_1.validateInput)(req, res);
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
