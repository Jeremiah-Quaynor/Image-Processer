// import statments
const path = require('path');
const express = require('express');
const fs = require('fs');
import { validateInput } from "./util/validateInput";
// port for server
const port = 3000;


// temporal storage variable
let queriedFiles: string[] = [];




// creating express app
export const app = express();


// landing page endpoint
app.get("/", (req: object,res: { send: (arg0: string) => void; }) => {
    res.send('Welcome to Image Processing')
})

// image proccessor API endpoint
app.get("/api/images", (req: { query: { width:string, height:string }; } ,res: { send: (arg0: string) => void; }) => {

    validateInput(req,res)


})


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
app.listen(port, ()=> {
    console.log(`Sever started on http://localhost:${port}`)
})