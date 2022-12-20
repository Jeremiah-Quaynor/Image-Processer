// import statments
const path = require('path');
const express = require('express');
const fs = require('fs');
const sharp = require('sharp')
const cache = require('./util/routeCache')
// port for server
const port = 3000;


// creating express app
export const app = express();

// resize image function
export async function resizeImage (filename:string, width:number, height:number) {
        await sharp(`src/assets/full/${filename}.jpg`)
        .resize(width,height)
        .toFile(`src/assets/thumb/${filename}-resized.jpg`);
}


// endpoint for resizing image
app.get('/api/images', cache(5000), (req: any,res: { send: (arg0: string) => void; sendFile: (arg0: string) => void; })=>{
    if (Object.keys(req.query).length === 0){
        res.send("Please enter a filename and a size")
        return 
    }
    let filename = req.query.filename
    let width = req.query.width
    let height = req.query.height
    resizeImage(filename, parseInt(width), parseInt(height))
    res.sendFile(__dirname + `/assets/thumb/${filename}-resized.jpg`)
    
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