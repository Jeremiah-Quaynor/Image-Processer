// import statments
const path = require('path');
const express = require('express');
const fs = require('fs');
const sharp = require('sharp')
const cache = require('./util/routeCache')
// port for server
const port = 3000;

let processedData = {
    filename: "",
    width: 0,
    height:0
}

// creating express app
export const app = express();

// resize image function
export async function resizeImage (filename:string, width:number, height:number) {
        await sharp(`src/assets/full/${filename}.jpg`)
        .resize(width,height)
        .toFile(`src/assets/thumb/${filename}-${width}-${height}.jpg`);
}


// endpoint for resizing image
app.get('/api/images', cache(5000), (req: any,res: { send: (arg0: string) => void; sendFile: (arg0: string) => void; })=>{
    // if the are no query strings send an error
    if (Object.keys(req.query).length === 0){
        console.log("No query added")
        res.send("Please enter a filename and a size")
        return 
    }
    // creating variables to store queries
    let filename = req.query.filename
    let width = parseInt(req.query.width)
    let height = parseInt(req.query.height)

    // checking if the request has already been processed
    if(filename === processedData.filename && width === processedData.width && height === processedData.height) {
        res.sendFile(__dirname + `/assets/thumb/${filename}-${width}-${height}.jpg`)    
    }else{

        // storing the query strings
        processedData.filename = filename;
        processedData.width = width;
        processedData.height = height
        // displaying generated thumb

        resizeImage(filename, width, height)

        setTimeout(() => {
            res.sendFile(__dirname + `/assets/thumb/${filename}-${width}-${height}.jpg`)    
        }, 2000);
        
    }

})


// starting server
app.listen(port, ()=> {
    console.log(`Sever started on http://localhost:${port}`)
})














// app.get('/endpoint', (req, res) => {


// if (cachedData) {
// // if the data is in the cache, return it without making a request
// res.send(cachedData);
// } else {
// // if the data is not in the cache, make a request and cache the result
// request('http://example.com/data', (error, response, body) => {
// if (error) throw error;
// cache[cacheKey] = body;
// res.send(body);
// });
// }
// });